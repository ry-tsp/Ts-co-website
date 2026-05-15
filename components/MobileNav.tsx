"use client";

import Link from "next/link";
import { useEffect } from "react";

type NavLink = { href: string; label: string };

type Props = {
  links: NavLink[];
  pathname: string;
  onClose: () => void;
};

export default function MobileNav({ links, pathname, onClose }: Props) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-50 bg-white flex flex-col"
    >
      <div className="flex items-center justify-between px-8 py-[22px] border-b border-black/10">
        <Link
          href="/"
          onClick={onClose}
          className="font-cormorant text-[17px] tracking-[0.1em] uppercase text-ink"
        >
          Thompson Street
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="font-courier text-[14px] tracking-[0.06em] text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-oxblood"
        >
          ×
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 px-8 py-8">
        <ul className="flex flex-col gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={
                    "block py-4 font-courier text-[14px] tracking-[0.08em] uppercase " +
                    (active ? "text-oxblood" : "text-ink")
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
