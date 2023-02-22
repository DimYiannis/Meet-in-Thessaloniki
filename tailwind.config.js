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
    },
    extend: {
      backgroundImage: {
        'sights': "url('https://images.unsplash.com/photo-1620050248206-f5c11bd7f1f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        'museum': "url('https://lh3.googleusercontent.com/p/AF1QipPQfvwhQoWpP9UaCLR9F5WaUCSgkkamltxBGqM=s680-w680-h510')",
        'places': "url('https://images.unsplash.com/photo-1551189654-7a5ac7381f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')",
        'history': "url('https://www.enjoythessaloniki.com/wp-content/uploads/2012/08/Roman_Forum/Ancient%20Agora1%20(4).jpg')",
        '': "url('')",
      }
    },
  },
  plugins: [],
}
