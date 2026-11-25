import type { Metadata, Viewport } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ExternalPartnerHeader, ExternalPartnerHero } from "@/components/web-partner/ExternalPartnerHero";
import { ExternalPartnerValues } from "@/components/web-partner/ExternalPartnerValues";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const pageUrl = `${siteUrl}/web-partner/`;
const title = "外部Web担当サービス｜Webサイトの制作・改善・運用｜irodori";
const description =
  "ホームページの制作・改善・運用を、外部Web担当として継続的にサポート。WordPressやShopifyの構築・更新・保守など、Webの困りごとを気軽に相談できます。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/web-partner/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: pageUrl,
    siteName: "irodori",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F2E9",
  colorScheme: "light",
};

export default function WebPartnerPage() {
  return (
    <div className="wp-page partner-page">
      <ExternalPartnerHeader />
      <main>
        <ExternalPartnerHero />
        <ExternalPartnerValues />
        <section className="wp-section wp-cta partner-contact" id="wp-contact" aria-labelledby="partner-contact-title">
          <div className="wp-container partner-contact-inner">
            <div className="partner-contact-copy">
              <p className="partner-kicker"><span>Let&apos;s talk</span> / お問い合わせ</p>
              <h2 id="partner-contact-title">Webのこと、<br />まずは話してみませんか。</h2>
              <p>相談内容がまだ決まっていなくても大丈夫です。現在の状況やお困りごとをお聞かせください。</p>
            </div>
            <div className="partner-contact-form"><ContactForm /></div>
          </div>
        </section>
      </main>
      <footer className="partner-footer">
        <a className="partner-brand" href="#top"><span className="partner-brand-mark" aria-hidden="true">i</span>irodori</a>
        <p>事業理解から、設計・制作・運用まで伴走するWebパートナー。</p>
        <span>© {new Date().getFullYear()} irodori</span>
      </footer>
    </div>
  );
}
