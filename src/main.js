// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import global from './store/global'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css'
import VueWechatTitle from 'vue-wechat-title'
// 复制到粘贴板插件
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
// 引入Axios
Vue.prototype.$axios = axios
Vue.prototype.GLOBAL = global
Vue.use(Vuex)
Vue.use(VueClipboard)
// ---------
Vue.use(VueWechatTitle)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
