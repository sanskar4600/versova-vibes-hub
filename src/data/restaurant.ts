export const RESTAURANT = {
  name: "Versova Vibes Cafe & Bar",
  hindiName: "वर्सोवा वाइब्स कैफे & बार",
  tagline: "Where Every Bite Creates a Memory",
  heroLine: "Where Great Food Meets Great Vibes",
  phone: "+91 98339 22922",
  phoneHref: "tel:+919833922922",
  whatsapp: "https://wa.me/919833922922",
  website: "https://versovavibes.com",
  rating: 4.5,
  reviews: 366,
  address: {
    line1: "MHADA Corner, Opposite Platinum Heights",
    line2: "Near MHADA Signal, SV Patel Nagar",
    city: "Andheri West, Mumbai – 400053",
  },
  hours: "12:00 PM – 6:00 AM, all days",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    google: "https://google.com/maps",
  },
} as const;

export type MenuItem = {
  name: string;
  price: number;
  desc: string;
  veg: boolean;
  spicy: 0 | 1 | 2 | 3;
  chef?: boolean | undefined;
  image?: string | undefined;
};

export type MenuCategory = {
  id: string;
  icon: string;
  label: string;
  items: MenuItem[];
};
