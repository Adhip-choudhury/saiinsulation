"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Rockwool Insulation", href: "/products#rockwool" },
      { label: "Nitrile Rubber", href: "/products#nitrile-rubber" },
      { label: "Aluminum Sheet", href: "/products#aluminum-sheet" },
      { label: "SS Sheet", href: "/products#ss-sheet" },
      { label: "Acoustic Panels", href: "/products#acoustic-panels" },
      { label: "PUF Panel", href: "/products#puf-panel" },
      { label: "Ducting Material", href: "/products#ducting" },
      { label: "HVAC Products", href: "/products#hvac" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Hot Insulation", href: "/services#hot-insulation" },
      { label: "Cold Insulation", href: "/services#cold-insulation" },
      { label: "Acoustic Insulation", href: "/services#acoustic-insulation" },
      { label: "Clean Rooms", href: "/services#clean-rooms" },
      { label: "False Ceiling", href: "/services#false-ceiling" },
      { label: "Epoxy Flooring", href: "/services#epoxy-flooring" },
      { label: "Ducting", href: "/services#ducting" },
      { label: "PUF Panels", href: "/services#puf-panels" },
      { label: "AMC Contracts", href: "/services#amc" },
      { label: "Civil Works", href: "/services#civil-works" },
    ],
  },
  {
    label: "Applications",
    href: "#",
    dropdown: [
      { label: "Commercial", href: "/projects?category=commercial" },
      { label: "Educational", href: "/projects?category=educational" },
      { label: "Healthcare", href: "/projects?category=healthcare" },
      { label: "Residential", href: "/projects?category=residential" },
      { label: "Industrial", href: "/projects?category=industrial" },
    ],
  },
  { label: "INSUDESIGN", href: "/insudesign" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-xl border-b border-white/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.webp" alt="Sai Enterprises" className="h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="rounded px-3 py-2 text-sm font-semibold text-dark transition-all hover:bg-orange/10 hover:text-orange"
              >
                {item.label}
              </Link>
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute left-0 top-full w-56 rounded-xl bg-white/95 backdrop-blur-md py-2 shadow-2xl border border-blue/20">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-3 text-sm text-dark transition-all hover:bg-blue/10 hover:text-blue"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="ml-4 rounded-full bg-orange px-6 py-3 text-sm font-bold uppercase text-black backdrop-blur-sm transition-all hover:bg-orange-dark hover:scale-105 shadow-lg"
          >
            GET A QUOTE →
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex cursor-pointer items-center rounded-full bg-orange p-2 text-black transition-all hover:bg-orange-dark lg:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/20 bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => !item.dropdown && setMobileOpen(false)}
                className="block rounded px-3 py-2 text-sm font-semibold text-dark transition-all hover:bg-orange/10 hover:text-orange"
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="ml-4 border-l-2 border-blue/30 pl-3">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded px-3 py-1.5 text-sm text-dark transition-all hover:text-blue"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-full bg-orange px-6 py-3 text-center text-sm font-bold uppercase text-black backdrop-blur-sm transition-all hover:bg-orange-dark hover:scale-105"
          >
            GET A QUOTE →
          </Link>
        </div>
      )}
    </nav>
  );
}
