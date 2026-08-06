import { useMemo, useState } from "react";
import { Phone, Play, Volume2, VolumeX } from "lucide-react";

import heroImg from "@/assets/hero-exterior.jpg";
import { RESTAURANT } from "@/data/restaurant";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [muted, setMuted] = useState(true);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        delay: `${(i % 11) * 1.4}s`,
        duration: `${14 + (i % 7) * 3}s`,
        size: `${2 + (i % 3)}px`,
      })),
    [],
  );

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Warm lantern-lit exterior of Versova Vibes Cafe & Bar at night"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-slow-zoom absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden
      />
      {/* smoke */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="animate-smoke absolute -left-1/4 bottom-0 h-2/3 w-[150%] rounded-full bg-primary/10 blur-[100px]" />
        <div
          className="animate-smoke absolute -right-1/4 top-1/4 h-1/2 w-[120%] rounded-full bg-secondary/10 blur-[120px]"
          style={{ animationDelay: "-7s" }}
        />
      </div>
      {/* particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-accent/70"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `float-up ${p.duration} linear ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-24 pt-28 text-center">
        <p
          className="reveal is-visible font-[family-name:var(--font-button)] text-xs uppercase tracking-[0.5em] text-primary"
          style={{ transitionDelay: "80ms" }}
        >
          Andheri West · Mumbai
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02]">
          <span className="block">Versova Vibes</span>
          <span className="text-gradient-gold block">Cafe &amp; Bar</span>
        </h1>
        <p className="mt-3 font-[family-name:var(--font-display)] text-lg text-muted-foreground">
          {RESTAURANT.hindiName}
        </p>
        <p className="mt-6 max-w-xl text-balance text-lg text-foreground/85 sm:text-xl">
          {RESTAURANT.heroLine} — {RESTAURANT.tagline.toLowerCase()}.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button variant="luxe" size="lg" asChild>
            <a href="#reservation">Reserve Table</a>
          </Button>
          <Button variant="outlineGold" size="lg" asChild>
            <a href="#menu">View Menu</a>
          </Button>
          <Button variant="outlineGold" size="lg" asChild>
            <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
              Order Online
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href={RESTAURANT.phoneHref}>
              <Phone className="size-4" /> Call Now
            </a>
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-pressed={!muted}
            aria-label={muted ? "Unmute ambient music" : "Mute ambient music"}
            className="glass grid size-11 place-items-center rounded-full text-primary transition-transform duration-300 hover:scale-110"
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
          <span className="hidden sm:inline">
            {muted ? "Ambient sound off" : "Ambient sound on"}
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2">
            <Play className="size-3.5 text-primary" /> Open till 6 AM
          </span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/50 p-1.5">
          <span
            className="size-1.5 rounded-full bg-primary"
            style={{ animation: "scroll-dot 1.8s var(--ease-apple) infinite" }}
          />
        </span>
      </a>
    </section>
  );
}
