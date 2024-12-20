import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: "var(--brand)",
        brandlight: "var(--brandlight)",
        gray: "var(--gray)",
        secondaryBlack: "var(--secondaryBlack)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        //fontsize:12px line-height:19.92px
        xs: ["0.75rem", { lineHeight: "1.66rem" }],
        //fontsize:14px line-height:22px
        sm: ["0.875rem", { lineHeight: "1.571rem" }],
        //fontsize:16px line-height:24px
        base: ["1rem", { lineHeight: "1.5rem" }],
        //fontsize:18px line-height:21.6px
        lg: ["1.125rem", { lineHeight: "1.35rem" }],
        //fontsize:32px line-height:38.4px
        xl: ["2rem", { lineHeight: "2.4rem" }],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #15B79F, #0E9382)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
