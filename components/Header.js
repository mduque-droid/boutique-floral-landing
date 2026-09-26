"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "@/config/site";
import { waGeneralLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./CtaButtons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? "border-sage/10 bg-ivory/95 shadow-md"
          : "border-transparent bg-ivory/80"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={site.logo}
            alt={site.name}
            className="h-9 w-9 rounded-full object-cover shadow-sm ring-1 ring-gold/40 sm:h-11 sm:w-11"
          />
          <span className="font-serif text-lg font-bold text-sage sm:text-xl">
            {site.name}
          </span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sage-dark transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <WhatsAppButton href={waGeneralLink()} size="sm">
            Pedir por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-sage lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-blush bg-ivory px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-sage-dark hover:bg-blush"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <WhatsAppButton href={waGeneralLink()} className="w-full">
              Pedir por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
