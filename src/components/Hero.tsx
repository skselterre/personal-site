import Image from "next/image";
import headshot from "@/assets/headshot.jpg";
import { profile } from "@/content/profile";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-24 md:px-8 md:pt-32">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-x-12">
        <div aria-hidden className="sheet pointer-events-none absolute inset-x-0 -inset-y-24 border-r border-grid mask-y-from-70% mask-x-from-90%" />
        <figure className="rise relative flex flex-wrap items-center gap-4 md:col-start-2 md:row-start-2 md:mt-10 md:flex-col md:items-start md:gap-3" style={{ animationDelay: "250ms" }}>
          <Image
            src={headshot}
            alt={profile.name}
            loading="eager"
            className="h-20 w-20 shrink-0 rounded-xs object-cover md:h-56 md:w-56 md:dark:rounded-none md:dark:mask-radial-closest-side md:dark:mask-radial-from-40% lg:h-72 lg:w-72"
          />
          {/* Labelled like a node in an architecture diagram, matching the experience timeline. */}
          <figcaption className="relative min-w-[min(12ch,100%)] flex-1 pl-5 text-sm leading-snug text-muted md:min-w-0 md:flex-none">
            <span aria-hidden className="absolute left-0 top-[0.35em] h-2.5 w-2.5 rounded-full border border-accent bg-accent" />
            <span aria-hidden className="absolute -top-3 left-[4.5px] hidden h-[calc(0.35em+0.75rem)] w-px bg-line-strong md:block" />
            <span className="block text-balance">{profile.eyebrow}</span>
            <span className="block">{profile.location}</span>
          </figcaption>
        </figure>
        <h1 className="rise-soft relative mt-8 max-w-5xl text-display text-balance md:col-span-2 md:row-start-1 md:mt-0">{profile.h1}</h1>
        <div className="relative md:col-start-1 md:row-start-2">
          <p className="rise mt-8 max-w-[52ch] text-lg text-muted md:text-xl" style={{ animationDelay: "100ms" }}>{profile.sub}</p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "180ms" }}>
            <Button href="#contact">Get in touch</Button>
            <Button href={profile.linkedin} variant="ghost">LinkedIn</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
