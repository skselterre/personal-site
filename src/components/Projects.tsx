import { projects } from "@/content/projects";
import Card from "./Card";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal><Eyebrow>Selected work</Eyebrow><h2 className="mt-6 text-4xl font-medium tracking-tighter md:text-6xl">Things I've built.</h2></Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}><Card className="h-full">
              <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-white/60">{p.summary}</p>
              <ul className="mt-6 flex gap-2">{p.tags.map((t, j) => <li key={j} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/60">{t}</li>)}</ul>
            </Card></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
