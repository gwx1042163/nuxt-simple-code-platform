
<template>
  <contentDoc>
  <!-- ---
    title:'Title of this page'
    decription:"测试description"
    --- -->
  </contentDoc>
    <el-form
      label-position="top"
      label-width="auto"
      :model="user"
      class="w-[500px] h-[400px] mx-auto mt-[10%] border-solid border-gray-300 border-[1px] p-[30px]"
    >
      <el-form-item label="用户名">
        <el-input v-model="user.userName" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-button @click="show = !show" >验证码</el-button>
      </el-form-item>
      <LazyClientOnly>
        <Vcode ref="vcode"  :show="show"  canvasWidth="200" canvasHeight="150" @success="onSuccess" @close="onClose" />
        </LazyClientOnly>
      <el-button type="primary" @click="loginIn" :disabled="validateTrue">登录</el-button>
      <el-button type="default">重置</el-button>
      <NuxtLink :to="{path:'/WeChatLogin' }"> <el-button class="ml-[20px]" type="success">微信登录</el-button></NuxtLink>
    </el-form>
   
  </template>
  
  <script lang="ts" setup>
  import Vcode from 'vue3-puzzle-vcode'
import { reactive, ref } from 'vue'
  const user = reactive({
    userName: '',
    password: '',
    type: '',
  })
  const router = useRouter()
  const loginIn =async ()=>{
      router.push({
        path:'/formObject'
      })
  }
  const  show = ref(false)
  const validateTrue = ref(true)
  const onSuccess = ()=>{
    show.value = false
    validateTrue.value = false
  }
  const onClose = ()=>{
    show.value = false
  }

  </script>
  