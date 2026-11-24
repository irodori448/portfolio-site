"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/ContactForm";

export function WebPartnerContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const el = document.getElementById("wp-contact");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wp-contact" className="wp-section wp-cta" aria-labelledby="wp-contact-heading">
      <div className="wp-container">
        <div className="wp-grid wp-grid-asym">
          <div style={{ maxWidth: "560px" }}>
            <p className={`wp-eyebrow wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "0ms", color: "rgba(255,255,255,0.6)" }}>
              Contact
            </p>
            <h2
              id="wp-contact-heading"
              className={`wp-heading wp-fade-up ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              Webのことで困ったとき、<br />
              まずはご相談ください。
            </h2>
            <p className={`wp-subheading wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              サイトの更新や修正、リニューアル、WordPressのトラブルなど、<br />
              具体的な依頼内容が決まっていなくても構いません。現在の状況をお聞きし、必要な対応をご提案します。
            </p>
          </div>

          <div className={`wp-fade-up ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms" }}>
            <div className="wp-card-strong" style={{ maxWidth: "520px" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}