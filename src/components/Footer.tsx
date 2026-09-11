const navLinks = [
  { href: "#value", label: "提供価値" },
  { href: "#service", label: "できること" },
  { href: "#process", label: "仕事の進め方" },
  { href: "#works", label: "実績" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="row">
          <div>
            <div className="bd">
              <span
                style={{ width: 9, height: 9, borderRadius: "50%", background: "#D88F91", display: "inline-block" }}
              />
              irodori
            </div>
            <div className="tl">事業理解から、設計・制作・運用まで伴走する Web パートナー。</div>
          </div>
          <nav>
            {navLinks.map((l) => (
              <a href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="cp">
          © {new Date().getFullYear()} irodori　/
          <span className="ph" style={{ background: "#33302a", color: "#c9c1b5" }}>
            [運営者情報・特商法表記 等]
          </span>
        </div>
      </div>
    </footer>
  );
}
