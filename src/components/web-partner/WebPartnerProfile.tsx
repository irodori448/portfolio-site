export function WebPartnerProfile() {
  return (
    <section id="profile" className="bg-band">
      <span className="wm" aria-hidden="true">
        07
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
          <span className="num">07</span>
          <span className="en">PROFILE</span>
        </div>
        <h2 className="h2">運営者プロフィール</h2>
        <div className="profile-content">
          <div className="profile-main">
            <p>
              2017年からWeb制作に従事し、現在10年目。WordPress・Shopifyを中心に、制作・カスタマイズ・運用支援を行ってきました。
            </p>
            <p>
              制作会社の協力案件から、中小企業の直接のご相談まで幅広く対応しています。得意なのは、要望がまだ言葉になっていない段階からの整理です。
              「何を作るか」を決める前に、目的とゴール、関係者の認識をそろえることに時間をかけます。そのぶん、着手後の後戻りが少なくなります。
            </p>
            <p>
              制作だけでなく、サーバー管理やサイトトラブル（マルウェア復旧、不具合調査・修正）にも対応してきました。
              クライアントの運用負担を減らす仕組みづくりを重視し、公開後も更新・改善しやすい設計・実装を心がけています。
            </p>
            <p>
              カンボジアを拠点に、日本企業・海外企業のWeb業務をサポートしています。オンラインでの打ち合わせに対応しています。
            </p>
          </div>
          <dl className="profile-facts">
            <div>
              <dt>経歴</dt>
              <dd>
                大学在学中にクラウドソーシングでWeb制作を始める。その後、個人事業主として活動後、Web制作・保守を専門とする企業に参画。ディレクター・エンジニアとして多くのプロジェクトに従事し、現在10年目。
              </dd>
            </div>
            <div>
              <dt>得意領域</dt>
              <dd>要件整理 / WordPress / Shopify / フロントエンド実装 / 運用・改善</dd>
            </div>
            <div>
              <dt>対応範囲</dt>
              <dd>制作（設計・デザイン・コーディング） / ディレクション / 運用・改善・保守</dd>
            </div>
            <div>
              <dt>打ち合わせ</dt>
              <dd>オンライン可（Zoom、Google Meet 等）</dd>
            </div>
            <div>
              <dt>拠点</dt>
              <dd>カンボジア（ノマドワーカーとして活動中）</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}