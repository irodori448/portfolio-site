const pillars = [
  {
    number: "01",
    title: "つくった後も、\n任せられる。",
    description:
      "ホームページは公開してからも更新や管理が必要です。WordPressの修正、情報更新、トラブル対応、保守まで継続的にサポートします。",
    services: ["WordPressの更新・修正", "サイトの保守・管理", "不具合やトラブルへの対応", "コンテンツの追加・変更"],
  },
  {
    number: "02",
    title: "会社の状況に合わせて、\n一緒に考える。",
    description:
      "決まった作業をこなすだけではなく、事業内容や現在のWebサイトの状況を理解し、必要な対応を考えます。",
    services: ["ホームページの改善", "LPの企画・制作", "Shopifyの構築・カスタマイズ", "ECサイトの運用改善"],
  },
  {
    number: "03",
    title: "Webの困りごとを、\n相談できる相手に。",
    description:
      "Web担当者を社内に置かなくても、必要なときに相談できる外部パートナーとして継続的に関わります。",
    services: ["Web関連の相談", "更新・修正の依頼", "技術的な問題の調査", "継続的な改善・運用支援"],
  },
];

export function ExternalPartnerValues() {
  return (
    <section className="partner-values" id="service" aria-labelledby="partner-values-title">
      <div className="partner-values-inner">
        <div className="partner-values-intro">
          <p className="partner-kicker"><span>How we help</span> / 3つの関わり方</p>
          <h2 id="partner-values-title">制作の先まで、<br />一緒に考える。</h2>
          <p>日々の小さな更新から、これからのサイトのことまで。<br className="partner-desktop-break" />状況に合わせて、必要なところからお手伝いします。</p>
        </div>
        <div className="partner-pillars">
          {pillars.map((pillar) => (
            <article className="partner-pillar" key={pillar.number}>
              <p className="partner-pillar-number">{pillar.number}<span> / 03</span></p>
              <div className="partner-pillar-content">
                <h3>{pillar.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p className="partner-pillar-description">{pillar.description}</p>
                <ul aria-label={`${pillar.number}の対応内容`}>
                  {pillar.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
              </div>
              <span className="partner-pillar-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
