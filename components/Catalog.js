"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bouquets, categories } from "@/config/site";
import { waBouquetLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./CtaButtons";

export default function Catalog() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? bouquets : bouquets.filter((b) => b.category === active);

  return (
    <section id="catalogo" className="bg-ivory py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-medium uppercase tracking-widest text-gold">
            Nuestro catálogo
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-sage-dark sm:text-4xl">
            Ramos para cada ocasión
          </h2>
          <p className="mt-4 text-sage-dark/70">
            Elige tu arreglo favorito y pídelo en segundos por WhatsApp. Personalizamos
            colores, tamaño y detalles.
          </p>
        </div>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-sage text-white shadow-md"
                  : "bg-white text-sage-dark ring-1 ring-sage/20 hover:bg-blush"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((b) => (
              <motion.article
                key={b.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* TODO: reemplaza src por tu URL de Cloudinary */}
                  <img
                    src={b.image}
                    alt={b.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sage">
                    {b.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl font-semibold text-sage-dark">
                    {b.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sage-dark/70">
                    {b.description}
                  </p>

                  <a
                    href={waBouquetLink(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-semibold text-white shadow-md shadow-wa/30 transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Pedir este ramo
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
