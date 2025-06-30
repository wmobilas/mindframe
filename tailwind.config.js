module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "v0-friedrichshain-connection-ret-steelvercelappathens-gray":
          "var(--v0-friedrichshain-connection-ret-steelvercelappathens-gray)",
        "v0-friedrichshain-connection-ret-steelvercelappblack":
          "var(--v0-friedrichshain-connection-ret-steelvercelappblack)",
        "v0-friedrichshain-connection-ret-steelvercelappcod-gray-black":
          "var(--v0-friedrichshain-connection-ret-steelvercelappcod-gray-black)",
        "v0-friedrichshain-connection-ret-steelvercelappcornflower-blue":
          "var(--v0-friedrichshain-connection-ret-steelvercelappcornflower-blue)",
        "v0-friedrichshain-connection-ret-steelvercelappebony":
          "var(--v0-friedrichshain-connection-ret-steelvercelappebony)",
        "v0-friedrichshain-connection-ret-steelvercelappebony-clay":
          "var(--v0-friedrichshain-connection-ret-steelvercelappebony-clay)",
        "v0-friedrichshain-connection-ret-steelvercelappflamingo":
          "var(--v0-friedrichshain-connection-ret-steelvercelappflamingo)",
        "v0-friedrichshain-connection-ret-steelvercelappgray-chateau":
          "var(--v0-friedrichshain-connection-ret-steelvercelappgray-chateau)",
        "v0-friedrichshain-connection-ret-steelvercelappmischka":
          "var(--v0-friedrichshain-connection-ret-steelvercelappmischka)",
        "v0-friedrichshain-connection-ret-steelvercelappoxford-blue":
          "var(--v0-friedrichshain-connection-ret-steelvercelappoxford-blue)",
        "v0-friedrichshain-connection-ret-steelvercelapppale-sky":
          "var(--v0-friedrichshain-connection-ret-steelvercelapppale-sky)",
        "v0-friedrichshain-connection-ret-steelvercelappwhite":
          "var(--v0-friedrichshain-connection-ret-steelvercelappwhite)",
        "v0-friedrichshain-connection-ret-steelvercelappwhite-5":
          "var(--v0-friedrichshain-connection-ret-steelvercelappwhite-5)",
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
      },
      fontFamily: {
        "v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-family)",
        "v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3":
          "var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
