import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  content: [
    path.join(__dirname, './app/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, './components/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#d4af37',
          light: '#e8c547',
          dark: '#a89830',
        },
        navy: {
          deep: '#0a1428',
          royal: '#142850',
          medium: '#1a3a5c',
        },
        cream: {
          luxury: '#f9f7f4',
        },
      },
      fontFamily: {
        marcellus: ['var(--font-marcellus)'],
        amiri: ['var(--font-amiri)'],
        almarai: ['var(--font-almarai)'],
      },
      boxShadow: {
        elegant: '0 4px 20px rgba(10, 20, 40, 0.1)',
        luxury: '0 10px 40px rgba(10, 20, 40, 0.15)',
        premium: '0 15px 50px rgba(10, 20, 40, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
