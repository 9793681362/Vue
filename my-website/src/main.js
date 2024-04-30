import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/global.css' // 导入全局css样式
import '@/utils/vant-ui'
import 'bootstrap-icons/font/bootstrap-icons.css';  // 全局引入bootstarp字体图标，可以使用伪元素


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
