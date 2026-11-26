import { ContactForm } from "@/components/ContactForm";

const consultationTopics = [
  "Webサイトを新しく作りたい",
  "既存サイトを改善・リニューアルしたい",
  "WordPressやShopifyの更新を任せたい",
  "Web業務を継続的に相談できる人を探している",
];

export function CtaSection() {
  return (
    <section id="contact" className="cta">
      <span className="wm" aria-hidden="true">
        09
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
        <ul style={{
          marginTop: "24px",
          paddingLeft: 0,
          listStyle: "none",
          display: "grid",
          gap: "10px",
          maxWidth: "560px"
        }}>
          {consultationTopics.map((topic) => (
            <li key={topic} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: "14.5px",
              lineHeight: 1.7,
              color: "#cfe0dc"
            }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D88F91"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </section>
  );
}