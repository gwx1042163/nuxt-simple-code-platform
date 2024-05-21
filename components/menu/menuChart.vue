<template>
  <draggable
    class="flex-1 menu-contain minH-[1000px]"
    :list="props.showData?.children"
    :group="toOption"
    itemKey="showName"
    @add="add"
    @change="change"
  >
    <template #item="{ element }">
      <div class="list-group-item" :key="element.showName">
        <component :is="element.componentShowName" />
      </div>
    </template>
  </draggable>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineProps } from "vue";
import draggable from "vuedraggable";
const toOption = reactive({
  name: "menu-chart",
  sort: true,
});
const emits = defineEmits(["createComp", "changeDragContainName"]);
const props = defineProps(["showData"]);
const currentEle = ref({});
let index = ref(0);
const change = (item: any) => {
  currentEle.value = item.added.element;
  index.value = item.added.newIndex;
};

const add = () => {
  emits("createComp", currentEle.value, props.showData);
};

</script>

<style>
.menu-contain {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  height: 1000px;
}
</style>
