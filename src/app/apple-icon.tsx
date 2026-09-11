import { ImageResponse } from "next/og";

// See icon.tsx — same placeholder mark, sized for iOS home-screen icons.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#3E7471",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#D88F91",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
