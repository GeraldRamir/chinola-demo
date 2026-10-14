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
      <span className="font-logo flex items-center text-[1.05rem] leading-none font-medium tracking-[0.1em] min-[420px]:text-[1.28rem] min-[420px]:tracking-[0.16em] sm:text-[1.7rem] sm:tracking-[0.22em]">
        <span>CHIN</span>
        <Flower className="mx-[0.08em] h-[0.82em] w-[0.82em]" />
        <span>LA</span>
      </span>
      <span className="mt-[0.28em] flex items-center gap-1.5 text-[6px] tracking-[0.14em] uppercase min-[420px]:gap-2 min-[420px]:text-[8px] min-[420px]:tracking-[0.22em] sm:tracking-[0.28em]">
        <span className="h-px w-3 bg-current min-[420px]:w-5" />
        Moda femenina
        <span className="h-px w-3 bg-current min-[420px]:w-5" />
      </span>
    </span>
  );
}
