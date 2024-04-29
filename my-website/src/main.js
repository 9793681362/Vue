import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/global.css' // 导入全局css样式
import '@/utils/vant-ui'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
