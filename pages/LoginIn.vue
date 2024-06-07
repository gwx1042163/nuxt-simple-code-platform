<template>
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
        <el-input v-model="user.type" />
      </el-form-item>
      <el-button type="primary" @click="loginIn">登录</el-button>
      <el-button type="default">重置</el-button>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  const user = reactive({
    userName: '',
    password: '',
    type: '',
  })
  const router = useRouter()
  const loginIn =async ()=>{
  //  const res = await useDefaultRequest.get( '/cbrain-auth/sso/doLogin',{
  //       params:{
  //         userName:"340878" || user.userName,
  //         password:"123456" || user.password
  //       }
  //  });
      router.push({
        path:'/formObject'
      })
  }
  </script>
  