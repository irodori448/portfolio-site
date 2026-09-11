const groups = [
  {
    title: "「まだ要件が固まっていない」",
    desc: "目的の言語化から、サイト構成や優先順位づけまで。相談ベースで整理しながら、進む方向を一緒に決めます。",
    tags: ["Webディレクション", "要件・構成整理", "情報設計", "Webデザイン"],
  },
  {
    title: "「デザインはあるが、実装できる人がいない」",
    desc: "デザインデータや参考をもとに、表示崩れや保守性まで考えて実装します。CMS の構築や、更新のしやすさも含めて対応します。",
    tags: ["WordPress", "Shopify", "LP制作", "フロントエンド実装"],
  },
  {
    title: "「公開したあと、手が回っていない」",
    desc: "不具合対応や小さな更新から、改善の提案、繰り返し作業の自動化まで。公開後も継続して相談できる状態を保ちます。",
    tags: ["保守・運用", "継続的な改善", "業務自動化", "AI活用"],
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="bg-cream">
      <span className="wm" aria-hidden="true">
        02
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none">
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
          <span className="num">02</span>
          <span className="en">SERVICE</span>
        </div>
        <h2 className="h2">「こういうとき、どうしよう」に、対応できます。</h2>
        <p className="lead">
          スキルの一覧ではなく、案件で起きがちな状況ごとに、引き受けられる役割を整理しました。
        </p>
        <div className="grp-list">
          {groups.map((g) => (
            <div className="grp" key={g.title}>
              <div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
              <div>
                <div className="rl">主な役割</div>
                <div className="tags">
                  {g.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
