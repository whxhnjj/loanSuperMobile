<template>
  <div class="box">
    <div class="help-list">
        <div class="list-left">
          <div class="list-left-content">
            <img src="../../../assets/image/help-icon.png" />
            <span>认证相关</span>
          </div>
        </div>
        <div class="list-right">
          <div class="list-text">申请借款需要做哪些认证？</div>
          <div class="list-text">申请借款需要做哪些认证？</div>
          <div class="list-text">申请借款需要做哪些认证？</div>
          <div class="list-text">申请借款需要做哪些认证？</div>
          <div class="list-text">申请借款需要做哪些认证？</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style scoped>
  .box{
    background: #F8F8F8;
  }
.help-list{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #FFFFFF;
}
.list-left{
  float: left;
  width: 30%;
  height: 100%;
  padding-top: 10px;
  line-height: 100%;
}
.list-left-content{
  height: 70px;
  width: 100%;
}
  .list-left-content img{
    height:40px;
    width: 48px;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  .list-left-content span{
    height: 30px;
    display: block;
    line-height: 30px;
    font-size: 12px;
    color: #666666;
    text-align: center;
  }
  .list-right{
    width: 69%;
    height: 100%;
    float: left;
    border-left: 1px solid #f1f1f1;
  }
  .list-text{
    height: 40px;
    line-height: 40px;
    padding:0 20px;
    font-size: 12px;
    color:  #666666;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
