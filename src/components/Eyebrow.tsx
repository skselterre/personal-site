export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">{children}</span>;
}
