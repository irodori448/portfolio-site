const serviceGroups = [
  {
    category: "01. Webサイト制作・リニューアル",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1" />
        <path d="M9 10h6M9 14h4" />
      </>
    ),
    items: [
      "コーポレートサイト制作",
      "WordPress構築・カスタマイズ",
      "Shopify構築・テーマカスタマイズ",
      "ランディングページ制作",
      "既存サイトのリニューアル",
    ],
  },
  {
    category: "02. Webサイト改善・機能追加",
    icon: (
      <>
        <path d="M12 3.5 13.6 8 18 9.6 13.6 11 12 15.5 10.4 11 6 9.6 10.4 8z" />
        <circle cx="17.5" cy="16.5" r="1.6" />
      </>
    ),
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
    category: "03. Webサイト運用・保守",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
        <path d="M20 4v4h-4" />
        <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
        <path d="M4 20v-4h4" />
      </>
    ),
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
  return (
    <section id="service" className="bg-band">
      <span className="wm" aria-hidden="true">
        03
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="4.5" fill="#D88F91" />
            <path
              d="M24 19V8m0 0-4 4m4-4 4 4M29 24h11m0 0-4-4m4 4-4 4M19.5 28.5 11 37m0 0h6m-6 0v-6"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">03</span>
          <span className="en">SERVICE</span>
        </div>
        <h2 className="h2">支援できる業務</h2>
        <p className="lead">
          制作だけでなく、改善・機能追加・運用保守まで。Webサイトに関わる業務を幅広くカバーします。
          必要な領域だけを依頼することも、すべてを任せることも可能です。
        </p>
        <div className="service-groups">
          {serviceGroups.map((group, i) => (
            <div className="service-group reveal" key={group.category} style={{ animationDelay: `${0.07 * (i + 1)}s` }}>
              <div className="service-group-header">
                <div className="service-group-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3E7471"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {group.icon}
                  </svg>
                </div>
                <h3>{group.category}</h3>
              </div>
              <ul className="service-items">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="service-note">
          ※ 上記は代表的な業務です。記載のない内容でも、Webに関わることであればまずはご相談ください。
        </p>
      </div>
    </section>
  );
}