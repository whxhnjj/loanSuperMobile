<template>
  <div>
    <div class="header">
      <el-row :gutter="20">
        <el-col class="header-text" :span="11" :offset="1" align="left">房产贷</el-col>
        <el-col class="header-text" :span="11" align="right">申请人数：141114</el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="range">最高范围</el-col>
        <el-col :span="24" class="header-money">50万</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col class="header-text" :span="11" :offset="1" align="left">审核通过放款</el-col>
        <el-col class="header-text" :span="11" align="right">月利率：11%</el-col>
      </el-row>
    </div>
    <div class="main">
      <!--企业介绍-->
      <el-row class="mgt20">
        <el-col :span="24" class="title">企业介绍</el-col>
        <el-col>
          <el-row>
            <el-col class="main-text" :span="5">产品企业：</el-col>
            <el-col class="main-text" :span="19">满一金有限公司</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">客户群体：</el-col>
            <el-col class="main-text" :span="19">有房人士专享，额度高、审批快</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">可贷额度：</el-col>
            <el-col class="main-text" :span="19">3-50万<i>(最高可达月供的70倍)</i></el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">可贷期限：</el-col>
            <el-col class="main-text" :span="19">12/24/36个月</el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--申请条件-->
      <el-row class="mgt20">
        <el-col :span="24" class="title">申请条件</el-col>
        <el-col>
          <el-row>
            <el-col class="main-text" :span="5">产品企业：</el-col>
            <el-col class="main-text" :span="19">满一金有限公司</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">年龄要求：</el-col>
            <el-col class="main-text" :span="19">25-65岁周岁</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="3">押品：</el-col>
            <el-col class="main-text" :span="21">抵押房产为住房抵押总期限为两次以上抵押总期限为两次以上(含普通住房)</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="3">其他：</el-col>
            <el-col class="main-text" :span="21">房屋再次抵押，抵押总期限为两次以上，类别为自己的抵押总期限为两次以上抵押总期限为两次以上</el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--核算金额-->
      <el-row class="mgt20">
        <el-col :span="24" class="title">核算金额</el-col>
        <el-col>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="还款时" align="center"></el-table-column>
            <el-table-column prop="money" label="核算金" align="center"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8"><button class="button" @click="routerApply">下一步</button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      tableData: [{
        date: '一年以内',
        money: '月供金额X45'
      }, {
        date: '结清一年',
        money: '月供金额X45'
      }, {
        date: '还款三年或五年',
        money: '月供金额X70'
      }, {
        date: '五年以上',
        money: '月供金额X100'
      }]
    }
  },
  methods: {
    routerApply () {
      this.$router.push({path: '/LoanApply'})
    }
  }
}
</script>

<style scoped>
.header{
  height: 125px;
  background: #ff9930;
}
  .header-text{
    height: 30px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 14px;
  }
  .range{
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
  }
  .header-money{
    text-align: center;
    color: #FFFFFF;
    font-size: 36px;
    line-height: 44px;
  }
  .main{
    background: #FFFFFF;
    padding:0 25px 25px 25px;
  }
  .mgt20{
    padding-top: 20px
  }
  .title{
    color: #666666;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .main-text{
    color: #A9A9A9;
    line-height: 25px;
    font-size: 13px;
  }
  .main-text i{
    color:#ff9930;
  }
  .button{
    color: #FFFFFF;
    font-size: 14px;
    border-radius: 15px;
    width: 100%;
    margin: 30px 0 20px 0;
    padding: 5px 0;
    background: linear-gradient(310deg,rgba(254,149,40,1) 0%,rgba(253,110,5,1) 100%);
  }
</style>
