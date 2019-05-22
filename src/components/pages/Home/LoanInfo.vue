<template>
  <div class="box">
    <div class="slideBar">
      <div class="slideBaricon">
        <div class="img img-yuan-active">1</div>
        <span class="active-text">申请信息</span>
      </div>
      <div class="slideBaricon">
        <div class="dian-img dian-img-active"></div>
      </div>
      <div class="slideBaricon">
        <div class="img img-yuan-active">2</div>
        <span class="active-text">基础信息</span>
      </div>
      <div class="slideBaricon">
        <div class="dian-img dian-img-active"></div>
      </div>
      <div class="slideBaricon">
        <div class="img img-yuan-active">3</div>
        <span class="active-text">资质审核</span>
      </div>
    </div>
    <!--内容-->
    <div class="content">
      <!--列表开始-->
      <el-row>
        <el-col>
          <img class="img" src="../../../assets/image/SuccessInfo.png" />
        </el-col>
        <el-col class="content-title">你当前申请的贷款已在审核流程</el-col>
        <el-col class="content-tip">请耐心等待客服经理联系</el-col>
      </el-row>
      <!--结束-->
    </div>
    <div class="button" @click="OnLoanInfoRouter">返回首页</div>
  </div>
</template>

<script>
export default {
  name: 'LoanInfo',
  data () {
    return {
    }
  },
  methods: {
    // 跳转
    OnLoanInfoRouter () {
      this.$router.push({path: '/Home'})
    }
  }
}
</script>

<style scoped>
  .box{
    background: #f8f8f8;
  }
  .slideBar{
    padding: 5px 31px;
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }
  .slideBaricon{
    width: 20%;
    height: 70px;
    float: left;
  }
  .slideBaricon .img{
    width: 100%;
    text-align: center;
    line-height: 40px;
    color: #666666;
    font-weight: 600;
    font-size: 14px;
    background: url("../../../assets/image/yuan.png") no-repeat center center;
    background-size: 40px;
  }
  .slideBaricon span{
    display: block;
    color: #9A9A9A;
    text-align: center;
    line-height: 30px;
    height: 30px;
    font-size: 12px;
  }
  .dian-img{
    width: 100%;
    height: 2px;
    margin-top: 18px;
    background: url("../../../assets/image/dian.png") no-repeat center center;
    background-size: 100% 2px;
  }
  .img-yuan-active{
    background: url("../../../assets/image/yuan-active.png") no-repeat center center!important;
    background-size: 40px;
    color: #FFFFFF!important;
  }
  .dian-img-active{
    background: url("../../../assets/image/dian-active.png") no-repeat center center!important;
    background-size: 100% 2px!important;
  }
  .active-text{
    color: #ff9937!important;
  }
  .content{
    width: 100%;
    height: 100%;
    padding: 55px 0;
    margin:10px 0 80px 0;
    background: #FFFFFF;
    overflow: hidden;
  }
  .content .img{
    width: 94px;
    display: block;
    margin: 0 auto;
  }
  .button{
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
  .content-title{
    color: #999999;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
  }
  .content-tip{
    color: #cdcdcd;
    font-size: 13px;
    text-align: center;
    line-height: 20px;
  }
</style>
