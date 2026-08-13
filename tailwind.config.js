/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Archivo"', "system-ui", "sans-serif"],
        display: ['"Archivo"', '"Space Grotesk"', "system-ui", "sans-serif"],
        editorial: ['"Newsreader"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        // --- Thème Éditorial (Light) — Style Presse / NOT:ICED ---
        paper: {
          DEFAULT: "#F7F4EC",
          snow: "#FFFDF6",
          carton: "#EFE9DB",
          darker: "#E5DEC9",
        },
        ink: {
          DEFAULT: "#0D0202",
          stoned: "#55503F",
          sepia: "#8B8472",
          light: "#A49D8B",
        },
        vermillon: {
          DEFAULT: "#B23A2C",
          titled: "#8F2C20",
          light: "#E05343",
          soft: "rgba(178, 58, 44, 0.12)",
        },

        // --- Thème Dark Premium ---
        surface: {
          DEFAULT: "#0A0A0A",
          elevated: "#121212",
          card: "#181818",
          hover: "#222222",
        },
        border: {
          DEFAULT: "#1F1F1F",
          subtle: "#161616",
          hover: "#2F2F2F",
          light: "#D8D2C2",
        },
        muted: {
          DEFAULT: "#888888",
          dark: "#555555",
          light: "#AAAAAA",
        },
        gold: {
          dark: "#B8941F",
          DEFAULT: "#D4AF37",
          light: "#E8D48B",
          soft: "rgba(212, 175, 55, 0.12)",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 175, 55, 0.12)",
        "glow-vermillon": "0 0 20px rgba(178, 58, 44, 0.2)",
        "glow-lg": "0 0 40px rgba(212, 175, 55, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-light": "0 4px 20px rgba(13, 2, 2, 0.06)",
        editorial: "3px 3px 0px rgba(13, 2, 2, 0.9)",
      },
    },
  },
  plugins: [],
};
