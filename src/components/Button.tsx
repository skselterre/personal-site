import { ArrowDown, ArrowUpRight, Mail } from "./icons";

const motion = "transition-[background-color,color,border-color,transform] duration-200 ease-(--ease-out)";

export default function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const external = href.startsWith("http");
  const Icon = href.startsWith("mailto:") ? Mail : href.startsWith("#") ? ArrowDown : ArrowUpRight;
  const tone = variant === "primary" ? "bg-accent text-on-accent hover:bg-accent/90" : "border border-line-strong text-fg hover:bg-fg/5";
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`group inline-flex min-h-11 max-w-full items-center gap-2.5 rounded-xs px-5 text-sm font-medium active:scale-[0.98] ${tone} ${motion}`}>
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
      {external && <span className="sr-only"> (opens in new tab)</span>}
      <span className={`${motion} group-hover:translate-x-0.5`}><Icon /></span>
    </a>
  );
}
