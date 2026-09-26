"use client";

import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { site } from "@/config/site";
import { waGeneralLink, telLink } from "@/lib/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./CtaButtons";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-sage-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={site.logo}
                alt={site.name}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
              />
              <span className="font-serif text-2xl font-bold">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {site.tagline}. Entregas con amor en {site.city}.
            </p>
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold"
              >
                <Instagram className="h-5 w-5" /> Síguenos en Instagram
              </a>
            )}
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold">Contacto directo</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a href={telLink()} className="flex items-center gap-3 hover:text-gold">
                  <Phone className="h-5 w-5 shrink-0" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Mail className="h-5 w-5 shrink-0" /> {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Cobertura y horario */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold">Cobertura</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                Medellín, El Poblado, Envigado, Sabaneta, Itagüí y Oriente Antioqueño
                (Rionegro, La Ceja, Llanogrande).
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0" />
                {site.hours}
              </li>
            </ul>
            <div className="mt-6">
              <WhatsAppButton href={waGeneralLink()} size="sm">
                Pedir ahora
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados. ·
            Pagos con Nequi y Bancolombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
