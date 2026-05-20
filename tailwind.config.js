/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#FFF8F0',
          100: '#FFF0DC',
          200: '#FFDCAA',
          300: '#FFC470',
          400: '#FFA040',
          500: '#FF8C00',
          600: '#E07000',
          700: '#B85500',
          800: '#8C3E00',
          900: '#6B2D00',
        },
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#D4AF37',
          600: '#C9A84C',
          700: '#A07840',
          800: '#7A5C30',
          900: '#5C4020',
        },
        cream: {
          50:  '#FFFDF9',
          100: '#FFF8F0',
          200: '#FFF3E0',
          300: '#FFE8C4',
          400: '#FFD9A0',
          500: '#F5C880',
        },
        resort: {
          50:  '#FDF8F3',
          100: '#F5EBD8',
          200: '#E8D0B0',
          300: '#D4B080',
          400: '#B88A50',
          500: '#8B6234',
          600: '#6B4A24',
          700: '#4A3018',
          800: '#2E1A0A',
          900: '#1A0A00',
        },
        elegant: {
          900: '#1C1410',
          800: '#2C1F14',
          700: '#3D2B1A',
          600: '#5C4030',
        },
      },
      fontFamily: {
        serif:   ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        cinzel:  ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'saffron-gradient': 'linear-gradient(135deg, #FF8C00 0%, #FFA040 50%, #FFB347 100%)',
        'gold-gradient':    'linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #FBBF24 100%)',
      },
      boxShadow: {
        'luxury':     '0 20px 60px rgba(212, 175, 55, 0.15), 0 8px 32px rgba(139, 98, 52, 0.12)',
        'luxury-sm':  '0 4px 20px rgba(212, 175, 55, 0.12), 0 2px 8px rgba(139, 98, 52, 0.08)',
        'luxury-lg':  '0 40px 80px rgba(212, 175, 55, 0.2), 0 20px 40px rgba(139, 98, 52, 0.15)',
        'saffron':    '0 8px 32px rgba(255, 140, 0, 0.3)',
        'card-hover': '0 30px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
