import { MapPin, Phone, Globe, Clock, Instagram, Facebook, MessageCircle, Star } from "lucide-react";

import { RESTAURANT } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Find Us"
          title="MHADA Corner, Andheri West"
          subtitle="Two minutes from the MHADA signal, opposite Platinum Heights."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal flex flex-col gap-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <MapPin className="size-5 text-primary" />
              <h3 className="mt-3 text-lg">Address</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {RESTAURANT.address.line1}
                <br />
                {RESTAURANT.address.line2}
                <br />
                {RESTAURANT.address.city}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={RESTAURANT.phoneHref}
                className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <Phone className="size-5 text-primary" />
                <h3 className="mt-3 text-lg">Call</h3>
                <p className="mt-2 text-sm text-muted-foreground">{RESTAURANT.phone}</p>
              </a>
              <a
                href={RESTAURANT.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <Globe className="size-5 text-primary" />
                <h3 className="mt-3 text-lg">Website</h3>
                <p className="mt-2 break-all text-sm text-muted-foreground">versovavibes.com</p>
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <Clock className="size-5 text-primary" />
              <h3 className="mt-3 text-lg">Opening hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">{RESTAURANT.hours}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary">
                Kitchen open till close
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outlineGold" size="sm" asChild>
                <a href={RESTAURANT.social.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="size-4" /> Instagram
                </a>
              </Button>
              <Button variant="outlineGold" size="sm" asChild>
                <a href={RESTAURANT.social.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="size-4" /> Facebook
                </a>
              </Button>
              <Button variant="outlineGold" size="sm" asChild>
                <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
              <Button variant="outlineGold" size="sm" asChild>
                <a href={RESTAURANT.social.google} target="_blank" rel="noreferrer">
                  <Star className="size-4" /> Google Reviews
                </a>
              </Button>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-[2rem] border border-border shadow-luxe">
            <iframe
              title="Map showing Versova Vibes Cafe & Bar in Andheri West, Mumbai"
              src="https://www.google.com/maps?q=SV%20Patel%20Nagar%2C%20Andheri%20West%2C%20Mumbai%20400053&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[26rem] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
