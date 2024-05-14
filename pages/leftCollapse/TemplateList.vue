<template>
  <div :class="leftCollapse ? 'basis-[200px]' : 'basis-[20px]'"
  >
    <div class="header">
      <div
        v-if="leftCollapse"
        class="h-[32px] pl-[10px] font-semibold border-b-[#DEDEDE]  border-b-solid bg-[#F8F8F8] flex justify-between items-center"
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
    <div class="body">
       <div class="flex">
        <div class="w-[4px] h-[18px] bg-[#0084ff] ml-[14px] mr-[8px]"></div>布局
       </div>
       <div class="list-contain">
        <div class="card"></div>
       </div>
       <div  class="flex">
        <div class="w-[4px] h-[18px] bg-[#0084ff] ml-[14px] mr-[8px]"></div>组件
       </div>
       <div  class="flex">
        <div class="w-[4px] h-[18px] bg-[#0084ff] ml-[14px] mr-[8px]"></div>高级组件
       </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeftBold,ArrowRightBold} from '@element-plus/icons-vue' 
const leftCollapse = ref(true);
const list1 = [{
    title:"选项卡",
}
]
</script>
<style>
</style>
