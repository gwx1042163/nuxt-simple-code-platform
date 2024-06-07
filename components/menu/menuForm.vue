<template>
  <div>
    <div class="title">选项卡</div>
    <el-form
      :model="configForm"
      label-width="auto"
      label-position="top"
      class="w-[90%] pl-[5%]"
    >
      <el-form :disabled="true">
        <el-form-item label="名称">
          <el-input v-model="props.chartName" />
        </el-form-item>
      </el-form>
      <el-form-item label="布局">
        <el-select v-model="configForm.layout"  @change="onChange" >
          <el-option label="整行" value="整行" />
          <el-option label="1/4" value="1/4" />
          <el-option label="1/3" value="1/3" />
          <el-option label="1/2" value="1/2" />
          <el-option label="2/3" value="2/3" />
          <el-option label="3/4" value="3/4" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { ElForm, ElFormItem } from "element-plus";
const props = defineProps(['chartId','chartName'])
// do not use same name with ref
const configForm = reactive({
  name: "",
  layout: "整行",
  visible: false,
});
const emits = defineEmits(['updateLayout'])
const onChange = (val:string) => {
  eventBus.emit('updateLayOut',{
    chartId:props.chartId,
    layout:val
  })
};
</script>
<style  scoped>
.title{
    width: 100%;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
::v-deep .el-form-item__label{
   line-height: 22px;
    margin-bottom: 8px;
    color: #606266;
    font-size: 12px;
}
</style>
