import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginInterface from '../views/LoginInterface.vue'
import HomePage from '../views/HomePage.vue'
import ACL from '../views/regular-atmo-params/ACL.vue';
import DFT from '../views/regular-atmo-params/DFT.vue';
import WS from '../views/regular-atmo-params/WS.vue'
import VIS from '../views/regular-atmo-params/VIS.vue'
import PAS from '../views/regular-atmo-params/PAS.vue'
import TURB from '../views/regular-atmo-params/TURB.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
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
        path: '/turb',
        name: '折射率结构常数',
        component: TURB
      },
      {
        path: '/pas',
        name: '吸收系数',
        component: PAS
      },
      {
        path: '/ws',
        name: '气象参数',
        component: WS
      },
      {
        path: '/vis',
        name: '能见度',
        component: VIS
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

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to: 将要访问的路径
  //from: 从哪个路径跳转而来
  //next: 放行 next('/xx')强制跳转
  if (to.path === '/login') {
    return next()
  }
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
