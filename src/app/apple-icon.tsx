import { ImageResponse } from "next/og";

// See icon.tsx — same mark, sized for iOS home-screen icons.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

function Dot({ left, top, color }: { left: number; top: number; color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: 82,
        height: 82,
        borderRadius: "50%",
        background: color,
        opacity: 0.9,
      }}
    />
  );
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#F7F5F1",
          display: "flex",
        }}
      >
        <Dot left={22} top={22} color="#3E7471" />
        <Dot left={68} top={22} color="#D88F91" />
        <Dot left={45} top={62} color="#ECB94E" />
      </div>
    ),
    { ...size },
  );
}
