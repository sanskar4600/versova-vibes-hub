import chef1 from "@/assets/chef-1.jpg";
import chef2 from "@/assets/chef-2.jpg";
import chef3 from "@/assets/chef-3.jpg";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";

const CHEFS = [
  {
    img: chef1,
    name: "Chef Rohan Salvi",
    role: "Executive Chef",
    exp: "16 years",
    specialties: "Tandoor · Mughlai · Kolhapuri",
  },
  {
    img: chef2,
    name: "Chef Ananya Rao",
    role: "Sous Chef, Continental",
    exp: "11 years",
    specialties: "Italian · Grills · Pastry",
  },
  {
    img: chef3,
    name: "Imran Qureshi",
    role: "Head Mixologist",
    exp: "9 years",
    specialties: "Classic cocktails · Infusions",
  },
];

export function Chefs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Team"
          title="Meet our chefs"
          subtitle="Three kitchens, three obsessions, one pass."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHEFS.map((c) => (
            <article
              key={c.name}
              className="reveal group overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.name}, ${c.role}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="size-full object-cover transition-transform duration-[1100ms] ease-[var(--ease-apple)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl">{c.name}</h3>
                <p className="mt-1 font-[family-name:var(--font-button)] text-xs uppercase tracking-widest text-primary">
                  {c.role} · {c.exp}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{c.specialties}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
