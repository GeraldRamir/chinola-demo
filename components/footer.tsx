"use client";

import { useState } from "react";

const ink = "#2a140e";

const tear =
  "polygon(0% 6.5%, 7.2% 6.4%, 7.7% 3.6%, 8.3% 6.6%, 17% 6.5%, 17.5% 9%, 18.1% 6.4%, 29% 6.5%, 29.5% 3.8%, 30.2% 6.6%, 41% 6.4%, 41.6% 8.8%, 42.3% 6.5%, 54% 6.5%, 54.6% 3.5%, 55.3% 6.6%, 66% 6.4%, 66.6% 9.1%, 67.3% 6.5%, 78% 6.5%, 78.6% 3.7%, 79.3% 6.6%, 89% 6.4%, 89.6% 8.7%, 90.3% 6.5%, 100% 6.5%, 100% 100%, 0% 100%)";

const sticker =
  "polygon(4% 10%, 14% 0%, 26% 8%, 40% 0%, 54% 9%, 68% 0%, 82% 8%, 96% 2%, 100% 16%, 100% 78%, 90% 100%, 74% 90%, 58% 100%, 42% 88%, 26% 100%, 10% 90%, 0% 100%, 0% 18%)";

const shop = [
  ["Shop all", "#arrivals"],
  ["Categories", "#categories"],
  ["Who we are", "#nosotros"],
  ["Campaign", "#campaign"],
] as const;

const shopMore = [
  ["Contact", "#help"],
  ["Collections", "#arrivals"],
  ["Sale", "/ofertas"],
  ["Quarpa", "#arrivals"],
] as const;

