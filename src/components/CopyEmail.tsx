"use client";
import { useState } from "react";

// Fallback for visitors with no mail client configured: copy the address instead of relying on mailto.
export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 2500);
  };
  return (
    <>
      <button type="button" onClick={copy} className="inline-flex min-h-11 min-w-[min(9rem,100%)] cursor-pointer items-center justify-center rounded-xs border border-line-strong px-5 text-sm font-medium transition-[background-color,transform] duration-200 ease-(--ease-out) hover:bg-fg/5 active:scale-[0.98]">
        {status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : "Copy address"}
      </button>
      <span role="status" className="sr-only">{status === "copied" ? "Email address copied" : status === "failed" ? `Copy failed. The address is ${email}` : ""}</span>
    </>
  );
}
