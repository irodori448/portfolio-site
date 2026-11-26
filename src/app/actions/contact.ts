"use server";

import { headers } from "next/headers";
import { checkBotId } from "botid/server";
import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error" | "blocked";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  debug?: string; // デバッグ用：どの経路を通ったか
};

// Disabled until RESEND_API_KEY is set (see .env.example) — matches the
// pattern in src/lib/microcms.ts.
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const hdr = await headers();
  const userAgent = hdr.get("user-agent") ?? "";
  const referer = hdr.get("referer") ?? "";
  const hasHoneypot = !!String(formData.get("website") ?? "").trim();

  // デバッグログ（Vercel Functions ログで確認可能）
  console.log("[contact] submit", { hasHoneypot, userAgent, referer, hasResendKey: !!process.env.RESEND_API_KEY, hasToEmail: !!process.env.CONTACT_TO_EMAIL });

  // Honeypot: a field real visitors never see or fill in. Bots that fill
  // every input in the form will trip it; we pretend success and drop it.
  if (hasHoneypot) {
    console.log("[contact] blocked: honeypot triggered");
    return { status: "blocked", message: "送信できませんでした。", debug: "honeypot" };
  }

  // Vercel BotID: invisible client-side challenge (see instrumentation-client.ts).
  // Returns isBot=true if challenge failed or not completed.
  const { isBot } = await checkBotId();
  if (isBot) {
    console.log("[contact] blocked: botid flagged as bot", { userAgent });
    return { status: "blocked", message: "送信できませんでした。しばらくしてから再度お試しください。", debug: "botid" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Never trust the client — re-validate everything server-side.
  const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};
  if (!name) fieldErrors.name = "お名前を入力してください。";
  else if (name.length > 100) fieldErrors.name = "100文字以内で入力してください。";
  if (!email) fieldErrors.email = "メールアドレスを入力してください。";
  else if (!isValidEmail(email)) fieldErrors.email = "メールアドレスの形式が正しくありません。";
  if (!message) fieldErrors.message = "お問い合わせ内容を入力してください。";
  else if (message.length > 5000) fieldErrors.message = "5000文字以内で入力してください。";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "入力内容をご確認ください。", fieldErrors };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!resend || !toEmail) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — logging the message instead of sending it:",
        { name, email, company, message },
      );
    }
    return {
      status: "error",
      message: "現在フォームの送信を受け付けられません。恐れ入りますが、時間をおいて再度お試しください。",
    };
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "irodori Webサイト <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `【お問い合わせ】${name} 様より`,
      text: [
        `お名前: ${name}`,
        `メールアドレス: ${email}`,
        company ? `会社名・屋号: ${company}` : null,
        "",
        message,
      ]
        .filter((line): line is string => line !== null)
        .join("\n"),
    });
  } catch (err) {
    console.error("[contact] failed to send", err);
    return {
      status: "error",
      message: "送信に失敗しました。時間をおいて再度お試しください。",
    };
  }

  return { status: "success", message: "送信しました。ご連絡ありがとうございます。追ってご連絡します。" };
}
