/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        subtle: 'rgb(var(--c-subtle) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        signal: 'rgb(var(--c-signal) / <alpha-value>)',
        fg2: 'rgb(var(--c-fg2) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Literata', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
