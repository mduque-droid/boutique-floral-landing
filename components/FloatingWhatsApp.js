"use client";

import { motion } from "framer-motion";
import { waGeneralLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./CtaButtons";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waGeneralLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-lg shadow-wa/40 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
