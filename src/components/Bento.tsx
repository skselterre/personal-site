import Image from "next/image";
import jacksonville from "@/assets/jacksonville.jpg";
import gcp from "@/assets/badge-gcp.png";
import looker from "@/assets/badge-looker.png";
import tableau from "@/assets/badge-tableau.png";
import aws from "@/assets/badge-aws.png";
import dbt from "@/assets/badge-dbt.png";
import { profile } from "@/content/profile";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

const cell = "relative border-b border-r border-line p-7 md:p-9";
const heading = "text-xl font-medium tracking-tight";
const chip = "rounded-xs border border-line px-2.5 py-1 text-sm text-muted";

const certs = [
  { title: "Google Cloud Professional Data Engineer", badge: gcp },
  { title: "Looker Certified LookML Developer", badge: looker },
  { title: "Tableau Desktop Specialist", badge: tableau },
  { title: "AWS Partner: Accreditation", badge: aws },
  { title: "dbt Fundamentals", badge: dbt },
];

export default function Bento() {
  return (
    <Section id="about" title="Who I am.">
        <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-12">
          <div className={`${cell} md:col-span-8 md:row-span-2`}>
            <Reveal className="max-w-[65ch] space-y-5 text-lg text-muted">
              {profile.about.map((p, i) => <p key={p} className={i === 0 ? "text-xl text-fg" : undefined}>{p}</p>)}
            </Reveal>
          </div>
          <div className={`${cell} md:col-span-4`}>
            <Reveal delay={100}>
              <h3 className={heading}>Stack</h3>
              <ul className="mt-6 flex flex-wrap gap-2">{profile.stack.map((s) => <li key={s} className={chip}>{s}</li>)}</ul>
            </Reveal>
          </div>
          <div className={`${cell} min-h-64 overflow-hidden md:col-span-4`}>
            <Image src={jacksonville} alt="" fill sizes="(min-width: 768px) 24rem, 100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/85 via-black/60 to-black/35" />
            <Reveal delay={200} className="relative flex h-full flex-col justify-end text-white">
              <h3 className="text-2xl font-medium tracking-tight">Based in {profile.location}</h3>
              <p className="mt-2 text-sm text-white/80">The City of Bridges, sun-kissed and thriving.</p>
            </Reveal>
          </div>
          <div className={`${cell} md:col-span-12`}>
            <Reveal delay={100}>
              <h3 className={heading}>Certifications</h3>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
                {certs.map((c) => (
                  <li key={c.title} className="flex flex-wrap items-center gap-4 lg:flex-col lg:flex-nowrap lg:items-start">
                    <Image src={c.badge} alt="" className="h-16 w-16 shrink-0 object-contain" />
                    <span className="min-w-[min(12ch,100%)] flex-1 text-sm font-medium leading-snug lg:min-w-0">{c.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
    </Section>
  );
}

export function Writing() {
  return (
    <Section id="writing" title={`${profile.writing.title}.`} intro={profile.writing.blurb}>
      <ul className="border-t border-line">
        {profile.writing.items.map((it, i) => (
          <li key={it.href} className="border-b border-line">
            <Reveal delay={i * 80}>
              <a href={it.href} target="_blank" rel="noopener noreferrer" className="group grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10">
                <span className="text-lg font-medium leading-snug tracking-tight text-balance group-hover:underline md:text-xl">
                  {it.title}<span className="sr-only"> (opens in new tab)</span>
                </span>
                <span className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 group-hover:text-accent">
                  {new URL(it.href).hostname.replace(/^www\./, "")}
                  <span className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-0.5"><ArrowUpRight /></span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
