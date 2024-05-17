/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '@tablet': '640px',
        '@laptop': '1024px',
        '@desktop': '1280px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(255.32deg, #FF60C8 9.09%, #5B1FA6 102.28%, #7E3DCE 102.28%)',
      },
      gridTemplateColumns: {
        'hero-section': '1fr 21.875rem',
      },
      padding: {
        '18': '72px',
      },
      colors: {
        'pink-brand': '#F67ACB',
        'purple-brand': '#5B1FA6',
        'gray-scale': {
          '100': '#050110',
          '200': '#0F0C1B',
          '300': '#3F3D49',
          '400': '#57555F',
          '500': '#9995A6',
          '600': '#ACB4BF',
        }
      },
      maxWidth: {
        grid: '1246px',
      },
      lineHeight: {
        xtraLeading: "105%", 
      }
    },
  },
  plugins: [],
}
