import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WebPartnerHero } from "@/components/web-partner/WebPartnerHero";
import { WebPartnerProblems } from "@/components/web-partner/WebPartnerProblems";
import { WebPartnerAbout } from "@/components/web-partner/WebPartnerAbout";
import { WebPartnerServices } from "@/components/web-partner/WebPartnerServices";
import { WebPartnerBenefits } from "@/components/web-partner/WebPartnerBenefits";
import { WebPartnerCases } from "@/components/web-partner/WebPartnerCases";
import { WebPartnerFlow } from "@/components/web-partner/WebPartnerFlow";
import { WebPartnerProfile } from "@/components/web-partner/WebPartnerProfile";
import { WebPartnerContact } from "@/components/web-partner/WebPartnerContact";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const pageUrl = `${siteUrl}/web-partner/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "外部Web担当サービス｜Webサイトの制作・改善・運用｜irodori",
  description:
    "中小企業のWebサイト制作・改善・運用をサポートする外部Web担当サービス。WordPress・Shopifyの構築から更新、保守、機能追加まで、企業のWeb業務を継続的に支援します。",
  alternates: { canonical: "/web-partner/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: pageUrl,
    siteName: "irodori",
    title: "外部Web担当サービス｜Webサイトの制作・改善・運用｜irodori",
    description:
      "中小企業のWebサイト制作・改善・運用をサポートする外部Web担当サービス。WordPress・Shopifyの構築から更新、保守、機能追加まで、企業のWeb業務を継続的に支援します。",
  },
  twitter: {
    card: "summary_large_image",
    title: "外部Web担当サービス｜Webサイトの制作・改善・運用｜irodori",
    description:
      "中小企業のWebサイト制作・改善・運用をサポートする外部Web担当サービス。WordPress・Shopifyの構築から更新、保守、機能追加まで、企業のWeb業務を継続的に支援します。",
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

export default function WebPartnerPage() {
  return (
    <>
      <Header />
      <main>
        <WebPartnerHero />
        <WebPartnerProblems />
        <WebPartnerAbout />
        <WebPartnerServices />
        <WebPartnerBenefits />
        <WebPartnerCases />
        <WebPartnerFlow />
        <WebPartnerProfile />
        <WebPartnerContact />
      </main>
      <Footer />
    </>
  );
}