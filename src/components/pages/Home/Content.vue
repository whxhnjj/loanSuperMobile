<template>
  <div>
    <div class="header">
      <el-row>
        <el-col class="header-text" :span="12" align="left">{{form.productName}}</el-col>
        <el-col class="header-text" :span="12" align="right">申请人数：{{form.applyForCount}}</el-col>
      </el-row>
      <el-row>
        <el-col class="range">最高范围</el-col>
        <el-col class="header-money">{{form.lines1}}元</el-col>
      </el-row>
      <el-row>
        <el-col class="header-text" :span="12" align="left">审核通过放款</el-col>
        <el-col class="header-text" :span="12" align="right">月利率：{{form.dayInterestRate}}%</el-col>
      </el-row>
    </div>
    <div class="main">
      <!--企业介绍-->
      <el-row class="mgt20">
        <el-col :span="24" class="title">企业介绍</el-col>
        <el-col>
          <el-row>
            <el-col class="main-text" :span="5">产品企业：</el-col>
            <el-col class="main-text" :span="19">{{form.merchantsId}}</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">客户群体：</el-col>
            <el-col class="main-text" :span="19">{{form.customerGroup}}</el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">可贷额度：</el-col>
            <el-col class="main-text" :span="19">{{form.lines1}}万<i>(最高可达月供的{{form.loanableLinesLabel}}倍)</i></el-col>
          </el-row>
          <el-row>
            <el-col class="main-text" :span="5">可贷期限：</el-col>
            <el-col class="main-text" :span="19">{{form.loanableTimeLimit}}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--申请条件-->
      <el-row class="mgt20">
        <el-col :span="24" class="title">申请条件</el-col>
        <el-col v-for="item in form.productConditions" :key="item.index">
          <span class="main-text">{{item.name}}：</span>
          <span class="main-text">{{item.content}}</span>
        </el-col>
      </el-row>
      <!--核算金额-->
      <el-row class="mgt20">
        <el-col :span="24" class="title">核算金额</el-col>
        <el-col>
          <el-table :data="form.productInfos" border style="width: 100%">
            <el-table-column prop="timeFrame" label="还款时" align="center"></el-table-column>
            <el-table-column prop="accountingAmount" label="核算金" align="center"></el-table-column>
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
import qs from 'qs'
export default {
  name: 'Content',
  data () {
    return {
      form: {
      },
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
  created () {
    this.GetData()
  },
  methods: {
    GetData () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/H5Product/getProductDetail', qs.stringify({
        productId: this.$route.query.id
      }))
        .then((res) => {
          res = res.data
          console.log(res)
          localStorage.setItem('productType', res.data.productType)
          this.form = res.data
        })
        .catch((res) => {
        })
    },
    routerApply () {
      this.$router.push({path: '/LoanApply'})
    }
  }
}
</script>

<style scoped>
  body{
    width: 100%;
  }
.header{
  padding: 0 20px;
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
