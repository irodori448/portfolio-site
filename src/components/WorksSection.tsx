const cases = [
  {
    category: "コーポレートサイト リニューアル",
    title: "[業種・クライアント名]",
    fields: [
      { label: "担当範囲", value: "要件整理 / 構成・設計 / デザイン / WordPress 実装 / 公開後の運用" },
      { label: "課題", value: "[更新が属人化していた / 問い合わせにつながらない 等]" },
      { label: "進め方", value: "[着手前に情報を棚卸し、優先順位をつけてから設計に入った 等]" },
      { label: "使用技術", value: "WordPress / 自作テーマ / [その他]" },
      { label: "成果", value: "[更新を社内で完結できるようになった / 問い合わせ◯件 等]" },
      { label: "関わった期間", value: "[◯か月 + 運用継続中]" },
    ],
  },
  {
    category: "EC 構築（Shopify）",
    title: "[ブランド名・商材]",
    fields: [
      { label: "担当範囲", value: "[構成 / デザイン / Shopify 構築 / 運用サポート]" },
      { label: "課題", value: "[__]" },
      { label: "進め方", value: "[__]" },
      { label: "使用技術", value: "Shopify / Liquid / [__]" },
      { label: "成果", value: "[__]" },
      { label: "関わった期間", value: "[__]" },
    ],
  },
  {
    category: "NDA 案件 ・ BtoB サービスサイト（公開範囲：概要のみ）",
    title: "制作会社の協力案件として担当",
    fields: [
      { label: "担当範囲", value: "[フロントエンド実装 / 一部ディレクション]" },
      { label: "案件概要", value: "[BtoB 向けの新規サービス紹介サイト 等]" },
      { label: "工夫した点", value: "[__]" },
      { label: "使用技術", value: "[Next.js / 静的サイト 等]" },
      { label: "役割", value: "[制作会社と発注元の間で仕様を整理しながら実装]" },
      { label: "関わった期間", value: "[__]" },
    ],
  },
];

function withPlaceholders(text: string) {
  // Wraps [bracketed] TODO copy in the .ph highlight used across the design.
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span className="ph" key={i}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function WorksSection() {
  return (
    <section id="works" className="bg-cream">
      <span className="wm" aria-hidden="true">
        04
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none">
            <path
              d="M8 15a3 3 0 0 1 3-3h7l3 4h13a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z"
              fill="#E1EAE7"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M26 17v13l4.5-3.2L35 30V17z" fill="#D88F91" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">04</span>
          <span className="en">WORKS</span>
        </div>
        <h2 className="h2">「何を作ったか」より、「どう関わったか」。</h2>
        <p className="lead">
          URL やスクリーンショットを並べる代わりに、案件ごとの課題・担当範囲・進め方を記録しています。公開できない案件も、概要と役割で紹介します。
        </p>
        <div className="cases">
          {cases.map((c) => (
            <div className="case" key={c.category}>
              <div className="ct">{c.category}</div>
              <h3>{withPlaceholders(c.title)}</h3>
              <div className="cg">
                {c.fields.map((f) => (
                  <div key={f.label}>
                    <h4>{f.label}</h4>
                    <p>{withPlaceholders(f.value)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
