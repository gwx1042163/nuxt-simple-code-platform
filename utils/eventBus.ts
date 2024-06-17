import mitt from 'mitt'
type Events  ={
    //更新的布局
    updateChartByForm:{
        chartId:string,
        formValue:any
    },
    //更新配置的form
    updateConfigForm:object,
    start:{
        parent:Object,
        child:Object
    },
    end:{
        parent:Object,
        child:Object
    },
}
const eventBus =  mitt<Events>()
export default eventBus