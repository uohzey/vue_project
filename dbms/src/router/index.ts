import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import AtmosphereCoherenceLength from '../views/AtmosphereCoherenceLength.vue';
import DFT from '../views/DFT.vue';
import WeatherStation from '../views/WeatherStation.vue'
import Profile from '../views/DFT.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/acl',
        name: '大气相干长度',
      },
      {
        path: '/acl',
        name: '大气相干长度',
        component: AtmosphereCoherenceLength
      },
      {
        path: '/dft',
        name: '天空背景辐亮度',
        component: DFT
      },
      {
        path: '/ws',
        name: '气象参数',
        component: WeatherStation
      },
    ]
  },
  {
    path: '/profile',
    name: '廓线参数',
    component: Login,
    hidden: true
  },

]

const router = new VueRouter({
  routes
})

export default router
