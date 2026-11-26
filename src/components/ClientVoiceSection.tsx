"use client";

const reviews = [
  {
    id: 1,
    caseType: "Shopify TOPページ改修・画像作成",
    date: "2025年6月24日",
    client: "Jabez",
    repeatCount: 1,
    comment:
      "この度は誠にありがとうございました。\n進行が遅れてしまい、ご迷惑をおかけしましたこと、心よりお詫び申し上げます。\n納品物のクオリティが非常に高く、レスポンスも早く、大変助かりました。\nまた、対応が難しい作業に関しても、代替案をご提案いただけたことで、とても心強く感じました。\nぜひまたご一緒にお仕事ができることを楽しみにしております。",
  },
  {
    id: 2,
    caseType: "WordPress既存サイトコンテンツ追加",
    date: "2025年11月27日",
    client: "ウェブクリエイト",
    repeatCount: 2,
    comment: "納期が短い中でしたが、余裕を持って納品いただき助かりました",
  },
  {
    id: 3,
    caseType: "LPコーディング",
    date: "2025年10月20日",
    client: "ウェブクリエイト",
    repeatCount: 2,
    comment: "リピートでのお願いでしたが、今回もスピーディに対応いただけてて助かりました！",
  },
  {
    id: 4,
    caseType: "Shopify追加修正対応",
    date: "2025年7月23日",
    client: "Jabez",
    repeatCount: 1,
    comment:
      "追加のご依頼もご対応ありがとうございます。\nまた、ご相談させてください。",
  },
  {
    id: 5,
    caseType: "WordPress関連業務",
    date: "2026年7月29日",
    client: "ライブラ税理士法人",
    repeatCount: 2,
    comment: "いつもありがとうございます。",
  },
];

export function ClientVoiceSection() {
  return (
    <section id="client-voice" className="bg-band">
      <span className="wm" aria-hidden="true">
        05
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path
              d="M14 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6m0-2c2.2 0 4-1.8 4-4s-1.8-4-4-4"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6m0-2c2.2 0 4-1.8 4-4s-1.8-4-4-4"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 34c0 3.3 2.7 6 6 6s6-2.7 6-6" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 34c0 3.3 2.7 6 6 6s6-2.7 6-6" stroke="#3E7471" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">05</span>
          <span className="en">CLIENT VOICE</span>
        </div>
        <h2 className="h2">お客様からの評価</h2>
        <p className="lead">
          制作後も継続してご相談いただいています。<br />
          実際にお仕事をご一緒したお客様からいただいた評価をご紹介します。
        </p>

        <div className="voice-grid" role="list">
          {reviews.map((review, index) => (
            <article key={review.id} className="voice-card" role="listitem" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="voice-header">
                <div className="voice-meta">
                  <span className="voice-case-type">{review.caseType}</span>
                  <time className="voice-date" dateTime={review.date.replace(/年|月/g, "-").replace("日", "")}>
                    {review.date}
                  </time>
                </div>
                <div className="voice-client">
                  <span className="voice-client-name">{review.client}</span>
                  {review.repeatCount > 0 && (
                    <span className="voice-repeat" aria-label={`${review.repeatCount}回リピート依頼`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="1 4 1 10 7 10" />
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                      </svg>
                      リピート {review.repeatCount}回
                    </span>
                  )}
                </div>
              </div>
              <div className="voice-comment">
                <p>{review.comment.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="voice-source">
          実際のお取引履歴やクライアントからの評価は、{' '}
          <a
            href="https://www.lancers.jp/profile/448mesm"
            target="_blank"
            rel="noopener noreferrer"
            className="voice-source-link"
          >
            ランサーズのプロフィールを見る
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="external-link-icon">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          でご確認いただけます。
        </p>
      </div>
    </section>
  );
}