const help = [
  ["Return", "#help"],
  ["Impressum", "#nosotros"],
  ["Shipping and payment", "#help"],
  ["FAQ", "#help"],
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer id="help" className="relative bg-[#d64d68]" style={{ color: ink }}>
      <div className="relative overflow-hidden px-5 pt-12 pb-6 lg:hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-2.5"
          style={{ background: "linear-gradient(90deg, #E65A7F 0%, #FBC056 46%, #FB5D2E 100%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #f3b84e 0%, #ee7a34 40%, #e15a48 72%, #d64d68 100%)",
            clipPath: tear,
          }}
        />
        <div className="relative z-[1] pt-4">
          <nav aria-label="Shop">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[...shop, ...shopMore].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[11px] font-semibold tracking-[0.14em] uppercase">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Help" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {help.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[11px] font-semibold tracking-[0.12em] uppercase">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="font-display mt-8 text-[18vw] leading-[0.78] tracking-[-0.06em] uppercase" style={{ color: ink }}>
            Chinola
          </p>
          <a
            href="/ofertas"
            className="mt-4 inline-flex px-4 py-2 text-[11px] font-black tracking-[0.16em]"
            style={{ background: "#f3eee4", color: ink }}
          >
            DISCOUNT
          </a>
          <div className="mt-8 text-white">
            <p className="font-display text-[12vw] leading-none tracking-[-0.04em]">SUBSCRIBE</p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.08em]">(LATEST NEWS)</p>
            <form
              className="mt-4"
              onSubmit={(event) => {
                event.preventDefault();
                if (!email.includes("@")) return;
                setDone(true);
              }}
            >
              {done ? (
                <p className="text-[12px] tracking-[0.12em] uppercase" role="status">
                  You are on the list.
                </p>
              ) : (
                <div className="flex items-end gap-3 border-b border-white/90 pb-1">
                  <label htmlFor="footer-email-mobile" className="block min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold tracking-[0.18em]">EMAIL</span>
                    <input
                      id="footer-email-mobile"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full bg-transparent text-[16px] outline-none"
                    />
                  </label>
                  <button type="submit" className="shrink-0 text-[11px] font-semibold tracking-[0.16em]">
                    SUBSCRIBE
                  </button>
                </div>
              )}
            </form>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: ink }}>
            <span>©2026_CHINOLA</span>
            <a href="#help" className="text-right">
              Privacy policy
            </a>
            <a href="#nosotros">Credits</a>
            <a href="https://instagram.com" className="text-right">
              IG
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative hidden w-full overflow-hidden lg:block lg:aspect-[1024/425]"
        style={{ containerType: "inline-size" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[18%]"
          style={{ background: "linear-gradient(90deg, #E65A7F 0%, #FBC056 46%, #FB5D2E 100%)" }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #f3b84e 0%, #ee7a34 40%, #e15a48 72%, #d64d68 100%)",
            clipPath: tear,
          }}
        />

        <nav aria-label="Shop" className="absolute top-[12%] left-[2.2%] z-[2]">
          <ul className="flex flex-wrap gap-x-[2.4cqw] gap-y-1">
            {shop.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-[10px] font-semibold tracking-[0.14em] uppercase lg:text-[1.02cqw]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-[0.7cqw] flex flex-wrap gap-x-[2.4cqw] gap-y-1">
            {shopMore.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-[10px] font-semibold tracking-[0.14em] uppercase lg:text-[1.02cqw]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Help" className="absolute top-[19%] right-[2.2%] left-[2.2%] z-[2] lg:top-[12%] lg:left-[50%]">
          <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1 lg:flex-nowrap lg:justify-between lg:gap-x-3">
            {help.map(([label, href]) => (
              <li key={label} className="shrink-0">
                <a href={href} className="text-[10px] font-semibold tracking-[0.12em] uppercase lg:text-[1.02cqw]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-display pointer-events-none absolute top-[32%] left-[1.4%] z-0 text-[17vw] leading-[0.76] tracking-[-0.06em] uppercase lg:top-[30%] lg:text-[16cqw]" style={{ color: ink }}>
          Chinola
        </p>

        <a
          href="/ofertas"
          className="absolute top-[44%] left-[64%] z-[2] grid h-[9%] w-[10%] -rotate-[8deg] place-items-center text-[9px] font-black tracking-[0.14em] shadow-[0_8px_18px_rgba(42,20,14,0.18)] lg:text-[1.05cqw]"
          style={{ background: "#f3eee4", color: ink, clipPath: sticker }}
        >
          DISCOUNT
        </a>

        <div className="absolute bottom-[12%] left-[2.2%] z-[3] flex items-end gap-[1cqw] text-white">
          <p className="font-display text-[12vw] leading-none tracking-[-0.04em] lg:text-[5.5cqw]">SUBSCRIBE</p>
          <p className="mb-[0.35em] text-[10px] font-semibold tracking-[0.04em] lg:text-[1.15cqw]">(LATEST NEWS)</p>
        </div>

        <form
          id="newsletter"
          className="absolute right-[2.2%] bottom-[12.2%] z-[3] w-[38%] text-white"
          onSubmit={(event) => {
            event.preventDefault();
            if (!email.includes("@")) return;
            setDone(true);
          }}
        >
          {done ? (
            <p className="text-[12px] tracking-[0.12em] uppercase" role="status">
              You are on the list.
            </p>
          ) : (
            <div className="flex items-end gap-3 border-b border-white/90 pb-1">
              <label htmlFor="footer-email" className="block min-w-0 flex-1">
                <span className="block text-[9px] font-semibold tracking-[0.18em] lg:text-[0.85cqw]">EMAIL</span>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-transparent text-[13px] outline-none"
                />
              </label>
              <button type="submit" className="shrink-0 text-[10px] font-semibold tracking-[0.16em] lg:text-[1cqw]">
                SUBSCRIBE
              </button>
            </div>
          )}
        </form>

        <div className="absolute inset-x-[2.2%] bottom-[3.2%] z-[3] grid grid-cols-4 items-center text-[9px] font-semibold tracking-[0.14em] uppercase lg:text-[0.85cqw]" style={{ color: ink }}>
          <span>©2026_CHINOLA</span>
          <a href="#help" className="text-center">
            Privacy policy
          </a>
          <a href="#nosotros" className="text-center">
            Credits
          </a>
          <a href="https://instagram.com" className="text-right">
            IG
          </a>
        </div>
      </div>
    </footer>
  );
}
