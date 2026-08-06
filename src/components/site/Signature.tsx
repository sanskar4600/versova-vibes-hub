import { SIGNATURE } from "@/data/menu";
import { SectionHeading } from "./SectionHeading";
import { DishCard } from "./DishCard";
import { useReveal } from "./use-reveal";

export function Signature() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative px-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-gold)] opacity-30" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature"
          title="The plates people come back for"
          subtitle="Six dishes that built our reputation — cooked to order, finished at the pass."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE.map((item) => (
            <DishCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
