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
      path: '/Content',
      name: 'Content',
      component: () => import('../components/pages/Home/Content'),
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/LoanApply',
      name: 'LoanApply',
      component: () => import('../components/pages/Home/LoanApply'),
      meta: {
        title: '贷款申请'
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
      path: '/LoanSpeed',
      name: 'LoanSpeed',
      component: () => import('../components/pages/My/LoanSpeed'),
      meta: {
        title: '贷款进度'
      }
    },
    {
      path: '/Coupon',
      name: 'Coupon',
      component: () => import('../components/pages/My/Coupon'),
      meta: {
        title: '优惠券'
      }
    },
    {
      path: '/InviteGift',
      name: 'InviteGift',
      component: () => import('../components/pages/My/InviteGift'),
      meta: {
        title: '邀请有礼'
      }
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: () => import('../components/pages/My/Activity'),
      meta: {
        title: '活动中心'
      }
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/Login/Login.vue'], resolve)
    }
  ]
})
