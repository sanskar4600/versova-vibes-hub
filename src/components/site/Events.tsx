import { Music4, Disc3, Trophy, Cake, Briefcase, DoorClosed } from "lucide-react";

import eventImg from "@/assets/event-live-music.jpg";
import privateDining from "@/assets/private-dining.jpg";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { Button } from "@/components/ui/button";

const EVENTS = [
  { icon: Music4, title: "Live Music", when: "Wednesdays · 9 PM", note: "Acoustic sets from Mumbai's indie circuit." },
  { icon: Disc3, title: "DJ Night", when: "Fri & Sat · 10 PM", note: "House, Bollywood and hip-hop till close." },
  { icon: Trophy, title: "IPL Screening", when: "Match days", note: "Three big screens, buckets on offer." },
  { icon: Cake, title: "Birthday Party", when: "Any day", note: "Decor, cake and a reserved corner." },
  { icon: Briefcase, title: "Corporate Events", when: "By booking", note: "Projector, sound and a set menu." },
  { icon: DoorClosed, title: "Private Dining", when: "By booking", note: "A 20-seat room that shuts the city out." },
];

export function Events() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="events" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What's On"
          title="Every night has a soundtrack"
          subtitle="From acoustic Wednesdays to a room that's entirely yours."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal relative overflow-hidden rounded-[2rem] border border-border">
            <img
              src={eventImg}
              alt="Guitarist performing under warm stage lights"
              loading="lazy"
              width={1000}
              height={1000}
              className="h-full min-h-[22rem] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-apple)] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-[family-name:var(--font-button)] text-xs uppercase tracking-[0.35em] text-primary">
                This week
              </p>
              <h3 className="mt-3 text-3xl">Unplugged Wednesdays</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Two sets, no cover charge, kitchen open till 6 AM.
              </p>
              <Button variant="luxe" className="mt-5" asChild>
                <a href="#reservation">Reserve for the show</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {EVENTS.map(({ icon: Icon, ...e }) => (
              <article
                key={e.title}
                className="reveal rounded-3xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <Icon className="size-5 text-primary" />
                <h3 className="mt-4 text-lg">{e.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-primary/80">{e.when}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-6 grid gap-6 overflow-hidden rounded-[2rem] border border-border bg-card md:grid-cols-2">
          <img
            src={privateDining}
            alt="Private dining room with a long candle-lit table"
            loading="lazy"
            width={1000}
            height={1000}
            className="h-full min-h-56 w-full object-cover"
          />
          <div className="flex flex-col justify-center gap-3 p-8">
            <h3 className="text-2xl">The Private Room</h3>
            <p className="text-sm text-muted-foreground">
              Twenty seats, its own bar service and a door that closes. Ideal for anniversaries,
              board dinners and birthdays that run long.
            </p>
            <Button variant="outlineGold" className="self-start" asChild>
              <a href="#contact">Enquire about availability</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
