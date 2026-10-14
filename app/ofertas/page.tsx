import type { Metadata } from "next";
import Link from "next/link";
import { ChinolaLogo } from "@/components/chinola-logo";
import { OffersBoard } from "@/components/offers-board";

export const metadata: Metadata = {
  title: "Ofertas · Chinola",
  description: "Ofertas Chinola. Precio original, precio rebajado y descuento.",
};

export default function OfertasPage() {
  return (
    <main className="bg-white text-ink">
      <header className="flex items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Chinola, inicio">
          <ChinolaLogo />
        </Link>
        <Link href="/" className="text-[11px] font-semibold tracking-[0.16em] uppercase">
          Tienda
        </Link>
      </header>

      <section aria-label="Banner de ofertas" className="overflow-hidden bg-[#FBC056] px-5 py-14 text-black sm:px-10 sm:py-16">
        <div className="offer-rise">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase">Chinola · cápsula</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-8">
            <h1 className="font-display text-[clamp(2.8rem,14vw,7.2rem)] leading-[0.8] tracking-[-0.05em]">OFERTAS</h1>
            <dl className="offer-rise-late grid w-full grid-cols-3 gap-3 pb-1 sm:w-auto sm:gap-6">
              <div>
                <dt className="text-[10px] tracking-[0.16em] uppercase">Hasta</dt>
                <dd className="font-display mt-1 text-[1.25rem] leading-none sm:text-[1.6rem]">−40%</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.16em] uppercase">Miembros</dt>
                <dd className="font-display mt-1 text-[1.25rem] leading-none sm:text-[1.6rem]">Etapa 1</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.16em] uppercase">Piezas</dt>
                <dd className="font-display mt-1 text-[1.25rem] leading-none sm:text-[1.6rem]">09</dd>
              </div>
            </dl>
          </div>
          <span className="offer-draw mt-6 block h-px bg-black" />
          <p className="mt-4 max-w-lg font-logo text-[1.35rem] leading-snug">
            Precio original tachado, precio rebajado y el descuento en cada pieza.
          </p>
        </div>
        <div className="offer-marquee mt-10 overflow-hidden border-t border-black/15 pt-3">
          <div className="ticker-track flex w-max">
            {[0, 1].map((copy) => (
              <p key={copy} className="shrink-0 pr-10 text-[12px] font-semibold tracking-[0.18em] uppercase" aria-hidden={copy === 1}>
                Vestidos −20% · Abrigos −30% · Enterizos −20% · Accesorios −40% · Exclusivo miembros ·
              </p>
            ))}
          </div>
        </div>
      </section>

      <OffersBoard />

      <footer className="px-5 py-6 text-[11px] tracking-[0.16em] sm:px-8">©2026 CHINOLA</footer>
    </main>
  );
}
