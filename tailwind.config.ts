import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        vscode: {
          bg: "hsl(var(--vscode-bg))",
          sidebar: "hsl(var(--vscode-sidebar))",
          editor: "hsl(var(--vscode-editor))",
          tabActive: "hsl(var(--vscode-tab-active))",
          tabInactive: "hsl(var(--vscode-tab-inactive))",
          border: "hsl(var(--vscode-border))",
          statusbar: "hsl(var(--vscode-statusbar))",
          text: "hsl(var(--vscode-text))",
          textMuted: "hsl(var(--vscode-text-muted))",
          textDim: "hsl(var(--vscode-text-dim))",
        },
        syntax: {
          blue: "hsl(var(--syntax-blue))",
          purple: "hsl(var(--syntax-purple))",
          pink: "hsl(var(--syntax-pink))",
          gray: "hsl(var(--syntax-gray))",
        },
        elegant: {
          purple: "hsl(270 70% 65%)",
          "purple-dark": "hsl(270 60% 45%)",
          pink: "hsl(320 75% 70%)",
          "pink-dark": "hsl(320 65% 50%)",
          blue: "hsl(220 80% 60%)",
          "blue-dark": "hsl(220 70% 45%)",
          gray: "hsl(220 10% 50%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "25%": {
            transform: "translateY(-20px) translateX(10px)",
          },
          "50%": {
            transform: "translateY(-10px) translateX(-10px)",
          },
          "75%": {
            transform: "translateY(-30px) translateX(5px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.5)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 20s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
