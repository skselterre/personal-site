import Image from "next/image";
import headshot from "@/assets/headshot.jpg";
import { profile } from "@/content/profile";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-40 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl md:grid-cols-[1fr_auto] md:items-start md:gap-x-12">
        <Reveal className="md:col-start-2 md:row-start-3 md:mt-8">
          <Image
            src={headshot}
            alt={profile.name}
            loading="eager"
            className="h-28 w-28 object-cover mask-radial-closest-side mask-radial-from-40% md:h-56 md:w-56 lg:h-72 lg:w-72"
          />
        </Reveal>
        <Reveal delay={100} className="mt-8 md:col-start-1 md:row-start-1 md:mt-0"><Eyebrow>{profile.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={200} className="md:col-span-2 md:row-start-2"><h1 className="mt-8 max-w-5xl text-6xl font-medium tracking-tighter md:text-9xl">{profile.h1}</h1></Reveal>
        <div className="md:col-start-1 md:row-start-3">
          <Reveal delay={300}><p className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl">{profile.sub}</p></Reveal>
          <Reveal delay={400} className="mt-12 flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`}>Get in touch</Button>
            <Button href={profile.linkedin} variant="ghost">LinkedIn</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
