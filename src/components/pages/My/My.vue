<template>
  <div>
    <div class="header">
      <div v-if="tokenName">
        <div class="UserImg">
          <img src="../../../assets/image/touxiang.png" />
        </div>
        <div class="phone">{{UserName}}</div>
      </div>
      <div v-else>
        <div class="UserImg">
          <img src="../../../assets/image/touxiang.png" />
        </div>
        <div class="phone">暂未登录</div>
      </div>
    </div>
    <!--白-->
    <!--<el-row style="z-index: 99">-->
      <!--<el-col class="main" :span="22" :offset="1">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col class="main-border" :span="9">-->
            <!--<div class="money">{{main.sumAmount}}</div>-->
            <!--<div class="text">累计贷款</div>-->
          <!--</el-col>-->
          <!--<el-col class="main-border" :span="8">-->
            <!--<div class="money">{{main.newMoney}}</div>-->
            <!--<div class="text">最新收益</div>-->
          <!--</el-col>-->
          <!--<el-col :span="7">-->
            <!--<div class="money">{{main.myCouponsCount}}</div>-->
            <!--<div class="text">卡卷</div>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <!--优惠活动-->
    <!--<el-row class="Discount">-->
      <!--<el-col :span="22" :offset="1">-->
        <!--<el-row class="mgt20" :gutter="20">-->
          <!--<el-col :span="6">-->
            <!--<div @click="OnLoanRouter">-->
              <!--<img src="../../../assets/image/My01.png" />-->
              <!--<span>贷款进度</span>-->
            <!--</div>-->
          <!--</el-col>-->
          <!--<el-col :span="6">-->
            <!--<div @click="OnCouponRouter">-->
              <!--<img src="../../../assets/image/My02.png" />-->
              <!--<span>优惠券</span>-->
            <!--</div>-->
          <!--</el-col>-->
          <!--<el-col :span="6">-->
            <!--<div @click="OnInviteGiftRouter">-->
              <!--<img src="../../../assets/image/My03.png" />-->
              <!--<span>邀请好礼</span>-->
            <!--</div>-->
          <!--</el-col>-->
          <!--<el-col :span="6">-->
            <!--<div @click="OnActivityRouter">-->
              <!--<img src="../../../assets/image/My04.png" />-->
              <!--<span>活动中心</span>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <!--banner-->
    <el-row class="banner">
      <el-col :span="22" :offset="1">
        <img class="banner-img" src="../../../assets/image/banner.png" />
      </el-col>
    </el-row>
    <!--我的工具-->
    <div class="tool">
      <el-row>
        <el-col :span="22" :offset="1">
         <el-row>
           <el-col>
             <div class="tool-title">我的工具</div>
           </el-col>
         </el-row>
          <el-row class="mgt20" :gutter="20">
            <el-col :span="6">
              <div @click="OnLoanRouter">
                <img src="../../../assets/image/My01.png" />
                <span>贷款进度</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div @click="OnMyContactRouter">
                <img src="../../../assets/image/My05.png" />
                <span>我的客服</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div @click="OnMyCollectionRouter">
                <img src="../../../assets/image/My06.png" />
                <span>我的收藏</span>
              </div>
            </el-col>
            <!--<el-col :span="6">-->
              <!--<div @click="OnMyTeamRouter">-->
                <!--<img src="../../../assets/image/My07.png" />-->
                <!--<span>我的团队</span>-->
              <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
              <!--<div @click="OnMyMoneybagRouter">-->
                <!--<img src="../../../assets/image/My08.png" />-->
                <!--<span>我的钱包</span>-->
              <!--</div>-->
            <!--</el-col>-->
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!--列表栏目-->
    <el-row class="List">
      <!--<el-col class="list-bot">-->
        <!--<div @click="OnBankCardRouter">-->
          <!--<el-row>-->
            <!--<el-col :span="22" :offset="1">-->
              <!--<span>银行卡</span>-->
              <!--<img src="../../../assets/image/right.png" />-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->
      <!--</el-col>-->
      <el-col class="list-bot">
        <div @click="OnHelpRouter">
          <el-row>
            <el-col :span="22" :offset="1">
                <span>帮助中心</span>
                <img src="../../../assets/image/right.png" />
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col class="list-bot">
        <div @click="OnFeedbackRouter">
          <el-row>
            <el-col :span="22" :offset="1">
              <span>意见反馈</span>
              <img src="../../../assets/image/right.png" />
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col class="list-bot">
        <div @click="OnLoginOutRouter">
          <el-row>
            <el-col :span="22" :offset="1">
              <span>退出登录</span>
              <img src="../../../assets/image/right.png" />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div style="height: 60px;"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import qs from 'qs'
