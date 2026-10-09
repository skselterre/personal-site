import { profile } from "@/content/profile";
import Button from "./Button";
import { Github, Linkedin } from "./icons";
import Reveal from "./Reveal";

const icon = "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white active:scale-[0.98]";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-6xl font-medium tracking-tighter md:text-9xl">Let's talk.</h2></Reveal>
        <Reveal delay={100}><p className="mt-8 max-w-xl text-lg text-white/60">{profile.contact}</p></Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={icon}><Linkedin /></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={icon}><Github /></a>
        </Reveal>
      </div>
    </section>
  );
}
