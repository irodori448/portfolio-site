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
  return (
    <section id="benefits" className="bg-cream">
      <span className="wm" aria-hidden="true">
        04
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path
              d="M20 44 L24 36 L28 44"
              stroke="#3E7471"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 36 L24 24 L36 36"
              stroke="#3E7471"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 28 L24 16 L44 28"
              stroke="#3E7471"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="16" r="5" fill="#D88F91" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">04</span>
          <span className="en">BENEFITS</span>
        </div>
        <h2 className="h2">irodoriに依頼するメリット</h2>
        <p className="lead">
          単なる制作業者ではなく、Web領域のパートナーとして選ばれる理由があります。
        </p>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card reveal" key={b.number} style={{ animationDelay: `${0.07 * (i + 1)}s` }}>
              <div className="benefit-number">{b.number}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}