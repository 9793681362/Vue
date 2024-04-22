import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';// 引入bootstarp 字体图标


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
