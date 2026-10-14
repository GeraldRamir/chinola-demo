import { voices } from "@/data/content";

export function Voices() {
  return (
    <section id={voices.id} aria-labelledby="voices-title" className="px-4 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
      <h2 id="voices-title" className="text-[22px] font-medium tracking-[-0.03em] uppercase sm:text-[26px]">
        {voices.title}
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        {voices.quotes.map((item) => (
          <blockquote key={item.name}>
            <p className="text-[15px] leading-relaxed text-neutral-700">{item.quote}</p>
            <footer className="mt-5 text-[12px] tracking-[0.08em] text-muted uppercase">
              {item.name}
              <span className="mx-2">·</span>
              {item.place}
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-2" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
      </div>
    </section>
  );
}
