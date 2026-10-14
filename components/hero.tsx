"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { ChinolaLogo } from "@/components/chinola-logo";
import { grayPath, tearAnchorX, tearLeftClip, tearPath, tearRightClip } from "@/components/hero-tear";

const navLeft = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Colección", href: "#arrivals" },
  { label: "Tienda", href: "#categories" },
];

const navRight = [
  { label: "Campaña", href: "#campaign" },
  { label: "Contacto", href: "#help" },
];

const navLinks = [...navLeft, ...navRight];

const ticker = [
  "NEW DROP",
  "QUARPA CAPSULE",
  "LIFE FORCE",
  "BERLIN VIBES",
  "BEAUTY WILL SAVE THE WORLD",
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const clipId = useId().replace(/:/g, "");

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setSearchOpen(false);
      setBagOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeAll() {
    setMenuOpen(false);
    setSearchOpen(false);
    setBagOpen(false);
  }

  return (
    <>
      <section aria-label="Chinola" className="relative flow-root overflow-x-clip bg-white lg:block lg:h-[100svh] lg:min-h-[680px] lg:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[4.5rem] right-0 left-[58%] z-0 h-[calc(78svh-4.5rem)] lg:bottom-0 lg:h-auto"
          style={{ background: "linear-gradient(to bottom, #FBC056 0%, #FB5D2E 42%, #E65A7F 100%)" }}
        />

        <header
          className={`hero-nav fixed inset-x-0 top-0 z-30 px-4 py-3 transition-[background-color] duration-300 sm:px-8 ${scrolled ? "bg-white/95 backdrop-blur-sm" : ""}`}
        >
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center gap-3 lg:gap-6">
              <button
                type="button"
                className="text-[10px] font-semibold tracking-[0.14em] uppercase sm:text-[11px] sm:tracking-[0.16em] lg:hidden"
                aria-expanded={menuOpen}
                onClick={() => {
                  setMenuOpen((open) => !open);
                  setSearchOpen(false);
                  setBagOpen(false);
                }}
              >
                {menuOpen ? "Cerrar" : "Menú"}
              </button>
              <nav className="hidden items-center gap-6 lg:flex" aria-label="Secciones">
                {navLeft.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                    onClick={closeAll}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <a href="#top" className="justify-self-center" aria-label="Chinola, inicio">
              <ChinolaLogo />
            </a>

            <div className="flex items-center justify-end gap-3 lg:gap-5">
              <nav className="hidden items-center gap-6 lg:flex" aria-label="Más secciones">
                {navRight.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                    onClick={closeAll}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <button
                type="button"
                className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px] sm:tracking-[0.16em]"
                aria-expanded={searchOpen}
                onClick={() => {
                  setSearchOpen((open) => !open);
                  setMenuOpen(false);
                  setBagOpen(false);
                }}
              >
                Buscar
              </button>
              <button
                type="button"
                className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px] sm:tracking-[0.16em]"
                aria-expanded={bagOpen}
                onClick={() => {
                  setBagOpen((open) => !open);
                  setMenuOpen(false);
                  setSearchOpen(false);
                }}
              >
                Bolsa
                <span className="sr-only">, 0 artículos</span>
              </button>
            </div>
          </div>
        </header>

        {menuOpen ? (
          <nav
            className="fixed top-[4.6rem] right-4 left-4 z-40 bg-white p-4 text-sm shadow-sm sm:right-auto sm:left-8 sm:min-w-44 lg:hidden"
            aria-label="Menú"
          >
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="tracking-[0.12em] uppercase" onClick={closeAll}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {searchOpen ? (
          <form
            className="fixed top-[4.6rem] right-4 left-4 z-40 bg-white px-3 py-2 shadow-sm sm:left-auto sm:right-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="hero-search" className="sr-only">
              Buscar
            </label>
            <input
              id="hero-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar"
              className="w-full bg-transparent text-sm outline-none sm:w-44"
              autoFocus
            />
          </form>
        ) : null}

        {bagOpen ? (
          <p className="fixed top-[4.6rem] right-5 z-40 bg-white px-4 py-3 text-sm shadow-sm sm:right-8" role="status">
            Tu bolsa está vacía.
          </p>
        ) : null}

        <div className="hero-sides relative z-10 mt-[78svh] w-full px-5 pt-8 lg:absolute lg:top-[20%] lg:left-[4%] lg:mt-0 lg:w-[min(30vw,22rem)] lg:px-0 lg:pt-0">
          <p className="font-display text-[clamp(2.8rem,4.6vw,4.6rem)] leading-[0.8] tracking-[-0.045em]">CHINOLA</p>
          <div className="mt-8 flex items-center gap-5">
            <span className="relative grid h-[4.6rem] w-[4.6rem] shrink-0 place-items-center" aria-hidden="true">
              <span className="offer-stamp-arc absolute inset-0 rounded-full border border-black/15 border-t-black" />
              <span className="font-display text-[13px] tracking-[0.16em]">SS26</span>
            </span>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase">Cápsula</p>
              <p className="font-logo mt-1 text-[1.85rem] leading-none">Quarpa</p>
              <p className="mt-2 max-w-[11rem] text-[12px] leading-snug text-neutral-600">Look de apertura. Vestido negro, corte al centro.</p>
            </div>
          </div>
        </div>

        <div className="hero-figure absolute top-[4.5rem] left-1/2 z-10 h-[calc(78svh-4.5rem)] w-[175vw] lg:h-[calc(100%-4.5rem)] lg:w-[min(92vw,760px)]">
          <svg
            viewBox="0 0 1000 1472"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id={`${clipId}-field`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1472">
                <stop offset="0%" stopColor="#FBC056" />
                <stop offset="42%" stopColor="#FB5D2E" />
                <stop offset="100%" stopColor="#E65A7F" />
              </linearGradient>
            </defs>
            <path d={grayPath} fill={`url(#${clipId}-field)`} />
          </svg>
          <Image
            src="/images/women/hero-woman.png"
            alt="Woman in a black strapless dress"
            fill
            priority
            unoptimized
            sizes="760px"
            className="object-contain object-top"
          />
          <svg
            viewBox="0 0 1000 1472"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible mix-blend-color"
          >
            <defs>
              <linearGradient id={`${clipId}-blend`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1472">
                <stop offset="0%" stopColor="#FBC056" />
                <stop offset="42%" stopColor="#FB5D2E" />
                <stop offset="100%" stopColor="#E65A7F" />
              </linearGradient>
            </defs>
            <path d={grayPath} fill={`url(#${clipId}-blend)`} />
          </svg>
          <svg
            viewBox="0 0 1000 1472"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
          >
            <path className="hero-cut" d={tearPath} fill="#ffffff" />
          </svg>
          <svg
            viewBox="0 0 1000 1472"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
          >
            <defs>
              <clipPath id={`${clipId}-new`}>
                <path d={tearLeftClip} />
              </clipPath>
              <clipPath id={`${clipId}-drop`}>
                <path d={tearRightClip} />
              </clipPath>
            </defs>
            <g className="hero-pop-group">
              <text
                x={tearAnchorX + 36}
                y="1296"
                textAnchor="end"
                clipPath={`url(#${clipId}-new)`}
                className="font-display"
                fontSize="214"
                fill="#FB5D2E"
                style={{ letterSpacing: "-0.05em" }}
              >
                NEW
              </text>
              <text
                x={tearAnchorX - 28}
                y="1296"
                textAnchor="start"
                clipPath={`url(#${clipId}-drop)`}
                className="font-display"
                fontSize="214"
                fill="#ffffff"
                style={{ letterSpacing: "-0.05em" }}
              >
                DROP
              </text>
              <a href="#arrivals" className="pointer-events-auto">
                <rect x={tearAnchorX - 108} y="1288" width="216" height="34" fill="#111111" />
                <text
                  x={tearAnchorX}
                  y="1310"
                  textAnchor="middle"
                  className="font-sans"
                  fontSize="16"
                  fontWeight="700"
                  letterSpacing="2.2"
                  fill="#ffffff"
                >
                  SEE COLLECTION
                </text>
              </a>
            </g>
          </svg>
        </div>

        <div className="hero-sides-late relative z-10 w-full px-5 pt-8 pb-12 lg:absolute lg:top-[30%] lg:right-6 lg:w-[min(28vw,24rem)] lg:px-0 lg:pt-0 lg:pb-0">
          <h1 className="font-display text-[clamp(2rem,8vw,3.35rem)] leading-[0.82] tracking-[-0.045em] lg:text-[clamp(2rem,3.1vw,3.35rem)]">
            <span className="block lg:whitespace-nowrap">WHERE GLAM</span>
            <span className="block lg:whitespace-nowrap">MEETS GRUNGE</span>
          </h1>
          <a
            href="/ofertas"
            className="group mt-6 block w-full overflow-hidden bg-[#FBC056] text-black shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition duration-500 ease-out hover:-translate-y-1 hover:bg-[#f3b43a] lg:w-[17.5rem]"
          >
            <span className="flex items-end justify-between gap-4 px-4 pt-4">
              <span>
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase">Hasta −40%</span>
                <span className="font-display mt-1 block text-[2.35rem] leading-none tracking-[-0.04em]">OFERTAS</span>
              </span>
              <span className="mb-1 inline-block text-lg transition-transform duration-500 ease-out group-hover:translate-x-1.5" aria-hidden="true">
                →
              </span>
            </span>
            <span className="offer-draw mx-4 mt-3 block h-px bg-black" />
            <span className="block px-4 pt-3 pb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">Ver la cápsula</span>
          </a>
        </div>
      </section>

      <div className="overflow-hidden border-y border-black/10 bg-white py-3">
        <div className="ticker-track flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {ticker.map((item) => (
                <li key={`${copy}-${item}`} className="px-8 text-[13px] font-black tracking-[0.18em]">
                  <a href="#arrivals">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
