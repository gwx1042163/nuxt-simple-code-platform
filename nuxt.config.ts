import tailwindConfig from "./tailwind.config";
import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-configx
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    'imgs': fileURLToPath(new URL('./assets/imgs', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    'assets': fileURLToPath(new URL('./assets', import.meta.url)),
  },
  css:[
    'element-plus/dist/index.css',
  ],
  modules:['@nuxtjs/tailwindcss'],
  runtimeConfig:{
    public:{
      baseURL: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  nitro:{
    "devProxy":{
       'api':{
        target: process.env.NUXT_PUBLIC_API_BASE,
        changeOrigin:true
       }
    }
  }
})
