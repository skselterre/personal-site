"use client";
import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const subscribe = (cb: () => void) => {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
};
const read = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

const apply = (next: Theme) => {
  const root = document.documentElement;
  root.classList.add("theme-fade");
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
  window.setTimeout(() => root.classList.remove("theme-fade"), 250);
};

// Pressed segment: a quiet tint plus a 2px accent underline. The underline is a shape cue with >=3:1
// contrast, and only the pressed label carries it, so it still reads in forced-colors mode. Keyed to the
// html data-theme attribute, so it is right before hydration too.
const seg = "min-h-11 min-w-11 cursor-pointer rounded-xs px-3 text-sm font-medium text-muted decoration-2 underline-offset-[0.45em] transition-[background-color,color] duration-200 ease-(--ease-out) hover:text-fg md:px-4";

export function ThemeSwitch({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, read, (): Theme => "dark");
  return (
    <div role="group" aria-label="Color theme" className={`flex w-max gap-1 rounded-sm border border-line bg-surface p-1 ${className}`}>
      <button type="button" aria-pressed={theme === "dark"} onClick={() => apply("dark")} className={`${seg} dark:bg-fg/10! dark:text-fg! dark:underline dark:decoration-accent`}>Dark</button>
      <button type="button" aria-pressed={theme === "light"} onClick={() => apply("light")} className={`${seg} light:bg-fg/10! light:text-fg! light:underline light:decoration-accent`}>Light</button>
    </div>
  );
}

// Floating copy. Near the top of the page it shows only at lg+, where there is no menu; below lg the menu
// carries a switch and the hero calls to action own the corner. Further down it slides away while scrolling
// down and returns on scroll up or keyboard focus. Short viewports below lg (landscape phones) never show it.
export default function FloatingThemeToggle() {
  const [zone, setZone] = useState<"top" | "up" | "down">("top");
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 0.75) { setZone("top"); last = y; return; }
      if (Math.abs(y - last) < 8) return;
      setZone(y > last ? "down" : "up");
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const hide = zone === "down" ? "translate-y-[calc(100%+2rem)]" : zone === "top" ? "max-lg:translate-y-[calc(100%+2rem)]" : "";
  return (
    <div
      className={`theme-float fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-30 transition-transform duration-300 ease-(--ease-out) focus-within:translate-y-0 motion-reduce:transition-none md:bottom-6 md:right-6 max-lg:[@media(max-height:500px)]:hidden ${hide}`}
    >
      <ThemeSwitch className="shadow-[0_10px_30px_-12px_var(--shadow)]" />
    </div>
  );
}
