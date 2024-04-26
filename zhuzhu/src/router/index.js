import Vue from 'vue' // 引入路由第三方包
import VueRouter from 'vue-router' // 在vue项目中使用vue-router进行管理
Vue.use(VueRouter)


// 引入组件
// import PageHeader from '@/components/PageHeader.vue'
import EngSentence from '@/components/EngSentence.vue'

// 创建路有实例，进行路由配置
const router = new VueRouter({
    mode: 'history', // 哈西模式:hash  //历史模式：history
    // 1.通过routes添加路由配置，可以添加多个路由配置，routes是一个数组
    routes: [
        // 2.添加单个路由配置，每个路由配置是一个对象，
        // path:路有路径
        // component：组件实例，引入组件就会有组件实例
        {
            path: '/sentence',
            name: 'SentencePage', // 路由名称
            component: EngSentence
        }
    ]

})


// 将路由器实例导出
export default router