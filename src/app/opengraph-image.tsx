import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

// Placeholder OG/Twitter card generated from brand tokens. Replace with
// designed artwork once one exists (see CLAUDE.md 6章 — untracked design
// decisions get proposed, not invented outright); this keeps link previews
// from being blank in the meantime.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "irodori｜いっしょに考え、いっしょに、形にしていく。";

const TITLE = "いっしょに考え、いっしょに、形にしていく。";
const SUBTITLE = "事業理解から、設計・制作・運用まで伴走する Web パートナー";
const WORDMARK = "irodori";

// next/og's default font has no Japanese glyphs, so this ships a small local
// subset (only the glyphs this card actually uses, ~20KB) instead of
// fetching one at request time — no outbound network call, so it can't fail
// in a sandboxed build/host with no egress. Regenerate it if the copy above
// changes:
//   curl "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=<url-encoded text>" \
//     | grep -o "url([^)]*) format('truetype')" # then curl that URL
async function loadFont() {
  // Plain Node fs read — no network call, and no reliance on bundler-specific
  // asset-fetch support (Next's documented `fetch(new URL(..., import.meta.url))`
  // trick errors under Turbopack's Node runtime here: "fetch failed: not
  // implemented" for file: URLs).
  return readFile(path.join(process.cwd(), "src/app/_og-fonts/NotoSansJP-Bold-subset.ttf"));
}

export default async function OgImage() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#F7F5F1",
          fontFamily: "Noto Sans JP",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative", width: 34, height: 34, display: "flex" }}>
            <div style={{ position: "absolute", left: 0, top: 2, width: 20, height: 20, borderRadius: "50%", background: "#3E7471", opacity: 0.9 }} />
            <div style={{ position: "absolute", left: 14, top: 2, width: 20, height: 20, borderRadius: "50%", background: "#D88F91", opacity: 0.9 }} />
            <div style={{ position: "absolute", left: 7, top: 14, width: 20, height: 20, borderRadius: "50%", background: "#ECB94E", opacity: 0.9 }} />
          </div>
          <div style={{ fontSize: 40, color: "#3E7471" }}>{WORDMARK}</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 52, color: "#211F1B", lineHeight: 1.4 }}>
          {TITLE}
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#5A554C" }}>{SUBTITLE}</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans JP", data: fontData, weight: 700, style: "normal" }],
    },
  );
}
