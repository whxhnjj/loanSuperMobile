<template>
  <div>
    <el-image class="banner" :src="src"></el-image>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="7" v-for="item in wpList" :key="item.name" id="TypeCut" :class="{active : active == item.name}" @click.native="selected(item.name)">
        {{item.name}}
      </el-col>
    </el-row>
    <div class="container">
      <el-row>
        <el-col :span="22" :offset="1">
          <!--列表开始-->
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="loanList">
                <h4>招联金融<img src="../../../assets/image/hot.png" /></h4>
                <span><i>3566599</i>人已申请</span>
                <div class="line-tip"></div>
                <div class="money">50万</div>
                <div class="info">最高可借（元）</div>
                <div class="Settlement">次日结算</div>
                <div class="MonthlyRate">月利率1.1%</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="loanList">
                <h4>招联金融<img src="../../../assets/image/hot.png" /></h4>
                <span><i>3566599</i>人已申请</span>
                <div class="line-tip"></div>
                <div class="money">50万</div>
                <div class="info">最高可借（元）</div>
                <div class="Settlement">次日结算</div>
                <div class="MonthlyRate">月利率1.1%</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="loanList">
                <h4>招联金融<img src="../../../assets/image/hot.png" /></h4>
                <span><i>3566599</i>人已申请</span>
                <div class="line-tip"></div>
                <div class="money">50万</div>
                <div class="info">最高可借（元）</div>
                <div class="Settlement">次日结算</div>
                <div class="MonthlyRate">月利率1.1%</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="loanList">
                <h4>招联金融<img src="../../../assets/image/hot.png" /></h4>
                <span><i>3566599</i>人已申请</span>
                <div class="line-tip"></div>
                <div class="money">50万</div>
                <div class="info">最高可借（元）</div>
                <div class="Settlement">次日结算</div>
                <div class="MonthlyRate">月利率1.1%</div>
              </div>
            </el-col>
          </el-row>
          <!----------------->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bannerSrc from '../../../assets/image/banner.png'
export default {
  name: 'LaCasa',
  data () {
    return {
      src: bannerSrc,
      wpList: [
        {name: '最新上线'},
        {name: '额度最高'},
        {name: '利率最低'}
      ],
      active: '最新上线'
    }
  },
  methods: {
    selected (name) {
      this.active = name
    }
  }
}
</script>

<style scoped>
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
