<template>
  <div id="app">
    <router-view v-if="isrouteractive" v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isrouteractive: true
    }
  },
  methods: {
    // 刷新当前页面
    reload: function () {
      this.isrouteractive = false
      // 该方法会在dom更新后执行
      this.$nextTick(function () { this.isrouteractive = true })
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #2c3e50;
  background: #F8F8F8;
}
.picke-time input.el-input__inner{
  border: none!important;
}
.picke-time input.el-input__inner::-webkit-input-placeholder{
    font-size: 12px;
    line-height: 50px;
    text-align: right;
}
</style>
