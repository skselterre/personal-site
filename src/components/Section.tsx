import Reveal from "./Reveal";

// Every content section snaps to the hero's 12-column grid: a hairline rule on top, the heading in a
// sticky 3-column label column on large screens, the content in the remaining 9.
export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-line py-24 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          <h2 className="text-section text-balance">{title}</h2>
          {intro && <p className="mt-4 max-w-md text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-10 min-w-0 lg:col-span-9 lg:mt-0">{children}</div>
      </div>
    </section>
  );
}
