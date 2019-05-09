<template>
  <div>
    <div class="box">
      <el-row>
        <el-col :span="24">
          <img src="../../../assets/image/Activity-bg.png" class="image">
          <div class="order">
            <el-row>
              <el-col :span="3"> <span class="line"></span></el-col>
              <el-col :span="18"> <span class="txt">新人专享首次借款免息3天&nbsp;&nbsp;&nbsp;2019/02/06</span></el-col>
              <el-col :span="3"> <span class="line"></span></el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <img src="../../../assets/image/Activity-bg.png" class="image">
          <div class="order">
            <el-row>
              <el-col :span="3"> <span class="line"></span></el-col>
              <el-col :span="18"> <span class="txt">新人专享首次借款免息3天&nbsp;&nbsp;&nbsp;2019/02/06</span></el-col>
              <el-col :span="3"> <span class="line"></span></el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style scoped>
  .box{
    margin: 10px 0 30px 0;
  }
  .image {
    width: 100%;
    display: block;
  }
  .order {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .order .line {
    display: inline-block;
    width: 100%;
    border-top:1px solid #9a9a9a;;
  }
  .order .txt {
    color: #9a9a9a;
    vertical-align: -5px;
    /*vertical-align: -8%;*/
  }
</style>
