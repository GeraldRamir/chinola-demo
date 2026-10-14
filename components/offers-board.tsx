"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  membership,
  offerCategories,
  offerDiscounts,
  offers,
  salePrice,
  type OfferCategory,
  type OfferDiscount,
} from "@/data/offers";

export function OffersBoard() {
  const [category, setCategory] = useState<OfferCategory | "Todas">("Todas");
  const [discount, setDiscount] = useState<OfferDiscount | "Todos">("Todos");
  const [joined, setJoined] = useState(false);

  const visible = useMemo(
    () =>
      offers.filter((item) => {
        if (category !== "Todas" && item.category !== category) return false;
        if (discount !== "Todos" && item.discount !== discount) return false;
        return true;
      }),
    [category, discount],
  );

  return (
    <>
      <section aria-label="Filtros de ofertas" className="border-b border-black/10 px-5 py-6 sm:px-8">
        <div className="flex flex-col gap-5">
          <fieldset>
            <legend className="text-[11px] font-semibold tracking-[0.18em] uppercase">Categoría</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              <FilterButton pressed={category === "Todas"} onClick={() => setCategory("Todas")}>
                Todas
              </FilterButton>
              {offerCategories.map((item) => (
                <FilterButton key={item} pressed={category === item} onClick={() => setCategory(item)}>
                  {item}
                </FilterButton>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-[11px] font-semibold tracking-[0.18em] uppercase">Descuento</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              <FilterButton pressed={discount === "Todos"} onClick={() => setDiscount("Todos")}>
                Todos
              </FilterButton>
              {offerDiscounts.map((item) => (
                <FilterButton key={item} pressed={discount === item} onClick={() => setDiscount(item)}>
                  {`${item}%`}
                </FilterButton>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <section aria-label="Productos en oferta" className="px-5 py-10 sm:px-8">
        {visible.length === 0 ? (
          <p className="text-sm">No hay ofertas con ese filtro.</p>
        ) : (
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => {
              const sale = salePrice(item.price, item.discount);
              return (
                <li key={item.id}>
                  <article>
                    <div className="relative aspect-[3/4] bg-neutral-100">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 50vw"
                        className={item.src.endsWith(".png") ? "object-contain p-8" : "object-cover"}
                      />
                      <span className="absolute top-3 left-3 bg-[#FBC056] px-2 py-1 text-[12px] font-black tracking-wide">
                        −{item.discount}%
                      </span>
                      {item.memberOnly ? (
                        <span className="absolute top-3 right-3 max-w-[46%] bg-black px-2 py-1 text-center text-[10px] leading-tight font-semibold tracking-[0.12em] text-white uppercase">
                          Exclusivo miembros
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-[11px] tracking-[0.16em] text-neutral-500 uppercase">{item.category}</p>
                    <h2 className="mt-1 text-[16px] font-semibold">{item.name}</h2>
                    <p className="mt-2 flex items-baseline gap-3">
                      <span className="text-[14px] text-neutral-500 line-through">${item.price}</span>
                      <span className="font-display text-[1.35rem] leading-none">${sale}</span>
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section aria-label="Membresía" className="bg-black px-5 py-14 text-white sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#FBC056] uppercase">Membresía</p>
        <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.6rem)] leading-none">Chinola miembros</h2>
        <ul className="mt-8 max-w-xl space-y-3">
          {membership.benefits.map((benefit) => (
            <li key={benefit} className="border-b border-white/15 pb-3 text-[15px]">
              {benefit}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[12px] tracking-[0.16em] uppercase">{membership.stage}</p>
        <p className="font-display mt-1 text-[3rem] leading-none">
          ${membership.price}
          <span className="ml-2 font-sans text-[14px] tracking-normal">/ mes</span>
        </p>
        <button
          type="button"
          className="mt-6 bg-[#FBC056] px-5 py-3 text-[12px] font-semibold tracking-[0.16em] text-black uppercase"
          aria-pressed={joined}
          onClick={() => setJoined(true)}
        >
          {joined ? "Ya eres miembro" : "Hacerme miembro"}
        </button>
        {joined ? <p className="mt-3 text-sm text-[#FBC056]">Etapa 1 activa.</p> : null}
      </section>
    </>
  );
}

function FilterButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`border px-3 py-1.5 text-[12px] tracking-[0.08em] uppercase ${pressed ? "border-black bg-black text-white" : "border-black/20 bg-white"}`}
    >
      {children}
    </button>
  );
}
