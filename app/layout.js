import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="es-CO" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
