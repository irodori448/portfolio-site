import { ImageResponse } from "next/og";

// Generated favicon/app icon — the irodori mark (three overlapping
// brand-color dots, see src/components/Logomark.tsx) redrawn with plain
// divs, since this route renders through Satori rather than the browser.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

function Dot({ left, top, color }: { left: number; top: number; color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: color,
        opacity: 0.9,
      }}
    />
  );
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 7,
          background: "#F7F5F1",
          display: "flex",
        }}
      >
        <Dot left={5} top={5} color="#3E7471" />
        <Dot left={13} top={5} color="#D88F91" />
        <Dot left={9} top={13} color="#ECB94E" />
      </div>
    ),
    { ...size },
  );
}
