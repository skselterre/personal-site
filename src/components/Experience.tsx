import Image from "next/image";
import { experience } from "@/content/experience";
import { ChevronDown } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

// The two most recent roles show every bullet; older roles show their lead bullet and disclose the rest.
const OPEN_ROLES = 2;
const bullets = "list-disc space-y-2 pl-5 text-muted marker:text-line-strong";

export default function Experience() {
  return (
    <Section id="experience" title="Where I’ve worked.">
        <ol>
          {experience.map((r, i) => {
            const [lead, ...rest] = r.bullets;
            const open = i < OPEN_ROLES;
            return (
              <li key={r.company} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
                {i < experience.length - 1 && (
                  <>
                    <span aria-hidden className="absolute -bottom-2 left-0 top-2 w-px bg-line-strong" />
                    <span aria-hidden className="trace absolute -bottom-2 left-0 top-2 w-px bg-accent" />
                  </>
                )}
                <span aria-hidden className="node absolute -left-[4.5px] top-2 h-2.5 w-2.5 rounded-full border border-accent bg-accent" />
                <Reveal className="md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] md:gap-x-10 xl:grid-cols-[minmax(0,2fr)_minmax(0,5fr)_7rem]">
                  <div>
                    <p className="font-mono text-sm tabular-nums text-muted">{r.dates}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight">{r.company}</h3>
                    <p className="mt-1 text-muted">{r.role}</p>
                  </div>
                  <div className="mt-4 max-w-2xl md:mt-1">
                    <ul className={bullets}>
                      <li className="text-fg">{lead}</li>
                      {open && rest.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    {!open && rest.length > 0 && (
                      <details className="group">
                        <summary className="ml-5 inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-fg [&::-webkit-details-marker]:hidden">
                          <span className="group-open:hidden">Show {rest.length} more<span className="sr-only"> for {r.company}</span></span>
                          <span className="hidden group-open:inline">Show less<span className="sr-only"> for {r.company}</span></span>
                          <span className="transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"><ChevronDown /></span>
                        </summary>
                        <ul className={bullets}>{rest.map((b) => <li key={b}>{b}</li>)}</ul>
                      </details>
                    )}
                  </div>
                  {r.logo && (
                    <Image
                      src={r.logo}
                      alt=""
                      aria-hidden
                      className="pointer-events-none hidden h-14 w-full max-w-44 select-none justify-self-end object-contain object-right-top opacity-30 invert dark:invert-0 xl:block"
                    />
                  )}
                </Reveal>
              </li>
            );
          })}
        </ol>
    </Section>
  );
}
