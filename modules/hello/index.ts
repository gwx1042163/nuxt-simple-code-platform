import { createResolver, defineNuxtModule ,addServerHandler} from "nuxt/kit";

export default defineNuxtModule({
     meta:{
        name:'Hello'
     },
     setup(resolvedOptions, nuxt) {
         const { resolve} = createResolver(import.meta.url)
         addServerHandler({
            route:'/app/hello',
            handler:resolve('./runtime/app-router')
         }
     },
})