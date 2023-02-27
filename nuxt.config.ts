// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss',],
  
  alias: {
    "@": resolve(__dirname, "/"),
  },
    
  css: ["~/assets/css/tailwind.css"],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
})
