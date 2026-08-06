import { useState } from "react";
import { X } from "lucide-react";

import hero from "@/assets/hero-exterior.jpg";
import interior from "@/assets/interior.jpg";
import privateDining from "@/assets/private-dining.jpg";
import event from "@/assets/event-live-music.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import tandoori from "@/assets/dish-tandoori.jpg";
import paneer from "@/assets/dish-paneer-tikka.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import cocktails from "@/assets/drinks-cocktails.jpg";
import lava from "@/assets/dessert-lava-cake.jpg";
import chef from "@/assets/chef-1.jpg";

import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const SHOTS = [
  { src: hero, alt: "Restaurant exterior at night", tall: true },
  { src: butterChicken, alt: "Butter chicken in a cast iron bowl" },
  { src: interior, alt: "Dining area with velvet booths", tall: true },
  { src: cocktails, alt: "Cocktails on the bar counter" },
  { src: tandoori, alt: "Tandoori chicken with smoke" },
  { src: event, alt: "Live music night on stage", tall: true },
  { src: paneer, alt: "Paneer tikka skewers" },
  { src: privateDining, alt: "Private dining room lit by candles" },
  { src: pizza, alt: "Wood fired margherita pizza" },
  { src: chef, alt: "Head chef in the kitchen", tall: true },
  { src: lava, alt: "Chocolate lava cake with ice cream" },
];

export function Gallery() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : SHOTS[open];

  return (
    <section id="gallery" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Nights that photograph well"
          subtitle="The room, the plates, the pours. Tap any frame to open it full size."
        />

        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {SHOTS.map((shot, i) => (
            <button
              key={shot.alt}
              onClick={() => setOpen(i)}
              className="reveal group relative block w-full overflow-hidden rounded-2xl border border-border"
              aria-label={`Open image: ${shot.alt}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-apple)] group-hover:scale-110 ${
                  shot.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              />
              <span className="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 translate-y-3 text-left text-xs text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {shot.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt ?? "Gallery image"}</DialogTitle>
          {active ? (
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] w-full rounded-2xl object-contain"
            />
          ) : null}
          <button
            onClick={() => setOpen(null)}
            aria-label="Close image"
            className="glass absolute -top-12 right-0 grid size-10 place-items-center rounded-full"
          >
            <X className="size-4" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
