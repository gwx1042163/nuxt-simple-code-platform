export default function getImageUrl(imgUrl:string) {
    // 传入不完整的路径
    // 在方法内拼接位需要使用的路径
   return new URL(`../assets/imgs/menuicons/${imgUrl}`, import.meta.url).href
}