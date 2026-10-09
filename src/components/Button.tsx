import { ArrowUpRight } from "./icons";

const ring = "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

export default function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const external = href.startsWith("http");
  const tone = variant === "primary" ? "bg-white text-black hover:bg-white/90" : "border border-white/10 bg-white/5 text-white hover:bg-white/10";
  const dot = variant === "primary" ? "bg-black/10" : "bg-white/10";
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`group inline-flex items-center gap-4 rounded-full py-2 pl-6 pr-2 text-sm font-medium ${tone} ${ring}`}>
      {children}
      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${dot} ${ring} group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105`}>
        <ArrowUpRight />
      </span>
    </a>
  );
}
