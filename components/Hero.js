"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { site } from "@/config/site";
import { waGeneralLink } from "@/lib/whatsapp";
import { WhatsAppButton, CallButton } from "./CtaButtons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-blush/60 via-ivory to-ivory pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-xs font-medium text-sage sm:text-sm">
            <MapPin className="h-4 w-4" />
            Entregas en {site.city}
          </span>

          <h1 className="mt-6 font-serif text-3xl font-bold leading-tight text-sage-dark sm:text-5xl lg:text-6xl">
            Flores que dicen lo que las palabras no alcanzan
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sage-dark/80 sm:mt-6 sm:text-lg lg:mx-0">
            Arreglos florales artesanales con <strong>entrega el mismo día</strong> en
            Medellín, El Poblado, Envigado y todo el Oriente Antioqueño. Sorprende a
            quien amas hoy mismo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start">
            <WhatsAppButton href={waGeneralLink()} size="lg" className="w-full sm:w-auto">
              Pedir por WhatsApp
            </WhatsAppButton>
            <CallButton size="lg" className="w-full sm:w-auto">
              Llamar ahora
            </CallButton>
          </div>

          {/* Prueba social */}
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-sm text-sage-dark/70">
              +500 clientes felices en el Valle de Aburrá
            </p>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-3xl shadow-2xl sm:aspect-[4/5] lg:max-w-none lg:rounded-[2rem]">
            <img
              src={site.heroImage}
              alt="Arreglo floral de Boutique Floral"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
            <p className="font-serif text-2xl font-bold text-sage">Mismo día</p>
            <p className="text-sm text-sage-dark/70">Pide antes de las 2 p.m.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
