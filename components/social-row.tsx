import Image from "next/image";
import { instagram } from "@/data/content";

export function SocialRow() {
  return (
    <section aria-label="Instagram" className="pb-14">
      <p className="text-center text-[15px]">{instagram.handle}</p>
      <ul className="mt-6 grid grid-cols-2 gap-2 px-3 sm:grid-cols-3 sm:px-4 lg:grid-cols-6">
        {instagram.images.map((image) => (
          <li key={image.src} className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 16vw, 50vw" className="object-cover object-top" />
          </li>
        ))}
      </ul>
    </section>
  );
}
