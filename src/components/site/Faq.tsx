import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQS: { q: string; a: string }[] = [
  { q: "Where exactly are you located?", a: "MHADA Corner, opposite Platinum Heights, near MHADA Signal, SV Patel Nagar, Andheri West, Mumbai 400053." },
  { q: "What are your opening hours?", a: "We serve from 12:00 PM until 6:00 AM, every day of the week." },
  { q: "Do you serve alcohol?", a: "Yes. We have a full bar with 100+ cocktails, spirits, beer and wine, served to guests aged 25 and above as per Maharashtra law." },
  { q: "Do I need a reservation?", a: "Walk-ins are welcome, but weekends and match nights fill quickly. Booking a table through the form on this page takes under a minute." },
  { q: "Is there pure vegetarian food?", a: "Absolutely. Over half our menu is vegetarian, with a separate preparation section for veg dishes." },
  { q: "Do you have Jain food options?", a: "Yes — most vegetarian dishes can be prepared Jain, without onion and garlic. Mention it in special requests." },
  { q: "Is the restaurant family friendly?", a: "Yes. The dining area is family seating, and children are welcome until 11 PM." },
  { q: "Do you offer home delivery?", a: "Yes, through Swiggy and Zomato, and directly on WhatsApp for guests within 5 km." },
  { q: "Can I order online from this website?", a: "Yes. Add items to your cart and check out on WhatsApp — our team confirms the order and the delivery time." },
  { q: "Do you have parking?", a: "Street parking is available along MHADA Corner, and valet assistance is offered after 7 PM." },
  { q: "Can I host a birthday party?", a: "Yes. We handle decor, cake, playlist and a custom menu. Birthday guests get 30% off with a valid ID." },
  { q: "Do you have a private dining room?", a: "Yes, a 20-seat private room with its own bar service, bookable in advance." },
  { q: "What are your happy hours?", a: "1+1 on cocktails, beer and mocktails, every day from 4 PM to 8 PM." },
  { q: "Is there live music?", a: "Live acoustic sets every Wednesday at 9 PM and DJ nights on Friday and Saturday from 10 PM." },
  { q: "Do you screen IPL and football matches?", a: "Yes, on three big screens with match-day food and drink buckets." },
  { q: "Which payment methods do you accept?", a: "Cash, all major cards, UPI and popular wallets. Online payment for orders is supported." },
  { q: "Is outside cake allowed?", a: "Yes, a nominal cakeage charge applies. Or pick a cake from our dessert menu." },
  { q: "Do you cater for corporate events?", a: "Yes — packages for 20+ guests including projector, sound system and a fixed menu." },
  { q: "Are pets allowed?", a: "Well-behaved pets are welcome at our outdoor seating." },
  { q: "How do I share feedback or a complaint?", a: "Call us on +91 98339 22922, message us on WhatsApp, or leave a Google review — the owners read every one." },
];

export function Faq() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="section-pad px-5">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything guests ask us"
          subtitle="Twenty answers, so you can just show up."
        />
        <Accordion type="single" collapsible className="reveal mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-[family-name:var(--font-display)] text-base hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
