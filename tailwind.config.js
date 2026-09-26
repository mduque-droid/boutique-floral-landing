/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./config/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#3A5A40", // Verde Salvia / Eucalipto (primario)
          dark: "#2C4632",
          light: "#5A7A60",
        },
        ivory: "#FAFAF9", // Blanco Marfil (fondo)
        blush: "#F4E2DE", // Rosa Rubor (secundario)
        wa: "#25D366", // Verde WhatsApp (CTA)
        gold: "#D4AF37", // Dorado tenue (accent)
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
