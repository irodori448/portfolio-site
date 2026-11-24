"use client";

import { useEffect, useState } from "react";

const serviceGroups = [
  {
    category: "Webサイト制作・リニューアル",
    items: [
      "コーポレートサイト制作",
      "WordPress構築・カスタマイズ",
      "Shopify構築・テーマカスタマイズ",
      "ランディングページ制作",
      "既存サイトのリニューアル",
    ],
  },
  {
    category: "Webサイト改善・機能追加",
    items: [
      "ページ追加・コンテンツ改修",
      "UI・UX改善",
      "問い合わせフォーム改善",
      "表示速度改善",
      "SEOを考慮したサイト構造の改善",
      "業務に合わせた機能追加",
      "不具合調査・修正",
    ],
  },
  {
    category: "Webサイト運用・保守",
    items: [
      "テキスト・画像の更新",
      "WordPressのアップデート",
      "プラグイン・テーマの管理",
      "バックアップ・セキュリティ対応",
      "Shopifyの商品・ページ更新",
      "定期的な改善提案",
      "サイト運用に関する相談",
    ],
  },
];

export function WebPartnerServices() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-service");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-service" className="wp-section" aria-labelledby="wp-service-heading">
      <div className="wp-container">
        <div className="wp-grid wp-grid-asym">
          <div>
            <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
              Service
            </p>
            <h2
              id="wp-service-heading"
              className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              支援できる業務
            </h2>
            <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              制作だけでなく、改善・機能追加・運用保守まで。<br />
              Webサイトに関わる業務を幅広くカバーします。
            </p>
            <p className={`wp-body wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms", marginTop: "16px" }}>
              必要な領域だけを依頼することも、すべてを任せることも可能です。
            </p>
          </div>

          <div className="wp-grid wp-grid-3" style={{ gap: "32px" }}>
            {serviceGroups.map((group, i) => (
              <div
                key={group.category}
                className={`wp-service-group wp-fade-up ${visible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <h3 className="wp-service-group-title">{group.category}</h3>
                <ul className="wp-service-items">
                  {group.items.map((item) => (
                    <li key={item} className="wp-service-item">
                      <span className="wp-service-bullet" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="wp-rule-full" aria-hidden="true" />
        <p className="wp-caption" style={{ textAlign: "center" }}>
          ※ 上記は代表的な業務です。記載のない内容でも、Webに関わることであればまずはご相談ください。
        </p>
      </div>
    </section>
  );
}