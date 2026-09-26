"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/site";
import { waGeneralLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./CtaButtons";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-ivory py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-medium uppercase tracking-widest text-gold">
            Preguntas frecuentes
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-sage-dark sm:text-4xl">
            Todo lo que necesitas saber
          </h2>
        </div>

        <div className="mt-10 divide-y divide-sage/10 rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sage-dark">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-sage transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-sage-dark/70">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sage-dark/70">¿Tienes otra pregunta?</p>
          <WhatsAppButton href={waGeneralLink()}>Escríbenos por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
