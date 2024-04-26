import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index' // 引入路由模块


Vue.config.productionTip = false

// Vue：本质功能就是进行渲染
new Vue({
  router, // 注册路由器
  render: h => h(App),
}).$mount('#app')
