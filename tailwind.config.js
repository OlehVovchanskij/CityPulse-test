/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
    './src/navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        text: '#0F172A',
        subtext: '#475569',

        background: '#F1F5F9',
        card: '#FFFFFF',
        border: '#E2E8F0',
        header: '#F8FAFC',

        dark: {
          text: '#F8FAFC',
          subtext: '#94A3B8',
          background: '#020617',
          card: '#020617',
          border: '#1E293B',
          header: '#020617',
        },
      },
    },
  },
  plugins: [],
};
