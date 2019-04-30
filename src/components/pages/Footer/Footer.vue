<template>
  <div>
    <el-row class="tabfooter">
      <el-col :span="8">
        <router-link to="/Home" class="link" exact>
          <div class="tab home">首页</div>
        </router-link>
      </el-col>
      <el-col :span="8">
      <router-link to="/Borrow" class="link" >
        <div class="tab borrow">满易贷</div>
      </router-link>
      </el-col>
        <el-col :span="8">
        <router-link to="/My" class="link" >
          <div class="tab my">我的</div>
        </router-link>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
  .tabfooter {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    font-size: 0;
    background: #ffffff;
    border-top: 1px solid #d5d5d5;
    z-index: 98;
  }
    .router-link-active .home {
      background: url("../../../assets/image/home-gl.png") no-repeat center 7px;
      background-size: 22px;
    }
    .router-link-active .borrow {
      background: url("../../../assets/image/borrow-gl.png") no-repeat center 7px;
      background-size: 22px;
    }
    .router-link-active .my{
      background: url("../../../assets/image/my-gl.png") no-repeat center 7px;
      background-size: 22px;
    }
    .router-link-active .tab {
      color: #FFA219 !important;
    }
    .tab {
      float: left;
      width: 100%;
      height: 50px;
      text-align: center;
      display: block;
      color: #666666;
      font-size: 12px;
      line-height: 75px;
    }
    .home {
      background: url("../../../assets/image/home.png") no-repeat center 7px;
      background-size: 22px;
    }
    .borrow {
      background: url("../../../assets/image/borrow.png") no-repeat center 7px;
      background-size: 22px;
    }
    .my {
      background: url("../../../assets/image/my.png") no-repeat center 7px;
      background-size: 22px;
    }
</style>
