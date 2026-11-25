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
            <p className={`wp-body wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms", marginTop: "24px" }}>
              必要なときに相談でき、事業を理解したうえで対応し、制作から運用まで一貫して任せられる。
              それが「外部Web担当」という新しい選択肢です。
            </p>
          </div>

          <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "400ms" }}>
            <div className="wp-illustration" aria-hidden="true">
              <svg viewBox="0 0 480 400" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.15, maxWidth: "100%", height: "auto" }}>
                {/* Team collaboration scene */}
                {/* Left person */}
                <circle cx="120" cy="100" r="28" fill="none" stroke="#C2A265" strokeWidth="2" />
                <path d="M120 128v60" stroke="#1A2340" strokeWidth="2" />
                <path d="M80 150h80" stroke="#1A2340" strokeWidth="2" />
                <path d="M120 188l-25 35M120 188l25 35" stroke="#1A2340" strokeWidth="2" />

                {/* Right person */}
                <circle cx="360" cy="100" r="28" fill="none" stroke="#C2A265" strokeWidth="2" />
                <path d="M360 128v60" stroke="#1A2340" strokeWidth="2" />
                <path d="M320 150h80" stroke="#1A2340" strokeWidth="2" />
                <path d="M360 188l-25 35M360 188l25 35" stroke="#1A2340" strokeWidth="2" />

                {/* Center laptop/shared screen */}
                <rect x="200" y="80" width="80" height="50" rx="4" fill="#1A2340" stroke="#3D4A6B" strokeWidth="1.5" />
                <rect x="210" y="88" width="60" height="34" rx="2" fill="#E8EDEB" stroke="none" />
                <path d="M220 105h40" stroke="#3E7471" strokeWidth="1.5" opacity="0.5" />
                <path d="M220 115h30" stroke="#3E7471" strokeWidth="1" opacity="0.3" />

                {/* Connection lines */}
                <path d="M148 100c26 0 52-20 100-20s74 20 100 20" fill="none" stroke="#C2A265" strokeWidth="1.5" strokeDasharray="8,6" opacity="0.5" />
                <circle cx="240" cy="80" r="8" fill="#C2A265" opacity="0.3" />
                <path d="M237 77h6M240 74v6" stroke="#C2A265" strokeWidth="1.5" />

                {/* Speech bubbles */}
                <path d="M180 50c0-8 6-14 14-14h40c8 0 14 6 14 14v20c0 8-6 14-14 14h-40c-8 0-14-6-14-14v-20z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M200 55h10M200 62h20" stroke="#3E7471" strokeWidth="1" opacity="0.5" />
                <path d="M195 70l5 5 5-5" stroke="#C2A265" strokeWidth="1.5" fill="none" />

                <path d="M300 50c0-8 6-14 14-14h40c8 0 14 6 14 14v20c0 8-6 14-14 14h-40c-8 0-14-6-14-14v-20z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M320 55h15M320 62h25" stroke="#3E7471" strokeWidth="1" opacity="0.5" />
                <path d="M315 70l5 5 5-5" stroke="#C2A265" strokeWidth="1.5" fill="none" />

                {/* Notebook/paper */}
                <rect x="80" y="280" width="120" height="80" rx="4" fill="#FFF" stroke="#D4C9B8" strokeWidth="1" />
                <path d="M90 290h80" stroke="#3E7471" strokeWidth="1" opacity="0.4" />
                <path d="M90 310h100" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />
                <path d="M90 330h70" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />
                <path d="M90 350h90" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />

                {/* Coffee cups */}
                <path d="M300 280c0 8 6 14 14 14h28c8 0 14-6 14-14v-40c0-8-6-14-14-14h-28c-8 0-14 6-14 14v40z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M342 280c0 8 6 14 14 14h14c8 0 14-6 14-14v-40c0-8-6-14-14-14h-14c-8 0-14 6-14 14v40z" fill="none" stroke="#C2A265" strokeWidth="1" />
                <path d="M356 240h14" stroke="#C2A265" strokeWidth="1.5" />

                <path d="M400 280c0 8 6 14 14 14h20c8 0 14-6 14-14v-40c0-8-6-14-14-14h-20c-8 0-14 6-14 14v40z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1" />
                <path d="M420 280c0 8 6 14 14 14h10c8 0 14-6 14-14v-40c0-8-6-14-14-14h-10c-8 0-14 6-14 14v40z" fill="none" stroke="#C2A265" strokeWidth="1" />
                <path d="M430 240h10" stroke="#C2A265" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}