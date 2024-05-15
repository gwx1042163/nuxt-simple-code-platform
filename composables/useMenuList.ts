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
import { markRaw } from 'vue'
import getImageUrl from '../utils/getImageUrl'
export const useMenuList = () => {
    // 组件列表
    const menuList = [
    {
        id: '1',
        name: '布局',
        chartList: [
        {
            name: '选项卡',
            componentShowName: 'menuChart',
            componentDataName: 'menuForm',
            showName: 'menuShow',
            icon: getImageUrl('page.png')
        },
        {
            name: '分区',
            componentShowName:  'boxChart',
            componentDataName: 'boxForm',
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
            componentShowName: 'inputtextChart',
            componentDataName: 'inputtextForm',
            showName: 'inputtextShow',
            icon: getImageUrl('单行文本.png')
        },
        {
            name: '多行文本',
            componentShowName: 'multinputtextChart',
            componentDataName: 'multinputtextForm',
            showName: 'multinputtextShow',
            icon: getImageUrl('多行文本.png')
        },
        {
            name: '单选',
            componentShowName: 'singleselectChart',
            componentDataName: 'singleselectForm',
            showName: 'singleselectShow',
            icon: getImageUrl('singleSelect.png')
        },
        {
            name: '多选',
            componentShowName: 'multipleSelectChart',
            componentDataName: 'multipleSelectForm',
            showName: 'multipleSelectShow',
            icon: getImageUrl('mulSelect.png')
        },
        {
            name: '日期时间',
            componentShowName: 'timepickerChart',
            componentDataName: 'timepickerForm',
            showName: 'timepickerShow',
            icon: getImageUrl('date.png')
        },
        {
            name: '富文本',
            componentShowName: 'richtextChart',
            componentDataName: 'richtextForm',
            showName: 'richtextShow',
            icon: getImageUrl('多行文本.png')
        },
        {
            name: '数值',
            componentShowName: 'numberChart',
            componentDataName: 'numberForm',
            showName: 'numberShow',
            icon: getImageUrl('number.png')
        },
        {
            name: '自动编号',
            componentShowName: 'autoNumberChart',
            componentDataName: 'autoNumberForm',
            showName: 'autoNumberShow',
            icon: getImageUrl('autoNumber.png')
        },
        {
            name: '图片',
            componentShowName: 'imageUploadChart',
            componentDataName: 'imageUploadForm',
            showName: 'imageUploadShow',
            icon: getImageUrl('image.png')
        },
        {
            name: '附件',
            componentShowName: 'fileChart',
            componentDataName: 'fileForm',
            showName: 'fileShow',
            icon: getImageUrl('file.png')
        },
        {
            name: '子表单',
            componentShowName: 'subformChart',
            componentDataName: 'subformForm',
            showName: 'subformShow',
            icon: getImageUrl('subForm.png')
        },
        {
          name: '树形表单',
          componentShowName: 'treeformChart',
          componentDataName: 'treeformForm',
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
            componentShowName:  'relationFormChart',
            componentDataName: 'relationFormForm',
            showName: "relationformShow",
            icon: getImageUrl("relationForm.png"),
        },
        {
            name: "用户",
            componentShowName:  'userChart',
            componentDataName: 'userForm',
            showName: "userShow",
            icon: getImageUrl("relationForm.png"),
        },
        {
            name: "组织",
            componentShowName: 'departmentChart',
            componentDataName:'departmentForm',
            showName: "departmentShow",
            icon: getImageUrl("relationForm.png"),
        }
        ],
    },
    ]
    const componentNames = {
        'boxChart': boxChart,
        'boxForm': boxForm,
        'inputtextChart': markRaw(inputtextChart),
        'inputtextForm': markRaw(inputtextForm),
        'multinputtextChart': markRaw(multinputtextChart),
        'multinputtextForm': markRaw(multinputtextForm),
        'singleSelectChart': markRaw(singleSelectChart),
        'singleSelectForm': markRaw(singleSelectForm),
        'multipleSelectChart': markRaw(multiSelectChart),
        'multipleSelectForm': markRaw(multiSelectForm),
        'timepickerChart': markRaw(timepickerChart),
        'timepickerForm': markRaw(timepickerForm),
        'richtextChart': markRaw(richtextChart),
        'richtextForm': markRaw(richtextForm),
        'numberChart': markRaw(numberChart),
        'numberForm': markRaw(numberForm),
        'autoNumberChart': markRaw(autoNumberChart),
        'autoNumberForm': markRaw(autoNumberForm),
        'imageUploadChart': markRaw(imageUploadChart),
        'imageUploadForm': markRaw(imageUploadForm),
        'fileChart': markRaw(fileChart),
        'fileForm': markRaw(fileForm),
        'subformChart': markRaw(subformChart),
        'subformForm': markRaw(subformForm),
        'relationFormChart': markRaw(relationFormChart),
        'relationFormForm': markRaw(relationFormForm),
        'userChart': markRaw(userChart),
        'userForm': markRaw(userForm),
    }
    return  {
        menuList,
        componentNames,
    }
}
