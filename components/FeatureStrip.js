"use client";

import { motion } from "framer-motion";
import { Truck, Sparkles, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Envío el mismo día",
    text: "Pide antes de las 2:00 p.m. y entregamos hoy mismo en Medellín y área metropolitana.",
  },
  {
    icon: Sparkles,
    title: "Flores de alta calidad",
    text: "Seleccionamos flores frescas premium cada mañana para garantizar duración y belleza.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    text: "Te asesoramos por WhatsApp para crear el arreglo perfecto según la ocasión y tu presupuesto.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-sage py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left"
          >
            <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold md:mb-0 md:mr-4">
              <f.icon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/80">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
