<template>
  <div>
    <!--列表开始-->
    <el-col :span="22" :offset="1">
      <div class="list-bg">
        <div class="list-header">
          <span class="name">贷款企业：西安满一金科技有限公司</span>
          <span class="status">申请成功</span>
        </div>
        <div class="list-content">
          <img src="../../../assets/image/loanlogo.png" />
          <span class="name01">车抵贷</span>
          <span class="name02">房产新一代</span>
          <span class="name03">￥ 50万</span>
          <div class="cancel">取消收藏</div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'MyCollection'
}
</script>

<style scoped>
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
    border: 1px solid #d0a57b;
    color: #ee9c4a;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    float: right;
    display: block;
    border-radius: 8px;
  }
</style>
