"use client";

import { useEffect, useState } from "react";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-problems");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-problems" className="wp-section" aria-labelledby="wp-problems-heading">
      <div className="wp-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 64px" }}>
          <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
            Problems
          </p>
          <h2
            id="wp-problems-heading"
            className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            こんなWebの悩み、<br />
            抱えていませんか？
          </h2>
          <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            Web担当者がいない、あるいは十分な時間を割けない企業では、<br />
            以下のような悩みを抱えているケースが少なくありません。
          </p>
          <p className={`wp-body wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms", marginTop: "24px" }}>
            ひとつでも当てはまるなら、外部Web担当という選択肢が役立つかもしれません。
          </p>
        </div>

        <div className="wp-grid wp-grid-3">
          {problems.map((p, i) => (
            <article
              key={p.title}
              className={`wp-value-card wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${400 + i * 80}ms` }}
            >
              <h3 className="wp-value-title">{p.title}</h3>
              <p className="wp-value-desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}