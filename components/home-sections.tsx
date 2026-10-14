"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const arrivals = [
  {
    name: "Tailored Jumpsuit",
    price: "$168",
    sizes: ["S", "M", "L"],
    src: "/images/women/studio-jumpsuit.jpg",
    alt: "Woman in a teal halter jumpsuit",
    note: "new drop",
  },
  {
    name: "Wool Coat In Sky",
    price: "$248",
    sizes: ["S", "M"],
    src: "/images/women/studio-coat-sky.jpg",
    alt: "Woman in a sky wool coat",
    note: "berlin",
  },
  {
    name: "Checked Coat In Navy",
    price: "$220",
    sizes: ["XS", "S", "M"],
    src: "/images/women/studio-coat-navy.jpg",
    alt: "Woman in a navy windowpane coat",
    note: "berlin",
  },
  {
    name: "Lace Column Dress",
    price: "$196",
    sizes: ["S", "M"],
    src: "/images/women/studio-lace.jpg",
    alt: "Woman in a violet lace dress",
    note: "life force",
  },
  {
    name: "Linen Jumpsuit",
    price: "$174",
    sizes: ["S", "M", "L"],
    src: "/images/women/studio-linen.jpg",
    alt: "Woman in a white linen jumpsuit",
    note: "new drop",
  },
  {
    name: "Camel Coat",
    price: "$248",
    sizes: ["S", "M"],
    src: "/images/women/studio-coat-camel.jpg",
    alt: "Woman in a camel coat",
    note: "berlin",
  },
];

const coconut = "#f3eee4";

function Hibiscus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <g fill="#E65A7F">
        <ellipse cx="40" cy="18" rx="10" ry="16" />
        <ellipse cx="40" cy="62" rx="10" ry="16" />
        <ellipse cx="18" cy="40" rx="16" ry="10" />
        <ellipse cx="62" cy="40" rx="16" ry="10" />
        <ellipse cx="24" cy="24" rx="9" ry="15" transform="rotate(-45 24 24)" />
        <ellipse cx="56" cy="56" rx="9" ry="15" transform="rotate(-45 56 56)" />
        <ellipse cx="56" cy="24" rx="9" ry="15" transform="rotate(45 56 24)" />
        <ellipse cx="24" cy="56" rx="9" ry="15" transform="rotate(45 24 56)" />
      </g>
      <circle cx="40" cy="40" r="7" fill="#FBC056" />
    </svg>
  );
}

function PalmLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 120" className={className} aria-hidden="true">
      <path d="M46 112c2-28 2-58 0-92" fill="none" stroke="#648127" strokeWidth="3" />
      <path d="M46 28c-16-8-28-6-38 4 14 2 26 8 38 16 12-8 24-14 38-16-10-10-22-12-38-4Z" fill="#648127" />
      <path d="M46 48c-18-6-32-2-42 8 16 1 28 7 42 14 14-7 26-13 42-14-10-10-24-14-42-8Z" fill="#648127" opacity="0.85" />
      <path d="M46 68c-16-4-28 0-36 8 14 0 24 6 36 12 12-6 22-12 36-12-8-8-20-12-36-8Z" fill="#648127" opacity="0.7" />
    </svg>
  );
}

const categories = [
  ["NEW DROP", "6"],
  ["DRESSES", "8"],
  ["CORSETS", "3"],
  ["COATS", "4"],
  ["TOPS", "5"],
  ["PANTS", "4"],
  ["SKIRTS", "2"],
  ["ACCESSORIES", "3"],
];

