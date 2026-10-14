import Image from "next/image";
import { categories } from "@/data/content";

export function Categories() {
  return (
    <section id={categories.id} aria-labelledby="categories-title" className="px-4 py-6 sm:px-8 lg:px-10 lg:py-10">
      <h2 id="categories-title" className="text-[22px] font-medium tracking-[-0.03em] uppercase sm:text-[26px]">
        {categories.title}
      </h2>
      <div className="relative mt-8">
        <ul className="border-t border-line lg:max-w-[62%]">
          {categories.items.map((item) => (
            <li key={item} className="border-b border-line">
              <a href="#ready" className="flex items-center justify-between py-5 text-[13px] tracking-[0.18em] uppercase">
                {item}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-end justify-center gap-4 lg:absolute lg:top-[-12%] lg:right-[4%] lg:mt-0 lg:block lg:w-[300px]">
          <div className="w-[220px] rotate-[8deg] bg-white p-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:w-[260px]">
            <div className="relative aspect-[4/5] bg-neutral-100">
              <Image src={categories.feature.src} alt={categories.feature.alt} fill sizes="260px" className="object-cover" />
            </div>
          </div>
          <div className="w-[120px] -rotate-[8deg] bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] lg:absolute lg:bottom-6 lg:-left-16 lg:w-[132px]">
            <div className="relative aspect-square bg-neutral-100">
              <Image src={categories.detail.src} alt={categories.detail.alt} fill sizes="132px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
