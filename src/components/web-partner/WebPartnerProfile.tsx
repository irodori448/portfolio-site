"use client";

import { useEffect, useState } from "react";

export function WebPartnerProfile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-profile");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-profile" className="wp-section" aria-labelledby="wp-profile-heading">
      <div className="wp-container">
        <div className="wp-grid wp-grid-asym-reverse">
          <div>
            <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
              Profile
            </p>
            <h2
              id="wp-profile-heading"
              className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              運営者プロフィール
            </h2>
            <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              <p className="wp-body-lg" style={{ marginBottom: "24px" }}>
                2017年からWeb制作に従事し、現在10年目。WordPress・Shopifyを中心に、制作・カスタマイズ・運用支援を行ってきました。
              </p>
              <p className="wp-body-lg" style={{ marginBottom: "24px" }}>
                制作会社の協力案件から、中小企業の直接のご相談まで幅広く対応しています。得意なのは、要望がまだ言葉になっていない段階からの整理です。
                「何を作るか」を決める前に、目的とゴール、関係者の認識をそろえることに時間をかけます。そのぶん、着手後の後戻りが少なくなります。
              </p>
              <p className="wp-body-lg" style={{ marginBottom: "24px" }}>
                制作だけでなく、サーバー管理やサイトトラブル（マルウェア復旧、不具合調査・修正）にも対応してきました。
                クライアントの運用負担を減らす仕組みづくりを重視し、公開後も更新・改善しやすい設計・実装を心がけています。
              </p>
              <p className="wp-body-lg">
                カンボジアを拠点に、日本企業・海外企業のWeb業務をサポートしています。オンラインでの打ち合わせに対応しています。
              </p>
            </div>
          </div>

          <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms" }}>
            <div
              className="wp-image-wrapper wp-aspect-square"
              style={{ maxWidth: "320px", margin: "0 auto" }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                stroke="var(--wp-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ opacity: 0.4 }}
              >
                <circle cx="60" cy="40" r="20" />
                <path d="M60 70c0-22 18-40 40-40" fill="none" strokeWidth="2.5" opacity="0.3" />
                <path d="M60 70c0-22-18-40-40-40" fill="none" strokeWidth="2.5" opacity="0.3" />
              </svg>
            </div>

            <div className="wp-facts" style={{ marginTop: "48px" }}>
              <div className="wp-fact">
                <p className="wp-fact-label">経歴</p>
                <p className="wp-fact-value">
                  大学在学中にクラウドソーシングでWeb制作を始める。その後、個人事業主として活動後、Web制作・保守を専門とする企業に参画。ディレクター・エンジニアとして多くのプロジェクトに従事し、現在10年目。
                </p>
              </div>
              <div className="wp-fact">
                <p className="wp-fact-label">得意領域</p>
                <p className="wp-fact-value">要件整理 / WordPress / Shopify / フロントエンド実装 / 運用・改善</p>
              </div>
              <div className="wp-fact">
                <p className="wp-fact-label">対応範囲</p>
                <p className="wp-fact-value">制作（設計・デザイン・コーディング） / ディレクション / 運用・改善・保守</p>
              </div>
              <div className="wp-fact">
                <p className="wp-fact-label">打ち合わせ</p>
                <p className="wp-fact-value">オンライン可（Zoom、Google Meet 等）</p>
              </div>
              <div className="wp-fact">
                <p className="wp-fact-label">拠点</p>
                <p className="wp-fact-value">カンボジア（ノマドワーカーとして活動中）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}