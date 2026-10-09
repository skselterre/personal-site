import { experience } from "@/content/experience";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal><Eyebrow>Experience</Eyebrow><h2 className="mt-6 text-4xl font-medium tracking-tighter md:text-6xl">Where I've worked.</h2></Reveal>
        <ol className="mt-16 border-l border-white/10">
          {experience.map((r) => (
            <li key={r.company} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-white/30 bg-[#050505]" />
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">{r.dates}</p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight">{r.company}</h3>
                <p className="text-white/60">{r.role}</p>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm text-white/60 marker:text-white/20">{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
