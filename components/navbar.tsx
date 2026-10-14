"use client";

import { useEffect, useState } from "react";
import { brand, nav } from "@/data/content";
import { Logo } from "@/components/logo";

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16.5 20 20.5" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6.5 8h11l-.8 11H7.3L6.5 8Z" />
      <path d="M9 8V6.8A3 3 0 0 1 12 3.8 3 3 0 0 1 15 6.8V8" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c1.4-2.6 3.7-3.8 6.5-3.8s5.1 1.2 6.5 3.8" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setBagOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="grid h-[68px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="p-1"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => {
              setMenuOpen((open) => !open);
              setSearchOpen(false);
              setBagOpen(false);
            }}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
          <button
            type="button"
            className="p-1"
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => {
              setSearchOpen((open) => !open);
              setMenuOpen(false);
              setBagOpen(false);
            }}
          >
            <IconSearch />
            <span className="sr-only">Search</span>
          </button>
        </div>

        <a href="#top" className="flex items-center gap-2 text-[17px] font-medium tracking-[-0.03em]">
          <Logo className="h-[18px] w-[18px] text-lime" />
          {brand.name}
        </a>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <a href="#newsletter" className="p-1" aria-label="Account">
            <IconUser />
          </a>
          <button
            type="button"
            className="p-1"
            aria-expanded={bagOpen}
            aria-controls="bag-note"
            onClick={() => {
              setBagOpen((open) => !open);
              setMenuOpen(false);
              setSearchOpen(false);
            }}
          >
            <IconBag />
            <span className="sr-only">Bag, 0 items</span>
          </button>
          <button
            type="button"
            className="hidden text-[13px] sm:inline"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setSearchOpen(false);
            }}
          >
            Menu
          </button>
        </div>
      </div>

      {searchOpen ? (
        <form
          id="site-search"
          className="border-t border-line px-4 py-3 sm:px-8 lg:px-10"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="search" className="sr-only">
            Search the shop
          </label>
          <input
            id="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search clothing, shoes, bags"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            autoFocus
          />
        </form>
      ) : null}

      {bagOpen ? (
        <p id="bag-note" className="border-t border-line px-4 py-4 text-sm text-muted sm:px-8 lg:px-10" role="status">
          Your bag is empty.
        </p>
      ) : null}

      {menuOpen ? (
        <nav id="site-menu" className="border-t border-line bg-white px-4 py-8 sm:px-8 lg:px-10" aria-label="Menu">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Shop</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {nav.shop.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Help</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {nav.help.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Company</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {nav.company.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
