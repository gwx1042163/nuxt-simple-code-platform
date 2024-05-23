<template>
  <draggable
    @click.prevent.stop="clickComp"
    class="flex-1 menu-contain minH-[1000px]"
    :list="props.showData?.children"
    :group="props.toOption"
    itemKey="showName"
    @add="add"
    @change="change"
  >
    <template #item="{ element }">
      <div class="list-group-item" :key="element.showName">
        <component :toOption="props.toOption" :show-data="element"  :is="element.componentShowName" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineProps } from "vue";
import draggable from "vuedraggable";
const emits = defineEmits(["createComp", "changeDragContainName","updateConfigForm"]);
const props = defineProps(["showData","toOption"]);
const {change,add} = useCommon(emits,props.showData)
const clickComp= ()=>{
  emits('updateConfigForm',props.showData.componentDataName)
}
</script>

<style>
.menu-contain {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  height: 1000px;
}
</style>
