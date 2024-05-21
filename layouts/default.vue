<template>
  <div>
    <div class="header">header</div>
    <div class="flex justify-center h-[100vh]">
      <el-menu
        :class="!isCollapse ? 'w-[200px]' : 'w-[60px]'"
        default-active="2"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <img
          class="collapseImg"
          src="imgs/icons/icon-菜单.png"
          alt="菜单"
          @click="isCollapse = !isCollapse"
        />
        <el-menu-item index="1">
          <img src="imgs/icons/icon-phytemplate.png" width="24" alt="" />
          <template #title>组件</template>
        </el-menu-item>
        <el-menu-item index="2">
          <img src="imgs/icons/icon-phyattribute.png" width="24" alt="" />
          <template #title>属性</template>
        </el-menu-item>
      </el-menu>
      <!-- 模板窗口 -->
      <TemplateList />
      <!-- 拖拽窗口 -->
      <DrageContain />
     <div class="flex-1 bg-yellow-50 basis-[200px]"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";
import { ElMenuItem,ElMenu,ElIcon } from "element-plus";
import DrageContain from "./../pages/DrageContain.vue";
import TemplateList from "./../pages/leftCollapse/TemplateList.vue";
const isCollapse = ref(false);
const leftCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
