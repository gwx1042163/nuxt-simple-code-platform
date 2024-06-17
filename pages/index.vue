<template>
  <div>
    <LoginIn/>
    <NuxtLink :to="{path:'/testMiddleWare/IndexOne'}"  >测试中间件</NuxtLink>
    <br/>
    <NuxtLink :to="{path:'/compomentCase/IndexOne'}"  >测试组件渲染情况</NuxtLink>
  </div>
  
</template>
<script setup lang="ts">
import LoginIn from './LoginIn.vue'
</script>