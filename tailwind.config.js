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
        'sights': "url('https://images.unsplash.com/photo-1620050248206-f5c11bd7f1f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        'museum': "url('https://lh3.googleusercontent.com/p/AF1QipPQfvwhQoWpP9UaCLR9F5WaUCSgkkamltxBGqM=s680-w680-h510')",
        'places': "url('https://images.unsplash.com/photo-1551189654-7a5ac7381f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')",
        'history': "url('https://www.enjoythessaloniki.com/wp-content/uploads/2012/08/Roman_Forum/Ancient%20Agora1%20(4).jpg')",
        'mall': "url('https://www.lamdadev.com/images/com_osgallery/gal-14/original/img_915457A4FB71-A31E-2CC1-A900-D687EBB45EB5.jpg')",
        'cosmos': "url('https://1.bp.blogspot.com/-pJ1y8Bph4Zs/XPFO6YiTdWI/AAAAAAACA7I/HS-Wy9SXWnA3Bbnal3Gt7IEyJwVE5xOagCLcBGAs/s640/c53a9eb7f98bd9efe52407712806bfee_XL.jpg')",
        'onesalonica': "url('https://www.thessalonikiguide.gr/wp-content/uploads/2016/09/One-Salonica-thessaloniki.jpg')",
        'mega': "url('https://www.climapro.gr/wp-content/uploads/2014/01/Megaoutlet-1-1020x683.jpg')",
        'local': "url('http://blog.buyadsradio.com/wp-content/uploads/2017/03/%CF%84%CE%BF%CF%80%CE%B9%CE%BA%CE%AE-%CE%B1%CE%B3%CE%BF%CF%81%CE%B1.jpg')",
        'athonos': "url('https://www.thessalonikitourism.gr/images/2019/02/16/athonossquare1ok.png')",
        'streets': "url('https://thessaloniki.travel/wp-content/uploads/2021/08/ba7071c0fd7786ec7342034042359ffe_XL.jpg')",
        'mpezesteni': "url('https://goniaxalarosis.gr/wp-content/uploads/2021/03/stoa-bezesteni.jpg')",
        'kapani': "url('https://upload.wikimedia.org/wikipedia/commons/a/aa/Inside_Kapani_Market.jpg')",
        'modiano': "url('https://www.gastronomos.gr/wp-content/uploads/2023/01/agora-modiano-proti-volta-6-gastronomos.jpg')",
        'traditional': "url('https://www.definitelygreece.com/wp-content/uploads/2020/05/traditional-greek-food-meals.jpg')",
        'gourmet': "url('https://www.gastronomos.gr/wp-content/uploads/2021/03/b_funky_gourmet.jpg')",
        'fish': "url('https://cdn.mos.cms.futurecdn.net/fzUk9Xi7ko4ki5JWp753ZX.jpg')",
        'meat': "url('https://www.vindulge.com/wp-content/uploads/2022/11/Grilled-Beef-Tenderloin-with-Mustard-Sauce-FI-2.jpg')",
        'night': "url('https://i0.wp.com/thelenscapchronicles.com/wp-content/uploads/2021/10/IMG_7011.jpg?resize=768%2C576&ssl=1')",
        'concerts': "url('https://www.culturenow.gr/wp-content/uploads/2018/05/Festival-Dasous-Theatro-Dasous.jpg')",
        'outdoor': "url('https://www.peak.co.uk/wp-content/uploads/2019/02/bigstock-Mountain-biking-woman-and-man-262645285-1080x675.jpg')",
        
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
