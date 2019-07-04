<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="newxin" v-if="down">{{pulldownTip.text}}</div>
        <div>
          <div class="swiper-box">
            <Swiper></Swiper>
          </div>
          <div class="SelectionAdd" @click="SelectionAdd">{{areaCode.city}}</div>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="5"><div class="Button-bg01" @click="LaCasaRouterTo('1')">房屋贷</div></el-col>
            <el-col :span="5"><div class="Button-bg02" @click="LaCasaRouterTo('2')">车抵贷</div></el-col>
            <el-col :span="5"><div class="Button-bg03" @click="LaCasaRouterTo('3')">保单贷</div></el-col>
            <el-col :span="5"><div class="Button-bg04" @click="LaCasaRouterTo('4')">公积金贷</div></el-col>
          </el-row>
          <el-row class="tip-title">
            <el-col :span="22" :offset="1"><img src="../../../assets/image/desd.png" />大额速贷</el-col>
          </el-row>
          <el-row class="content-bg">
            <el-col :span="22" :offset="1">
              <div v-for="(items, index) of Main" :key="index">
                  <div class="list" v-for="item of items" :key="item.id">
                    <el-row :gutter="20">
                      <el-col :span="12" class="list-title">{{item.productName}}<img src="../../../assets/image/hot.png" /> </el-col>
                      <el-col :span="12" align="right"><i class="num">{{item.applyForCount}}</i>人已申请</el-col>
                    </el-row>
                    <el-row :gutter="20" class="list-row-mg">
                      <el-col :span="9" class="list-money">{{item.lines1}}万</el-col>
                      <el-col :span="15">
                        <span class="rate">日利率：{{item.dayInterestRate}}%</span>
                        <span class="list-button-submit-bg"  @click="routerContent(item.productId)">立即申请</span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="7" class="describe">最高金额(元)</el-col>
                      <el-col :span="17">
                        <div  class="list-tag" v-for="items in item.productLabels" :key="items">{{items}}</div>
                      </el-col>
                    </el-row>
                  </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="newxin" v-if="up">{{pulldownTip.textup}}</div>
        <div style="height: 60px;"></div>
        <div class="loading" v-show="loading">
          <img class="loading-img" src="../../../assets/image/loading.gif" alt="">
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import BScroll from 'better-scroll'
import Swiper from './Swiper'
import Footer from '../Footer/Footer'
let page = 1
export default {
  inject: ['reload'],
  name: 'Home',
  components: {
    Swiper,
    Footer
  },
  data () {
    return {
      BannerImg: [],
      arrbanner: '',
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
    //  -----------------
    }
  },
  mounted () {
    if (localStorage.getItem('CityCode') === null) {
      this.addcard()
    } else {
      this.GetData()
    }
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
    // 城市获取IP
    addcard () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/index/indexPosition', {
      })
        .then((res) => {
          res = res.data
          this.areaCode.city = res.data.city
          this.areaCode.CityCode = res.data.CityCode
          localStorage.setItem('city', this.areaCode.city)
          localStorage.setItem('CityCode', this.areaCode.CityCode)
          this.GetData()
        })
        .catch((res) => {
        })
    },
    // 跳转选择城市
    SelectionAdd () {
      this.$router.push({path: '/SelectionAdd'})
    },
    // 获取数据
    GetData () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/H5Product/list', qs.stringify({
        page: page++,
        size: '5',
        areaCode: localStorage.getItem('CityCode')
      }))
        .then((res) => {
          this.areaCode.city = localStorage.getItem('city')
          this.loading = false
          res = res.data
          this.Main.push(res.data.records)
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
    // 跳转4个扣子
    LaCasaRouterTo (val) {
      this.$router.push({path: '/LaCasa', query: {id: val}})
    },
    // 列表 跳转产品详情
    routerContent (val) {
      this.$router.push({path: '/Content', query: {id: val}})
      localStorage.setItem('productId', val)
    },
    //  上拉加载下拉刷新
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
        // console.log(this.scroll)
        // console.log(this.scroll.maxScrollY + '总距离----下拉的距离' + pos.y)
      })
      // console.log(this.scroll.maxScrollY)
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
  .swiper-box{
    height: 120px;
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
  /*------------------------*/
  .SelectionAdd{
    position: absolute;
    padding:5px 10px 5px 28px;
    background: rgba(0,0,0,0.6) url("../../../assets/image/selectionAdd-icon.png") no-repeat left 10px center;
    background-size: 16px;
    border-radius: 10px;
    box-shadow:0 0 15px #fff;
    -moz-box-shadow:0 0 15px #fff;
    -webkit-box-shadow:0 0 15px #fff;
    color: #FFFFFF;
    top: 90px;
    left: 25px;
    font-size: 12px;
    z-index: 9999;
  }
  .row-bg{
    background: #FFFFFF;
    text-align: center;
    line-height: 84px;
    color: #FFFFFF;
  }
  .Button-bg01{
    height: 84px;
    background: url("../../../assets/image/Button-bg01.png") no-repeat center center;
    background-size: 100%;
  }
  .Button-bg02{
    height: 84px;
    background: url("../../../assets/image/Button-bg02.png") no-repeat center center;
    background-size: 100%;
  }
  .Button-bg03{
    height: 84px;
    background: url("../../../assets/image/Button-bg03.png") no-repeat center center;
    background-size: 100%;
  }
  .Button-bg04{
    height: 84px;
    background: url("../../../assets/image/Button-bg04.png") no-repeat center center;
    background-size: 100%;
  }
  .tip-title{
    height: 32px;
    line-height: 32px;
    margin: 7px 0;
    background: #f8f8f8;
    color: #333333;
    font-size: 16px;
  }
  .tip-title img{
    width: 18px;
    height: 18px;
    margin-right: 3px;
  }
  /*列表开始*/
  .content-bg{
    background: #FFFFFF;
  }
  .list{
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid #f6f6f6;
  }
  .num{
    color: #fe9a3a;
  }
  .list-title{
    text-align: left;
    color: #343434;
    font-size: 16px;
    font-weight: bold;
  }
  .list-title img{
    width: 23px;
    height: 9px;
    margin-left: 8px;
  }
  .list-row-mg{
    margin: 10px 0;
  }
  .list-money{
    font-size: 26px;
    font-weight: bold;
    color: #f99d30;
  }
  .rate{
    width: 55%;
    height: 26px;
    line-height: 26px;
    display: block;
    float: left;
    color: #9b9b9b;
  }
  .list-button-submit-bg{
    width: 45%;
    height: 22px;
    display: block;
    line-height: 22px;
    text-align: center;
    float: right;
    margin: 2px 0;
    border-radius: 30px;
    background: #ff942a;
    font-size: 12px;
    color: #FFFFFF;
  }
  .describe{
    height: 20px;
    line-height: 20px;
    color: #676767;
    font-size: 12px;
  }
  .list-tag{
    text-align: center;
    height: 20px;
    line-height: 20px;
    color: #9b9b9b;
    float: right;
    border-radius: 15px;
    padding:0 10px;
    margin-left: 5px;
    border: 1px solid #9b9b9b;
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
</style>
