"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * Theme controller. Persists the user's explicit choice in localStorage
 * under "hj.theme"; falls back to the system `prefers-color-scheme`.
 *
 * The actual theme attribute is set by an inline script in <head> before
 * React hydrates (see `ThemeBootstrap` below), so there's no flash of the
 * wrong theme on first paint.
 */

type Theme = "light" | "dark";

const STORAGE_KEY = "hj.theme";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    // Read what the bootstrap script already set on <html>.
    const initial =
      (document.documentElement.getAttribute("data-theme") as Theme | null) ||
      "light";
    setThemeState(initial);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return ctx;
}

/**
 * Inline script that runs before React hydration. Reads the stored theme
 * preference (or falls back to system) and sets `data-theme` on <html>.
 * Prevents the flash-of-light-theme that a useEffect-based init causes.
 */
export function ThemeBootstrap() {
  // Light-only for now. Toggle UI hidden in nav, dark tokens still
  // defined in globals.css for when we re-enable.
  const src = `
    (function () {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: src }} />;
}

/**
 * Subtle icon-only toggle. Sun ↔ moon. Sits in the nav right cluster.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-none border border-[var(--color-line-strong)] bg-[var(--color-canvas)] text-[var(--color-ink)] outline-none transition-colors hover:bg-[var(--color-canvas-warm)] focus-visible:ring-2 focus-visible:ring-[#5ECCDD] focus-visible:ring-offset-2 ${className}`}
    >
      <span className="block h-4 w-4">{isDark ? <SunIcon /> : <MoonIcon />}</span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 3v1.75M12 19.25V21M3 12h1.75M19.25 12H21M5.45 5.45l1.24 1.24M17.31 17.31l1.24 1.24M5.45 18.55l1.24-1.24M17.31 6.69l1.24-1.24" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
  );
}
