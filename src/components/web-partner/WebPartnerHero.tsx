export function WebPartnerHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1180px] px-5 pt-[30px] pb-14 lg:px-12 lg:pt-14 lg:pb-[100px]">
        <div className="fv-grid">
          <div className="fv-textcol">
            <div className="fvkick reveal">
              Webの{" "}
              <span className="cyc-web-partner">
                <span>相談、</span>
                <span>設計、</span>
                <span>制作、</span>
                <span>運用、</span>
              </span>
              ぜんぶ となりで。
            </div>
            <h1 className="fvh reveal d1">
              Webのことを、<br className="lg:inline" />
              社内だけで抱えない。
            </h1>
            <p className="reveal d2 mt-4 text-[15px] leading-[1.9] text-body lg:mt-[26px] lg:text-[17px] lg:leading-[1.95]">
              ホームページの制作から、更新・改善・保守まで。<br className="hidden lg:block" />
              必要なときに相談できる、外部Web担当として企業のWeb業務をサポートします。
            </p>
            <div className="reveal d3 fv-cta-row">
              <a href="#contact" className="btn btn-primary">
                Webの困りごとを相談する
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
              </a>
              <a href="#service" className="btn btn-ghost">
                サービス内容を見る
              </a>
            </div>
          </div>

          <div className="fv-viscol">
            <svg
              className="fvviz reveal d2"
              viewBox="0 0 320 220"
              fill="none"
              role="img"
              aria-label="デスクの上にあるワイヤーフレーム、WordPress・Shopifyのロゴマーク、付箋、ブランドカラーの色見本を描いたイラスト"
            >
              {/* Desk surface */}
              <g transform="rotate(-3 160 110)">
                <rect
                  x="50"
                  y="40"
                  width="220"
                  height="140"
                  rx="12"
                  fill="#FCFBF8"
                  stroke="#E6E0D2"
                  strokeWidth="2"
                />
                {/* Browser chrome */}
                <rect x="70" y="58" width="180" height="22" rx="6" fill="#E4EDEB" />
                <circle cx="85" cy="69" r="3.5" fill="#8FB3AD" />
                <circle cx="97" cy="69" r="3.5" fill="#BBD2CE" />
                <circle cx="109" cy="69" r="3.5" fill="#D88F91" />

                {/* WordPress logo area */}
                <rect x="70" y="96" width="180" height="56" rx="8" fill="#F1F0EB" />
                <rect x="84" y="110" width="52" height="28" rx="6" fill="#3E7471" opacity="0.12" />
                <text x="110" y="129" fontSize="10" fill="#3E7471" fontWeight="600" fontFamily="system-ui, sans-serif">
                  WordPress
                </text>

                {/* Shopify logo area */}
                <rect x="150" y="110" width="52" height="28" rx="6" fill="#D88F91" opacity="0.12" />
                <text x="176" y="129" fontSize="10" fill="#D88F91" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Shopify
                </text>

                {/* Sticky notes */}
                <rect x="70" y="168" width="60" height="48" rx="4" fill="#F1DD98" transform="rotate(5 100 192)" />
                <rect x="150" y="168" width="60" height="48" rx="4" fill="#CFE3D2" transform="rotate(-4 180 192)" />

                {/* Color swatches */}
                <circle cx="220" cy="190" r="8" fill="#F7F5F1" stroke="#DAD3C6" strokeWidth="1.2" />
                <circle cx="238" cy="190" r="8" fill="#3E7471" />
                <circle cx="256" cy="190" r="8" fill="#D88F91" />
              </g>

              {/* Pencil */}
              <g transform="rotate(18 220 80)">
                <rect x="180" y="60" width="12" height="50" rx="3" fill="#ECB94E" />
                <path d="M186 110 L192 118 L180 118 Z" fill="#E7C3A0" />
                <path d="M186 110 L192 118 L186 126 Z" fill="#2E2C29" />
              </g>

              {/* Brand color dots */}
              <circle cx="40" cy="40" r="9" fill="#F7F5F1" stroke="#DAD3C6" strokeWidth="1.4" />
              <circle cx="58" cy="40" r="9" fill="#3E7471" />
              <circle cx="76" cy="40" r="9" fill="#D88F91" />
            </svg>

            <div className="fv-rail rail reveal d2">
              <div className="t">外部Web担当の関わり方</div>
              <div className="step">
                <span className="dot" />
                <span className="lb">相談・ヒアリング</span>
                <span className="tl">START</span>
              </div>
              <div className="step on">
                <span className="dot" />
                <span className="lb">現状整理・提案</span>
                <span className="tl">ここが要</span>
              </div>
              <div className="step">
                <span className="dot" />
                <span className="lb">制作・改善</span>
                <span className="tl">実行</span>
              </div>
              <div className="step">
                <span className="dot" />
                <span className="lb">公開・引き継ぎ</span>
                <span className="tl">完了</span>
              </div>
              <div className="step">
                <span className="dot" />
                <span className="lb">継続運用・改善</span>
                <span className="tl">継続</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}