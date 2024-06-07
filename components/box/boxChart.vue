<template>
  <el-card class="max-w-full min-h-fit " :class="'h-['+props.height+']px'" >
    <template #header>
      <div class="card-header">
        <span>{{ props.showData?.title }}</span>
      </div>
    </template>
      <draggable
         class="flex-1min-h-[200px]"
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
const emits = defineEmits(["createComp"]);
const props = defineProps(["showData", "toOption","height"]);
const {change,add} = useCommon(emits,props.showData)
const clickItem = (ele:any)=>{
  eventBus.emit('updateConfigForm',ele)
}
</script>