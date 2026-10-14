"use client";

import { useState } from "react";
import { newsletter } from "@/data/content";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id={newsletter.id} aria-labelledby="newsletter-title" className="px-4 py-16 sm:px-8 lg:px-10">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
        <h2 id="newsletter-title" className="max-w-sm text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.04em]">
          Subscribe our
          <span className="block">newsletters</span>
        </h2>
        <div className="max-w-md lg:pt-2">
          <p className="text-[14px] leading-relaxed text-muted">{newsletter.copy}</p>
          {done ? (
            <p className="mt-6 text-sm" role="status">
              {newsletter.success}
            </p>
          ) : (
            <form
              className="mt-6 flex items-center bg-[#f2f2f2]"
              onSubmit={(event) => {
                event.preventDefault();
                if (!email.trim()) return;
                setDone(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                placeholder={newsletter.placeholder}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-neutral-400"
              />
              <button type="submit" className="px-4 text-lg" aria-label="Subscribe">
                →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
