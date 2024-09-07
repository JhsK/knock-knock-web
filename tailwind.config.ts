import type { Config } from "tailwindcss";

export const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      "display-1": [
        "3.5rem",
        {
          lineHeight: "4.5rem",
          letterSpacing: "-3.19%",
        },
      ],
      "display-2": [
        "2.5rem",
        {
          lineHeight: "3.25rem",
          letterSpacing: "-2.82%",
        },
      ],
      "title-1": [
        "2.25rem",
        {
          lineHeight: "3rem",
          letterSpacing: "-2.7%",
        },
      ],
      "title-2": [
        "1.75rem",
        {
          lineHeight: "2.375rem",
          letterSpacing: "-2.36%",
        },
      ],
      "title-3": [
        "1.5rem",
        {
          lineHeight: "3rem",
          letterSpacing: "-2.3%",
        },
      ],
      "heading-1": [
        "1.375rem",
        {
          lineHeight: "1.875rem",
          letterSpacing: "-1.94%",
        },
      ],
      "heading-2": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-1.2%",
        },
      ],
      "headline-1": [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          letterSpacing: "-0.02%",
        },
      ],
      "headline-2": [
        "1.063rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0%",
        },
      ],
      "body-1": [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.57%",
        },
      ],
      "body-2": [
        "0.938rem",
        {
          lineHeight: "1.375rem",
          letterSpacing: "0.96%",
        },
      ],
      "label-1": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "1.45%",
        },
      ],
      "label-2": [
        "0.813rem",
        {
          lineHeight: "1.125rem",
          letterSpacing: "1.94%",
        },
      ],
      "caption-1": [
        "0.75rem",
        {
          lineHeight: "1rem",
          letterSpacing: "2.52%",
        },
      ],
      "caption-2": [
        "0.688rem",
        {
          lineHeight: "0.875rem",
          letterSpacing: "3.11%",
        },
      ],
      "caption-3": [
        "0.625rem",
        {
          lineHeight: "0.75rem",
          letterSpacing: "4%",
        },
      ],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
