<template>
    <div>
        <clientOnly >
            <div>测试clientOnly</div>
            <template #fallback>
                <div>他将在服务端呈现</div>
            </template>
        </clientOnly>
        <DevOnly>
            他将在开发环境部署
        </DevOnly>
    </div>
</template>