import mitt from 'mitt'
type Events  ={
    //更新的布局
    updateLayOut:{
        chartId:string,
        layout:string
    },
    //更新配置的form
    updateConfigForm:object
}
const eventBus =  mitt<Events>()
export default eventBus