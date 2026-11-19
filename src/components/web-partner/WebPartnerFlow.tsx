const flowSteps = [
  {
    number: "01",
    title: "お問い合わせ・ご相談",
    desc: "フォームまたはメールでご連絡ください。具体的な依頼内容が決まっていなくても構いません。現状の困りごとや、やりたいことをお聞かせください。",
  },
  {
    number: "02",
    title: "現状や課題のヒアリング",
    desc: "オンライン（Zoom等）で30〜60分程度、事業の概要・Webサイトの現状・目的・予算感・期日などを詳しくお聞きします。この段階で費用は発生しません。",
  },
  {
    number: "03",
    title: "対応内容・お見積もりのご提案",
    desc: "ヒアリング内容をもとに、必要な対応範囲・進め方・スケジュール・費用感をまとめてご提案します。ここですり合わせを行い、方向性を固めます。",
  },
  {
    number: "04",
    title: "制作・改善・運用開始",
    desc: "合意した内容で着手します。定期的な進捗共有と確認を行いながら、認識のズレを防ぎつつ進めます。必要に応じて途中で調整することも可能です。",
  },
  {
    number: "05",
    title: "公開後の継続サポート",
    desc: "公開・納品して終わりではありません。更新対応、状況に応じた改善提案、必要な作業の自動化まで、外部Web担当として継続的にサポートします。",
  },
];

function FlowConnector() {
  return (
    <div className="flow-connector" aria-hidden="true">
      <svg width="22" height="30" viewBox="0 0 22 30" fill="none" stroke="#C6BEAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2v22" strokeDasharray="1 4" />
        <path d="m4 19 7 8 7-8" />
      </svg>
    </div>
  );
}

export function WebPartnerFlow() {
  return (
    <section id="flow" className="bg-cream">
      <span className="wm" aria-hidden="true">
        06
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M7 40c6 0 6-11 12-11s7 11 13 11 8-9 8-9" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 5" />
            <path d="M34 8v20" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 9h10l-3 4 3 4H34z" fill="#D88F91" />
            <circle cx="7" cy="40" r="2.6" fill="#3E7471" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">06</span>
          <span className="en">FLOW</span>
        </div>
        <h2 className="h2">ご依頼の流れ</h2>
        <p className="lead">
          最初から具体的な依頼内容が決まっていなくても相談できます。現状の整理から一緒に始められます。
        </p>
        <div className="flow-steps">
          {flowSteps.map((step, i) => (
            <div className="flow-step reveal" key={step.number} style={{ animationDelay: `${0.07 * (i + 1)}s` }}>
              <div className="flow-step-header">
                <span className="flow-step-number">{step.number}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.desc}</p>
              {i < flowSteps.length - 1 && <FlowConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}