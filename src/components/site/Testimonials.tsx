import { useEffect, useState } from "react";
import { BadgeCheck, Quote, Star } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { RESTAURANT } from "@/data/restaurant";

const REVIEWS = [
  {
    name: "Rhea Kapadia",
    initials: "RK",
    text: "Butter chicken here is the real deal — smoky, not sweet. We stayed till 2 AM and nobody rushed us. Easily our new Versova regular.",
    rating: 5,
  },
  {
    name: "Aditya Nair",
    initials: "AN",
    text: "Came for the happy hours, stayed for the tandoori. Bartender made a proper Old Fashioned, which is rare in Andheri.",
    rating: 5,
  },
  {
    name: "Sanya Mehta",
    initials: "SM",
    text: "Booked the private room for my mum's 60th. They handled the cake, the playlist and a Jain menu without a single follow-up call.",
    rating: 5,
  },
  {
    name: "Faisal Shaikh",
    initials: "FS",
    text: "Triple rice and chilli chicken at 3 AM after a shoot wrap. Kitchen was still sharp. Portions are generous for the price.",
    rating: 4,
  },
  {
    name: "Neha Deshpande",
    initials: "ND",
    text: "Vegetarian options actually get attention here — the paneer tikka and Kadai paneer were both excellent. Lovely lighting too.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLElement>();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="reviews" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Reviews"
          title="366+ guests, 4.5 stars"
          subtitle="Verified reviews from Google, unedited."
        />

        <div
          className="reveal relative mt-12 overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-luxe sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute right-8 top-8 size-16 text-primary/10" aria-hidden />
          <div
            className="flex transition-transform duration-700 ease-[var(--ease-apple)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {REVIEWS.map((r) => (
              <figure key={r.name} className="w-full shrink-0 pr-6">
                <div className="flex items-center gap-1" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-5 font-[family-name:var(--font-display)] text-xl leading-relaxed sm:text-2xl">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full border border-primary/30 bg-surface font-[family-name:var(--font-button)] text-sm text-primary">
                    {r.initials}
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold">
                      {r.name}
                      <BadgeCheck className="size-4 text-primary" aria-label="Verified guest" />
                    </span>
                    <span className="text-xs text-muted-foreground">Google review</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-primary" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <a
              href={RESTAURANT.social.google}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-widest text-primary hover:underline"
            >
              Read all on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
