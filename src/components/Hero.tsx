export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1180px] px-5 pt-[30px] pb-14 lg:px-12 lg:pt-14 lg:pb-[100px]">
        <div className="fv-grid">
          <div className="fv-textcol">
            <div className="fvkick reveal">
              Webの{" "}
              <span className="cyc">
                <span>相談、</span>
                <span>設計、</span>
                <span>制作、</span>
                <span>運用、</span>
              </span>
              ぜんぶ となりで。
            </div>
            <h1 className="fvh reveal d1">
              いっしょに考え、
              <br className="lg:inline" />
              いっしょに、
              <br className="hidden lg:inline" />
              <span className="mk">形にしていく</span>。
            </h1>
            <p className="reveal d2 mt-4 text-[15px] leading-[1.9] text-body lg:mt-[26px] lg:text-[17px] lg:leading-[1.95]">
              事業理解から、設計・制作・運用まで伴走する Web パートナーです。
              <br className="hidden lg:block" />
              相談内容が固まっていなくても大丈夫です。
            </p>
            <div className="reveal d3 fv-cta-row">
              <a href="#contact" className="btn btn-primary">
                まずは相談してみる
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
              <a href="#process" className="btn btn-ghost">
                仕事の進め方を見る
              </a>
            </div>
          </div>

          <div className="fv-viscol">
          <svg
            className="fvviz reveal d2"
            viewBox="0 0 264 196"
            fill="none"
            role="img"
            aria-label="机の上のワイヤーフレームの紙、鉛筆、付箋、ブランドカラーの色見本を描いたイラスト"
          >
            <rect
              x="200"
              y="16"
              width="42"
              height="42"
              rx="4"
              fill="#F1DD98"
              transform="rotate(8 221 37)"
            />
            <rect
              x="8"
              y="128"
              width="40"
              height="40"
              rx="4"
              fill="#CFE3D2"
              transform="rotate(-7 28 148)"
            />
            <g transform="rotate(-4 128 100)">
              <rect
                x="48"
                y="26"
                width="156"
                height="146"
                rx="10"
                fill="#FCFBF8"
                stroke="#E6E0D2"
                strokeWidth="2"
              />
              <rect x="62" y="40" width="128" height="17" rx="4" fill="#E4EDEB" />
              <circle cx="73" cy="48.5" r="2.6" fill="#8FB3AD" />
              <circle cx="83" cy="48.5" r="2.6" fill="#BBD2CE" />
              <rect x="62" y="68" width="76" height="9" rx="4" fill="#CBDDD9" />
              <rect x="62" y="86" width="128" height="36" rx="5" fill="#EAF1EF" />
              <rect x="72" y="96" width="50" height="7" rx="3.5" fill="#A7C7C2" />
              <rect x="72" y="108" width="26" height="9" rx="4.5" fill="#D88F91" />
              <rect x="62" y="134" width="58" height="24" rx="4" fill="#F1EBDE" />
              <rect x="132" y="134" width="58" height="24" rx="4" fill="#F1EBDE" />
            </g>
            <g transform="rotate(22 150 128)">
              <rect x="98" y="120" width="98" height="11" rx="3" fill="#ECB94E" />
              <rect x="98" y="120" width="98" height="3.5" rx="1.75" fill="#F4CE7C" />
              <path d="M196 120 L212 125.5 L196 131 Z" fill="#E7C3A0" />
              <path d="M206 123 L212 125.5 L206 128 Z" fill="#2E2C29" />
              <rect x="88" y="120" width="10" height="11" rx="3" fill="#E79E9E" />
            </g>
            <circle cx="24" cy="30" r="6.5" fill="#F7F5F1" stroke="#DAD3C6" strokeWidth="1.4" />
            <circle cx="41" cy="30" r="6.5" fill="#3E7471" />
            <circle cx="58" cy="30" r="6.5" fill="#D88F91" />
          </svg>

          <div className="fv-rail rail reveal d2">
            <div className="t">仕事の進め方</div>
            <div className="step">
              <span className="dot" />
              <span className="lb">相談</span>
              <span className="tl">STEP 1</span>
            </div>
            <div className="step on">
              <span className="dot" />
              <span className="lb">整理・要件</span>
              <span className="tl">ここが要</span>
            </div>
            <div className="step">
              <span className="dot" />
              <span className="lb">構成・設計</span>
              <span className="tl">STEP 3</span>
            </div>
            <div className="step">
              <span className="dot" />
              <span className="lb">デザイン・実装</span>
              <span className="tl">STEP 4</span>
            </div>
            <div className="step">
              <span className="dot" />
              <span className="lb">公開・運用</span>
              <span className="tl">STEP 5</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
