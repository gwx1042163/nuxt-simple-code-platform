
export default defineNuxtPlugin({
        name:"hello-plugin",
        enforce:'pre',
        async setup() {
            console.log("运行了hello 插件")
            return {
                provide:{
                        sayHello(){
                            return 'say Hello'
                        }
                }
            }
        },
        hooks:{
            'app:created':()=>{
                console.log("app 刚刚创建呢！")
            }
        },
        

})