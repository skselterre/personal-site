import { profile } from "@/content/profile";
import Button from "./Button";
import CopyEmail from "./CopyEmail";
import { Github, Linkedin } from "./icons";
import Reveal from "./Reveal";

const icon = "flex h-11 w-11 items-center justify-center rounded-xs border border-line-strong text-muted transition-[color,background-color,transform] duration-200 hover:bg-fg/5 hover:text-fg active:scale-[0.98]";

export default function Contact() {
  return (
    <section id="contact" className="px-4 md:px-8">
      <div className="relative mx-auto max-w-6xl border-t border-line py-32">
        <div aria-hidden className="sheet pointer-events-none absolute inset-0 border-r border-grid mask-y-from-50% mask-x-from-90%" />
        <Reveal className="relative"><h2 className="text-display">Let’s talk.</h2></Reveal>
        <Reveal delay={100} className="relative"><p className="mt-8 max-w-xl text-lg text-muted">{profile.contact}</p></Reveal>
        <Reveal delay={200} className="relative mt-10 flex flex-wrap items-center gap-4">
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
          <CopyEmail email={profile.email} />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className={icon}><Linkedin /></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className={icon}><Github /></a>
        </Reveal>
      </div>
    </section>
  );
}
