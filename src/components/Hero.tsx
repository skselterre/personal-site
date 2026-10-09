import { profile } from "@/content/profile";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-40 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal><Eyebrow>{profile.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={100}><h1 className="mt-8 max-w-5xl text-6xl font-medium tracking-tighter md:text-9xl">{profile.h1}</h1></Reveal>
        <Reveal delay={200}><p className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl">{profile.sub}</p></Reveal>
        <Reveal delay={300} className="mt-12 flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`}>Get in touch</Button>
          <Button href={profile.linkedin} variant="ghost">LinkedIn</Button>
        </Reveal>
      </div>
    </section>
  );
}
