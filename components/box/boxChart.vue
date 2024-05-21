<template>
  <el-card style="max-width: 100%;min-height:400px">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
      <draggable class="flex-1 bg-slate-500 basis-[800px]"  :list="widgetList" :group="toOption" 
      @add="add" @change="change">
       <template #item="{element}">
        <div
          class="list-group-item"
          :key="element.showName"
        >
          <component :is="element.componentShowName"/>
        </div>
       </template>
  </draggable>
    </template>
  </el-card>
</template>
<script lang="ts" setup>
import draggable from "vuedraggable";
const widgetList = ref([])
const toOption = reactive({
  name: 'boxChart',
  sort: true,
})
const change = (item:any)=>{
 console.log("boxChart change",item)
}
const add = (item:any)=>{
  console.log("boxChart add",item)
}
</script>