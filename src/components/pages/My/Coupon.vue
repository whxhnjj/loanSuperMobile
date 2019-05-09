<template>
  <div>
    <div class="box">
      <div class="tab-title">
        <el-row>
          <el-col :span="10" :offset="1">
            <div class="title" @click="cur=0" :class="{active:cur==0}">未使用</div>
          </el-col>
          <el-col :span="10" :offset="1">
            <div class="title" @click="cur=1" :class="{active:cur==1}">已使用</div>
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
              </div>
              <div class="list-content">
                <span class="name01">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date">有效期：2019.03.22-2019.03.22</div>
                <div class="wj-submit">立即使用</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date">有效期：2019.03.22-2019.03.22</div>
                <div class="wj-submit">立即使用</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date">有效期：2019.03.22-2019.03.22</div>
                <div class="wj-submit">立即使用</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date">有效期：2019.03.22-2019.03.22</div>
                <div class="wj-submit">立即使用</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date">有效期：2019.03.22-2019.03.22</div>
                <div class="wj-submit">立即使用</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg">
              <div class="list-header">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date">有效期：2019.03.22-2019.03.22</div>
                <div class="wj-submit">立即使用</div>
              </div>
            </div>
          </el-col>
          <!--结束---------------->
        </div>
        <!--已完成-->
        <div v-show="cur==1">
          <!--列表开始-->
          <el-col :span="22" :offset="1">
            <div class="list-bg wj-list-bg">
              <div class="list-header list-header-bg">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01 name01-bg">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date wj-date-bg">有效期：2019.03.22-2019.03.22</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg wj-list-bg">
              <div class="list-header list-header-bg">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01 name01-bg">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date wj-date-bg">有效期：2019.03.22-2019.03.22</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg wj-list-bg">
              <div class="list-header list-header-bg">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01 name01-bg">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date wj-date-bg">有效期：2019.03.22-2019.03.22</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg wj-list-bg">
              <div class="list-header list-header-bg">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01 name01-bg">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date wj-date-bg">有效期：2019.03.22-2019.03.22</div>
              </div>
            </div>
          </el-col>
          <el-col :span="22" :offset="1">
            <div class="list-bg wj-list-bg">
              <div class="list-header list-header-bg">
                <span class="name">贷款企业：西安满一金科技有限公司</span>
              </div>
              <div class="list-content">
                <span class="name01 name01-bg">￥ 510万</span>
                <span class="name02">房屋贷</span>
                <span class="name03">房产新一贷</span>
                <div class="wj-date wj-date-bg">有效期：2019.03.22-2019.03.22</div>
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
  name: 'Coupon',
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
    padding: 0 15px;
    border-bottom: 1px solid #f0f0f0;
    background: url("../../../assets/image/s-bg.png") no-repeat top center;
    background-size: 100% 2px;
  }
  .list-header .name{
    color: #373737;
    line-height: 30px;
    font-size: 12px;
    float: left;
  }
  .list-content{
    padding: 7px 15px;
    height: 100%;
    overflow: hidden;
  }
  .list-content .name01{
    font-size: 20px;
    font-weight: 500;
    height: 45px;
    line-height: 45px;
    display: inline-block;
    color: #d00019;
    float: left;
  }
  .list-content .name02{
    font-size: 12px;
    font-weight: 500;
    height: 45px;
    display: inline-block;
    color: #373737;
    float: left;
    line-height: 45px;
    margin-left: 15px;
  }
  .list-content .name03{
    font-size: 12px;
    font-weight: 500;
    height: 45px;
    display: inline-block;
    color: #373737;
    float: left;
    margin-left: 13px;
    line-height: 45px;
  }
  .wj-date{
    height: 20px;
    float: left;
    font-size: 12px;
    line-height: 20px;
    color: #9c9c9c;
  }
  .wj-submit{
    float: right;
    border: 1px solid #cfa37c;
    color: #ffc483;
    height: 20px;
    font-size: 12px;
    width: 76px;
    text-align: center;
    line-height: 20px;
    border-radius: 8px;
  }
  /*已使用CSS*/
  .list-header-bg{
    background: url("../../../assets/image/sf-bg.png") no-repeat top center;
    background-size: 100% 2px!important;
  }
  .name01-bg{
    color: #989898!important;
  }
  .wj-date-bg{
    color: #989898!important;
  }
  .wj-list-bg{
    background:#FFFFFF url("../../../assets/image/yishiyong.png") no-repeat right 15px bottom;
    background-size:80px 56px!important;
  }
</style>
