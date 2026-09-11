"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const hasFieldErrors = !!state.fieldErrors && Object.keys(state.fieldErrors).length > 0;

  if (state.status === "success") {
    return (
      <div className="cta-form cf-done" role="status">
        <p>{state.message ?? "送信しました。ご連絡ありがとうございます。"}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="cta-form cf" noValidate>
      {/* Honeypot — hidden from real visitors via CSS, left unlabeled for
          screen readers via aria-hidden. Bots that fill every field trip it. */}
      <div className="cf-hp" aria-hidden="true">
        <label htmlFor="website">Webサイト（入力しないでください）</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cf-row">
        <label htmlFor="name">
          お名前<span className="cf-req">必須</span>
        </label>
        <input id="name" name="name" type="text" autoComplete="name" disabled={isPending} />
        {state.fieldErrors?.name && <p className="cf-err">{state.fieldErrors.name}</p>}
      </div>

      <div className="cf-row">
        <label htmlFor="email">
          メールアドレス<span className="cf-req">必須</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" disabled={isPending} />
        {state.fieldErrors?.email && <p className="cf-err">{state.fieldErrors.email}</p>}
      </div>

      <div className="cf-row">
        <label htmlFor="company">会社名・屋号（任意）</label>
        <input id="company" name="company" type="text" autoComplete="organization" disabled={isPending} />
      </div>

      <div className="cf-row">
        <label htmlFor="message">
          お問い合わせ内容<span className="cf-req">必須</span>
        </label>
        <textarea id="message" name="message" rows={6} disabled={isPending} />
        {state.fieldErrors?.message && <p className="cf-err">{state.fieldErrors.message}</p>}
      </div>

      {state.status === "error" && state.message && !hasFieldErrors && (
        <p className="cf-err cf-err-top" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className="btn btn-primary cf-submit" disabled={isPending}>
        {isPending ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
