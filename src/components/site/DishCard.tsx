import { Flame, Heart, Plus, Eye, ChefHat } from "lucide-react";
import { useState } from "react";

import type { MenuItem } from "@/data/restaurant";
import { useStore } from "./store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span
      className={cn(
        "grid size-4 place-items-center rounded-[3px] border",
        veg ? "border-veg" : "border-nonveg",
      )}
      title={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span className={cn("size-2 rounded-full", veg ? "bg-veg" : "bg-nonveg")} />
      <span className="sr-only">{veg ? "Vegetarian" : "Non-vegetarian"}</span>
    </span>
  );
}

function Spice({ level }: { level: number }) {
  if (!level) return null;
  return (
    <span className="inline-flex items-center gap-0.5" title={`Spice level ${level} of 3`}>
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="size-3 text-secondary" />
      ))}
    </span>
  );
}

export function DishCard({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  const { add, toggleWish, wishlist } = useStore();
  const [quick, setQuick] = useState(false);
  const wished = wishlist.includes(item.name);

  return (
    <>
      <article className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-luxe transition-all duration-500 hover:-translate-y-2 hover:border-primary/40">
        {item.image ? (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              width={900}
              height={675}
              className="size-full object-cover transition-transform duration-[900ms] ease-[var(--ease-apple)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            {item.chef ? (
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 font-[family-name:var(--font-button)] text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                <ChefHat className="size-3" /> Chef's Pick
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => toggleWish(item.name)}
              aria-pressed={wished}
              aria-label={wished ? `Remove ${item.name} from wishlist` : `Save ${item.name}`}
              className="glass absolute right-4 top-4 grid size-9 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
            >
              <Heart className={cn("size-4", wished ? "fill-secondary text-secondary" : "text-foreground")} />
            </button>
          </div>
        ) : null}

        <div className={cn("flex flex-1 flex-col gap-3 p-5", compact && "p-4")}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <VegBadge veg={item.veg} />
              <h3 className="font-[family-name:var(--font-display)] text-lg leading-tight">
                {item.name}
              </h3>
            </div>
            <span className="shrink-0 font-[family-name:var(--font-button)] text-base font-bold text-primary">
              ₹{item.price}
            </span>
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">{item.desc}</p>

          <div className="mt-auto flex items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-2">
              <Spice level={item.spicy} />
              {!item.image && item.chef ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  <ChefHat className="size-3" /> Chef's Pick
                </span>
              ) : null}
            </div>
            <div className="flex items-center gap-1.5">
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Quick view ${item.name}`}
                onClick={() => setQuick(true)}
              >
                <Eye className="size-4" />
              </Button>
              {!item.image ? (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-pressed={wished}
                  aria-label={wished ? `Remove ${item.name} from wishlist` : `Save ${item.name}`}
                  onClick={() => toggleWish(item.name)}
                >
                  <Heart
                    className={cn("size-4", wished ? "fill-secondary text-secondary" : undefined)}
                  />
                </Button>
              ) : null}
              <Button
                variant="luxe"
                size="sm"
                onClick={() => {
                  add(item.name, item.price);
                  toast.success(`${item.name} added to your order`);
                }}
              >
                <Plus className="size-3.5" /> Add
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Dialog open={quick} onOpenChange={setQuick}>
        <DialogContent className="glass-strong max-w-lg rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-display)] text-2xl">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              width={900}
              height={600}
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          ) : null}
          <p className="text-sm text-muted-foreground">{item.desc}</p>
          <div className="flex items-center gap-3 text-sm">
            <VegBadge veg={item.veg} />
            <span className="text-muted-foreground">{item.veg ? "Vegetarian" : "Non-veg"}</span>
            <Spice level={item.spicy} />
            <span className="ml-auto font-[family-name:var(--font-button)] text-lg font-bold text-primary">
              ₹{item.price}
            </span>
          </div>
          <Button
            variant="luxe"
            onClick={() => {
              add(item.name, item.price);
              toast.success(`${item.name} added to your order`);
              setQuick(false);
            }}
          >
            Add to order
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
