<template>
    <div>
      <div class="header">header</div>
      <div class="flex justify-center h-[100vh]">
        <el-menu
          :class="!isCollapse ? 'w-[200px]' : 'w-[60px]'"
          default-active="2"
          :collapse="isCollapse"
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
        <TemplateList/>
        <!-- 拖拽窗口 -->
        <DrageContain/>
        <div class="flex-1 basis-[300px]">
          <component :is="current.componentDataName" :chartId="current.id" :chartName="current.title" />
        </div>
      </div>
    </div>
  </template>
  <script lang="ts"  setup>
  import { ElMenuItem, ElMenu } from "element-plus";
  import TemplateList from "./leftCollapse/TemplateList.vue";
  import DrageContain from "./DrageContain.vue";
  const isCollapse = ref(false);
  const current = ref<any>({})
  eventBus.on('updateConfigForm',(comp:any)=>{
    current.value = comp;
  })
  </script>