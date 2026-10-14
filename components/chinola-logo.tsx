"use client";

import { useId } from "react";

function Flower({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <mask id={id}>
          <rect width="64" height="64" fill="black" />
          <circle cx="32" cy="32" r="29" fill="white" />
          {petals.map((deg) => (
            <ellipse
              key={deg}
              cx="32"
              cy="15.5"
              rx="5.4"
              ry="9.4"
              fill="black"
              transform={`rotate(${deg} 32 32)`}
            />
          ))}
          <circle cx="32" cy="32" r="3.4" fill="white" />
        </mask>
      </defs>
      <circle cx="32" cy="32" r="29" fill="currentColor" mask={`url(#${id})`} />
    </svg>
  );
}

export function ChinolaLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center text-ink ${className}`}>
      <span className="font-logo flex items-center text-[1.55rem] leading-none font-medium tracking-[0.22em] sm:text-[1.7rem]">
        <span>CHIN</span>
        <Flower className="mx-[0.08em] h-[0.82em] w-[0.82em]" />
        <span>LA</span>
      </span>
      <span className="mt-[0.28em] flex items-center gap-2 text-[8px] tracking-[0.28em] uppercase">
        <span className="h-px w-5 bg-current" />
        Moda femenina
        <span className="h-px w-5 bg-current" />
      </span>
    </span>
  );
}
