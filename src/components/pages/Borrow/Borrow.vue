<template>
  <div>
    <el-row class="header">
      <el-col :span="22" :offset="1">
        <h2>满易贷</h2>
        <span>你的贷款已审核通过！</span>
      </el-col>
    </el-row>
    <el-row style="z-index:9999;">
      <el-col :span="22"  :offset="1">
        <div class="main">
          <div class="money">10000000.00元</div>
          <div class="info-tip">最快一天放款，月利率1%起</div>
          <div class="lop-tip">本平台总放款金额(元)  <i>12124512.00</i></div>
        </div>
      </el-col>
    </el-row>
    <!--四个扣子-->
    <el-row class="bg-pro">
      <el-col :span="22" :offset="1">
       <el-row :gutter="20" class="pro-list">
         <el-col :span="6">
           <img src="../../../assets/image/Borrow-01.png" />
           <span>房屋贷</span>
         </el-col>
         <el-col :span="6">
           <img src="../../../assets/image/Borrow-02.png" />
           <span>房屋贷</span>
         </el-col>
         <el-col :span="6">
           <img src="../../../assets/image/Borrow-03.png" />
           <span>房屋贷</span>
         </el-col>
         <el-col :span="6">
           <img src="../../../assets/image/Borrow-04.png" />
           <span>房屋贷</span>
         </el-col>
       </el-row>
      </el-col>
    </el-row>
    <!--banner-->
    <el-row>
      <el-col :span="22" :offset="1">
        <img class="banner" src="../../../assets/image/Borrow-banner.png" />
      </el-col>
    </el-row>
    <!--贷款步骤-->
    <el-row>
      <el-col :span="22" :offset="1">
        <img class="Borrow-buzhou" src="../../../assets/image/Borrow-buzhou.png" />
      </el-col>
    </el-row>
    <!--贷款优势-->
    <el-row>
      <el-col :span="22" :offset="1">
        <img class="Borrow-youshi" src="../../../assets/image/Borrow-youshi.png" />
      </el-col>
    </el-row>
    <!--底部-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../Footer/Footer'
export default {
  name: 'Borrow',
  components: {
    Footer
  }
}
</script>

<style scoped>
  .header{
    height: 150px;
    background: #ff9930;
  }
  .header h2{
    font-size: 30px;
    color: #FFFFFF;
    padding: 15px 0 8px 0;
    font-weight: bold;
  }
  .header span{
    font-size: 16px;
    color: #FFFFFF;
    padding: 15px 0 8px 0;
    line-height: 35px;
  }
  .main{
    padding: 15px 0;
    background: #FFFFFF;
    border-radius: 15px;
    margin-top: -60px;
    box-shadow: 0 0 10px #AAAAAA;
  }
  .money{
    font-size: 36px;
    font-weight: bold;
    color: #323232;
    line-height: 50px;
    text-align: center;
  }
  .info-tip{
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    color: #666666;
  }
  .lop-tip{
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    color: #333333;
  }
  .lop-tip i{
    color: #f59b4d;
  }
  .bg-pro{
    margin-top: -60px;
    background: #FFFFFF;
    z-index: 0;
  }
  .pro-list{
    height: 100%;
    padding: 30px 10px;
    overflow: hidden;
    background: #FFFFFF;
  }
  .pro-list img{
    height: 28px;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .pro-list span{
    width: 100%;
    display: block;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #343434;
  }
  .banner{
    width: 100%;
    height: 80px;
    margin: 15px 0;
  }
  .Borrow-buzhou{
    width: 100%;
    height: 162px;
  }
  .Borrow-youshi{
    width: 100%;
    height: 200px;
    margin: 15px 0 70px 0;
  }
</style>
