export function WebPartnerAbout() {
  return (
    <section id="about-service" className="bg-cream">
      <span className="wm" aria-hidden="true">
        02
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="9" y="15" width="24" height="30" rx="3" fill="#E1EAE7" stroke="#3E7471" strokeWidth="2" />
            <rect x="15" y="9" width="24" height="30" rx="3" fill="#FCFBF8" stroke="#3E7471" strokeWidth="2" />
            <path d="M20 18h14M20 24h14M20 30h9" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
            <circle cx="30" cy="12" r="6" fill="#D88F91" opacity="0.3" />
            <path d="M27 10h6M30 7v6" stroke="#D88F91" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">02</span>
          <span className="en">EXTERNAL WEB PARTNER</span>
        </div>
        <h2 className="h2">外部Web担当という選択肢</h2>
        <p className="lead">
          専任のWeb担当者を採用するほどではないけれど、Webサイトに関する相談や作業を任せられる人が必要な企業に向けたサービスです。
        </p>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3E7471" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>必要なときに相談できる</h3>
            <p>
              月に数時間の相談から、週次の定例まで。企業の状況に合わせて柔軟に関わります。
              専任担当者を雇用するコストとリスクなしで、Webの専門家をチームに加えられます。
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3E7471" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>状況を理解したうえで対応する</h3>
            <p>
              一度きりの作業代行ではなく、事業や運用状況を継続的に理解したうえで、必要な対応を提案・実行します。
              「何でも屋」ではなく、Web領域のパートナーとして伴走します。
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3E7471" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
                <path d="M20 4v4h-4" />
                <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
                <path d="M4 20v-4h4" />
              </svg>
            </div>
            <h3>制作から運用まで一貫して任せられる</h3>
            <p>
              サイト構築・リニューアルだけでなく、公開後の更新・改善・保守まで継続的に対応します。
              窓口を一本化することで、社内の調整コストも削減できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}