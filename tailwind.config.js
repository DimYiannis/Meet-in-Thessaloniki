/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    // customized breakpoints //
    screens: {
      'mobile': '450px',
        
      'tablet': '760px',
      // => @media (min-width: 760px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lgdesk' : '1600px',
    },
    extend: {
      backgroundImage: {
        'sights': "url('./assets/photos/sights.avif')",
        'museum': "url('./assets/photos/museums.JPG')",
        'places': "url('./assets/photos/places.avif')",
        'history': "url('./assets/photos/history.jpg')",
        'mall': "url('./assets/photos/malls.jpg')",
        'cosmos': "url('./assets/photos/cosmos.jpg')",
        'onesalonica': "url('./assets/photos/onesalonica.jpg')",
        'mega': "url('./assets/photos/Megaoutlet.jpg')",
        'local': "url('./assets/photos/localmarket.jpg')",
        'athonos': "url('./assets/photos/athonossquare.png')",
        'streets': "url('./assets/photos/streets.jpg')",
        'mpezesteni': "url('./assets/photos/stoa-bezesteni.jpg')",
        'kapani': "url('./assets/photos/Kapani.jpg')",
        'modiano':"url('./assets/photos/modiano.jpg')",
        'traditional': "url('./assets/photos/ethnic.webp')",
        'gourmet': "url('./assets/photos/gourmet.jpg')",
        'fish': "url('./assets/photos/fish.jpg')",
        'meat': "url('./assets/photos/meat.jpg')",
        'night': "url('./assets/photos/nightout.webp')",
        'concerts': "url('./assets/photos/TheatroDasous.jpg')",
        'outdoor': "url('./assets/photos/Mountainbiking.jpg')",
        
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
