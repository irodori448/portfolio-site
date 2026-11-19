import { ContactForm } from "@/components/ContactForm";

export function WebPartnerContact() {
  return (
    <section id="contact" className="cta">
      <span className="wm" aria-hidden="true">
        08
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M43 6 5 21l14 5 4 13 6-11 12-22z" fill="#F4EFE6" stroke="#F4EFE6" strokeWidth="2" strokeLinejoin="round" />
            <path d="M19 26 43 7M19 26v11" stroke="#2F5A55" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num" style={{ color: "#8FBDB7" }}>
            08
          </span>
          <span className="en" style={{ color: "#7FA8A2" }}>
            CONTACT
          </span>
        </div>
        <h2 className="cta-h2">Webのことで困ったとき、まずはご相談ください。</h2>
        <p>
          サイトの更新や修正、リニューアル、WordPressのトラブルなど、具体的な依頼内容が決まっていなくても構いません。現在の状況をお聞きし、必要な対応をご提案します。
        </p>
        <ContactForm />
      </div>
    </section>
  );
}