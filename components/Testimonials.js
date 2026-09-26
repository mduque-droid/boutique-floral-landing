"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/config/site";

export default function Testimonials() {
  return (
    <section id="clientes" className="bg-blush/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-medium uppercase tracking-widest text-gold">
            Clientes felices
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-sage-dark sm:text-4xl">
            Momentos que hemos hecho florecer
          </h2>
          <p className="mt-4 text-sage-dark/70">
            Cada entrega es una sonrisa. Esto dicen quienes ya confiaron en nosotros.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-square overflow-hidden">
                {/* TODO: foto real del cliente (Cloudinary) */}
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
