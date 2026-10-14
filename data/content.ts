export const brand = {
  name: "Chinola",
  handle: "@chinola",
  established: "Established 2018",
};

export const nav = {
  shop: [
    { label: "New arrivals", href: "#ready" },
    { label: "Clothing", href: "#categories" },
    { label: "Shoes", href: "#categories" },
    { label: "Bags", href: "#categories" },
    { label: "Accessories", href: "#categories" },
    { label: "Lookbook", href: "#looks" },
  ],
  help: [
    { label: "Shipping", href: "#help" },
    { label: "Returns", href: "#help" },
    { label: "Size guide", href: "#help" },
    { label: "Contact", href: "#newsletter" },
  ],
  company: [
    { label: "About", href: "#looks" },
    { label: "Stores", href: "#looks" },
    { label: "Journal", href: "#voices" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
};

export const hero = {
  title: ["Ivory", "Claire Arden"],
  follow: "Follow Chinola",
  left: {
    src: "/images/women/hero-left.jpg",
    alt: "Woman in a white collar and silver necklace, close portrait",
  },
  right: {
    src: "/images/women/hero-right.jpg",
    alt: "Woman in a saffron hoodie and matching trousers",
  },
};

export const ready = {
  id: "ready",
  title: "Ready to wear",
  cta: "Shop now",
  items: [
    {
      name: "Tailored Jumpsuit In Teal",
      price: 168,
      src: "/images/women/ig-1.jpg",
      alt: "Woman in a teal halter jumpsuit, hands in pockets",
    },
    {
      name: "Wool Coat In Sky",
      price: 248,
      src: "/images/women/rtw-2.jpg",
      alt: "Woman in a sky wool coat, scarf, and white boots",
    },
    {
      name: "Checked Coat In Navy",
      price: 220,
      src: "/images/women/rtw-3.jpg",
      alt: "Woman in a navy windowpane coat carrying a burgundy bag",
    },
  ],
};

export const categories = {
  id: "categories",
  title: "Categories",
  items: ["Clothing", "Shoes", "Bags", "Accessories"],
  feature: {
    src: "/images/women/cat-shoe.jpg",
    alt: "Navy suede pumps held against a bright background",
  },
  detail: {
    src: "/images/women/ig-2.jpg",
    alt: "Blush tapered trousers and nude heels on a white background",
  },
};

export const looks = {
  id: "looks",
  title: "Looks gallery",
  cta: "Shop now",
  copy: "A short edit for days that run long. Tailoring, knits, and dresses cut to move from the office to dinner without a change of clothes.",
  main: {
    src: "/images/women/ig-6.jpg",
    alt: "Woman in a camel coat over an olive knit dress",
  },
  side: {
    src: "/images/women/look-side.jpg",
    alt: "Woman in a black blouse, studio portrait",
  },
  row: [
    {
      src: "/images/women/look-a.jpg",
      alt: "Woman in a camel chevron knit and white shorts",
    },
    {
      src: "/images/women/look-b.jpg",
      alt: "Woman in a white top and black pinstripe trousers",
    },
    {
      src: "/images/women/ig-4.jpg",
      alt: "Woman in a white linen jumpsuit walking along a mural",
    },
  ],
};

export const campaign = {
  title: ["New styles", "for a", "modern", "look"],
  bag: {
    src: "/images/women/banner-bag.jpg",
    alt: "Pale pink shoulder bag with a chain strap",
  },
  look: {
    src: "/images/women/banner-look.jpg",
    alt: "Woman in a red evening dress outdoors",
  },
};

export const voices = {
  id: "voices",
  title: "Happy voices",
  quotes: [
    {
      quote:
        "The tailoring sits the way I want it to: clean at the shoulder, easy through the day. I wore the camel coat from the office straight to dinner.",
      name: "Elena V.",
      place: "Santo Domingo",
    },
    {
      quote:
        "It edits instead of overwhelming. The navy knit and the ivory shirt are the two pieces I reach for every week, and they still look considered.",
      name: "Camila R.",
      place: "Santiago",
    },
  ],
};

export const instagram = {
  handle: "@chinola",
  images: [
    {
      src: "/images/women/ig-3.jpg",
      alt: "Woman in a blush off-shoulder dress in a field",
    },
    {
      src: "/images/women/ig-5.jpg",
      alt: "Woman in a violet lace dress",
    },
    {
      src: "/images/women/look-a.jpg",
      alt: "Woman in a camel knit beside the water",
    },
    {
      src: "/images/women/hero-right.jpg",
      alt: "Woman in a saffron set and white boots",
    },
    {
      src: "/images/women/rtw-2.jpg",
      alt: "Woman in a sky coat in the city",
    },
    {
      src: "/images/women/ig-1.jpg",
      alt: "Woman in a teal jumpsuit",
    },
  ],
};

export const newsletter = {
  id: "newsletter",
  title: "Subscribe our newsletters",
  copy: "New arrivals, private sales, and the few pieces we keep wearing. One note, when there is something worth sending.",
  placeholder: "Email Address",
  success: "You are on the list.",
};

export const footer = {
  id: "help",
  blurb: "Women’s ready-to-wear. Considered pieces for the week and the evening.",
  copyright: "© 2026 Chinola. All rights reserved.",
};

export function formatPrice(value: number) {
  return `$${value}`;
}
