/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.text-secondary'),
            '--tw-prose-body': theme('colors.text-secondary'),
            '--tw-prose-headings': theme('colors.text-primary'),
            '--tw-prose-lead': theme('colors.text-secondary'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text-primary'),
            '--tw-prose-counters': theme('colors.text-secondary'),
            '--tw-prose-bullets': theme('colors.text-secondary'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.text-primary'),
            '--tw-prose-quote-borders': theme('colors.border'),
            '--tw-prose-captions': theme('colors.text-secondary'),
            '--tw-prose-code': theme('colors.accent'),
            '--tw-prose-pre-code': theme('colors.text-primary'),
            '--tw-prose-pre-bg': theme('colors.card'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
            'h2, h3': {
              scrollMarginTop: '5rem',
            },
          },
        },
      }),
      colors: {
        background: "#0D1117",
        card: "#161B22",
        surface: "#1F2937",
        border: "#30363D",
        "text-primary": "#E6EDF3",
        "text-secondary": "#9CA3AF",
        accent: "#58A6FF",
        success: "#3FB950",
        hover: "#1F6FEB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.3)",
        "soft-md": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
        "soft-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
