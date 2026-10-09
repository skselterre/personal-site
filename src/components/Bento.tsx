import { profile } from "@/content/profile";
import Card from "./Card";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const chip = "rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70";

export default function Bento() {
  return (
    <section className="px-4 py-32 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-8 md:row-span-2"><Card className="h-full">
          <Eyebrow>Now</Eyebrow>
          <div className="mt-6 space-y-5 text-lg text-white/70 md:text-xl">{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
        </Card></Reveal>
        <Reveal className="md:col-span-4" delay={100}><Card className="h-full">
          <Eyebrow>Stack</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-2">{profile.stack.map((s) => <li key={s} className={chip}>{s}</li>)}</ul>
        </Card></Reveal>
        <Reveal className="md:col-span-4" delay={150}><Card className="h-full">
          <Eyebrow>Certs & honors</Eyebrow>
          <ul className="mt-6 space-y-2 text-sm text-white/70">{profile.certs.map((c) => <li key={c}>{c}</li>)}</ul>
        </Card></Reveal>
        <Reveal className="md:col-span-4" delay={100}><Card className="h-full">
          <Eyebrow>Based in</Eyebrow>
          <p className="mt-6 text-2xl tracking-tight">{profile.location}</p>
          <p className="mt-2 text-sm text-white/60">Open to conversations.</p>
        </Card></Reveal>
        <Reveal className="md:col-span-8" delay={150}><Card className="h-full">
          <Eyebrow>Latest writing</Eyebrow>
          <p className="mt-6 text-lg text-white/70">{profile.writing.blurb}</p>
          <p className="mt-2 font-mono text-xs text-white/40">[PLACEHOLDER] links coming</p>
        </Card></Reveal>
      </div>
    </section>
  );
}
