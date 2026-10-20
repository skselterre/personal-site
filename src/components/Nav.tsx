"use client";
import { useEffect, useRef, useState } from "react";
import { ThemeSwitch } from "./ThemeToggle";

const links = [["About", "#about"], ["Writing", "#writing"], ["Experience", "#experience"], ["Contact", "#contact"]];
const ease = "ease-(--ease-out)";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLAnchorElement>(null);

  // Close the mobile menu if the viewport grows past the breakpoint (e.g. tablet rotation).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const main = document.getElementById("main");
    first.current?.focus();
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      if (main) main.inert = false;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-40">
      <div className="relative z-10 border-b border-line bg-bg px-4 md:px-8">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between">
          <a href="#top" onClick={() => setOpen(false)} className="py-3 text-sm font-medium tracking-tight">Shane Selterre</a>
          <ul className="hidden gap-8 lg:flex">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} className="inline-block py-3 text-sm text-muted transition-colors duration-200 hover:text-fg">{l}</a></li>
            ))}
          </ul>
          <button ref={toggle} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="relative -mr-2 h-11 w-11 cursor-pointer lg:hidden">
            <span className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-fg transition-transform duration-300 ${ease} motion-reduce:transition-none ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-fg transition-transform duration-300 ${ease} motion-reduce:transition-none ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>
      <div id="mobile-menu" inert={!open} className={`fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-bg transition-opacity duration-300 ${ease} motion-reduce:transition-none lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="flex min-h-full flex-col items-start justify-center gap-6 px-8 py-10">
          {links.map(([l, h], i) => (
            <a key={h} ref={i === 0 ? first : undefined} href={h} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }} className={`text-[clamp(1.75rem,9vw,3rem)] font-medium leading-tight tracking-display transition-[opacity,transform] duration-500 ${ease} motion-reduce:translate-y-0 motion-reduce:transition-none ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>{l}</a>
          ))}
          <ThemeSwitch className="mt-4" />
        </div>
      </div>
    </nav>
  );
}
