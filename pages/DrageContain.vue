<template>
  <draggable class=" flex-1 bg-slate-500 basis-[800px]"  :list="widgetList" :group="toOption" @add="add" @change="change">
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
<script setup>
import draggable from "vuedraggable";
const widgetList = ref([])
const toOption = reactive({
  name: 'chart',
  sort: true,
  dragClass: 'self_drag'
})
const change = (item)=>{
 console.log(item)
}
</script>