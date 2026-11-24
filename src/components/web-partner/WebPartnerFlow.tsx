"use client";

import { useEffect, useState } from "react";

const flowSteps = [
  {
    number: "01",
    title: "お問い合わせ・ご相談",
    desc: "フォームまたはメールでご連絡ください。具体的な依頼内容が決まっていなくても構いません。現状の困りごとや、やりたいことをお聞かせください。",
  },
  {
    number: "02",
    title: "現状や課題のヒアリング",
    desc: "オンライン（Zoom等）で30〜60分程度、事業の概要・Webサイトの現状・目的・予算感・期日などを詳しくお聞きします。この段階で費用は発生しません。",
  },
  {
    number: "03",
    title: "対応内容・お見積もりのご提案",
    desc: "ヒアリング内容をもとに、必要な対応範囲・進め方・スケジュール・費用感をまとめてご提案します。ここですり合わせを行い、方向性を固めます。",
  },
  {
    number: "04",
    title: "制作・改善・運用開始",
    desc: "合意した内容で着手します。定期的な進捗共有と確認を行いながら、認識のズレを防ぎつつ進めます。必要に応じて途中で調整することも可能です。",
  },
  {
    number: "05",
    title: "公開後の継続サポート",
    desc: "公開・納品して終わりではありません。更新対応、状況に応じた改善提案、必要な作業の自動化まで、外部Web担当として継続的にサポートします。",
  },
];

export function WebPartnerFlow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-flow");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-flow" className="wp-section" aria-labelledby="wp-flow-heading">
      <div className="wp-container">
        <div className="wp-grid wp-grid-asym">
          <div>
            <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
              Flow
            </p>
            <h2
              id="wp-flow-heading"
              className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              ご依頼の流れ
            </h2>
            <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              最初から具体的な依頼内容が決まっていなくても相談できます。<br />
              現状の整理から一緒に始められます。
            </p>
          </div>

          <div>
            <div className="wp-steps" role="list">
              {flowSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`wp-step wp-fade-up ${visible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                  role="listitem"
                >
                  <span className="wp-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className="wp-step-title">{step.title}</h3>
                  <p className="wp-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}