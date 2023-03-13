// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
 
  modules: ['@nuxtjs/tailwindcss','nuxt-swiper'],

  alias: {
    "@": resolve(__dirname, "/"),
  },
    
  css: ['~/assets/css/tailwind.css'],
  build: {},
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

})
