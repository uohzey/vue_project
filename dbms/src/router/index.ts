import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginInterface from '../views/LoginInterface.vue'
import HomePage from '../views/HomePage.vue'
import ACL from '../views/ACL.vue';
import DFT from '../views/DFT.vue';
import WS from '../views/WS.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginInterface,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    children: [
      {
        path: '/acl',
        name: '大气相干长度',
        component: ACL
      },
      {
        path: '/dft',
        name: '天空背景辐亮度',
        component: DFT
      },
      {
        path: '/ws',
        name: '气象参数',
        component: WS
      },
    ]
  },
  {
    path: '/profile',
    name: '廓线参数',
    component: LoginInterface,
    hidden: true
  },

]

const router = new VueRouter({
  routes
})

export default router
