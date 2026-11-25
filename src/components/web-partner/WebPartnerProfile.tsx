"use client";

import { useEffect, useState } from "react";

const facts = [
  {
    label: "経歴",
    value: "大学在学中にクラウドソーシングでWeb制作を始める。その後、個人事業主として活動後、Web制作・保守を専門とする企業に参画。ディレクター・エンジニアとして多くのプロジェクトに従事し、現在10年目。",
  },
  {
    label: "得意領域",
    value: "要件整理 / WordPress / Shopify / フロントエンド実装 / 運用・改善",
  },
  {
    label: "対応範囲",
    value: "制作（設計・デザイン・コーディング） / ディレクション / 運用・改善・保守",
  },
  {
    label: "打ち合わせ",
    value: "オンライン可（Zoom、Google Meet 等）",
  },
  {
    label: "拠点",
    value: "カンボジア（ノマドワーカーとして活動中）",
  },
];

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
            <div className="wp-illustration" aria-hidden="true" style={{ marginBottom: "48px", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 320 320" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.15, maxWidth: "100%", height: "auto" }}>
                {/* Portrait illustration - person at desk with laptop */}
                <circle cx="160" cy="70" r="50" fill="none" stroke="#C2A265" strokeWidth="2" />
                <path d="M160 120v70" stroke="#1A2340" strokeWidth="2" />
                <path d="M110 155h100" stroke="#1A2340" strokeWidth="2" />
                <path d="M160 190l-30 45M160 190l30 45" stroke="#1A2340" strokeWidth="2" />

                {/* Laptop on desk */}
                <rect x="60" y="130" width="200" height="100" rx="8" fill="#1A2340" stroke="#3D4A6B" strokeWidth="1.5" />
                <rect x="70" y="140" width="180" height="75" rx="4" fill="#E8EDEB" stroke="none" />
                <path d="M85 165h150" stroke="#3E7471" strokeWidth="1.5" opacity="0.5" />
                <path d="M85 180h120" stroke="#3E7471" strokeWidth="1" opacity="0.3" />
                <path d="M85 195h100" stroke="#3E7471" strokeWidth="1" opacity="0.2" />

                {/* Coffee cup */}
                <path d="M280 145c0 6 5 11 11 11h20c6 0 11-5 11-11v-30c0-6-5-11-11-11h-20c-6 0-11 5-11 11v30z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M311 145c0 6 5 11 11 11h8c6 0 11-5 11-11v-30c0-6-5-11-11-11h-8c-6 0-11 5-11 11v30z" fill="none" stroke="#C2A265" strokeWidth="1" />
                <path d="M319 115h11" stroke="#C2A265" strokeWidth="1.5" />

                {/* Notebook */}
                <rect x="40" y="150" width="100" height="70" rx="4" fill="#FFF" stroke="#D4C9B8" strokeWidth="1" />
                <path d="M50 160h70" stroke="#3E7471" strokeWidth="1" opacity="0.4" />
                <path d="M50 175h85" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />
                <path d="M50 190h60" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />
                <path d="M50 205h80" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />

                {/* Speech bubbles indicating communication */}
                <path d="M160 40c0-8 6-14 14-14h30c8 0 14 6 14 14v15c0 8-6 14-14 14h-30c-8 0-14-6-14-14v-15z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M174 45h12M174 52h18" stroke="#3E7471" strokeWidth="1" opacity="0.5" />
                <path d="M169 60l5 5 5-5" stroke="#C2A265" strokeWidth="1.5" fill="none" />

                <path d="M300 80c0-8 6-14 14-14h25c8 0 14 6 14 14v15c0 8-6 14-14 14h-25c-8 0-14-6-14-14v-15z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M314 85h10M314 92h15" stroke="#3E7471" strokeWidth="1" opacity="0.5" />
                <path d="M309 97l5 5 5-5" stroke="#C2A265" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            <div className="wp-facts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {facts.map((fact, i) => (
                <div key={fact.label} className="wp-fact-card" style={{
                  padding: "20px 24px",
                  background: "var(--wp-surface)",
                  border: "1px solid var(--wp-line)",
                  borderRadius: "8px",
                  transitionDelay: `${350 + i * 50}ms`
                }}>
                  <p className="wp-fact-label" style={{ fontSize: "12px", fontWeight: 600, color: "var(--wp-ink-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                    {fact.label}
                  </p>
                  <p className="wp-fact-value" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--wp-ink)" }}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}