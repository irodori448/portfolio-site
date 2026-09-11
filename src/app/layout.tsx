import type { Metadata, Viewport } from "next";
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
  applicationName: "irodori",
  authors: [{ url: siteUrl }],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
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

export const viewport: Viewport = {
  themeColor: "#F7F5F1",
  colorScheme: "light",
};

// Minimal, only-true-facts Organization markup (name / url / description /
// logo). No address, phone, or social links are added since none are
// confirmed yet — see docs/portfolio-spec.md and README's TODO list.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "irodori",
  url: siteUrl,
  description,
  logo: `${siteUrl}/icon`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={zenKaku.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
