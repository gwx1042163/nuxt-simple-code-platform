<template>
    <div>测试中间件</div>
    <NuxtLink :to="{path:'/testOne'}">testOne</NuxtLink>
    {{ $sayHello() }}
    <input v-my-focus="true" type="text" placeholder="请输入"/>
  <div>api数据 {{data}}</div> 
  <div>捕捉所有路由：{{foo3s}}</div>
  <div>在routes文件夹中无需加api/前缀 {{ helloUp }}</div>
  <div>嵌套路由：{{ subRoute }}</div>
  <div>模块：{{  }}</div>
</template>
<script setup lang="ts">
definePageMeta({
    middleWare: [
       function (to: any,from: any) {
        if(process.server)return;
        console.log("进来了")
        return navigateTo('/testOne')
        },
        "auth"
    ]
})
const {  $sayHello } = useNuxtApp()
const { $myFocus } = useNuxtApp()
//server中api中的请求
const {data} =await useFetch('/api/hello')
//捕获所有路由
const {data: foo3s} =await useFetch('/api/foo/3s')
const { data:helloUp} =await useFetch('/helloUp')
const { data:subRoute} =await useFetch('/subRoute/test')
</script>