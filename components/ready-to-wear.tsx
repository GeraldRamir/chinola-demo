import Image from "next/image";
import { formatPrice, ready } from "@/data/content";

function ShopNow({ href }: { href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase">
      {ready.cta}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function ReadyToWear() {
  return (
    <section id={ready.id} aria-labelledby="ready-title" className="px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className="flex items-end justify-between gap-4">
        <h2 id="ready-title" className="text-[22px] font-medium tracking-[-0.03em] uppercase sm:text-[26px]">
          {ready.title}
        </h2>
        <ShopNow href="#categories" />
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
        {ready.items.map((item) => (
          <li key={item.name}>
            <a href="#categories" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ececec]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3 text-[12px] tracking-[0.04em] uppercase">
                <p>{item.name}</p>
                <p className="shrink-0">{formatPrice(item.price)}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
