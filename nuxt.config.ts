import tailwindConfig from "./tailwind.config";
import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    'imgs': fileURLToPath(new URL('./assets/imgs', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  },
  css:[
    'element-plus/dist/index.css',
  ],
  modules:['@nuxtjs/tailwindcss'],
})
