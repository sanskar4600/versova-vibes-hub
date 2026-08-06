import { createFileRoute } from "@tanstack/react-router";

import { RESTAURANT } from "@/data/restaurant";
import { StoreProvider } from "@/components/site/store";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Signature } from "@/components/site/Signature";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Offers } from "@/components/site/Offers";
import { Events } from "@/components/site/Events";
import { Reservation } from "@/components/site/Reservation";
import { Testimonials } from "@/components/site/Testimonials";
import { Chefs } from "@/components/site/Chefs";
import { Faq, FAQS } from "@/components/site/Faq";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Loader, ScrollProgress, FloatingActions, CookieConsent } from "@/components/site/Chrome";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "Versova Vibes Cafe & Bar — Andheri West, Mumbai";
const DESCRIPTION =
  "Late-night cafe, bar and kitchen at MHADA Corner, Andheri West. North Indian, Chinese, Italian and grills with 100+ cocktails, open till 6 AM. Rated 4.5 by 366+ guests.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Versova Vibes, cafe Andheri West, bar Mumbai, late night restaurant Versova, North Indian restaurant Andheri, cocktails Mumbai",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: RESTAURANT.name,
          alternateName: RESTAURANT.hindiName,
          slogan: RESTAURANT.tagline,
          url: RESTAURANT.website,
          telephone: RESTAURANT.phone,
          priceRange: "₹₹",
          servesCuisine: [
            "North Indian",
            "Chinese",
            "Italian",
            "Continental",
            "Mughlai",
            "BBQ",
            "Fast Food",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: `${RESTAURANT.address.line1}, ${RESTAURANT.address.line2}`,
            addressLocality: "Andheri West, Mumbai",
            postalCode: "400053",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "12:00",
              closes: "06:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: RESTAURANT.rating,
            reviewCount: RESTAURANT.reviews,
            bestRating: 5,
          },
          acceptsReservations: "True",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <StoreProvider>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Signature />
        <MenuSection />
        <Gallery />
        <Offers />
        <Events />
        <Reservation />
        <Testimonials />
        <Chefs />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <CookieConsent />
      <Toaster position="bottom-center" />
    </StoreProvider>
  );
}
