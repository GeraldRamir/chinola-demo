import Image from "next/image";
import { looks } from "@/data/content";

function Frame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-neutral-100 ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
    </div>
  );
}

export function LooksGallery() {
  return (
    <section id={looks.id} aria-labelledby="looks-title" className="px-4 py-16 sm:px-8 lg:px-10">
      <div className="flex items-end justify-between gap-4">
        <h2 id="looks-title" className="text-[22px] font-medium tracking-[-0.03em] uppercase sm:text-[26px]">
          {looks.title}
        </h2>
        <a href="#ready" className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase">
          {looks.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
        <Frame src={looks.main.src} alt={looks.main.alt} className="aspect-[4/5] lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[640px]" />
        <p className="text-[14px] leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:max-w-sm lg:justify-self-end lg:text-right">
          {looks.copy}
        </p>
        <Frame src={looks.side.src} alt={looks.side.alt} className="aspect-[4/5] lg:col-span-4 lg:col-start-9" />
        {looks.row.map((item) => (
          <Frame key={item.src} src={item.src} alt={item.alt} className="aspect-[4/5] lg:col-span-4" />
        ))}
      </div>
    </section>
  );
}
