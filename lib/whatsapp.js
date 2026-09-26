import { site } from "@/config/site";

// ============================================================================
//  UTILIDADES DE WHATSAPP
//  Construyen enlaces wa.me con mensajes dinámicos y codificados (encodeURIComponent).
// ============================================================================

/**
 * Enlace genérico de WhatsApp con un mensaje libre.
 * @param {string} message - Texto del mensaje (sin codificar).
 * @returns {string} URL lista para usar en un <a href>.
 */
export function waLink(message = "") {
  const phone = site.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}${text ? `?text=${text}` : ""}`;
}

/**
 * Mensaje estructurado para pedir un ramo específico del catálogo.
 * @param {{name: string, price?: string}} bouquet
 */
export function waBouquetLink(bouquet) {
  const message =
    `¡Hola ${site.name}! 🌷\n\n` +
    `Me interesa este arreglo:\n` +
    `• *${bouquet.name}*\n\n` +
    `¿Me pueden dar información de precio, disponibilidad y entrega?\n` +
    `Datos de la entrega:\n` +
    `- Ciudad/Barrio:\n` +
    `- Fecha y hora deseada:\n` +
    `- Mensaje para la tarjeta:`;
  return waLink(message);
}

/** Mensaje general de contacto (hero / header / footer). */
export function waGeneralLink() {
  const message =
    `¡Hola ${site.name}! 🌸\n\n` +
    `Quiero información sobre sus arreglos florales y las entregas en ${site.city}.`;
  return waLink(message);
}

/** Enlace tel: para el botón de llamar. */
export function telLink() {
  return `tel:${site.phoneTel.replace(/[^\d+]/g, "")}`;
}
