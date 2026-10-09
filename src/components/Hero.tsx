import Image from "next/image";
import headshot from "@/assets/headshot.jpg";
import { profile } from "@/content/profile";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-40 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="inline-block rounded-[1.5rem] border border-white/10 bg-white/5 p-1">
            <Image src={headshot} alt={profile.name} loading="eager" className="h-20 w-20 rounded-[calc(1.5rem-0.25rem)] object-cover ring-1 ring-white/10 md:h-28 md:w-28" />
          </div>
        </Reveal>
        <Reveal delay={100} className="mt-8"><Eyebrow>{profile.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={200}><h1 className="mt-8 max-w-5xl text-6xl font-medium tracking-tighter md:text-9xl">{profile.h1}</h1></Reveal>
        <Reveal delay={300}><p className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl">{profile.sub}</p></Reveal>
        <Reveal delay={400} className="mt-12 flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`}>Get in touch</Button>
          <Button href={profile.linkedin} variant="ghost">LinkedIn</Button>
        </Reveal>
      </div>
    </section>
  );
}
