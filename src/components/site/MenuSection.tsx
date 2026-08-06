import { useMemo, useState } from "react";
import { Leaf, Drumstick, LayoutGrid } from "lucide-react";

import { MENU } from "@/data/menu";
import { SectionHeading } from "./SectionHeading";
import { DishCard } from "./DishCard";
import { useReveal } from "./use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Diet = "all" | "veg" | "nonveg";

export function MenuSection() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(MENU[0]?.id ?? "");
  const [diet, setDiet] = useState<Diet>("all");
  const [query, setQuery] = useState("");

  const category = MENU.find((c) => c.id === active) ?? MENU[0];

  const items = useMemo(() => {
    const list = category?.items ?? [];
    return list.filter((i) => {
      const dietOk = diet === "all" || (diet === "veg" ? i.veg : !i.veg);
      const q = query.trim().toLowerCase();
      const queryOk = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return dietOk && queryOk;
    });
  }, [category, diet, query]);

  return (
    <section id="menu" ref={ref} className="section-pad relative px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Menu"
          title="Ten kitchens, one table"
          subtitle="North Indian to Neapolitan, tandoor to cocktail shaker. Filter, search and build your order."
        />

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
              className={cn(
                "rounded-full border px-4 py-2 font-[family-name:var(--font-button)] text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                active === cat.id
                  ? "border-transparent bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground",
              )}
            >
              <span aria-hidden>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        <div className="reveal mx-auto mt-6 flex max-w-2xl flex-col items-center gap-3 sm:flex-row">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search this section…"
            aria-label="Search the menu section"
            className="h-11 rounded-full bg-card"
          />
          <div className="flex shrink-0 items-center gap-1.5">
            <Button
              variant={diet === "all" ? "luxe" : "outlineGold"}
              size="sm"
              onClick={() => setDiet("all")}
            >
              <LayoutGrid className="size-3.5" /> All
            </Button>
            <Button
              variant={diet === "veg" ? "luxe" : "outlineGold"}
              size="sm"
              onClick={() => setDiet("veg")}
            >
              <Leaf className="size-3.5" /> Veg
            </Button>
            <Button
              variant={diet === "nonveg" ? "luxe" : "outlineGold"}
              size="sm"
              onClick={() => setDiet("nonveg")}
            >
              <Drumstick className="size-3.5" /> Non-veg
            </Button>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <DishCard key={`${active}-${item.name}`} item={item} compact />
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Nothing matches that filter in this section.
          </p>
        ) : null}
      </div>
    </section>
  );
}
