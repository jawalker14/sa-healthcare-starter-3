const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Premium healthcare palette: navy/slate/white
        navy: {
          50: '#EEF5FA',
          100: '#D9E7F3',
          200: '#AEC8E0',
          300: '#7AA6C9',
          400: '#487FAE',
          500: '#2E648F',
          600: '#1E4C74',
          700: '#12385B',
          800: '#0B2B40',
          900: '#071E2D',
          950: '#031623',
        },
        // Tailwind's built-in slate will be used alongside white
        white: '#FFFFFF',
      },
      fontFamily: {
        // Uses next/font to inject the variable; fallback for safety
        sans: ['var(--font-montserrat)', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        // Soft, premium shadow
        soft: '0 10px 30px -12px rgba(2, 6, 23, 0.18)', // slate-900 ~ rgba(2,6,23)
        softer: '0 6px 20px -10px rgba(2, 6, 23, 0.12)',
      },
      spacing: {
        // Balanced section spacing
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};

export default config;