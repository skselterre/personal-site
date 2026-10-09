import Image from "next/image";
import jacksonville from "@/assets/jacksonville.jpg";
import gcp from "@/assets/badge-gcp.png";
import looker from "@/assets/badge-looker.png";
import tableau from "@/assets/badge-tableau.png";
import aws from "@/assets/badge-aws.png";
import dbt from "@/assets/badge-dbt.png";
import { profile } from "@/content/profile";
import Card from "./Card";
import Eyebrow from "./Eyebrow";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";

const chip = "rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70";

const certs = [
  { title: "Google Cloud Professional Data Engineer", badge: gcp },
  { title: "Looker Certified LookML Developer", badge: looker },
  { title: "Tableau Desktop Specialist", badge: tableau },
  { title: "AWS Partner: Accreditation", badge: aws },
  { title: "dbt Fundamentals", badge: dbt },
];

export default function Bento() {
  return (
    <section className="px-4 py-32 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-8 md:row-span-2"><Card className="h-full">
          <Eyebrow>Who I Am</Eyebrow>
          <div className="mt-6 space-y-5 text-lg text-white/70 md:text-xl">{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
        </Card></Reveal>
        <Reveal className="md:col-span-4" delay={100}><Card className="h-full">
          <Eyebrow>Stack</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-2">{profile.stack.map((s) => <li key={s} className={chip}>{s}</li>)}</ul>
        </Card></Reveal>
        <Reveal className="md:col-span-4" delay={200}><Card className="h-full" innerClassName="relative overflow-hidden">
          <Image src={jacksonville} alt="" fill className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/10" />
          <div className="relative flex h-full min-h-56 flex-col justify-end">
            <Eyebrow>Based in</Eyebrow>
            <p className="mt-6 text-2xl tracking-tight">{profile.location}</p>
            <p className="mt-2 text-sm text-white/70">The City of Bridges, sun-kissed and thriving.</p>
          </div>
        </Card></Reveal>
        <Reveal className="md:col-span-12" delay={100}><Card className="h-full">
          <Eyebrow>Certifications</Eyebrow>
          <div className="-mx-7 mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto md:-mx-9">
            <ul className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...certs, ...certs].map((c, i) => {
                const dup = i >= certs.length;
                return (
                  <li key={i} aria-hidden={dup || undefined} className={`flex items-center gap-4 pr-16 ${dup ? "motion-reduce:hidden" : ""}`}>
                    <Image src={c.badge} alt="" className="h-24 w-24 object-contain" />
                    <span className="max-w-48 text-sm font-medium leading-snug">{c.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card></Reveal>
        <Reveal className="md:col-span-12" delay={150}><Card className="h-full">
          <Eyebrow>Latest writing</Eyebrow>
          <p className="mt-6 text-lg text-white/70">{profile.writing.blurb}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {profile.writing.items.map((it) => (
              <li key={it.href}>
                <a href={it.href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <span className="font-medium leading-snug underline-offset-4 group-hover:underline">{it.title}</span>
                  <span className="shrink-0 text-white/40 transition-all group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:text-white"><ArrowUpRight /></span>
                </a>
              </li>
            ))}
          </ul>
        </Card></Reveal>
      </div>
    </section>
  );
}
