import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    // 默认跳转地址
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    // 默认跳转地址
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
      },
      {
        path: '/pwdsetting',
        name: 'PwdSetting',
        component: () => import('../views/PwdSetting.vue'),
      },
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404',
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
