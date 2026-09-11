const items = [
  {
    title: "着手前に、全体を整理する",
    desc: "いきなり作り始めず、目的・範囲・優先順位をそろえてから動きます。",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
      </>
    ),
  },
  {
    title: "認識のズレを防ぐ",
    desc: "言葉の定義や完成イメージを早めに合わせ、後戻りを減らします。",
    icon: (
      <>
        <path d="M6 8h12M6 12h12" />
        <path d="m14 17 2.2 2.2L21 14" />
      </>
    ),
  },
  {
    title: "必要な情報・要件を整理する",
    desc: "足りない情報を洗い出し、判断できる状態にしてから進めます。",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1" />
        <path d="M9 10h6M9 14h4" />
      </>
    ),
  },
  {
    title: "いっしょに考える",
    desc: "丸投げ前提ではなく、相談しながら進む方向を決めていきます。",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9.5" r="2.4" />
        <path d="M4 19c0-3 2.2-5.2 5-5.2S14 16 14 19" />
        <path d="M15.5 14.3c2.3.2 4 2 4 4.2" />
      </>
    ),
  },
  {
    title: "制作だけでなく、運用まで考える",
    desc: "公開後に更新・改善しやすい形を、設計の段階から意識します。",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
        <path d="M20 4v4h-4" />
        <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
        <path d="M4 20v-4h4" />
      </>
    ),
  },
  {
    title: "AI も使って、効率的に進める",
    desc: "調査や整理、実装の一部に活用し、時間を本質的な検討に充てます。",
    icon: (
      <>
        <path d="M12 3.5 13.6 8 18 9.6 13.6 11 12 15.5 10.4 11 6 9.6 10.4 8z" />
        <circle cx="17.5" cy="16.5" r="1.6" />
      </>
    ),
  },
];

export function ValueSection() {
  return (
    <section id="value" className="bg-band">
      <span className="wm" aria-hidden="true">
        01
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="9" y="15" width="24" height="30" rx="3" fill="#E1EAE7" stroke="#3E7471" strokeWidth="2" />
            <rect x="15" y="9" width="24" height="30" rx="3" fill="#FCFBF8" stroke="#3E7471" strokeWidth="2" />
            <path d="M20 18h14M20 24h14M20 30h9" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
            <path d="m39 10 1.6 3.4L44 15l-3.4 1.6L39 20l-1.6-3.4L34 15l3.4-1.6z" fill="#D88F91" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">01</span>
          <span className="en">VALUE</span>
        </div>
        <h2 className="h2">つくる前に、いっしょに整える。</h2>
        <p className="lead">
          irodori
          が大切にしているのは、制作スキルそのものよりも「進め方」です。着手前に全体を整え、認識を合わせ、公開後の運用まで見据えて動きます。
        </p>
        <div className="items-grid">
          {items.map((it) => (
            <div className="item" key={it.title}>
              <div className="ico" aria-hidden="true">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3E7471"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {it.icon}
                </svg>
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
