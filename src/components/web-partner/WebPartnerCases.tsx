const cases = [
  {
    company: "昭和工業株式会社",
    category: "製造業 / コーポレートサイト・製品情報管理システム",
    challenge: "旧サイトで掲載していた製品カタログ・取扱説明書・CADデータ・メンテナンスマニュアルなどのPDFを、製品ごとに整理してユーザーが探しやすくダウンロードできる仕組みが必要だった。",
    solution: "要望をもとに仕様を話し合い、製品情報と各種資料の関係を整理した上で、WordPress上で管理・更新しやすい仕組みとして設計・実装。カスタム投稿タイプとカスタムフィールドを活用し、製品と資料を紐づける構造を構築。",
    result: "製品ごとにカタログ・取扱説明書・CAD・メンテナンスマニュアルを管理できるダウンロードシステムを構築。1ファイルの個別ダウンロードに加え、最大10ファイルの一括ダウンロードにも対応。担当者が管理画面から資料を追加・更新できる運用体制を整えた。",
    tags: ["WordPress", "カスタム投稿タイプ", "カスタムフィールド", "PHP", "JavaScript"],
    period: "約4ヶ月",
  },
  {
    company: "中島屋（Shopify）",
    category: "ECサイト / 日本酒酒蔵",
    challenge: "公開後もクライアント自身でおすすめ商品や季節ごとのバナー、カテゴリ別ランキングなどを柔軟に更新できるECサイトにしたい。",
    solution: "クライアントが公開後に行いたい更新内容を事前にヒアリングし、必要な更新項目と操作方法を整理。既存テーマをLiquidでカスタマイズし、トップページの各セクション（おすすめ商品、バナー、ランキングなど）を管理画面から直感的に更新できる構成として実装。",
    result: "おすすめ商品の入れ替え、季節ごとのバナー追加、カテゴリ別ランキングの設定など、クライアント自身で日常的な更新を行えるECサイトを構築。商品登録や配送設定などの初期設定から、公開後の更新方法まで約1年間継続してサポート。",
    tags: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    period: "構築：約3ヶ月 / 運用サポート：約1年継続中",
  },
  {
    company: "WordPressサイトのマルウェア復旧",
    category: "トラブル対応 / セキュリティ復旧",
    challenge: "WordPressサイトがマルウェアに感染し、不正なリダイレクトやスパムページが生成されている状態。サーバー・WordPress双方の調査と復旧が必要だった。",
    solution: "感染ファイルの特定・除去、データベースのクリーンアップ、WordPressコア・プラグイン・テーマの整合性確認と再インストール、サーバー側の設定見直し、再感染防止のためのセキュリティ強化（WAF設定、ログイン制限、定期スキャン等）を実施。",
    result: "マルウェア感染サイトの調査・復旧を完了し、正常な状態で公開を再開。不具合の修正とサーバー・WordPressの対応を行い、復旧後の安定運用に向けたセキュリティ対策を講じた。制作だけでなく、既存サイトのトラブルにも対応できることを実証。",
    tags: ["WordPress", "セキュリティ", "マルウェア除去", "サーバー設定", "PHP"],
    period: "調査・復旧：約2週間 / 事後対応含む",
  },
];

export function WebPartnerCases() {
  return (
    <section id="cases" className="bg-band">
      <span className="wm" aria-hidden="true">
        05
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
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
          <span className="num">05</span>
          <span className="en">CASES</span>
        </div>
        <h2 className="h2">支援事例</h2>
        <p className="lead">
          既存ポートフォリオの実績から、外部Web担当として継続的に関わった事例を紹介します。
          「何を作ったか」より、「どう関わり、何を実現したか」を伝えます。
        </p>
        <div className="cases-list">
          {cases.map((c, i) => (
            <article className="case-card reveal" key={c.company} style={{ animationDelay: `${0.07 * (i + 1)}s` }}>
              <div className="case-header">
                <div className="case-meta">
                  <span className="case-category">{c.category}</span>
                  <span className="case-period">{c.period}</span>
                </div>
                <h3>{c.company}</h3>
              </div>
              <div className="case-body">
                <div className="case-section">
                  <h4>依頼前の課題</h4>
                  <p>{c.challenge}</p>
                </div>
                <div className="case-section">
                  <h4>対応した内容</h4>
                  <p>{c.solution}</p>
                </div>
                <div className="case-section">
                  <h4>対応によって実現したこと</h4>
                  <p>{c.result}</p>
                </div>
              </div>
              <div className="case-tags">
                {c.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}