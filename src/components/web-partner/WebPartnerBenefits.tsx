"use client";

import { useEffect, useState } from "react";

const benefits = [
  {
    number: "01",
    title: "制作して終わりではない",
    desc: "公開後の更新や改善まで見据えて対応します。サイトを「作って終わり」にせず、運用フェーズでの継続的な価値創出を支援します。公開後のアクセス解析や改善提案、必要な機能追加まで、長期的な視点で伴走します。",
  },
  {
    number: "02",
    title: "技術的な課題にも対応できる",
    desc: "WordPressやShopifyのカスタマイズから、サーバー関連のトラブルまで幅広く対応します。CMSの構築・移行、マルウェア復旧、表示速度改善、セキュリティ対策など、専門知識が必要な技術的課題もワンストップで解決します。",
  },
  {
    number: "03",
    title: "事業や運用状況に合わせて考える",
    desc: "決められた作業をこなすだけでなく、目的や状況を理解したうえで必要な対応を提案します。クライアントのビジネスモデルやリソース、運用体制に合わせて、無理のない最適な提案を心がけています。",
  },
  {
    number: "04",
    title: "必要なときに相談できる",
    desc: "専任担当者を雇用することなく、Web業務に関する相談や実作業を外部に任せられます。月数時間のスポット相談から、継続的な運用代行まで、規模と予算に応じて柔軟に調整可能です。",
  },
];

export function WebPartnerBenefits() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-benefits");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-benefits" className="wp-section" aria-labelledby="wp-benefits-heading">
      <div className="wp-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 64px" }}>
          <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
            Benefits
          </p>
          <h2
            id="wp-benefits-heading"
            className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            irodoriに依頼する<br />
            4つのメリット
          </h2>
          <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            単なる制作業者ではなく、Web領域のパートナーとして選ばれる理由があります。
          </p>
        </div>

        <div className="wp-grid wp-grid-2" style={{ gap: "32px" }}>
          {benefits.map((b, i) => (
            <article
              key={b.number}
              className={`wp-value-card wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <p className="wp-number" style={{ color: "var(--wp-accent-gold)", fontWeight: 700 }}>
                {b.number}
              </p>
              <h3 className="wp-value-title" style={{ marginTop: "16px" }}>{b.title}</h3>
              <p className="wp-value-desc" style={{ marginTop: "12px" }}>{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}