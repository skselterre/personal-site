import { profile } from "@/content/profile";
import Card from "./Card";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <section id="writing" className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal><Eyebrow>Writing & beyond</Eyebrow></Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[profile.writing, profile.podcast].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}><Card className="h-full">
              <h2 className="text-3xl font-medium tracking-tighter">{c.title}</h2>
              <p className="mt-3 text-white/60">{c.blurb}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/40">
                {c.items.map((it) => (
                  <li key={it.title}>
                    {it.href ? <a href={it.href} target="_blank" rel="noreferrer" className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline">{it.title}</a> : it.title}
                  </li>
                ))}
              </ul>
            </Card></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
