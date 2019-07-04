<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="newxin" v-if="down">{{pulldownTip.text}}</div>
        <div>
          <div class="box">
            <div v-for="(items, index) of Main" :key="index">
              <div class="list-bg" v-for="item of items" :key="item.id">
                <div class="list-header">
                  <span class="name">贷款企业：{{item.merchantsName}}</span>
                  <span class="status">{{item.statusName}}</span>
                </div>
                <div class="list-content">
                  <img :src="getImgUrl(item.orderType)" />
                  <div class="let-h">
                    <span class="name01">{{item.orderTypeName}}</span>
                    <span class="name02">{{item.productName}}</span>
                  </div>
                  <span class="name03">￥ {{item.amount}}万</span>
                  <a class="contact" href="tel:15529561660">专属客服</a>
                  <div v-if="item.status === '10' || item.status === '20'" class="cancel" @click="withdrawClick(item.id)">取消申请</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="newxin" v-if="up">{{pulldownTip.textup}}</div>
        <div style="height: 60px;"></div>
        <div class="loading" v-show="loading">
          <img class="loading-img" src="../../../assets/image/loading.gif" alt="">
        </div>
        <div class="con-bg-img" v-if="Main == ''">暂无申请贷款</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import BScroll from 'better-scroll'
let page = 1
export default {
  name: 'LoanSpeed',
  inject: ['reload'],
  data () {
    return {
      cur: 0,
      Main: [],
      areaCode: {
        city: '加载中',
        CityCode: ''
      },
      //  上拉加载下拉刷新
      loading: false,
      loadingConnecting: false,
      down: false,
      up: false,
      pulldownTip: {
        text: '松开立即刷新', // 松开立即刷新
        textup: '加载中…', // 松开立即刷新
        rotate: '' // icon-rotate
      }
    }
  },
  created () {
    this.GetData()
  },
  mounted () {
    setTimeout(() => {
      this.BS()
    }, 20)
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data () {
      setTimeout(() => {
        this.BS()
      }, this.refreshDelay)
    }
  },
  beforeDestroy () {
    page = 1
  },
  methods: {
    getImgUrl (icon) {
      return require('../../../assets/image/' + icon + '.png')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    // 取消申请
    withdrawClick (id) {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/H5Order/withdraw', qs.stringify({
        id: id
      }))
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            this.reload()
            this.$toast.success('成功')
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
        })
    },
    // 获取数据
    GetData () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/H5Order/orderProgress', qs.stringify({
        page: page++,
        size: '4'
      }))
        .then((res) => {
          this.loading = false
          res = res.data
          if (res.code === 200) {
            this.Main.push(res.data.records)
          } else if (res.code === 401) {
            this.$router.push({path: '/Login'})
          } else {
            this.$toast.fail(res.msg)
          }
          // 使用refresh 方法 来更新scroll 回弹 解决无法滚动的问题
          this.$nextTick(() => {
            if (!this.scroll) {
            } else {
              this.scroll.refresh()
            }
          })
          if (res.data.records.length === 0) {
            this.pulldownTip.textup = '已全部加载完毕'
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    BS () {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
      })
      this.scroll.on('scroll', pos => {
        this.scroll.hasVerticalScroll = true
        // 如果下拉超过50px 就显示下拉刷新的文字
        if (pos.y > 50) {
          this.pulldownTip.text = '放手刷新'
          this.down = true
        } else {
          this.down = false
        }
      })
      // touchEnd 通过这个方法来监听下拉刷新
      this.scroll.on('touchEnd', pos => {
        // 下拉动作
        if (pos.y > 50) {
          this.reload()
          this.down = false
        }
        // 上拉加载
        if (this.scroll.maxScrollY > pos.y + 10) {
          this.up = true
          this.GetData()
          setTimeout(() => {
            this.SetUp()
          }, 1500)
        }
      })
    },
    SetUp () {
      this.up = false
    }
  },
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 3
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style scoped>
  .con-bg-img{
    font-size: 26px;
    color: #DDD;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -25px;
  }
  /*<!---->上拉加载下拉刷新*/
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
  }
  .wrapper .content {
    width:100%;
  }
  /* 刷新 */
  .newxin {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #666666;
    font-size: 12px;
  }
  .loading{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,.6);
  }
  .loading-img{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 33px;
    transform: translate(-50%, -50%);
  }
  /*----------------*/
  .box{
    margin: 20px 10px;
  }
  .list-bg{
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
    margin-bottom: 10px;
    background: #ffffff;
  }
  .list-header{
    height: 30px;
    padding: 7px 15px 0 15px;
    border-bottom: 1px solid #f0f0f0;
  }
  .list-header .name{
    color: #373737;
    line-height: 30px;
    font-size: 12px;
    float: left;
  }
  .list-header .status{
    color: #f09e48;
    line-height: 30px;
    font-size: 12px;
    float: right;
  }
  .list-content{
    padding: 7px 15px;
    height: 100%;
    overflow: hidden;
  }
  .list-content img{
    width: 55px;
    height: 55px;
    border-radius: 8px;
    float: left;
    margin-right: 15px;
  }
  .let-h{
    width: calc(100% - 150px);
    float: left;
  }
  .list-content .name01{
    height: 33px;
    color: #373737;
    font-size: 12px;
    margin-right: 15px;
    float: left;
  }
  .list-content .name02{
    height: 33px;
    color: #373737;
    font-size: 12px;
    float: left;
  }
  .list-content .name03{
    height: 33px;
    color: #000000;
    line-height: 33px;
    font-weight: 500;
    font-size: 20px;
    float: right;
  }
  .cancel{
    width: 70px;
    height: 22px;
    background: #ff861d;
    color: #FFFFFF;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    float: right;
    display: block;
    border-radius: 8px;
    margin-right: 15px;
  }
  .contact{
    width: 70px;
    height: 22px;
    display: inline-block;
    background: #ff861d;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    float: right;
  }
</style>
