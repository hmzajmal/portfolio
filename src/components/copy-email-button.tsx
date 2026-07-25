"use client";

import { useState } from "react";

const EMAIL = "hamza.jamal@imagine.art";

/**
 * Reusable "copy email to clipboard" CTA. Parent supplies the styling
 * (className) and the resting label; this handles the click, the
 * clipboard write, and the temporary "Copied · hamza.jamal@imagine.art"
 * feedback state.
 */
export function CopyEmailButton({
  label,
  className = "",
  copiedLabel,
}: {
  label: string;
  className?: string;
  /** Text shown after a successful copy. Defaults to "Copied · <email>". */
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for older browsers / non-secure contexts.
      const el = document.createElement("textarea");
      el.value = EMAIL;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={className}
    >
      {copied ? (
        <>
          <CheckIcon />
          <span>{copiedLabel ?? `Copied · ${EMAIL}`}</span>
        </>
      ) : (
        <>
          <MailIcon />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="M2.5 6 L10 11 L17.5 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M4 10.5 L8 14.5 L16 6" />
    </svg>
  );
}
