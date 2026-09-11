import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "irodori｜事業理解から伴走するWebパートナー";
const description =
  "irodori は、事業理解から課題整理・設計・制作・運用までを一気通貫で任せられる外部Web担当です。要件が固まっていない段階からご相談いただけます。";

// TODO: title / description are drafts based on docs/portfolio-spec.md.
// Confirm final copy before launch.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s｜irodori",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "irodori",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={zenKaku.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
