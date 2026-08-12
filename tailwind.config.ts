import type { Config } from "tailwindcss";

// Design tokens for FreeEduCamp.
// Palette is built around a "morning classroom" feeling: warm paper
// background, deep ink text, and three accent colors that map to the
// brand's learning loop -- green (mastery/growth), amber (practice,
// like a highlighter), and sky (learning, like a chalkboard).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FBF9F4",
          soft: "#F3EFE4",
        },
        ink: {
          DEFAULT: "#1B2430",
          light: "#4B5563",
        },
        mastery: {
          50: "#EAF6EF",
          100: "#CFEBDA",
          400: "#4CAE7B",
          500: "#2F8F5B",
          600: "#227249",
        },
        practice: {
          100: "#FCEACB",
          400: "#F2A93B",
          500: "#E4941F",
        },
        learn: {
          100: "#DCEBF9",
          400: "#5AA4DE",
          500: "#3E8FD0",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 2px 0 0 rgba(27, 36, 48, 0.08)",
        lift: "0 12px 24px -12px rgba(27, 36, 48, 0.25)",
      },
      backgroundImage: {
        "ruled-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(27,36,48,0.06) 28px)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
