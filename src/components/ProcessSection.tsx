const phases = [
  {
    label: "P1",
    name: "ととのえる",
    steps: [
      { no: "01", name: "相談", desc: "状況・困りごとをうかがい、対応できるか・どう関われるかをすり合わせます。" },
      { no: "02", name: "ヒアリング", desc: "事業や目的、想定読者、参考サイト、制約（予算・期日）を整理します。" },
      {
        no: "03",
        name: "要件・課題整理",
        desc: "やること・やらないことを明文化し、判断できる状態にします。",
        key: true,
      },
      { no: "04", name: "構成・設計", desc: "サイト構成、各ページの役割、運用しやすい設計をまとめます。" },
    ],
  },
  {
    label: "P2",
    name: "つくる",
    steps: [
      { no: "05", name: "デザイン", desc: "トーンとレイアウトを決め、PC・スマホ両方で確認しながら固めます。" },
      { no: "06", name: "実装", desc: "表示崩れ・保守性・更新のしやすさを意識してコード化します。" },
      { no: "07", name: "確認・修正", desc: "実際の画面で確認し、認識のズレをその場で調整します。" },
    ],
  },
  {
    label: "P3",
    name: "つづける",
    steps: [
      { no: "08", name: "公開", desc: "公開手順・引き継ぎ資料を用意し、運用できる状態で渡します。" },
      { no: "09", name: "運用・改善", desc: "更新対応、状況に応じた改善提案、必要な作業の自動化まで継続します。" },
    ],
  },
];

function PhaseJoin() {
  return (
    <div className="pjoin" aria-hidden="true">
      <svg width="22" height="30" viewBox="0 0 22 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2v22" strokeDasharray="1 4" />
        <path d="m4 19 7 8 7-8" />
      </svg>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="bg-band">
      <span className="wm" aria-hidden="true">
        03
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M7 40c6 0 6-11 12-11s7 11 13 11 8-9 8-9" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 5" />
            <path d="M34 8v20" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 9h10l-3 4 3 4H34z" fill="#D88F91" />
            <circle cx="7" cy="40" r="2.6" fill="#3E7471" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">03</span>
          <span className="en">PROCESS</span>
        </div>
        <h2 className="h2">「整えてから、つくる」。だから、ブレません。</h2>
        <p className="lead">
          依頼したあと、どういう流れで進むのか。制作の前後にある「整理」と「認識合わせ」を大切にしています。
        </p>

        {phases.map((phase, i) => (
          <div key={phase.label}>
            <div className="phase">
              <div className="pl">
                <b>{phase.label}</b>
                {phase.name}
              </div>
              <div className="psteps">
                {phase.steps.map((s) => (
                  <div className={`ps${s.key ? " key" : ""}`} key={s.no}>
                    <div className="ps-hd">
                      <span className="no">{s.no}</span>
                      <span className="nm">{s.name}</span>
                    </div>
                    <div className="de">
                      {s.desc}
                      {s.key && (
                        <>
                          <br />
                          <span className="hey">ここを、いちばん大事にしています</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {i < phases.length - 1 && <PhaseJoin />}
          </div>
        ))}
      </div>
    </section>
  );
}
