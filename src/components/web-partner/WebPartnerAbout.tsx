"use client";

import { useEffect, useState } from "react";

export function WebPartnerAbout() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const el = document.getElementById("wp-about");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-about" className="wp-section" aria-labelledby="wp-about-heading">
      <div className="wp-container">
        <div className="wp-grid wp-grid-asym-reverse">
          <div>
            <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms" }}>
              External Web Partner
            </p>
            <h2
              id="wp-about-heading"
              className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              外部Web担当という<br />
              選択肢
            </h2>
            <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              専任のWeb担当者を採用するほどではないけれど、<br />
              Webサイトに関する相談や作業を任せられる人が必要な企業に向けたサービスです。
            </p>
            <div className="wp-grid wp-grid-2" style={{ marginTop: "40px" }}>
              <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms" }}>
                <h3 className="wp-label">必要なときに相談できる</h3>
                <p className="wp-body" style={{ marginTop: "12px" }}>
                  月に数時間の相談から、週次の定例まで。企業の状況に合わせて柔軟に関わります。<br />
                  専任担当者を雇用するコストとリスクなしで、Webの専門家をチームに加えられます。
                </p>
              </div>
              <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "380ms" }}>
                <h3 className="wp-label">状況を理解したうえで対応する</h3>
                <p className="wp-body" style={{ marginTop: "12px" }}>
                  一度きりの作業代行ではなく、事業や運用状況を継続的に理解したうえで、<br />
                  必要な対応を提案・実行します。「何でも屋」ではなく、Web領域のパートナーとして伴走します。
                </p>
              </div>
              <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "460ms" }}>
                <h3 className="wp-label">制作から運用まで一貫して任せられる</h3>
                <p className="wp-body" style={{ marginTop: "12px" }}>
                  サイト構築・リニューアルだけでなく、公開後の更新・改善・保守まで継続的に対応します。<br />
                  窓口を一本化することで、社内の調整コストも削減できます。
                </p>
              </div>
            </div>
          </div>

          <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "540ms" }}>
            <div
              className="wp-image-wrapper wp-aspect-3-2"
              style={{
                background: "linear-gradient(135deg, var(--wp-accent-soft) 0%, var(--wp-bg) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                stroke="var(--wp-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ opacity: 0.3 }}
              >
                <rect x="10" y="20" width="60" height="48" rx="4" />
                <rect x="14" y="24" width="52" height="8" rx="2" fill="var(--wp-accent)" opacity="0.2" />
                <rect x="14" y="36" width="40" height="4" rx="2" fill="var(--wp-accent)" opacity="0.15" />
                <rect x="14" y="44" width="32" height="4" rx="2" fill="var(--wp-accent)" opacity="0.1" />
                <rect x="14" y="52" width="48" height="4" rx="2" fill="var(--wp-accent)" opacity="0.1" />
                <circle cx="60" cy="30" r="6" fill="var(--wp-accent-rose)" opacity="0.3" />
                <path d="M57 27h6M60 24v6" stroke="var(--wp-accent-rose)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}