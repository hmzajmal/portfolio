type Props = {
  position?: "bottom-left" | "bottom-right" | "top-right" | "top-left" | "center";
  size?: "sm" | "md" | "lg";
  intensity?: number;
};

const positionMap: Record<NonNullable<Props["position"]>, string> = {
  "bottom-left": "left-[-15%] bottom-[-20%]",
  "bottom-right": "right-[-15%] bottom-[-20%]",
  "top-left": "left-[-15%] top-[-20%]",
  "top-right": "right-[-15%] top-[-20%]",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

const sizeMap: Record<NonNullable<Props["size"]>, string> = {
  sm: "w-[40vw] h-[40vw]",
  md: "w-[60vw] h-[60vw]",
  lg: "w-[90vw] h-[70vw]",
};

/**
 * Atmospheric smoke. Cool violet to teal, very soft.
 * Kept as AmberGlow for import compatibility; the look is purple/teal.
 */
export function AmberGlow({
  position = "bottom-left",
  size = "lg",
  intensity = 0.6,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${positionMap[position]} ${sizeMap[size]} rounded-full blur-[160px]`}
      style={{
        background:
          "radial-gradient(closest-side, rgba(40, 180, 200, 0.55), rgba(30, 120, 150, 0.3) 45%, rgba(10,10,9,0) 75%)",
        opacity: intensity,
        mixBlendMode: "screen",
      }}
    />
  );
}
