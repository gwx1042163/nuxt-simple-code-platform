export default defineNuxtRouteMiddleware((to,from)=>{
  if(process.server){
    return
  }
  if(process.client){
    return
  }
  const app =  useNuxtApp()
})