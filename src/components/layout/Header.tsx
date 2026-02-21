"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { navItems } from "@/lib/content";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandLogo className="site-header__logo" />

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx("site-nav__link", pathname === item.href && "is-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="button button--primary" href="/menu">
            View Menu
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            Menu
          </button>
        </div>
      </div>

      <div className={clsx("mobile-drawer", menuOpen && "is-open")}>
        <div className="container mobile-drawer__inner">
          <div className="mobile-drawer__top-actions">
            <Link className="button button--primary" href="/menu" onClick={() => setMenuOpen(false)}>
              View Menu
            </Link>
            <Link
              className="button button--secondary"
              href="/locations"
              onClick={() => setMenuOpen(false)}
            >
              Find a Location
            </Link>
          </div>

          <nav className="mobile-nav" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={clsx("mobile-nav__link", pathname === item.href && "is-active")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}


