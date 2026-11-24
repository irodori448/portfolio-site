"use client";

import { useEffect } from "react";
import Link from "next/link";

export function WebPartnerHero() {
  useEffect(() => {
    // Animation trigger
  }, []);

  return (
    <section className="wp-hero" aria-labelledby="wp-hero-heading">
      <div className="wp-container">
        <div className="wp-hero-content">
          <p className="wp-eyebrow wp-fade-up" style={{ transitionDelay: "0ms" }}>
            External Web Partner
          </p>
          <h1
            id="wp-hero-heading"
            className="wp-hero-heading wp-fade-up"
            style={{ transitionDelay: "100ms" }}
          >
            Webのことを、<br />
            社内だけで抱えない。
          </h1>
          <p className="wp-hero-subheading wp-fade-up" style={{ transitionDelay: "200ms" }}>
            制作・改善・運用まで、必要なときに相談できる外部Web担当として、<br className="hidden sm:block" />
            企業のWeb業務を継続的に支援します。
          </p>
          <div className="wp-btn-group wp-fade-up" style={{ transitionDelay: "300ms" }}>
            <Link href="#contact" className="wp-btn wp-btn-primary">
              まずは相談してみる
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
            <Link href="#service" className="wp-btn wp-btn-ghost">
              支援内容を見る
            </Link>
          </div>
        </div>

        {/* Background visual - subtle workspace atmosphere */}
        {/* Subtle background pattern using CSS gradient instead of image */}
        <div
          className="wp-hero-visual"
          aria-hidden="true"
          style={{
            background: "linear-gradient(135deg, var(--wp-accent-soft) 0%, var(--wp-warm-soft) 50%, var(--wp-accent-rose-soft) 100%)",
            opacity: 0.08,
          }}
        />
      </div>

      {/* Decorative accent line */}
      <div className="wp-rule wp-fade-up" style={{ transitionDelay: "400ms" }} aria-hidden="true" />
    </section>
  );
}