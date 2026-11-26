import Link from "next/link";

const serviceItems = [
  "ホームページの新規制作・リニューアル",
  "WordPress・Shopifyの更新・改善",
  "Webサイトの保守・管理",
  "サーバー・ドメインの管理",
  "Webサイトの運用相談・改善提案",
];

export function WebPartnerSection() {
  return (
    <section id="web-partner" className="bg-cream">
      <span className="wm" aria-hidden="true">
        03
      </span>
      <div className="wrap">
        <div className="motif">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="4.5" fill="#D88F91" />
            <path
              d="M24 19V8m0 0-4 4m4-4 4 4M29 24h11m0 0-4-4m4 4-4 4M19.5 28.5 11 37m0 0h6m-6 0v-6"
              stroke="#3E7471"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="kicker">
          <span className="num">03</span>
          <span className="en">WEB PARTNER</span>
        </div>
        <h2 className="h2">Webのことを、いつでも相談できるパートナーに。</h2>
        <p className="lead">
          Webサイトの新規制作から、日々の更新・改善・保守管理まで。<br />
          事業の状況や課題に合わせて、必要なWeb業務を継続的にサポートします。
        </p>
        <ul className="grp-list" style={{ listStyle: "none", padding: 0 }}>
          {serviceItems.map((item, i) => (
            <li key={item} className="grp" style={{ marginTop: i === 0 ? "24px" : "14px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <svg
                  width="20"
                  height="20"
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
                <span style={{ fontSize: "15px", lineHeight: 1.7, color: "#2a2823" }}>{item}</span>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "32px" }}>
          <Link href="/web-partner/" className="btn btn-ghost">
            外部Web担当サービスについて詳しく見る
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}