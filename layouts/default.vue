<template>
  <div class="header"></div>
  <div class="body">
    <div class="menu">
      <img
        class="collapseImg"
        src="imgs/icons/icon-菜单.png"
        alt="菜单"
        @click="isCollapse = !isCollapse"
      />
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <img src="imgs/icons/icon-phytemplate.png" width="24" alt="" />
          <template #title>组件</template>
        </el-menu-item>
        <el-menu-item index="2">
          <img src="imgs/icons/icon-phyattribute.png" width="24" alt="" />
          <template #title>属性</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="temp-list" :style="{ width: leftCollapse ? '400px' : '47px' }">
      <slot name="tempList"></slot>
      
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import type { TabsPaneContext } from "element-plus";
const isCollapse = ref(false);
const leftCollapse = ref(false);
const activeName = ref("first");
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClick = (tab: TabsPaneContext, event: Event) => {};
</script>
<style>
.body {
  display: flex;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.temp-list {
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      width: 100%;
      height: 32px;
      line-height: 48px;
      padding-left: 10px;
      font-weight: 600;
      border-bottom: 1px solid #dedede;
      background: #f8f8f8;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
