const cases = [
  {
    category: "コーポレートサイト リニューアル",
    title: "BtoB企業",
    fields: [
      {
        label: "担当範囲",
        value: "仕様整理・要件定義 / ページ構成・設計 / フロントエンド実装 / WordPress実装"
      },
      {
        label: "課題",
        value: "旧サイトで掲載していた製品カタログ・取扱説明書などのPDFを、製品ごとに整理してユーザーが探しやすくダウンロードできる仕組みが必要だった"
      },
      {
        label: "進め方",
        value: "要望をもとに仕様を話し合い、製品情報と各種資料の関係を整理した上で、WordPress上で管理・更新しやすい仕組みとして設計・実装"
      },
      {
        label: "使用技術",
        value: "WordPress / カスタム投稿タイプ / カスタムフィールド / PHP / JavaScript / HTML / CSS"
      },
      {
        label: "成果",
        value: "製品ごとにカタログ・取扱説明書・CAD・メンテナンスマニュアルを管理できるダウンロードシステムを構築。1ファイルの個別ダウンロードに加え、最大10ファイルの一括ダウンロードにも対応"
      },
      {
        label: "関わった期間",
        value: "4ヶ月程度"
      }
    ]
  },
  {
    category: "EC構築（Shopify）",
    title: "日本酒酒蔵",
    fields: [
      {
        label: "担当範囲",
        value: "仕様整理・要件定義 / デザインを基にした実装 / Shopify構築 / Liquidカスタマイズ / 初期設定 / 商品登録準備 / 公開後の運用サポート"
      },
      {
        label: "課題",
        value: "公開後もクライアント自身でおすすめ商品や季節ごとのバナー、カテゴリ別ランキングなどを柔軟に更新できるECサイトにしたい"
      },
      {
        label: "進め方",
        value: "クライアントが公開後に行いたい更新内容を事前にヒアリングし、必要な更新項目と操作方法を整理。既存テーマをLiquidでカスタマイズし、運用しやすい構成として実装"
      },
      {
        label: "使用技術",
        value: "Shopify / Liquid / HTML / CSS / JavaScript"
      },
      {
        label: "成果",
        value: "おすすめ商品の入れ替え、季節ごとのバナー追加、カテゴリ別ランキングの設定など、クライアント自身で日常的な更新を行えるECサイトを構築。商品登録や配送設定などの初期設定から、公開後の更新方法までサポート"
      },
      {
        label: "関わった期間",
        value: "3ヶ月"
      }
    ]
  },
  {
    category: "Webサイト改善・LP改修",
    title: "税理士サイト",
    fields: [
      {
        label: "担当範囲",
        value: "現状調査・改善提案 / LP改修 / UI・コンテンツ追加 / WordPressテーマ側の実装 / HTML・CSS・JavaScript修正 / アクセシビリティ改善 / SEO・構造化データ対応 / パフォーマンス改善 / セキュリティ設定 / 計測環境確認"
      },
      {
        label: "課題",
        value: "サービス内容や実績をより分かりやすく伝え、問い合わせにつながりやすいLPへ改善するとともに、表示速度・アクセシビリティ・SEO・セキュリティなどWebサイト全体の品質も向上させたい"
      },
      {
        label: "進め方",
        value: "既存サイトの構成やLighthouse・PageSpeed Insightsなどの診断結果を確認し、改善箇所を整理。既存デザインやサイト構成を維持しながら、信頼性を高めるコンテンツ追加、CTA改善、アクセシビリティ・パフォーマンス・SEO・セキュリティ面の改修を段階的に実施"
      },
      {
        label: "使用技術",
        value: "WordPress / PHP / HTML / CSS / JavaScript / WebP / JSON-LD / Google Tag Manager / Microsoft Clarity"
      },
      {
        label: "成果",
        value: "信頼バー・事例コンテンツなどを追加してLPの訴求力を向上。あわせてアクセシビリティ、セキュリティ、SEO、表示速度を改善し、サイト全体の品質を向上"
      },
      {
        label: "関わった期間",
        value: "1ヶ月"
      }
    ]
  }
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
