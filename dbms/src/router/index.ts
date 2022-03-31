import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Acl from '../views/Acl.vue';
import WeatherStation from '../views/WeatherStation.vue'
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
        name: 'Acl',
        component: Acl
      },
      {
        path: '/ws',
        name: '常规气象参数',
        component: WeatherStation
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
