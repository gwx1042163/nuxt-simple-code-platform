<template>
  <el-card style="max-width: 100%; min-height: 400px">
    <template #header>
      <div class="card-header">
        <span>{{ props.showData?.title }}</span>
      </div>
    </template>
      <draggable
         class="flex-1 bg-slate-500 h-[300px]"
        :list="props.showData?.children"
        :group="props.toOption"
        @change="change"
        @add="add"
      >
        <template #item="{ element }">
          <div class="list-group-item" :key="element.showName" @click.stop="clickItem(element)">
            <component :is="element.componentShowName"  />
          </div>
        </template>
      </draggable>
  </el-card>
</template>
<script lang="ts" setup>
import draggable from "vuedraggable";
import { defineEmits,defineProps } from "vue";
const emits = defineEmits(["createComp",'updateConfigForm']);
const props = defineProps(["showData", "toOption"]);
const {change,add} = useCommon(emits,props.showData)
const clickItem = (ele:any)=>{
  emits('updateConfigForm',ele)
}
</script>
<style scoped>
</style>