export function NewArrivals() {
  const rail = useRef<HTMLUListElement>(null);
  const drag = useRef({ down: false, x: 0, scroll: 0, moved: false });
  const [reduce, setReduce] = useState(false);
  const [hot, setHot] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [drift, setDrift] = useState(0);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  function cardStep() {
    const card = rail.current?.querySelector("li");
    if (!card || !rail.current) return 296;
    const gap = parseFloat(getComputedStyle(rail.current).columnGap || "16") || 16;
    return card.getBoundingClientRect().width + gap;
  }

  function track(event: React.PointerEvent) {
    if (event.pointerType !== "mouse") return;
    setPos({ x: event.clientX, y: event.clientY });
    setHot(true);
  }

  return (
    <section
      id="arrivals"
      aria-label="New arrivals"
      className={`relative overflow-hidden bg-white px-5 py-16 sm:px-8 ${hot ? "cursor-none [&_a]:cursor-none" : ""}`}
      onPointerEnter={track}
      onPointerMove={track}
      onPointerLeave={() => {
        if (!drag.current.down) setHot(false);
      }}
    >
      <div className="relative mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#E65A7F] uppercase">Cápsula Quarpa</p>
          <h2 className="font-display mt-2 text-[clamp(2rem,4vw,3.4rem)] leading-none tracking-[-0.04em]">
            02. New Arrivals
          </h2>
        </div>
        <div className="flex items-end gap-3 sm:gap-5">
          <PalmLeaf className="tropic-drift-late h-16 w-12 sm:h-20 sm:w-14" />
          <Hibiscus className="tropic-drift h-20 w-20 sm:h-24 sm:w-24" />
          <p className="pb-2 text-[11px] font-semibold tracking-[0.18em]">[ DRAG CLICK ]</p>
        </div>
      </div>
      <ul
        ref={rail}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0 || !rail.current) return;
          drag.current = { down: true, x: event.clientX, scroll: rail.current.scrollLeft, moved: false };
          setDragging(true);
          rail.current.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current.down || !rail.current) return;
          const dx = event.clientX - drag.current.x;
          if (Math.abs(dx) > 8) drag.current.moved = true;
          rail.current.scrollLeft = drag.current.scroll - dx;
          setDrift(Math.max(-10, Math.min(10, dx * 0.04)));
          track(event);
        }}
        onPointerUp={() => {
          drag.current.down = false;
          setDragging(false);
          setDrift(0);
          const el = rail.current;
          if (!el) return;
          const step = cardStep();
          const index = Math.round(el.scrollLeft / step);
          el.scrollTo({ left: Math.max(0, index * step), behavior: reduce ? "auto" : "smooth" });
        }}
        onPointerCancel={() => {
          drag.current.down = false;
          setDragging(false);
          setDrift(0);
        }}
        onClickCapture={(event) => {
          if (!drag.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          drag.current.moved = false;
        }}
        className="flex gap-4 overflow-x-auto pb-4 select-none"
      >
        {arrivals.map((item, index) => (
          <li key={item.name} className="w-[220px] shrink-0 sm:w-[250px]">
            <a href="#categories" className="block" draggable={false}>
              <span className="relative block aspect-[3/5] overflow-hidden" style={{ background: coconut }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="250px"
                  draggable={false}
                  className="pointer-events-none object-contain object-bottom mix-blend-multiply"
                  style={{
                    transform: reduce ? undefined : `translateX(${drift}px)`,
                    transition: reduce || dragging ? "none" : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
                <span className="pointer-events-none absolute inset-y-6 left-1.5 z-[1] flex items-end">
                  <span className="font-display text-[clamp(1.45rem,2vw,1.9rem)] leading-[0.8] tracking-[-0.06em] uppercase [writing-mode:vertical-rl] rotate-180">
                    {item.note}
                  </span>
                </span>
                <span className="pointer-events-none absolute bottom-2.5 left-1/2 z-[1] -translate-x-1/2 text-[12px] tracking-[0.16em]">
                  [{index + 1}]
                </span>
              </span>
              <span className="mt-1 block text-[15px] font-semibold">{item.name}</span>
              <span className="mt-1 block text-[14px]">{item.price}</span>
              <span className="mt-2 flex gap-2 text-[11px] tracking-[0.12em] text-neutral-500">
                {item.sizes.map((size) => (
                  <span key={size}>({size})</span>
                ))}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {hot ? (
        <span
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-[80]"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px) translateX(-50%)` }}
        >
          <img
            src="/images/women/lipstick.png"
            alt=""
            width={195}
            height={844}
            draggable={false}
            className="h-20 w-auto"
            style={{ transform: "rotate(-40deg)", transformOrigin: "center top" }}
          />
        </span>
      ) : null}
    </section>
  );
}

export function CampaignStrip() {
  return (
    <section id="campaign" aria-label="Campaign" className="grid bg-black text-white md:grid-cols-2">
      <div className="flex flex-col justify-between gap-10 px-5 py-14 sm:px-8 md:py-20">
        <p className="text-[12px] tracking-[0.18em]">03. Campaign</p>
        <div>
          <h2 className="font-display max-w-xl text-[clamp(2.2rem,4.4vw,4.2rem)] leading-[0.9] tracking-[-0.04em]">
            Straight lines, cut for an ultra-feminine look.
          </h2>
          <a href="#categories" className="mt-8 inline-block text-[12px] font-semibold tracking-[0.18em]">
            [ SEE CAMPAIGN ]
          </a>
        </div>
        <p className="text-[12px] tracking-[0.16em] text-white/60">NEW ( DRESSES )</p>
      </div>
      <div className="relative min-h-[420px]">
        <Image
          src="/images/women/banner-look.jpg"
          alt="Woman in a red evening gown"
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export function CategoryIndex() {
  return (
    <section id="categories" aria-label="Categories" className="bg-white px-5 py-16 sm:px-8">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-none tracking-[-0.04em]">
          04. Categories
        </h2>
        <a href="#arrivals" className="text-[12px] font-semibold tracking-[0.16em]">
          [ SEE ALL ]
        </a>
      </div>
      <ul className="border-t border-black">
        {categories.map(([name, count]) => (
          <li key={name} className="border-b border-black">
            <a
              href="#arrivals"
              className="flex items-baseline justify-between py-4 text-[clamp(1.6rem,3vw,2.6rem)] leading-none font-black tracking-[-0.04em] uppercase"
            >
              <span>{name}</span>
              <span className="text-[14px] font-semibold tracking-[0.14em]">[ {count} ]</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const streetNotes = [
  ["01", "Lino claro"],
  ["02", "Punto sol"],
  ["03", "Corte fácil"],
] as const;

export function Stories() {
  return (
    <section id="nosotros" aria-label="Día de calle" className="bg-white">
      <div className="grid md:min-h-[820px] md:grid-cols-2">
        <div className="relative min-h-[100vw] md:min-h-full">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/women/3840510073-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Dos mujeres caminando con looks de día"
          />
        </div>
        <div className="flex flex-col justify-between gap-8 px-5 py-8 sm:px-8 md:px-10 md:py-10 lg:px-14 lg:py-12">
          <div className="flex items-center justify-between gap-4 text-[11px] font-semibold tracking-[0.2em] uppercase">
            <span>05 — Día de calle</span>
            <span>SS26</span>
          </div>

          <div>
            <svg viewBox="0 0 900 360" className="block w-full overflow-visible" role="img" aria-label="Calle tropical">
              <defs>
                <linearGradient id="chinola-stroke" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#648127" />
                  <stop offset="46%" stopColor="#FBC056" />
                  <stop offset="100%" stopColor="#FB5D2E" />
                </linearGradient>
                <linearGradient id="chinola-fill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FBC056" />
                  <stop offset="52%" stopColor="#FB5D2E" />
                  <stop offset="100%" stopColor="#E65A7F" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="148"
                fill="none"
                stroke="url(#chinola-stroke)"
                strokeWidth="3.4"
                strokeLinejoin="round"
                className="font-display"
                style={{ fontSize: 168, letterSpacing: "-0.045em" }}
              >
                CALLE
              </text>
              <text
                x="0"
                y="330"
                fill="url(#chinola-fill)"
                className="font-display"
                style={{ fontSize: 148, letterSpacing: "-0.05em" }}
              >
                TROPICAL
              </text>
            </svg>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-black/75 sm:text-[16px]">
              Dos looks para salir con el sol arriba. Lino claro, punto cálido y un corte que se mueve en la acera.
            </p>
          </div>

          <ul className="grid grid-cols-3 border-t border-black/15">
            {streetNotes.map(([index, label]) => (
              <li key={index} className="border-r border-black/15 px-3 py-4 first:pl-0 last:border-r-0">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-black/45">{index}</span>
                <p className="font-display mt-2 text-[clamp(1rem,1.6vw,1.45rem)] leading-none tracking-[-0.04em] uppercase">
                  {label}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between gap-4 border-t border-black pt-5">
            <a href="#arrivals" className="text-[12px] font-semibold tracking-[0.18em]">
              [ VER LA CÁPSULA ]
            </a>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase">Quarpa · Día</p>
          </div>
        </div>
      </div>
    </section>
  );
}
