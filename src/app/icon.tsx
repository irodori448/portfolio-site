import { ImageResponse } from "next/og";

// Generated favicon/app icon — a simple placeholder mark (teal tile, accent
// dot) so the tab icon isn't the default Next.js logo. Swap for real
// brand artwork whenever it exists; this keeps working until then.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 7,
          background: "#3E7471",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#D88F91",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
