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
      path: '/SelectionAdd',
      name: 'SelectionAdd',
      component: () => import('../components/pages/Home/SelectionAdd'),
      meta: {
        title: '城市列表'
      }
    },
    {
      path: '/Car',
      name: 'Car',
      component: () => import('../components/pages/Home/Car'),
      meta: {
        title: '选择车系'
      }
    },
    {
      path: '/LaCasa',
      name: 'LaCasa',
      component: () => import('../components/pages/Home/LaCasa')
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
      path: '/LoanInfo',
      name: 'LoanInfo',
      component: () => import('../components/pages/Home/LoanInfo'),
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
      path: '/MyCollection',
      name: 'MyCollection',
      component: () => import('../components/pages/My/MyCollection'),
      meta: {
        title: '我的收藏'
      }
    },
    {
      path: '/MyTeam',
      name: 'MyTeam',
      component: () => import('../components/pages/My/MyTeam'),
      meta: {
        title: '我的团队'
      }
    },
    {
      path: '/MyMoneybag',
      name: 'MyMoneybag',
      component: () => import('../components/pages/My/MyMoneybag'),
      meta: {
        title: '我的钱包'
      }
    },
    {
      path: '/BankCard',
      name: 'BankCard',
      component: () => import('../components/pages/My/BankCard'),
      meta: {
        title: '银行卡'
      }
    },
    {
      path: '/AddCard',
      name: 'AddCard',
      component: () => import('../components/pages/My/AddCard'),
      meta: {
        title: '添加储蓄卡'
      }
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: () => import('../components/pages/My/Feedback'),
      meta: {
        title: '意见反馈'
      }
    },
    {
      path: '/Help',
      name: 'Help',
      component: () => import('../components/pages/My/Help'),
      meta: {
        title: '帮助中心'
      }
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/Login/Login.vue'], resolve)
    }
  ]
})
