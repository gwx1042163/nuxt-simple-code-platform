<template>
  <div :class="leftCollapse ? 'basis-[400px]' : 'basis-[20px]'">
    <div class="header">
      <div
        v-if="leftCollapse"
        class="h-[32px] pl-[10px] font-semibold border-b-[#DEDEDE] border-b-solid bg-[#F8F8F8] flex justify-between items-center"
      >
        <div>组件</div>
        <el-icon @click="leftCollapse = !leftCollapse"
          ><ArrowLeftBold
        /></el-icon>
      </div>
      <div v-else>
        <el-icon @click="leftCollapse = !leftCollapse"
          ><ArrowRightBold
        /></el-icon>
      </div>
    </div>
    <div class="body" v-if="leftCollapse">
      <div class="card" v-for="list in menuList" :key="list.id">
        <div class="header flex">
          <div class="w-[4px] h-[18px] bg-[#0084ff] ml-[14px] mr-[8px]"></div>
          {{ list.name }}
        </div>
        <div class="list-contain flex flex-wrap gap-[10px] ml-[15px]">
          <div class="card flex  items-center shadow-md box-border h-[36px] mb-[8px] w-[100px] hover:border-[1px] border-solid border-[#64aeff]" v-for="item in list.chartList">
            <img :src="item.icon" class="pl-[10px]" /><span class="text-xs font-sans font-normal text-[#333333] pl-[8px]">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import {ref} from 'vue'
const leftCollapse = ref(true);
const { menuList } = useMenuList();
</script>
<style></style>