import Footer from '../Footer/Footer'
export default {
  name: 'My',
  components: {
    Footer
  },
  data () {
    return {
      tokenName: localStorage.getItem('Token'),
      main: {},
      UserName: localStorage.getItem('username')
    }
  },
  created () {
    this.GetLoanMain()
  },
  methods: {
    onCopy (e) {
      console.log('复制成功！')
    },
    onError (e) {
      console.log('复制失败！')
    },
    GetLoanMain () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/MyCenter/Statistics', qs.stringify({
      }))
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            console.log(res)
            this.main = res.data
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    // 贷款进度
    OnLoanRouter () {
      this.$router.push({path: '/LoanSpeed'})
    },
    // 优惠券
    OnCouponRouter () {
      this.$router.push({path: '/Coupon'})
    },
    // 邀请有礼
    OnInviteGiftRouter () {
      this.$router.push({path: '/InviteGift'})
    },
    // 活动中心
    OnActivityRouter () {
      this.$router.push({path: '/Activity'})
    },
    // 我的收藏
    OnMyCollectionRouter () {
      this.$router.push({path: '/MyCollection'})
    },
    // 我的团队
    OnMyTeamRouter () {
      this.$router.push({path: '/MyTeam'})
    },
    // 我的钱包
    OnMyMoneybagRouter () {
      this.$router.push({path: '/MyMoneybag'})
    },
    // 银行卡列表
    OnBankCardRouter () {
      this.$router.push({path: '/BankCard'})
    },
    // 意见反馈
    OnFeedbackRouter () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/pdFeedback')
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            console.log(res)
            if (res.data === '1') { // 提交过了
              this.$router.push({path: '/SystemFeedback'})
            }
            if (res.data === '0') { // 已提交未处理
              this.$router.push({path: '/SystemFeedback'})
            }
            if (res.data === '-1') { // 已提交未处理
              this.$router.push({path: '/Feedback'})
            }
          } else if (res.code === 401) {
            this.$router.push({path: '/Login'})
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
          console.log(res)
        })
      // this.$router.push({path: '/Feedback'})
    },
    // 帮助中心
    OnHelpRouter () {
      this.$router.push({path: '/Help'})
    },
    // 联系客服
    OnMyContactRouter () {
      this.$router.push({path: '/Contact'})
    },
    //  退出登录
    OnLoginOutRouter () {
      localStorage.setItem('Token', '')
      this.$router.push({path: '/Login'})
    }
  }
}
</script>

<style scoped>
  .header{
    height: 90px;
    background:  url("../../../assets/image/My-bg.png") no-repeat center center;
    box-shadow: 0 2px 3px -1px  #DDDDDD;
  }
  .UserImg{
    width: 50px;
    height: 50px;
    float: left;
    display: block;
    margin: 20px 0 20px 20px;
    border-radius: 50%;
    background: #FFFFFF;
  }
  .UserImg img{
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
  }
  .phone{
    margin-left: 20px;
    height: 90px;
    float: left;
    line-height: 90px;
    text-align: left;
    color:#FFFBFB;
    font-size: 20px;
  }
  .Code{
    margin-left: 20px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
    font-size: 14px;
  }
  .Copytag{
    display: inline-block;
    border-radius: 25px;
    margin-left: 15px;
    font-size: 12px;
    padding:0 10px;
    height: 15px;
    line-height: 16px;
    border: 1px solid #FFFFFF;
  }
  /*白*/
  .main{
    padding: 25px 0;
    height: 90px;
    background: #FFFFFF;
    border-radius: 15px;
    margin-top: -45px;
    box-shadow: 0 0 10px #AAAAAA;
  }
  .money{
    text-align: center;
    color: #ff9930;
    font-size: 16px;
    height: 20px;
    line-height: 20px;
  }
  .text{
    text-align: center;
    font-size: 14px;
    color: #404040;
    height: 20px;
    line-height: 20px;
  }
  .main-border{
    border-right: 1px solid #d8d8d8;
  }
  .Discount{
    height: 110px;
    background: #FFFFFF;
    margin-top: -40px;
    z-index: 1;
  }
  .mgt20{
    margin-top: 10px;
  }
  .Discount img{
    width: 25px;
    height: 25px;
    display: block;
    margin: 0 auto;
  }
  .Discount span{
    display: block;
    text-align: center;
    color: #383838;
    line-height: 30px;
    font-size: 14px;
  }
  .banner{
   padding-top: 10px;
  }
  .banner-img{
    width: 100%;
    height: 80px;
    border-radius: 10px;
  }
  .tool{
    height: 110px;
    background: #FFFFFF;
    margin: 8px 0;
  }
  .tool-title{
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    padding: 0 5px;
    margin: 10px 0;
    font-weight: bold;
    border-right: 3px solid #ed9c4a;
    border-left: 3px solid #ed9c4a;
  }
.tool img{
  width: 25px;
  height: 25px;
  display: block;
  margin: 0 auto;
}
.tool span{
  display: block;
  text-align: center;
  color: #383838;
  line-height: 30px;
  font-size: 14px;
}
  .List{
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }
  .list-bot{
    height: 43px;
    border-bottom: 2px solid #f8f8f8;
  }
  .list-bot span{
    line-height: 43px;
    color: #353535;
    font-size: 14px;
    float: left;
  }
  .list-bot img{
    width: 30px;
    height: 30px;
    float: right;
    margin: 5px 0;
    font-weight: 500;
  }
</style>
