"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (anchor.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const href = anchor.getAttribute("href") || "";
      const sameOriginPath = anchor.pathname === window.location.pathname;

      let hash = "";
      if (href.startsWith("#")) hash = href.slice(1);
      else if (sameOriginPath && href.includes("#")) hash = href.split("#")[1];
      if (!hash) return;

      const el = document.getElementById(hash);
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      if (history.replaceState) history.replaceState(null, "", `#${hash}`);
    }

    document.addEventListener("click", onClick, true);

    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) {
        setTimeout(() => lenis.scrollTo(el, { offset: -80, immediate: false }), 300);
      }
    }

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
