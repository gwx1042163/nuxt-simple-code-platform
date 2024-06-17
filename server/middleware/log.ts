// 服务器中间件
export default defineEventHandler((event)=>{
 console.log('New request' + getRequestURL(event))
})