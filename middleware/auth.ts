export default defineNuxtRouteMiddleware(()=>{
    //处理路由权限
     const user:Ref = useState('user');
     if(!user.value.isAuthorized){
        //取消导航
      return  abortNavigation('权限不足')
     }
     return  navigateTo('/TestOne')
})
