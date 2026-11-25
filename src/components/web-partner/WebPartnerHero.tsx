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

          {/* Hand-drawn illustration - workspace atmosphere */}
          <div className="wp-hero-visual wp-illustration wp-fade-up" style={{ transitionDelay: "200ms" }} aria-hidden="true">
            <svg viewBox="0 0 480 400" fill="none" stroke="#1A2340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.15, maxWidth: "100%", height: "auto" }}>
              {/* Desk */}
              <rect x="40" y="280" width="400" height="12" rx="2" fill="#E8E2D6" stroke="#D4C9B8" />
              <rect x="60" y="260" width="160" height="24" rx="4" fill="#F5EEDC" stroke="#D4C9B8" />
              <rect x="80" y="264" width="120" height="16" rx="2" fill="#FFF" stroke="#E8E2D6" />

              {/* Monitor */}
              <rect x="200" y="120" width="220" height="140" rx="4" fill="#1A2340" stroke="#3D4A6B" strokeWidth="2" />
              <rect x="210" y="130" width="200" height="120" rx="2" fill="#E8EDEB" stroke="none" />
              <path d="M230 180h140" stroke="#3E7471" strokeWidth="2" opacity="0.5" />
              <path d="M230 200h100" stroke="#3E7471" strokeWidth="1.5" opacity="0.3" />
              <path d="M230 220h160" stroke="#3E7471" strokeWidth="1" opacity="0.2" />
              <circle cx="380" cy="240" r="8" fill="none" stroke="#E62E2E" strokeWidth="2" />
              <path d="M377 240h6M380 237v6" stroke="#E62E2E" strokeWidth="2" />

              {/* Laptop */}
              <rect x="60" y="180" width="120" height="80" rx="3" fill="#1A2340" stroke="#3D4A6B" strokeWidth="1.5" />
              <rect x="70" y="188" width="100" height="64" rx="2" fill="#E8EDEB" stroke="none" />
              <path d="M80 210h80" stroke="#3E7471" strokeWidth="1.5" opacity="0.5" />
              <path d="M80 230h60" stroke="#3E7471" strokeWidth="1" opacity="0.3" />

              {/* Coffee mug */}
              <path d="M300 280c0 8 6 14 14 14h28c8 0 14-6 14-14v-40c0-8-6-14-14-14h-28c-8 0-14 6-14 14v40z" fill="#F5EEDC" stroke="#C2A265" strokeWidth="1.5" />
              <path d="M342 280c0 8 6 14 14 14h14c8 0 14-6 14-14v-40c0-8-6-14-14-14h-14c-8 0-14 6-14 14v40z" fill="none" stroke="#C2A265" strokeWidth="1.5" />
              <path d="M356 240h14" stroke="#C2A265" strokeWidth="2" />

              {/* Notebook */}
              <rect x="60" y="140" width="100" height="36" rx="2" fill="#FFF" stroke="#D4C9B8" strokeWidth="1" />
              <path d="M70 150h60" stroke="#3E7471" strokeWidth="1" opacity="0.4" />
              <path d="M70 165h40" stroke="#3E7471" strokeWidth="0.5" opacity="0.2" />

              {/* Plant */}
              <path d="M40 200c0 20 15 40 35 40" fill="none" stroke="#C2A265" strokeWidth="2" opacity="0.5" />
              <ellipse cx="75" cy="210" rx="12" ry="8" fill="#C2A265" opacity="0.2" />
              <ellipse cx="55" cy="195" rx="10" ry="6" fill="#C2A265" opacity="0.15" />
              <ellipse cx="85" cy="190" rx="8" ry="5" fill="#C2A265" opacity="0.1" />

              {/* Keyboard */}
              <rect x="60" y="260" width="120" height="14" rx="2" fill="#1A2340" stroke="#3D4A6B" strokeWidth="1" />
              <rect x="64" y="262" width="112" height="10" rx="1" fill="#1A2340" stroke="none" />

              {/* Mouse */}
              <ellipse cx="200" cy="270" rx="16" ry="10" fill="#1A2340" stroke="#3D4A6B" strokeWidth="1" />
              <ellipse cx="200" cy="266" rx="8" ry="4" fill="#3D4A6B" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}