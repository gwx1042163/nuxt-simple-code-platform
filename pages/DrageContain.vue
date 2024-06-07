<template>
  <div class="w-[500px]">
    <el-tabs
    v-model="activeName"
    type="border-card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane v-for="panelItem in data.menuList" :key="panelItem.id" :name="panelItem.title"  :label="panelItem.title" >
      <component :is="panelItem.componentShowName" :toOption="toOption" :showData="panelItem"  @createComp="createComp" @click.stop.prevent="clickItem(panelItem)"/>
    </el-tab-pane>
  </el-tabs>
    
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { cloneDeep } from 'lodash'
import { ElTabPane, ElTabs } from "element-plus";
import uuid from "~/utils/uuid";
const {menuInfo } = useMenuList()
const activeName = ref("默认选项卡");
const data = reactive({
  menuList: [
    {
      ...cloneDeep(menuInfo),
      title:"默认选项卡",
      id: uuid(10),
      children:[]
    }
  ],
});
const toOption = reactive({
  name: "menu-chart",
  sort: true,
});
const createComp = (current,parent,index)=>{
  const temp = {
      ...cloneDeep(current),
      title:current.name,
      id: uuid(10),
      children:[]
  }
  if(current.showName == "menuShow" &&parent.showName == "menuShow"  ){
      parent.children.pop()
      data.menuList.push(temp)
      temp.title = "选项卡"+ data.menuList.length
  }else{
    parent.children.splice(index,1,temp)
  }
}
const clickItem=(panelItem)=>{
  eventBus.emit('updateConfigForm',panelItem)
}

</script>
