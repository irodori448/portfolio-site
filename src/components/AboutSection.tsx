export function AboutSection() {
  return (
    <section className="bg-band">
      <span className="wm" aria-hidden="true">
        05
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M11 21h19v9a8 8 0 0 1-8 8h-3a8 8 0 0 1-8-8z" fill="#E1EAE7" stroke="#3E7471" strokeWidth="2" />
            <path d="M30 23h3a4 4 0 0 1 0 8h-3" stroke="#3E7471" strokeWidth="2" />
            <path d="M17 17c0-2 2-2 2-4M23 17c0-2 2-2 2-4" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
            <path d="m33 41 7-7 3 3-7 7-4.5 1.5z" fill="#D88F91" stroke="#3E7471" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">05</span>
          <span className="en">ABOUT</span>
        </div>
        <h2 className="h2">誰が、やるのか。</h2>
        <div className="about">
          <div>
            <p>
              10年の経験をベースに、要件整理からデザイン・実装・運用までを一貫して引き受けています。
            </p>
            <p>
              得意なのは、要望がまだ言葉になっていない段階からの整理です。「何を作るか」を決める前に、目的とゴール、関係者の認識をそろえることに時間をかけます。そのぶん、着手後の後戻りが少なくなります。
            </p>
            <p>
              制作会社の協力案件から、中小企業の直接のご相談まで対応しています。
            </p>
          </div>
          <div className="facts">
            <dl>
              <dt>経歴</dt>
              <dd>
                大学在学中にクラウドソーシングでWeb制作を始める。その後、個人事業主として活動後、Web制作・保守を専門とする企業に参画。ディレクター・エンジニアとして多くのプロジェクトに従事し、現在10年目。
              </dd>
              <dt>得意</dt>
              <dd>要件整理 / WordPress / フロントエンド</dd>
              <dt>対応</dt>
              <dd>制作（デザイン・コーディング） / ディレクション / 運用・改善</dd>
              <dt>打ち合わせ</dt>
              <dd>オンライン可</dd>
              <dt>拠点</dt>
              <dd>
                カンボジアでノマドワーカーとして活動中。
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section >
  );
}
