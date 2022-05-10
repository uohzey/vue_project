import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginInterface from '../views/LoginInterface.vue'
import HomePage from '../views/HomePage.vue'
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
        component: () => import('@/views/regular-atmo-params/ACL.vue')
      },
      {
        path: '/dft',
        name: '天空背景辐亮度',
        component: () => import('@/views/regular-atmo-params/DFT.vue')
      },
      {
        path: '/turb',
        name: '折射率结构常数',
        component: () => import('@/views/regular-atmo-params/TURB.vue')
      },
      {
        path: '/pas',
        name: '吸收系数',
        component: () => import('@/views/regular-atmo-params/PAS.vue')
      },
      {
        path: '/ws',
        name: '气象参数',
        component: () => import('@/views/regular-atmo-params/WS.vue')
      },
      {
        path: '/vis',
        name: '能见度',
        component: () => import('@/views/regular-atmo-params/VIS.vue')
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
