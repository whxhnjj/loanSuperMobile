<template>
  <div>
    <Swiper></Swiper>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="5"><div class="Button-bg01" @click="LaCasaRouterTo">房屋贷</div></el-col>
      <el-col :span="5"><div class="Button-bg02">车抵贷</div></el-col>
      <el-col :span="5"><div class="Button-bg03">保单贷</div></el-col>
      <el-col :span="5"><div class="Button-bg04">公积金贷</div></el-col>
    </el-row>
    <el-row class="tip-title">
      <el-col :span="22" :offset="1"><img src="../../../assets/image/desd.png" />大额速贷</el-col>
    </el-row>
    <el-row class="content-bg">
      <el-col :span="22" :offset="1">
        <div class="list">
          <el-row :gutter="20">
            <el-col :span="12" class="list-title">招联金融<img src="../../../assets/image/hot.png" /> </el-col>
            <el-col :span="12" align="right"><i class="num">45698</i>人已申请</el-col>
          </el-row>
          <el-row :gutter="20" class="list-row-mg">
            <el-col :span="9" class="list-money">50万</el-col>
            <el-col :span="15">
              <span class="rate">日利率：1.1%</span>
              <span class="list-button-submit-bg">立即申请</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9" class="describe">最高金额(元)</el-col>
            <el-col :span="15">
              <el-row type="flex" justify="space-between">
                <el-col :span="7" class="list-tag">下款易</el-col>
                <el-col :span="7" class="list-tag">额度高</el-col>
                <el-col :span="7" class="list-tag">放款快</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row :gutter="20">
            <el-col :span="12" class="list-title">招联金融<img src="../../../assets/image/hot.png" /> </el-col>
            <el-col :span="12" align="right"><i class="num">45698</i>人已申请</el-col>
          </el-row>
          <el-row :gutter="20" class="list-row-mg">
            <el-col :span="9" class="list-money">50万</el-col>
            <el-col :span="15">
              <span class="rate">日利率：1.1%</span>
              <span class="list-button-submit-bg">立即申请</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9" class="describe">最高金额(元)</el-col>
            <el-col :span="15">
              <el-row type="flex" justify="space-between">
                <el-col :span="7" class="list-tag">下款易</el-col>
                <el-col :span="7" class="list-tag">额度高</el-col>
                <el-col :span="7" class="list-tag">放款快</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row :gutter="20">
            <el-col :span="12" class="list-title">招联金融<img src="../../../assets/image/hot.png" /> </el-col>
            <el-col :span="12" align="right"><i class="num">45698</i>人已申请</el-col>
          </el-row>
          <el-row :gutter="20" class="list-row-mg">
            <el-col :span="9" class="list-money">50万</el-col>
            <el-col :span="15">
              <span class="rate">日利率：1.1%</span>
              <span class="list-button-submit-bg">立即申请</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9" class="describe">最高金额(元)</el-col>
            <el-col :span="15">
              <el-row type="flex" justify="space-between">
                <el-col :span="7" class="list-tag">下款易</el-col>
                <el-col :span="7" class="list-tag">额度高</el-col>
                <el-col :span="7" class="list-tag">放款快</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row :gutter="20">
            <el-col :span="12" class="list-title">招联金融<img src="../../../assets/image/hot.png" /> </el-col>
            <el-col :span="12" align="right"><i class="num">45698</i>人已申请</el-col>
          </el-row>
          <el-row :gutter="20" class="list-row-mg">
            <el-col :span="9" class="list-money">50万</el-col>
            <el-col :span="15">
              <span class="rate">日利率：1.1%</span>
              <span class="list-button-submit-bg">立即申请</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9" class="describe">最高金额(元)</el-col>
            <el-col :span="15">
              <el-row type="flex" justify="space-between">
                <el-col :span="7" class="list-tag">下款易</el-col>
                <el-col :span="7" class="list-tag">额度高</el-col>
                <el-col :span="7" class="list-tag">放款快</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row :gutter="20">
            <el-col :span="12" class="list-title">招联金融<img src="../../../assets/image/hot.png" /> </el-col>
            <el-col :span="12" align="right"><i class="num">45698</i>人已申请</el-col>
          </el-row>
          <el-row :gutter="20" class="list-row-mg">
            <el-col :span="9" class="list-money">50万</el-col>
            <el-col :span="15">
              <span class="rate">日利率：1.1%</span>
              <span class="list-button-submit-bg">立即申请</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9" class="describe">最高金额(元)</el-col>
            <el-col :span="15">
              <el-row type="flex" justify="space-between">
                <el-col :span="7" class="list-tag">下款易</el-col>
                <el-col :span="7" class="list-tag">额度高</el-col>
                <el-col :span="7" class="list-tag">放款快</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from './Swiper'
import Footer from '../Footer/Footer'
export default {
  name: 'Home',
  components: {
    Swiper,
    Footer
  },
  data () {
    return {
      BannerImg: [],
      arrbanner: ''
    }
  },
  methods: {
    LaCasaRouterTo () {
      this.$router.push({path: '/LaCasa'})
    }
  }
}
</script>

<style scoped>
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
    margin-bottom: 60px;
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
    border-radius: 15px;
    border: 1px solid #9b9b9b;
    font-size: 12px;
  }
</style>
