/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        'primary-dark': '#082B20',
        'secondary-deep': '#103C2D',
        'gold': '#D08A1E',
        'gold-dark': '#B87413',
        'section-bg': '#F8F8F6',
        'soft-grey': '#ECECEC',
        'ink': '#1D1D1D',
        'muted': '#646464',
        'hairline': '#E6E6E6',
        'hover-green': '#14593F',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(8,43,32,0.04), 0 12px 32px -12px rgba(8,43,32,0.12)',
        card: '0 1px 2px rgba(8,43,32,0.05), 0 20px 40px -20px rgba(8,43,32,0.18)',
      },
      transitionTimingFunction: {
        engineer: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
