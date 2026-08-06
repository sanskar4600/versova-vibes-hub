import { useState, type FormEvent } from "react";
import { Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";

import { RESTAURANT } from "@/data/restaurant";
import { MENU } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const QUICK = [
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Offers", "#offers"],
  ["Events", "#events"],
  ["Reservation", "#reservation"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
] as const;

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
    toast.success("You're on the list — offers land every Thursday.");
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40 px-5 pt-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-gold)] opacity-50"
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl gap-12 pb-12 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl">Versova Vibes</p>
          <p className="font-[family-name:var(--font-button)] text-[11px] uppercase tracking-[0.3em] text-primary">
            Cafe &amp; Bar
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{RESTAURANT.hindiName}</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{RESTAURANT.tagline}</p>
          <div className="mt-5 flex gap-2">
            <Button variant="ghost" size="icon" aria-label="Instagram" asChild>
              <a href={RESTAURANT.social.instagram} target="_blank" rel="noreferrer">
                <Instagram className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Facebook" asChild>
              <a href={RESTAURANT.social.facebook} target="_blank" rel="noreferrer">
                <Facebook className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="WhatsApp" asChild>
              <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-[family-name:var(--font-button)] text-xs uppercase tracking-[0.3em] text-primary">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5">
            {QUICK.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-[family-name:var(--font-button)] text-xs uppercase tracking-[0.3em] text-primary">
            Menu
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {MENU.map((cat) => (
              <li key={cat.id}>
                <a
                  href="#menu"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-button)] text-xs uppercase tracking-[0.3em] text-primary">
            Opening Hours
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">{RESTAURANT.hours}</p>
          <address className="mt-3 not-italic text-sm text-muted-foreground">
            {RESTAURANT.address.line1}
            <br />
            {RESTAURANT.address.city}
            <br />
            <a href={RESTAURANT.phoneHref} className="text-primary hover:underline">
              {RESTAURANT.phone}
            </a>
          </address>

          <form className="mt-6" onSubmit={subscribe}>
            <label
              htmlFor="newsletter"
              className="font-[family-name:var(--font-button)] text-xs uppercase tracking-[0.3em] text-primary"
            >
              Newsletter
            </label>
            <div className="mt-3 flex gap-2">
              <Input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="h-10 rounded-full bg-card"
              />
              <Button type="submit" variant="luxe" size="icon" aria-label="Subscribe">
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Versova Vibes Cafe &amp; Bar. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#faq" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="#faq" className="transition-colors hover:text-primary">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
