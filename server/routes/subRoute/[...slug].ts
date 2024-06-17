const router = createRouter()
router.get('/test',defineEventHandler(()=>"嵌套路由"))
export default useBase('/subRoute',router.handler)