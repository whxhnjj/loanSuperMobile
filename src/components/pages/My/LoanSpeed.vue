<template>
  <div>
    <div class="box">
      <div class="tab-title">
        <el-row>
          <el-col :span="10" :offset="1">
            <div class="title" @click="cur=0" :class="{active:cur==0}">进行中</div>
          </el-col>
          <el-col :span="10" :offset="1">
            <div class="title" @click="cur=1" :class="{active:cur==1}">已完成</div>
          </el-col>
        </el-row>
      </div>
      <div class="tab-content">
        <!--进行中-->
        <div v-show="cur==0">
          <!--列表开始-->
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
                <span class="status">申请中</span>
              </div>
              <div class="list-content">
                <img src="../../../assets/image/loanlogo.png" />
                <div class="let-h">
                  <span class="name01">车抵贷</span>
                  <span class="name02">房产新一代</span>
                </div>
                <span class="name03">￥ 50万</span>
                <a class="contact" href="tel:15529561660">专属客服</a>
                <div class="cancel">取消申请</div>
              </div>
            </div>
          </el-col>
          <!--结束---------------->
        </div>
        <!--已完成-->
        <div v-show="cur==1">
          <!--列表开始-->
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
                <span class="status">申请中</span>
              </div>
              <div class="list-content">
                <img src="../../../assets/image/loanlogo.png" />
                <div class="let-h">
                  <span class="name01">车抵贷</span>
                  <span class="name02">房产新一代</span>
                </div>
                <span class="name03">￥ 50万</span>
                <a class="contact" href="tel:15529561660">专属客服</a>
                <div class="cancel">取消申请</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
                <span class="status">申请中</span>
              </div>
              <div class="list-content">
                <img src="../../../assets/image/loanlogo.png" />
                <div class="let-h">
                  <span class="name01">车抵贷</span>
                  <span class="name02">房产新一代</span>
                </div>
                <span class="name03">￥ 50万</span>
                <a class="contact" href="tel:15529561660">专属客服</a>
                <div class="cancel">取消申请</div>
              </div>
            </div>
          </el-col>
          <!--结束---------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoanSpeed',
  data () {
    return {
      cur: 0
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .box{
    margin: 50px 0;
  }
  .active{
    color:#f09e48!important;
    border-bottom: 2px solid #f09e48;
  }
  .tab-title{
    background: #FFFFFF;
    height: 40px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #111111;
    text-align: center;
  }
  .box{
    margin-bottom: 50px;
  }
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
  .let-h{
    width: calc(100% - 150px);
    float: left;
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
    background: #ff861d;
    color: #FFFFFF;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    float: right;
    display: block;
    border-radius: 8px;
    margin-right: 15px;
  }
  .contact{
    width: 70px;
    height: 22px;
    display: inline-block;
    background: #ff861d;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    float: right;
  }
</style>
