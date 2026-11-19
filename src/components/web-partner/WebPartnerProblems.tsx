const problems = [
  {
    title: "ホームページを作ったものの、その後ほとんど更新できていない",
    desc: "公開したまま放置してしまい、情報が古いままになっている。社内に更新できる人がおらず、制作会社に依頼するたびに費用と時間がかかる。",
  },
  {
    title: "ちょっとした修正でも制作会社に依頼する必要がある",
    desc: "テキストの修正や画像の差し替え程度でも、毎回外部に依頼しなければならず、スピード感を持って対応できない。",
  },
  {
    title: "WordPressの管理やセキュリティが不安",
    desc: "アップデートを放置していて不具合が起きたり、マルウェアに感染したり。専門知識がないと適切な対応が難しい。",
  },
  {
    title: "新しいページや機能を追加したいが、対応できる人がいない",
    desc: "お知らせページの追加、問い合わせフォームの改善、商品ページの拡充など、やりたいことはあるが実装できる体制がない。",
  },
  {
    title: "Webサイトを改善したいが、何をすればよいか分からない",
    desc: "アクセス解析を見ても課題が特定できず、SEOやUI改善、表示速度など、どこから手をつければよいか迷っている。",
  },
  {
    title: "ECサイトの商品登録やページ更新に時間がかかっている",
    desc: "日々の商品登録やバナー更新、キャンペーンページの作成など、運用作業が本業を圧迫している。",
  },
];

export function WebPartnerProblems() {
  return (
    <section id="problems" className="bg-band">
      <span className="wm" aria-hidden="true">
        01
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="16" height="16" rx="3" fill="#FCEBEF" stroke="#D88F91" strokeWidth="2" />
            <rect x="26" y="6" width="16" height="16" rx="3" fill="#E1EAE7" stroke="#3E7471" strokeWidth="2" />
            <rect x="6" y="26" width="16" height="16" rx="3" fill="#FEF3E2" stroke="#ECB94E" strokeWidth="2" />
            <rect x="26" y="26" width="16" height="16" rx="3" fill="#E1EAE7" stroke="#3E7471" strokeWidth="2" />
            <path d="M14 14v8M14 22v8M34 14v8M34 22v8" stroke="#C9C3B6" strokeWidth="1.5" strokeDasharray="2 3" />
            <path d="M14 22h20M14 38h20" stroke="#C9C3B6" strokeWidth="1.5" strokeDasharray="2 3" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">01</span>
          <span className="en">PROBLEMS</span>
        </div>
        <h2 className="h2">こんなWebの悩みはありませんか？</h2>
        <p className="lead">
          Web担当者がいない、あるいは十分な時間を割けない企業では、以下のような悩みを抱えているケースが少なくありません。
          ひとつでも当てはまるなら、外部Web担当という選択肢が役立つかもしれません。
        </p>
        <div className="problems-list">
          {problems.map((p, i) => (
            <div className="problem-item reveal" key={p.title} style={{ animationDelay: `${0.07 * (i + 1)}s` }}>
              <div className="problem-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D88F91" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <div className="problem-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}