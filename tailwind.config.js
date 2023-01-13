/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['beranda.html', 'tentang.html', 'artikel.html', 'galeri.html', 'detail_artikel.html', 'kontak.html'],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl':'80px',
        'xl': '60px',
        'lg': '50px',
        'md': '30px',
        'sm': '18px',
    },
  },
    extend: {
      colors:{
        main: '#30396E',
        primary: '#16215D',
        secondary: '#1C2661',
        third: '#3362CC',
        forth: '#54BAEB',
        fifth: '#619AEF',
        grey: '#808585',
        slate: '#D3D7DF',
        dark: '#404040',
        silk: '#F6FAFD',
      },
      screens:{
        'sm': '370px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
