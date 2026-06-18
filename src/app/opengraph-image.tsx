import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hamza Jamal · Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: 80,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(15,15,15,0.55)",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#5ECCDD",
            }}
          />
          hamzajamal.design
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Big name */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 800,
            color: "#0F0F0F",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            display: "flex",
          }}
        >
          HAMZA JAMAL
        </div>

        {/* Tagline row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 28,
            fontSize: 36,
            color: "#0F0F0F",
            fontWeight: 500,
          }}
        >
          Product Designer
          <span style={{ color: "rgba(15,15,15,0.3)" }}>·</span>
          <span style={{ color: "rgba(15,15,15,0.65)" }}>
            Activation, retention, growth
          </span>
        </div>

        {/* Sticky pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
          }}
        >
          <div
            style={{
              transform: "rotate(-3deg)",
              background: "#B7E8C8",
              color: "#0F0F0F",
              padding: "10px 20px",
              borderRadius: 8,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Currently at Imagine.art
          </div>
          <div
            style={{
              transform: "rotate(2deg)",
              background: "#FF4D8B",
              color: "white",
              padding: "10px 20px",
              borderRadius: 8,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Available now
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
