<template>
  <div>
    <div class="box">
      <div class="tab-title">
        <el-row type="flex" justify="space-around">
          <el-col :span="10">
            <div class="title" @click="cur=0" :class="{active:cur==0}">
              <el-row>
                <el-col class="name">我的直接发展团队(位)</el-col>
                <el-col class="num">佣金奖励：30元</el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="title" @click="cur=1" :class="{active:cur==1}">
              <el-row>
                <el-col class="name">我的间接发展团队(位)</el-col>
                <el-col class="num">佣金奖励：10元</el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row class="banner">
        <el-col>
          <img src="../../../assets/image/team-banner.png" />
        </el-col>
      </el-row>
      <div class="tab-content">
        <!--进行中-->
        <div v-show="cur==0">
          <!--列表开始-->
          <div class="content">
            <div class="content-header">
              <el-row>
                <el-col :span="3" class="wj-text-left">用户</el-col>
                <el-col :span="6">注册日期</el-col>
                <el-col :span="6">激活奖励(元)</el-col>
                <el-col :span="6">佣金奖励(元)</el-col>
                <el-col :span="3" class="wj-text-right">订单</el-col>
              </el-row>
            </div>
            <div class="content-box">
              <ul>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">25</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">25</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">25</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">25</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
              </ul>
            </div>
          </div>
          <!--结束---------------->
        </div>
        <!--已完成-->
        <div v-show="cur==1">
          <!--列表开始-->
          <div class="content">
            <div class="content-header">
              <el-row>
                <el-col :span="3" class="wj-text-left">用户</el-col>
                <el-col :span="6">注册日期</el-col>
                <el-col :span="6">上级代理</el-col>
                <el-col :span="6">佣金奖励(元)</el-col>
                <el-col :span="3" class="wj-text-right">订单</el-col>
              </el-row>
            </div>
            <div class="content-box">
              <ul>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">王杰</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">王杰</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">王杰</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="3" class="wj-text-left">admin</el-col>
                    <el-col :span="6">2019-10-25</el-col>
                    <el-col :span="6">王杰</el-col>
                    <el-col :span="6">33</el-col>
                    <el-col :span="3" class="wj-text-right">已通过</el-col>
                  </el-row>
                </li>
              </ul>
            </div>
          </div>
          <!--结束---------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTeam',
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
    margin-top: 80px;
  }
  .active{
    background: url("../../../assets/image/team-bg-active.png") no-repeat center center!important;
    background-size: 100% 60px!important;
  }
  .tab-title{
    background: #FFFFFF;
    height: 60px;
    width: 100%;
    position: fixed;
    padding: 10px 0;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .title{
    width: 100%;
    height: 60px;
    font-size: 14px;
    text-align: center;
    background: url("../../../assets/image/team-bg.png") no-repeat center center;
    background-size: 100% 60px;
  }
  .name{
    height: 30px;
    line-height: 45px;
    font-size: 13px;
    color: #363636;
    font-weight: 600;
  }
  .num{
    line-height: 20px;
    height: 30px;
    font-size: 12px;
    color: #656565;
  }
  .banner{
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
  }
  .banner img{
    width: 100%;
  }
  .content{

  }
  .content-header{
    padding: 0 25px;
    height: 50px;
    line-height: 50px;
    background: #FFFFFF;
    font-size: 13px;
    text-align: center;
  }
  .content-box{
    padding: 0 25px;
    line-height: 30px;
    height: 100%;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
  }
  .wj-text-left{
    text-align: left;
  }
  .wj-text-right{
    text-align: right;
  }
</style>
