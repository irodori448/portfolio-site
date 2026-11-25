"use client";

import { useEffect, useState } from "react";

const cases = [
  {
    company: "昭和工業株式会社",
    category: "製造業 / コーポレートサイト・製品情報管理システム",
    challenge: "旧サイトで掲載していた製品カタログ・取扱説明書・CADデータ・メンテナンスマニュアルなどのPDFを、製品ごとに整理してユーザーが探しやすくダウンロードできる仕組みが必要だった。",
    solution: "要望をもとに仕様を話し合い、製品情報と各種資料の関係を整理した上で、WordPress上で管理・更新しやすい仕組みとして設計・実装。カスタム投稿タイプとカスタムフィールドを活用し、製品と資料を紐づける構造を構築。",
    result: "製品ごとにカタログ・取扱説明書・CAD・メンテナンスマニュアルを管理できるダウンロードシステムを構築。1ファイルの個別ダウンロードに加え、最大10ファイルの一括ダウンロードにも対応。担当者が管理画面から資料を追加・更新できる運用体制を整えた。",
    tags: ["WordPress", "カスタム投稿タイプ", "カスタムフィールド", "PHP", "JavaScript"],
    period: "約4ヶ月",
  },
  {
    company: "中島屋（Shopify）",
    category: "ECサイト / 日本酒酒蔵",
    challenge: "公開後もクライアント自身でおすすめ商品や季節ごとのバナー、カテゴリ別ランキングなどを柔軟に更新できるECサイトにしたい。",
    solution: "クライアントが公開後に行いたい更新内容を事前にヒアリングし、必要な更新項目と操作方法を整理。既存テーマをLiquidでカスタマイズし、トップページの各セクション（おすすめ商品、バナー、ランキングなど）を管理画面から直感的に更新できる構成として実装。",
    result: "おすすめ商品の入れ替え、季節ごとのバナー追加、カテゴリ別ランキングの設定など、クライアント自身で日常的な更新を行えるECサイトを構築。商品登録や配送設定などの初期設定から、公開後の更新方法まで約1年間継続してサポート。",
    tags: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    period: "構築：約3ヶ月 / 運用サポート：約1年継続中",
  },
  {
    company: "WordPressサイトのマルウェア復旧",
    category: "トラブル対応 / セキュリティ復旧",
    challenge: "WordPressサイトがマルウェアに感染し、不正なリダイレクトやスパムページが生成されている状態。サーバー・WordPress双方の調査と復旧が必要だった。",
    solution: "感染ファイルの特定・除去、データベースのクリーンアップ、WordPressコア・プラグイン・テーマの整合性確認と再インストール、サーバー側の設定見直し、再感染防止のためのセキュリティ強化（WAF設定、ログイン制限、定期スキャン等）を実施。",
    result: "マルウェア感染サイトの調査・復旧を完了し、正常な状態で公開を再開。不具合の修正とサーバー・WordPressの対応を行い、復旧後の安定運用に向けたセキュリティ対策を講じた。制作だけでなく、既存サイトのトラブルにも対応できることを実証。",
    tags: ["WordPress", "セキュリティ", "マルウェア除去", "サーバー設定", "PHP"],
    period: "調査・復旧：約2週間 / 事後対応含む",
  },
];

