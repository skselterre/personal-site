import { projects } from "@/content/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-section">Things I&apos;ve built.</h2></Reveal>
        <div className="mt-16 grid grid-cols-1 border-l border-t border-line md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="border-b border-r border-line p-7 md:p-9">
              <Reveal delay={i * 100}>
                <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">{p.tags.map((t, j) => <li key={j} className="rounded-xs border border-line px-2.5 py-1 text-sm text-muted">{t}</li>)}</ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
