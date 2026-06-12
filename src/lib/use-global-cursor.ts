"use client";

import { useEffect, useState } from "react";

export type CursorState = {
  x: number;
  y: number;
  active: boolean;
};

/**
 * Tracks the global cursor position. `active` becomes true after the
 * first mouse movement on the page (used to gate effects like the
 * ruler pan and the cursor pin so they don't fire on initial load).
 */
export function useGlobalCursor(): CursorState {
  const [state, setState] = useState<CursorState>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setState({ x: e.clientX, y: e.clientY, active: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return state;
}
