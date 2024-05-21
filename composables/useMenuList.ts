import menuChart from '~/components/menu/menuChart.vue'
import menuForm from '~/components/menu/menuForm.vue'
// 引入分区组件
import boxChart from '../components/box/boxChart.vue'
import boxForm from '../components/box/boxForm.vue'

// 引入单行文本组件
import inputtextChart from '../components/inputText/inputTextChart.vue'
// 引入单行文本组件表单配置组件
import inputtextForm from '../components/inputText/inputTextForm.vue'

// 引入多行文本框组件表单配置组件
import multinputtextChart from '../components/multiInputText/multiInputTextChart.vue'
// 引入多行文本框组件
import multinputtextForm from '../components/multiInputText/multiInputTextForm.vue'

// 引入单选组件
import singleSelectChart from '../components/singleSelect/singleSelectChart.vue'
// 引入单选下拉框组件表单配置组件
import singleSelectForm from '../components/singleSelect/singleSelectForm.vue'

// 引入多选下拉框组件
import multiSelectChart from "../components/multiSelect/multiSelectChart.vue";
// 引入多选下拉框组件
import multiSelectForm from  "../components/multiSelect/multiSelectForm.vue";
// 引入日期时间选择器组件
import timepickerChart from '../components/timePicker/timePickerChart.vue'
// 引入日期时间选择器组件
import timepickerForm from '../components/timePicker/timePickerForm.vue'

// 引入富文本组件表单配置组件
import richtextChart from '../components/richText/richTextChart.vue'

// 引入富文本组件表单配置组件
import richtextForm from '../components/richText/richTextForm.vue'


// 引入数值组件
import numberChart from '../components/number/numberChart.vue'
import numberForm from '../components/number/numberForm.vue'

// 引入自动编号组件
import autoNumberChart from '../components/autoNumber/autoNumberChart.vue'
import autoNumberForm from '../components/autoNumber/autoNumberForm.vue'

// 引入图片上传组件
import imageUploadChart from '../components/imageUpload/imageUploadChart.vue'
import imageUploadForm from '../components/imageUpload/imageUploadForm.vue'

// 引入附件上传组件
import fileChart from '../components/file/fileChart.vue'
import fileForm from '../components/file/fileForm.vue'

// 引入子表单组件
import subformChart from '../components/subForm/subFormChart.vue'
import subformForm from  '../components/subForm/subFormForm.vue'

// 关联表单
import relationFormChart from '../components/relationForm/relationFormChart.vue'
import relationFormForm from '../components/relationForm/relationFormForm.vue';

// 引入用户组件的配置表单
import userChart from '../components/user/userChart.vue'
import userForm from '../components/user/userForm.vue'
import departmentChart from '~/components/department/departmentChart.vue'
import departmentForm from '~/components/department/departmentForm.vue'
import getImageUrl from '../utils/getImageUrl'
import TreeformChart from '~/components/treeForm/treeformChart.vue'
import TreeformForm from '~/components/treeForm/treeformForm.vue'
import { markRaw } from 'vue'
export const useMenuList = () => {
    // 组件列表
    const menuList = [
    {
        id: '1',
        name: '布局',
        chartList: [
        {
            name: '选项卡',
            componentShowName: markRaw(menuChart),
            componentDataName:  markRaw(menuForm),
            showName: 'menuShow',
            icon: getImageUrl('page.png')
        },
        {
            name: '分区',
            componentShowName:  markRaw( boxChart),
            componentDataName: markRaw( boxForm),
            showName: 'boxShow',
            icon: getImageUrl('box.png')
        }
        ]
    },
    {
        id: '2',
        name: '组件',
        chartList: [
        {
            name: '单行文本',
            componentShowName:  markRaw(inputtextChart),
            componentDataName:  markRaw(inputtextForm),
            showName: 'inputtextShow',
            icon: getImageUrl('单行文本.png')
        },
        {
            name: '多行文本',
            componentShowName:  markRaw(multinputtextChart),
            componentDataName:  markRaw(multinputtextForm),
            showName: 'multinputtextShow',
            icon: getImageUrl('多行文本.png')
        },
        {
            name: '单选',
            componentShowName:  markRaw(singleSelectChart),
            componentDataName:  markRaw(singleSelectForm),
            showName: 'singleselectShow',
            icon: getImageUrl('singleSelect.png')
        },
        {
            name: '多选',
            componentShowName: markRaw( multiSelectChart),
            componentDataName:  markRaw(multiSelectForm),
            showName: 'multipleSelectShow',
            icon: getImageUrl('mulSelect.png')
        },
        {
            name: '日期时间',
            componentShowName:  markRaw(timepickerChart),
            componentDataName:  markRaw(timepickerForm),
            showName: 'timepickerShow',
            icon: getImageUrl('date.png')
        },
        {
            name: '富文本',
            componentShowName:  markRaw(richtextChart),
            componentDataName:  markRaw(richtextForm),
            showName: 'richtextShow',
            icon: getImageUrl('多行文本.png')
        },
        {
            name: '数值',
            componentShowName:  markRaw(numberChart),
            componentDataName:  markRaw(numberForm),
            showName: 'numberShow',
            icon: getImageUrl('number.png')
        },
        {
            name: '自动编号',
            componentShowName:  markRaw(autoNumberChart),
            componentDataName:  markRaw(autoNumberForm),
            showName: 'autoNumberShow',
            icon: getImageUrl('autoNumber.png')
        },
        {
            name: '图片',
            componentShowName:  markRaw(imageUploadChart),
            componentDataName: markRaw( imageUploadForm),
            showName: 'imageUploadShow',
            icon: getImageUrl('image.png')
        },
        {
            name: '附件',
            componentShowName:  markRaw(fileChart),
            componentDataName:  markRaw(fileForm),
            showName: 'fileShow',
            icon: getImageUrl('file.png')
        },
        {
            name: '子表单',
            componentShowName:  markRaw(subformChart),
            componentDataName:  markRaw(subformForm),
            showName: 'subformShow',
            icon: getImageUrl('subForm.png')
        },
        {
          name: '树形表单',
          componentShowName:  markRaw(TreeformChart),
          componentDataName:  markRaw(TreeformForm),
          showName: 'treeformShow',
          icon: getImageUrl('subForm.png')
        }
        ]
    },
    {
        id: '3',
        name: '高级组件',
        chartList: [
        {
            name: "关联表单",
            componentShowName:   markRaw(relationFormChart),
            componentDataName: markRaw( relationFormForm),
            showName: "relationformShow",
            icon: getImageUrl("relationForm.png"),
        },
        {
            name: "用户",
            componentShowName:  markRaw( userChart),
            componentDataName: markRaw( userForm),
            showName: "userShow",
            icon: getImageUrl("relationForm.png"),
        },
        {
            name: "组织",
            componentShowName:  markRaw(departmentChart),
            componentDataName:  markRaw( departmentForm),
            showName: "departmentShow",
            icon: getImageUrl("relationForm.png"),
        }
        ],
    },
    ]
    const menuInfo = {
        name: '选项卡',
        componentShowName:  markRaw(menuChart),
        componentDataName:  markRaw(menuForm),
        showName: 'menuShow',
        icon: getImageUrl('page.png')
    }
    return  {
        menuList,
        menuInfo
    }
}
