export default function Card({ children, className = "", innerClassName = "" }: { children: React.ReactNode; className?: string; innerClassName?: string }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/5 p-1.5 ${className}`}>
      <div className={`h-full rounded-[calc(2rem-0.375rem)] bg-[#0a0a0a] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] md:p-9 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
