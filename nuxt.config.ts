// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
        title: 'Meet in Thessaloniki'
    }
},
 
  modules: ['@nuxtjs/tailwindcss','nuxt-swiper'],

  alias: {
    "@": resolve(__dirname, "/"),
  },
    
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  build: {},

  css: ['~/assets/css/tailwind.css'],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    
})
