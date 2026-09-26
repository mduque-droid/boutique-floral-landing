"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/config/site";

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollByCards = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="clientes" className="bg-blush/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="mx-auto max-w-2xl sm:mx-0">
            <span className="font-medium uppercase tracking-widest text-gold">
              Clientes felices
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-sage-dark sm:text-4xl">
              Momentos que hemos hecho florecer
            </h2>
            <p className="mt-4 text-sage-dark/70">
              Cada entrega es una sonrisa. Desliza para ver a quienes ya confiaron en
              nosotros.
            </p>
          </div>

          {/* Controles */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sage shadow-sm ring-1 ring-sage/15 transition hover:bg-sage hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="Siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sage shadow-sm ring-1 ring-sage/15 transition hover:bg-sage hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              data-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 sm:w-[46%] lg:w-[31%]"
            >
              <div className="aspect-square overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-5">
                <Quote className="h-6 w-6 text-gold/60" />
                <p className="mt-2 text-sm leading-relaxed text-sage-dark/80">
                  “{t.text}”
                </p>
                <p className="mt-4 font-semibold text-sage">{t.name}</p>
                <p className="text-xs text-sage-dark/60">{t.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