// Placeholder illustrations for each case type
const caseIllustrations = {
  "昭和工業株式会社": (
    <svg viewBox="0 0 320 240" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.1, maxWidth: "100%", height: "auto" }}>
      <rect x="20" y="30" width="280" height="180" rx="4" stroke="#D4C9B8" fill="#F7F2E9" />
      <rect x="30" y="40" width="260" height="30" rx="2" fill="#1A2340" />
      <rect x="30" y="80" width="260" height="8" rx="2" fill="#E8E2D6" />
      <rect x="30" y="95" width="180" height="6" rx="2" fill="#E8E2D6" opacity="0.5" />
      <rect x="30" y="110" width="220" height="6" rx="2" fill="#E8E2D6" opacity="0.4" />
      <rect x="30" y="125" width="160" height="6" rx="2" fill="#E8E2D6" opacity="0.3" />
      <rect x="30" y="150" width="80" height="32" rx="4" fill="#C2A265" opacity="0.2" stroke="#C2A265" />
      <rect x="130" y="150" width="80" height="32" rx="4" fill="#C2A265" opacity="0.2" stroke="#C2A265" />
      <rect x="230" y="150" width="60" height="32" rx="4" fill="#C2A265" opacity="0.2" stroke="#C2A265" />
      <circle cx="280" cy="55" r="6" fill="none" stroke="#E62E2E" strokeWidth="2" />
      <path d="M277 55h6M280 52v6" stroke="#E62E2E" strokeWidth="2" />
    </svg>
  ),
  "中島屋（Shopify）": (
    <svg viewBox="0 0 320 240" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.1, maxWidth: "100%", height: "auto" }}>
      <rect x="20" y="30" width="280" height="180" rx="4" stroke="#D4C9B8" fill="#F7F2E9" />
      <rect x="30" y="40" width="260" height="30" rx="2" fill="#1A2340" />
      <rect x="30" y="85" width="80" height="100" rx="4" fill="#F5EEDC" stroke="#C2A265" />
      <rect x="38" y="93" width="64" height="48" rx="2" fill="#FFF" stroke="#E8E2D6" />
      <circle cx="70" cy="160" r="4" fill="#E62E2E" />
      <rect x="130" y="85" width="80" height="100" rx="4" fill="#F5EEDC" stroke="#C2A265" />
      <rect x="138" y="93" width="64" height="48" rx="2" fill="#FFF" stroke="#E8E2D6" />
      <circle cx="170" cy="160" r="4" fill="#E62E2E" />
      <rect x="230" y="85" width="60" height="100" rx="4" fill="#F5EEDC" stroke="#C2A265" />
      <rect x="235" y="93" width="50" height="48" rx="2" fill="#FFF" stroke="#E8E2D6" />
      <circle cx="260" cy="160" r="4" fill="#E62E2E" />
    </svg>
  ),
  "WordPressサイトのマルウェア復旧": (
    <svg viewBox="0 0 320 240" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.1, maxWidth: "100%", height: "auto" }}>
      <rect x="20" y="30" width="280" height="180" rx="4" stroke="#D4C9B8" fill="#F7F2E9" />
      <rect x="30" y="40" width="260" height="30" rx="2" fill="#E62E2E" opacity="0.1" stroke="#E62E2E" strokeWidth="1" />
      <path d="M60 100c0-20 15-35 40-35s40 15 40 35" fill="none" stroke="#E62E2E" strokeWidth="2" strokeDasharray="8,4" />
      <path d="M160 100c0-20 15-35 40-35s40 15 40 35" fill="none" stroke="#E62E2E" strokeWidth="2" strokeDasharray="8,4" />
      <path d="M260 100c0-20 15-35 40-35s40 15 40 35" fill="none" stroke="#C2A265" strokeWidth="2" />
      <circle cx="100" cy="100" r="18" fill="#E62E2E" opacity="0.15" stroke="#E62E2E" strokeWidth="1.5" />
      <path d="M95 95l10 10M105 95l-10 10" stroke="#E62E2E" strokeWidth="2" />
      <circle cx="200" cy="100" r="18" fill="#E62E2E" opacity="0.15" stroke="#E62E2E" strokeWidth="1.5" />
      <path d="M195 95l10 10M205 95l-10 10" stroke="#E62E2E" strokeWidth="2" />
      <circle cx="300" cy="100" r="18" fill="#C2A265" opacity="0.2" stroke="#C2A265" strokeWidth="1.5" />
      <path d="M295 95h10M300 90v10" stroke="#C2A265" strokeWidth="2" />
      <rect x="30" y="160" width="260" height="8" rx="2" fill="#E8E2D6" />
      <rect x="30" y="175" width="180" height="6" rx="2" fill="#E8E2D6" opacity="0.5" />
      <rect x="30" y="190" width="120" height="6" rx="2" fill="#E8E2D6" opacity="0.4" />
    </svg>
  ),
};

export function WebPartnerCases() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-cases");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-cases" className="wp-section" aria-labelledby="wp-cases-heading">
      <div className="wp-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 64px" }}>
          <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
            Cases
          </p>
          <h2
            id="wp-cases-heading"
            className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            支援事例
          </h2>
          <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            既存ポートフォリオの実績から、外部Web担当として継続的に関わった事例を紹介します。<br />
            「何を作ったか」より、「どう関わり、何を実現したか」を伝えます。
          </p>
        </div>

        <div className="wp-grid wp-grid-3" style={{ gap: "32px" }}>
          {cases.map((c, i) => (
            <article
              key={c.company}
              className={`wp-value-card wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${300 + i * 100}ms`, display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div className="wp-illustration" style={{ marginBottom: "24px" }} aria-hidden="true">
                {caseIllustrations[c.company as keyof typeof caseIllustrations]}
              </div>
              <div className="wp-case-meta" style={{ marginBottom: "12px" }}>
                <span className="wp-case-category" style={{ fontWeight: 600, color: "var(--wp-ink)", fontSize: "13px" }}>{c.category}</span>
                <span className="wp-case-period" style={{ marginLeft: "16px", color: "var(--wp-ink-muted)", fontSize: "13px" }}>{c.period}</span>
              </div>
              <h3 className="wp-value-title" style={{ fontSize: "22px", marginBottom: "20px" }}>{c.company}</h3>

              <div style={{ marginBottom: "20px" }}>
                <h4 className="wp-case-section-title">依頼前の課題</h4>
                <p className="wp-body-sm" style={{ marginTop: "8px" }}>{c.challenge}</p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 className="wp-case-section-title">対応した内容</h4>
                <p className="wp-body-sm" style={{ marginTop: "8px" }}>{c.solution}</p>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <h4 className="wp-case-section-title">対応によって実現したこと</h4>
                <p className="wp-body-sm" style={{ marginTop: "8px" }}>{c.result}</p>
              </div>

              <div style={{ paddingTop: "20px", borderTop: "1px solid var(--wp-line)" }}>
                {c.tags.map((tag) => (
                  <span key={tag} style={{
                    display: "inline-block",
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "6px 12px",
                    background: "var(--wp-accent-gold-soft)",
                    color: "var(--wp-accent-gold)",
                    borderRadius: "4px",
                    marginRight: "8px",
                    marginBottom: "8px"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}