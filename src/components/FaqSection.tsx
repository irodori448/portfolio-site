const faqs = [
  {
    q: "どんな案件を依頼できますか？",
    a: "コーポレートサイト、LP、EC、既存サイトの改修・運用まで幅広く対応します。まずは状況を教えてください。",
  },
  {
    q: "WordPress 以外も対応できますか？",
    a: "Shopify、静的サイト、フロントエンド実装（React など）にも対応します。案件に合った方法を提案します。",
  },
  {
    q: "制作途中の案件でも相談できますか？",
    a: "可能です。現状の整理と、どこから引き継げるかの確認からお手伝いします。",
  },
  {
    q: "既存サイトの修正・改善だけでも依頼できますか？",
    a: "単発の改修や部分的な改善だけでも承ります。",
  },
  {
    q: "保守・運用もお願いできますか？",
    a: "公開後の更新、不具合対応、改善提案まで継続して対応できます。",
  },
  {
    q: "オンラインでの打ち合わせは可能ですか？",
    a: "はい。基本はオンラインで進めます。",
  },
  {
    q: "制作会社からの外注・協力案件にも対応できますか？",
    a: "対応しています。担当範囲や進行の形式に合わせて動きます。",
  },
  {
    q: "NDA 案件でも相談できますか？",
    a: "問題ありません。実績の紹介も、公開可能な範囲に限定します。",
  },
  {
    q: "どの段階から相談すればいいですか？",
    a: "要件が固まっていない段階の相談が得意です。早いほど、整理の面で貢献できます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FaqSection() {
  return (
    <section id="faq" className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <span className="wm" aria-hidden="true">
        06
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none">
            <path
              d="M7 12a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H16l-6 5v-5a3 3 0 0 1-3-3z"
              fill="#FCFBF8"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            <circle cx="16" cy="16.5" r="1.8" fill="#3E7471" />
            <circle cx="22" cy="16.5" r="1.8" fill="#3E7471" />
            <circle cx="28" cy="16.5" r="1.8" fill="#D88F91" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">06</span>
          <span className="en">FAQ</span>
        </div>
        <h2 className="h2">相談の前に、よくある質問。</h2>
        <div className="faqhead">
          {faqs.map((f) => (
            <details className="faq" key={f.q}>
              <summary>
                {f.q}
                <span className="chev">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="fa">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
