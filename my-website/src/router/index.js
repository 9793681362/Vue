import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import English from '@/views/english'


Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    component: Home
  },
  {
    path: '/english',
    component: English
  }
]

const router = new VueRouter({
  routes
})

export default router





