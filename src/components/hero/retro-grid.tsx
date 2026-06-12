"use client";

import { useEffect, useRef } from "react";

interface RetroGridProps {
  gridColor?: string;
  glowEffect?: boolean;
  speed?: number;
  className?: string;
}

export function RetroGrid({
  gridColor = "#e9a23b",
  glowEffect = false,
  speed = 0.8,
  className = "",
}: RetroGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = 1;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const cellWidth = 120;
    const cellDepth = 80;
    const numCellsWide = 18;
    const numCellsDeep = 22;

    const cameraX = 0;
    const cameraY = 60;
    const cameraZ = 400;
    const focalLength = 500;

    let offset = 0;
    let raf = 0;
    let lastTime = 0;
    const frameInterval = 1000 / 30;

    const w = () => canvas.width / dpr;
    const h = () => canvas.height / dpr;

    const project3DTo2D = (x: number, y: number, z: number) => {
      const relX = x - cameraX;
      const relY = y - cameraY;
      const relZ = z - cameraZ;
      if (relZ <= 10) return null;
      const scale = focalLength / relZ;
      return {
        x: w() / 2 + relX * scale,
        y: h() * 0.5 - relY * scale,
        scale,
        z: relZ,
      };
    };

    const drawCell = (x: number, z: number, zOffset: number) => {
      const actualZ = z - zOffset;
      if (actualZ < 0 || actualZ > numCellsDeep * cellDepth) return;

      const tl = project3DTo2D(x - cellWidth / 2, 0, actualZ);
      const tr = project3DTo2D(x + cellWidth / 2, 0, actualZ);
      const bl = project3DTo2D(x - cellWidth / 2, 0, actualZ + cellDepth);
      const br = project3DTo2D(x + cellWidth / 2, 0, actualZ + cellDepth);
      if (!tl || !tr || !bl || !br) return;

      const distanceFactor = Math.min(1, actualZ / (numCellsDeep * cellDepth));
      const alpha = Math.max(0, 0.32 - distanceFactor * 0.32);
      const lineWidth = Math.max(0.75, 1.25 * (1 - distanceFactor * 0.5));

      if (glowEffect) {
        ctx.shadowBlur = 4 * (1 - distanceFactor);
        ctx.shadowColor = gridColor;
      }

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = gridColor;
      ctx.globalAlpha = alpha;

      ctx.beginPath();
      ctx.moveTo(bl.x, bl.y);
      ctx.lineTo(br.x, br.y);
      ctx.lineTo(tr.x, tr.y);
      ctx.lineTo(tl.x, tl.y);
      ctx.closePath();
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const halfWide = Math.floor(numCellsWide / 2);

    const animate = (time: number) => {
      raf = requestAnimationFrame(animate);
      if (time - lastTime < frameInterval) return;
      lastTime = time;

      ctx.clearRect(0, 0, w(), h());

      offset += speed;
      if (offset >= cellDepth) offset = 0;

      for (let row = -2; row < numCellsDeep + 2; row++) {
        const z = row * cellDepth;
        for (let col = -halfWide; col <= halfWide; col++) {
          drawCell(col * cellWidth, z, offset);
        }
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!raf) raf = requestAnimationFrame(animate);
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [gridColor, glowEffect, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    />
  );
}
