import { Clock, Users, Cake, Heart, GraduationCap, Building2, UtensilsCrossed } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { Button } from "@/components/ui/button";

const OFFERS = [
  {
    icon: Clock,
    title: "Happy Hours",
    detail: "1+1 on all cocktails, beer and mocktails",
    time: "Every day · 4 PM – 8 PM",
    tag: "Daily",
  },
  {
    icon: UtensilsCrossed,
    title: "Weekend Buffet",
    detail: "40+ dishes, unlimited, veg & non-veg counters",
    time: "Sat & Sun · 12 PM – 4 PM",
    tag: "₹799",
  },
  {
    icon: Cake,
    title: "Birthday Discount",
    detail: "30% off the bill plus a complimentary cake",
    time: "Valid on your birthday with ID",
    tag: "30% off",
  },
  {
    icon: Heart,
    title: "Couple Offer",
    detail: "Two mains, one dessert, two mocktails",
    time: "Mon – Thu · after 7 PM",
    tag: "₹1,299",
  },
  {
    icon: Users,
    title: "Family Combo",
    detail: "Feeds four: starters, mains, breads, dessert",
    time: "Available all week",
    tag: "₹1,999",
  },
  {
    icon: GraduationCap,
    title: "Student Discount",
    detail: "Flat 20% off with a valid college ID",
    time: "Mon – Fri · till 7 PM",
    tag: "20% off",
  },
  {
    icon: Building2,
    title: "Corporate Party Packages",
    detail: "Private floor, custom menu, projector & sound",
    time: "Groups of 20+ · advance booking",
    tag: "Custom",
  },
];

export function Offers() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="offers" ref={ref} className="section-pad relative px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Live Offers"
          title="Reasons to come tonight"
          subtitle="Running now at MHADA Corner. Mention the offer while ordering."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map(({ icon: Icon, ...offer }) => (
            <article
              key={offer.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <span
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-primary/30 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 font-[family-name:var(--font-button)] text-[11px] font-bold text-primary-foreground">
                  {offer.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl">{offer.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{offer.detail}</p>
              <p className="mt-4 font-[family-name:var(--font-button)] text-xs uppercase tracking-widest text-primary">
                {offer.time}
              </p>
            </article>
          ))}

          <article className="reveal flex flex-col justify-center gap-4 rounded-3xl border border-primary/40 bg-[image:var(--gradient-gold)] p-6 text-primary-foreground">
            <h3 className="text-2xl">Planning something bigger?</h3>
            <p className="text-sm opacity-90">
              Tell us the date and headcount — we'll build the menu and the playlist around it.
            </p>
            <Button variant="glass" className="self-start" asChild>
              <a href="#reservation">Plan my event</a>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
