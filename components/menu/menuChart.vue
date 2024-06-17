<template>
  <draggable class="flex-1 menu-contain minH-[1000px]" :list="props.showData?.children" :group="props.toOption"
    itemKey="showName" @add="add" @change="change">
    <template #item="{ element }">
      <div :class="lay" class="inline-block" :key="element.showName">
        <component :toOption="props.toOption" :show-data="element" @click.stop.prevent="clickComp(element)"
          :is="element.componentShowName" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import { ca } from "element-plus/es/locales.mjs";
import { ref, defineEmits, defineProps } from "vue";
import draggable from "vuedraggable";
const emits = defineEmits(["createComp", "changeDragContainName"]);
const props = defineProps(["showData", "toOption"]);
const { change, add } = useCommon(emits, props.showData)
const clickComp = (item: any) => {
  eventBus.emit('updateConfigForm', item)
}

const lay = ref('w-[100%]')
eventBus.on('updateChartByForm', ({ chartId, formValue }) => {
  if (props.showData.id != chartId) {
    return;
  }
  if (formValue.layout) {
    switch (formValue.layout) {
      case "整行": lay.value = 'w-[100%]'; break;
      case "1/4": lay.value = 'w-[25%]'; break;
      case "1/3": lay.value = 'w-[33.3%]'; break;
      case "1/2": lay.value = 'w-[50%]'; break;
      case "2/3": lay.value = 'w-[66.7%]'; break;
      case "3/4": lay.value = 'w-[75%]'; break;
      default: lay.value = "w-[100%]"; break;

    }
  }


})
</script>

<style>
.menu-contain {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  height: 1000px;
}
</style>
