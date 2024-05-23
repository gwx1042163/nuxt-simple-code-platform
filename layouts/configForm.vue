<template>
  <div>
    <div class="blod pb-[30px] h-[30px] line-h-[30px] pl-[5%]">选项卡</div>
    <el-form
      :model="configForm"
      label-width="auto"
      label-position="top"
      class="w-[90%] pl-[5%]"
    >
      <el-form :disabled="true">
        <el-form-item label="名称" :disabled="true">
          <el-input v-model="configForm.name" />
        </el-form-item>
      </el-form>
      <el-form-item label="布局">
        <el-select v-model="configForm.layout">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" :inline="true">
        <el-radio-group v-model="configForm.visible">
          <el-radio value="显示">显示</el-radio>
          <el-radio value="隐藏">隐藏</el-radio>
        </el-radio-group>
      </el-form-item>
      <NuxtPage/>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { ElForm, ElFormItem } from "element-plus";
// do not use same name with ref
const configForm = reactive({
  name: "",
  layout: "",
  visible: false,
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

