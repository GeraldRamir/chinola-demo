export const chinolaYellow = "#FBC056";

export const offerCategories = ["Vestidos", "Abrigos", "Enterizos", "Accesorios"] as const;
export const offerDiscounts = [20, 30, 40] as const;

export type OfferCategory = (typeof offerCategories)[number];
export type OfferDiscount = (typeof offerDiscounts)[number];

export type Offer = {
  id: string;
  name: string;
  category: OfferCategory;
  price: number;
  discount: OfferDiscount;
  memberOnly: boolean;
  src: string;
  alt: string;
};

export const offers: Offer[] = [
  {
    id: "lace-dress",
    name: "Vestido de encaje",
    category: "Vestidos",
    price: 196,
    discount: 20,
    memberOnly: false,
    src: "/images/women/ig-5.jpg",
    alt: "Vestido de encaje violeta",
  },
  {
    id: "column-dress",
    name: "Vestido columna",
    category: "Vestidos",
    price: 220,
    discount: 40,
    memberOnly: true,
    src: "/images/women/look-a.jpg",
    alt: "Vestido corto de punto",
  },
  {
    id: "sky-coat",
    name: "Abrigo cielo",
    category: "Abrigos",
    price: 248,
    discount: 30,
    memberOnly: false,
    src: "/images/women/rtw-2.jpg",
    alt: "Abrigo de lana color cielo",
  },
  {
    id: "navy-coat",
    name: "Abrigo de cuadros",
    category: "Abrigos",
    price: 220,
    discount: 20,
    memberOnly: true,
    src: "/images/women/rtw-3.jpg",
    alt: "Abrigo navy de cuadros",
  },
  {
    id: "camel-coat",
    name: "Abrigo camel",
    category: "Abrigos",
    price: 248,
    discount: 40,
    memberOnly: false,
    src: "/images/women/ig-6.jpg",
    alt: "Abrigo camel",
  },
  {
    id: "teal-jumpsuit",
    name: "Enterizo teal",
    category: "Enterizos",
    price: 168,
    discount: 30,
    memberOnly: false,
    src: "/images/women/ig-1.jpg",
    alt: "Enterizo teal strapless",
  },
  {
    id: "linen-jumpsuit",
    name: "Enterizo de lino",
    category: "Enterizos",
    price: 174,
    discount: 20,
    memberOnly: false,
    src: "/images/women/ig-4.jpg",
    alt: "Enterizo blanco de lino",
  },
  {
    id: "oval-sunnies",
    name: "Lentes oval",
    category: "Accesorios",
    price: 96,
    discount: 40,
    memberOnly: true,
    src: "/images/women/cut-sunglasses.png",
    alt: "Lentes ovalados rojos",
  },
  {
    id: "pink-bag",
    name: "Bolso hibisco",
    category: "Accesorios",
    price: 148,
    discount: 30,
    memberOnly: true,
    src: "/images/women/cut-bag.png",
    alt: "Bolso rosa con cadena",
  },
];

export function salePrice(price: number, discount: number) {
  return Math.round(price * (1 - discount / 100));
}

export const membership = {
  stage: "Etapa 1",
  price: 19,
  benefits: [
    "Ofertas marcadas como exclusivas de miembros",
    "Aviso antes de cada drop",
    "Envío en la cápsula Quarpa",
    "10% extra sobre el precio ya rebajado",
  ],
};
