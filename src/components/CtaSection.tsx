export function CtaSection() {
  return (
    <section id="contact" className="cta">
      <span className="wm" aria-hidden="true">
        07
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M43 6 5 21l14 5 4 13 6-11 12-22z" fill="#F4EFE6" stroke="#F4EFE6" strokeWidth="2" strokeLinejoin="round" />
            <path d="M19 26 43 7M19 26v11" stroke="#2F5A55" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="kicker">
          <span className="num" style={{ color: "#8FBDB7" }}>
            07
          </span>
          <span className="en" style={{ color: "#7FA8A2" }}>
            CONTACT
          </span>
        </div>
        <h2 className="cta-h2">まずは、話を聞かせてください。</h2>
        <p>
          依頼するかどうか決まっていなくて大丈夫です。今の状況と、困っていることを教えてください。整理のお手伝いから始められます。
        </p>
        <a
          href="#"
          className="btn btn-primary"
          style={{ background: "#F4EFE6", color: "#2C4B47", marginTop: 26, display: "inline-flex" }}
        >
          お問い合わせフォームへ
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
        <p className="sm">
          {/* TODO: replace with the real contact form URL / mailbox before launch */}
          <span className="ph" style={{ background: "#3a6a64", color: "#e7f0ee" }}>
            [メール: hello@example.com]
          </span>{" "}
          でも受け付けています。
        </p>
      </div>
    </section>
  );
}
