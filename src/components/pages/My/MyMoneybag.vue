<template>
  <div>
    <div class="list-money">
      <div class="list">
        <span class="name">收入总额(元)</span>
        <span class="num">{{189+Math.round(Math.random()*200000) + '.00'}}</span>
      </div>
      <div class="list">
        <span class="name">活期余额(元)</span>
        <span class="num">{{369+Math.round(Math.random()*2000) + '.00'}}</span>
      </div>
    </div>
    <div class="main">
      <div class="card">
        <img src="../../../assets/image/back-logo.png" />
        <div class="card-info">
          <div class="card-name">收款账户<span>（招商银行3541）</span></div>
          <div class="card-time">预计两小时到账</div>
        </div>
      </div>
    </div>
    <div class="submit">我要提现</div>
    <div class="tab-title">
      <el-row>
        <el-col :span="10" :offset="1">
          <div class="title" @click="cur=0" :class="{active:cur==0}">收入记录</div>
        </el-col>
        <el-col :span="10" :offset="1">
          <div class="title" @click="cur=1" :class="{active:cur==1}">提现记录</div>
        </el-col>
      </el-row>
    </div>
    <div class="tab-content">
      <!--收入记录-->
      <div v-show="cur==0">
        <!--列表开始-->
            <div class="list-header">
              <span class="list-header-title">金额</span>
              <span class="list-header-title">审核时间</span>
              <span class="list-header-title">状态</span>
            </div>
            <ul>
              <li>
                <div class="list-content">
                  <span class="list-header-title active-text">30.00</span>
                  <span class="list-header-title">2019-10-21</span>
                  <span class="list-header-title">通过</span>
                </div>
              </li>
              <li>
                <div class="list-content">
                  <span class="list-header-title active-text">30.00</span>
                  <span class="list-header-title">2019-10-21</span>
                  <span class="list-header-title">通过</span>
                </div>
              </li>
              <li>
                <div class="list-content">
                  <span class="list-header-title active-text">30.00</span>
                  <span class="list-header-title">2019-10-21</span>
                  <span class="list-header-title">通过</span>
                </div>
              </li>
              <li>
                <div class="list-content">
                  <span class="list-header-title active-text">30.00</span>
                  <span class="list-header-title">2019-10-21</span>
                  <span class="list-header-title">通过</span>
                </div>
              </li>
            </ul>
        <!--结束---------------->
      </div>
      <!--提现记录-->
      <div v-show="cur==1">
        <!--列表开始-->
        <div class="list-header">
          <span class="list-header-title-right">金额</span>
          <span class="list-header-title-right">申请时间</span>
          <span class="list-header-title-right">审核时间</span>
          <span class="list-header-title-right">状态</span>
        </div>
        <ul>
          <li>
            <div class="list-content">
              <span class="list-header-title-right active-text">30.00</span>
              <span class="list-header-title-right">2019-10-21</span>
              <span class="list-header-title-right">2019-10-21</span>
              <span class="list-header-title-right">通过</span>
            </div>
          </li>
        </ul>
        <!--结束---------------->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMoneybag',
  data () {
    return {
      cur: 0
    }
  }
}
</script>

<style scoped>
  .list-money{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }
  .list{
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    border-bottom: 1px solid #eeeeee;
  }
  .name{
    color: #333333;
    font-size: 14px;
    font-weight: 600;
    float: left;
  }
  .num{
    color: #999999;
    font-size: 12px;
    float: right;
  }
  /*收款账户*/
  .main{
    background: #FFFFFF;
    padding: 0 25px;
    margin: 25px 0;
  }
  .card{
    margin-top: 8px;
    padding: 16px 25px 16px 0;
    background:url("../../../assets/image/borrow-jiantou.png") no-repeat right center;
    background-size: 22px;
    height: 100%;
    overflow: hidden;
  }
  .card img{
    width: 40px;
    height: 40px;
    float: left;
    display: block;
    margin-right: 15px;
  }
  .card-info{
    float: left;
  }
  .card-name{
    color: #333333;
    font-size: 17px;
    height: 24px;
    font-weight: 600;
    line-height: 24px;
  }
  .card-name span{
    color: #333333;
    font-size: 12px;
  }
  .card-time{
    color: #999999;
    font-size: 12px;
    height: 21px;
    line-height: 21px;
  }
  .submit{
    width: 230px;
    height: 42px;
    text-align: center;
    margin: 0 auto;
    line-height: 42px;
    color: #FFFFFF;
    background: url("../../../assets/image/money-button.png") no-repeat center center;
    background-size: 230px 42px;
    overflow: hidden;
  }
  .tab-title{
    height: 40px;
    width: 100%;
    margin-top: 30px;
  }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #111111;
    text-align: center;
  }
  .active{
    color:#f09e48!important;
    border-bottom: 2px solid #f09e48;
  }
  .tab-content{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .list-header{
    width: 100%;
    height: 40px;
    background: #FFFFFF;
    text-align: center;
  }
  .list-header-title{
    display: inline-block;
    width: 33.333%;
    float: left;
    height: 40px;
    line-height: 40px;
  }
  .list-content{
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
  }
  .active-text{
    color:#f09e48!important;
  }
  .list-header-title-right{
    display: inline-block;
    width: 25%;
    float: left;
    height: 40px;
    line-height: 40px;
  }
</style>
