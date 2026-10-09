"use client";
import { useState } from "react";

const links = [["Work", "#work"], ["Experience", "#experience"], ["Contact", "#contact"]];
const ease = "ease-[cubic-bezier(0.32,0.72,0,1)]";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-30 mt-6 flex justify-center px-4">
        <div className="flex w-max items-center gap-8 rounded-full border border-white/10 bg-black/40 py-2 pl-6 pr-2 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] md:pr-6">
          <a href="#top" className="text-sm font-medium tracking-tight">Shane Selterre</a>
          <ul className="hidden gap-6 md:flex">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} className={`text-sm text-white/60 transition-colors duration-500 ${ease} hover:text-white`}>{l}</a></li>
            ))}
          </ul>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="relative z-40 h-10 w-10 rounded-full md:hidden">
            <span className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-white transition-transform duration-500 ${ease} ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-white transition-transform duration-500 ${ease} ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </nav>
      <div aria-hidden={!open} className={`fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-black/80 backdrop-blur-3xl transition-opacity duration-500 ${ease} md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        {links.map(([l, h], i) => (
          <a key={h} href={h} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }} className={`text-4xl font-medium tracking-tight transition-all duration-700 ${ease} ${open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>{l}</a>
        ))}
      </div>
    </>
  );
}
