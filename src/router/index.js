import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../components/pages/Home/Home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/LaCasa',
      name: 'LaCasa',
      component: () => import('../components/pages/Home/LaCasa'),
      meta: {
        title: '房屋贷'
      }
    },
    {
      path: '/Borrow',
      name: 'Borrow',
      component: () => import('../components/pages/Borrow/Borrow'),
      meta: {
        title: '满易贷'
      }
    },
    {
      path: '/My',
      name: 'My',
      component: () => import('../components/pages/My/My'),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/Login/Login.vue'], resolve)
    }
  ]
})
