"use client";

import Link from "next/link";

export function WebPartnerHero() {
  return (
    <section className="wp-hero" aria-labelledby="wp-hero-heading">
      <div className="wp-container">
        <div className="wp-hero-grid">
          <div className="wp-hero-content wp-fade-up">
            <p className="wp-eyebrow" style={{ transitionDelay: "0ms" }}>
              External Web Partner
            </p>
            <h1
              id="wp-hero-heading"
              className="wp-hero-heading"
              style={{ transitionDelay: "100ms" }}
            >
              一人でつくる、<br />
              チームの仕事。
            </h1>
            <p className="wp-hero-subheading" style={{ transitionDelay: "200ms" }}>
              Web制作・改善・運用を、外部パートナーとして継続的に支援。<br />
              専任担当を雇うコストなしで、必要なときに相談できるWeb担当を。
            </p>
            <div className="wp-btn-group" style={{ transitionDelay: "300ms" }}>
              <Link href="#contact" className="wp-btn wp-btn-primary">
                まずは相談してみる
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
              <Link href="#service" className="wp-btn wp-btn-secondary">
                支援内容を見る
              </Link>
            </div>
            <hr className="wp-rule" style={{ transitionDelay: "400ms" }} aria-hidden="true" />
          </div>

          {/* Hand-drawn illustration - External Web Partner concept */}
          <div className="wp-hero-visual wp-illustration wp-fade-up" style={{ transitionDelay: "200ms" }} aria-hidden="true">
            <svg viewBox="0 0 584 500" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.18, maxWidth: "100%", height: "auto" }}>
              <circle cx="292" cy="238" r="218" fill="#DFE4EE" />
              <path d="M28 470 Q 150 462 275 469 T 532 468" fill="none" stroke="#1A2340" strokeWidth="4" strokeLinecap="round" opacity=".45" />
              {/* Browser window */}
              <rect x="88" y="94" width="336" height="256" rx="16" fill="#FFFFFF" stroke="#1A2340" strokeWidth="6" />
              <path d="M88 142 H424" stroke="#1A2340" strokeWidth="5" />
              <circle cx="118" cy="118" r="7" fill="#E62E2E" />
              <circle cx="146" cy="118" r="7" fill="#1A2340" />
              <circle cx="174" cy="118" r="7" fill="#CBD4E4" />
              {/* WordPress circle */}
              <circle cx="150" cy="202" r="25" fill="#1A2340" />
              <text x="150" y="212" textAnchor="middle" fontFamily="Archivo, 'Noto Sans JP', sans-serif" fontWeight="800" fontSize="25" fill="#FFFFFF">W</text>
              <rect x="196" y="180" width="186" height="15" rx="7.5" fill="#CBD4E4" />
              <rect x="196" y="208" width="138" height="15" rx="7.5" fill="#DFE4EE" />
              {/* Graph bars */}
              <rect x="126" y="288" width="26" height="34" rx="4" fill="#CBD4E4" />
              <rect x="164" y="272" width="26" height="50" rx="4" fill="#1A2340" />
              <rect x="202" y="256" width="26" height="66" rx="4" fill="#E62E2E" />
              {/* Shopping bag */}
              <path d="M306 268 h46 l-5 56 a6 6 0 0 1 -6 5 h-24 a6 6 0 0 1 -6 -5 z" fill="#FFFFFF" stroke="#1A2340" strokeWidth="5" strokeLinejoin="round" />
              <path d="M318 268 v-8 a11 11 0 0 1 22 0 v8" fill="none" stroke="#1A2340" strokeWidth="5" />
              {/* Person */}
              <path d="M428 402 L420 464 M464 402 L474 464" stroke="#1A2340" strokeWidth="10" strokeLinecap="round" />
              <path d="M404 306 Q446 284 488 306 L496 402 Q446 418 396 402 Z" fill="#1A2340" />
              <path d="M482 318 L516 256" stroke="#1A2340" strokeWidth="12" strokeLinecap="round" />
              <path d="M410 320 L378 360" stroke="#1A2340" strokeWidth="12" strokeLinecap="round" />
              <circle cx="446" cy="264" r="28" fill="#F3C39A" stroke="#1A2340" strokeWidth="5" />
              <path d="M418 258 a28 28 0 0 1 56 0 l0 -6 a28 20 0 0 0 -56 0 z" fill="#1A2340" />
              <circle cx="436" cy="266" r="2.6" fill="#1A2340" />
              <circle cx="456" cy="266" r="2.6" fill="#1A2340" />
              <path d="M438 278 q8 6 16 0" fill="none" stroke="#1A2340" strokeWidth="3.5" strokeLinecap="round" />
              {/* Flag */}
              <path d="M516 258 V192" stroke="#1A2340" strokeWidth="5" strokeLinecap="round" />
              <path d="M516 194 C 534 185, 552 202, 574 193 L574 228 C 552 237, 534 220, 516 229 Z" fill="#E62E2E" />
              {/* Speech bubbles */}
              <g>
                <rect x="26" y="26" width="204" height="48" rx="24" fill="#FFFFFF" stroke="#1A2340" strokeWidth="5" />
                <path d="M96 74 l-6 16 l22 -13 z" fill="#FFFFFF" stroke="#1A2340" strokeWidth="4" strokeLinejoin="round" />
                <text x="128" y="57" textAnchor="middle" fontFamily="'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif" fontWeight="900" fontSize="16" fill="#1A2340">更新をお願いしたい！</text>
              </g>
              <g>
                <rect x="352" y="20" width="188" height="48" rx="24" fill="#FFFFFF" stroke="#1A2340" strokeWidth="5" />
                <path d="M452 68 l4 16 l20 -14 z" fill="#FFFFFF" stroke="#1A2340" strokeWidth="4" strokeLinejoin="round" />
                <text x="446" y="51" textAnchor="middle" fontFamily="'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif" fontWeight="900" fontSize="16" fill="#1A2340">商品を追加したい</text>
              </g>
              {/* Badge: Update */}
              <g>
                <circle cx="92" cy="392" r="31" fill="#FFFFFF" stroke="#1A2340" strokeWidth="5" />
                <path d="M78 392 a14 14 0 1 1 4 10" fill="none" stroke="#E62E2E" strokeWidth="5" strokeLinecap="round" />
                <path d="M74 380 l2 13 l13 -4 z" fill="#E62E2E" />
              </g>
              {/* Badge: Maintenance/Security */}
              <g>
                <circle cx="522" cy="392" r="31" fill="#FFFFFF" stroke="#1A2340" strokeWidth="5" />
                <path d="M522 372 l16 6 v10 c0 12 -7 19 -16 24 c-9 -5 -16 -12 -16 -24 v-10 z" fill="none" stroke="#1A2340" strokeWidth="5" strokeLinejoin="round" />
                <path d="M514 392 l6 6 l11 -12" fill="none" stroke="#E62E2E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}