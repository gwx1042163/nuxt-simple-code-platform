<template>
        <div id="qrcode" class="w-[300px] h-[300px]">
        </div>
</template>
<script setup>
import { reactive,onMounted } from 'vue';
useHead({
    title: '微信登录',
    script: [
        {
            src: 'https://cdn.bootcdn.net/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
        },
        { src: 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js', 
        type: 'text/javascript' },
        { children:
             `var obj = 
             new WxLogin({self_redirect: false, id: "qrcode", appid: "wxd0074d52507670cf", scope: "snsapi_login", redirect_uri: "https%3A%2F%2Fwww.xxxx.com%2FloginRedirect", state: "", style: "white", href: ""});`
             , body: true }

    ]
})
const data = reactive({
		qrcodeObj: ''
	})

const createQrcode = () => {
  data.qrcodeObj =   new QRCode('qrcode',
        {
            text:"江山王位",
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            quality: 0.3,
            margin: 5,
            color: {
                dark: "#0A7AFF", 	// 可选，前景色，格式必须是十六进制的，如果不是则会报错，比如：blue或rgb(255,245,255)等
                light: "#F73128", // 可选，背景色，格式同上
            },
        });
}
onMounted(()=>{
    createQrcode()
})
</script>
