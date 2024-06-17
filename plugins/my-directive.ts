export default defineNuxtPlugin({
    name:"my-directive",
    setup:(nuxt)=>{
    const myFocus= nuxt.vueApp.directive('my-focus',{
        mounted:(el)=>{
            el.focus()
        },
        getSSRProps(binding, vnode) {
            return {
                
            }
        },
    })
      return {
        provide:{
            myFocus
        }
      }
    },
    hooks:{

    }
}
)