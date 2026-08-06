import butterChicken from "@/assets/dish-butter-chicken.jpg";
import cocktails from "@/assets/drinks-cocktails.jpg";
import interior from "@/assets/interior.jpg";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";

const POSTS = [
  {
    img: butterChicken,
    tag: "Kitchen notes",
    date: "12 July 2026",
    title: "Why our butter chicken takes two days",
    excerpt:
      "Overnight marination, a charcoal tandoor and a gravy that reduces for five hours. Here's the whole process.",
  },
  {
    img: cocktails,
    tag: "Behind the bar",
    date: "28 June 2026",
    title: "Five cocktails every Mumbai bar gets wrong",
    excerpt:
      "Our head mixologist on dilution, ice quality and why a Whiskey Sour should never taste like syrup.",
  },
  {
    img: interior,
    tag: "Neighbourhood",
    date: "9 June 2026",
    title: "A late-night guide to Versova",
    excerpt:
      "Where to go after the last show wraps — the beach, the bakery and the table that stays open till 6 AM.",
  },
];

export function Blog() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="blog" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Journal"
          title="From our kitchen and bar"
          subtitle="Recipes, neighbourhood notes and what's coming next."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1000ms] ease-[var(--ease-apple)] group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-button)] text-[11px] uppercase tracking-widest text-primary">
                  {p.tag} · {p.date}
                </p>
                <h3 className="mt-3 text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
