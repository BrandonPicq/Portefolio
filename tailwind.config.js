/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      colors: {
        // Surfaces noires
        surface: {
          DEFAULT: "#0a0a0a",
          elevated: "#111111",
          card: "#141414",
          hover: "#1a1a1a",
        },
        // Bordures & séparateurs
        border: {
          DEFAULT: "#1f1f1f",
          subtle: "#181818",
          hover: "#2a2a2a",
        },
        // Texte
        muted: {
          DEFAULT: "#888888",
          dark: "#555555",
          light: "#aaaaaa",
        },
        // Or — accent principal
        gold: {
          dark: "#B8941F",
          DEFAULT: "#D4AF37",
          light: "#E8D48B",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 175, 55, 0.08)",
        "glow-lg": "0 0 40px rgba(212, 175, 55, 0.12)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
