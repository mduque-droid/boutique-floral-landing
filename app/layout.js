import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

// Serif elegante para títulos (marca floral premium)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// Sans familiar y confiable para el público de Colombia/LatAm
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: `${site.name} | Flores a domicilio en Medellín y Oriente Antioqueño`,
  description:
    "Arreglos florales frescos con entrega el mismo día en Medellín, El Poblado, Envigado, Sabaneta y Oriente Antioqueño. Pide por WhatsApp. Pago con Nequi y Bancolombia.",
  keywords: [
    "flores Medellín",
    "arreglos florales Medellín",
    "flores a domicilio Medellín",
    "floristería El Poblado",
    "ramos Envigado",
    "flores Oriente Antioqueño",
  ],
  openGraph: {
    title: `${site.name} | Flores a domicilio en Medellín`,
    description:
      "Arreglos florales frescos con entrega el mismo día en Medellín y Oriente Antioqueño. Pide por WhatsApp.",
    locale: "es_CO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
