<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="newxin" v-if="down">{{pulldownTip.text}}</div>
        <div>
          <el-image class="banner" :src="src"></el-image>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="7" v-for="item in wpList" :key="item.name" id="TypeCut" :class="{active : active == item.name}" @click.native="selected(item.name,item.id)">
              {{item.name}}
            </el-col>
          </el-row>
          <div class="container">
            <el-row>
              <el-col :span="22" :offset="1">
                <!--列表开始-->
                <el-row :gutter="20">
                  <div v-for="(items, index) of Main" :key="index">
                    <el-col :span="12" v-for="item of items" :key=item.index>
                      <div class="loanList" @click="routerContent(item.productId)">
                        <h4>{{item.productName}}<img src="../../../assets/image/hot.png" /></h4>
                        <span><i>{{item.applyForCount}}</i>人已申请</span>
                        <div class="line-tip"></div>
                        <div class="money">{{item.lines1}}万</div>
                        <div class="info">最高可借（元）</div>
                        <div class="Settlement">次日结算</div>
                        <div class="MonthlyRate">月利率{{item.dayInterestRate}}%</div>
                      </div>
                    </el-col>
                  </div>
                </el-row>
                <!----------------->
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="newxin" v-if="up">{{pulldownTip.textup}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import BScroll from 'better-scroll'
import bannerSrc from '../../../assets/image/banner.png'
let page = 1
export default {
  name: 'LaCasa',
  inject: ['reload'],
  data () {
    return {
      src: bannerSrc,
      activeIndex: '1',
      wpList: [
        {id: '1', name: '最新上线'},
        {id: '2', name: '额度最高'},
        {id: '3', name: '利率最低'}
      ],
      active: '最新上线',
      Main: [],
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
  watch: {
    '$route': 'GetData',
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
  mounted () {
    this.GetData()
    setTimeout(() => {
      this.BS()
    }, 20)
  },
  methods: {
    selected (name, val) {
      this.active = name
      this.activeIndex = val
      this.GetData()
    },
    GetData () {
      if (this.$route.query.id === '1') {
        document.title = '房屋贷'
      }
      if (this.$route.query.id === '2') {
        document.title = '车抵贷'
      }
      if (this.$route.query.id === '3') {
        document.title = '保单贷'
      }
      if (this.$route.query.id === '4') {
        document.title = '公积金贷'
      }
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/H5Product/list', qs.stringify({
        page: page++,
        size: '8',
        areaCode: localStorage.getItem('CityCode'),
        productType: this.$route.query.id,
        newLine: this.activeIndex
      }))
        .then((res) => {
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
    routerContent (val) {
      this.$router.push({path: '/Content', query: {id: val}})
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
    body{
      background: #F8F8F8!important;
    }
  .banner{
    height: 140px;
  }
  .row-bg{
    background: #FFFFFF;
    padding: 13px 0;
  }
  #TypeCut{
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 6px;
    color: #d8d8d8;
    border: 1px solid #d8d8d8;
  }
  .active{
    background: url("../../../assets/image/Loan01.png") no-repeat center center;
    background-size: 100%;
    border:0px solid transparent;
    color: #FFFFFF!important;
  }
  .container{
    margin-top: 20px;
  }
  .loanList{
    padding: 10px 0;
    background: #FFFFFF;
    margin-bottom: 20px;
  }
  .loanList h4{
    display: block;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    line-height: 30px;
  }
  .loanList h4 img{
    width: 22px;
    height: 11px;
    margin-left: 6px;
  }
  .loanList span{
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    display: block;
    color: #9a9a9a;
  }
  .loanList i{
    color: #ff9a33;
  }
  .line-tip{
    width: 100%;
    margin-top: 5px;
    height: 1px;
    background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
    background-size: 8px 1px;
    background-repeat: repeat-x;
  }
  .money{
    text-align: center;
    line-height: 70px;
    font-size: 35px;
    font-weight: bold;
    color: #ff9b31;
  }
  .info{
    text-align: center;
    color: #d8d8d8;
  }
  .Settlement{
    height: 22px;
    width: 80%;
    margin: 10px 10%;
    line-height: 22px;
    color: #FFFFFF;
    background: #d8d8d8;
    font-size: 10px;
    text-align: center;
    border-radius: 4px;
  }
  .MonthlyRate{
    height: 22px;
    width: 80%;
    margin: 0 10%;
    line-height: 22px;
    color: #FFFFFF;
    background: #ff9b31;
    font-size: 10px;
    text-align: center;
    border-radius: 13px;
  }
</style>
