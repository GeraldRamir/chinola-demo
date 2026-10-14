import Image from "next/image";
import { campaign } from "@/data/content";

export function Campaign() {
  return (
    <section aria-label={campaign.title.join(" ")} className="bg-footer text-white">
      <div className="grid items-center gap-6 px-4 py-8 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-6">
        <h2 className="text-[clamp(2rem,3.4vw,3.1rem)] leading-[0.95] font-medium tracking-[-0.04em] uppercase lg:col-span-3">
          {campaign.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="relative h-[280px] overflow-hidden bg-neutral-900 sm:h-[340px] lg:col-span-5 lg:h-[380px]">
          <Image src={campaign.bag.src} alt={campaign.bag.alt} fill sizes="40vw" className="object-cover object-[center_32%]" />
        </div>
        <div className="relative h-[320px] overflow-hidden bg-neutral-900 sm:h-[420px] lg:col-span-4 lg:h-[460px]">
          <Image src={campaign.look.src} alt={campaign.look.alt} fill sizes="30vw" className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
