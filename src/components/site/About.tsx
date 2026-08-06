import { Star } from "lucide-react";

import interior from "@/assets/interior.jpg";
import privateDining from "@/assets/private-dining.jpg";
import { SectionHeading } from "./SectionHeading";
import { useCountUp, useReveal } from "./use-reveal";

const STATS = [
  { to: 4.5, suffix: "", label: "Google Rating", decimals: 1 },
  { to: 366, suffix: "+", label: "Reviews" },
  { to: 5000, suffix: "+", label: "Happy Guests" },
  { to: 150, suffix: "+", label: "Signature Dishes" },
  { to: 100, suffix: "+", label: "Cocktails" },
  { to: 6, suffix: " AM", label: "Open Till" },
];

function Stat({ to, suffix, label, decimals = 0 }: (typeof STATS)[number]) {
  const { ref, value } = useCountUp(to);
  return (
    <div className="reveal neu rounded-2xl px-4 py-5 text-center">
      <span
        ref={ref}
        className="block font-[family-name:var(--font-display)] text-3xl font-semibold text-primary"
      >
        {value.toFixed(decimals)}
        {suffix}
      </span>
      <span className="mt-1 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section-pad relative px-5">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="reveal overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={interior}
              alt="Warm, moody dining room with velvet booths and amber pendant lights"
              loading="lazy"
              width={1200}
              height={1400}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-apple)] hover:scale-105"
            />
          </div>
          <div className="reveal absolute -bottom-10 -right-4 hidden w-52 overflow-hidden rounded-3xl border border-primary/30 shadow-luxe sm:block lg:-right-10 lg:w-64">
            <img
              src={privateDining}
              alt="Candle-lit private dining room"
              loading="lazy"
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="reveal glass absolute -left-4 top-8 flex items-center gap-2 rounded-full px-4 py-2.5 lg:-left-8">
            <Star className="size-4 fill-accent text-accent" />
            <span className="font-[family-name:var(--font-button)] text-sm font-bold">4.5</span>
            <span className="text-xs text-muted-foreground">366+ Google reviews</span>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Versova evening, plated and poured"
            subtitle="Born on the corner of MHADA in Andheri West, Versova Vibes began as a simple idea: give the neighbourhood one room where the tandoor, the wok, the pizza oven and the bar all play in the same band. Ten years of kitchens across Mumbai, distilled into one late-night table."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="reveal rounded-2xl border border-border bg-card p-5">
              <h3 className="text-lg text-primary">Our Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Honest ingredients, exact cooking and a welcome that lands before the food does —
                every plate priced for a regular, finished like an occasion.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-border bg-card p-5">
              <h3 className="text-lg text-primary">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To be the address Versova defaults to — for the first date, the last drink and every
                birthday in between.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
