<template>
  <div>
    <!--列表开始-->
    <el-col :span="22" :offset="1" v-for="item in main" :key="item.index">
      <div class="list-bg">
        <div class="list-header">
          <span class="name">贷款企业：{{item.merchantsName}}</span>
          <!--<span class="status">申请成功</span>-->
        </div>
        <div class="list-content">
          <img src="../../../assets/image/loanlogo.png" />
          <span class="name01">{{item.productType}}</span>
          <span class="name02">{{item.productName}}</span>
          <span class="name03">￥ {{item.lines1}}万</span>
          <div style="width: 60%;float: right;">
            <div class="cancel" @click="CancelCall(item.id)">取消收藏</div>
          </div>
        </div>
      </div>
    </el-col>
    <div class="con-bg-img" v-if="main.length === 0">暂无收藏</div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'MyCollection',
  data () {
    return {
      main: []
    }
  },
  created () {
    this.GetLoanList()
  },
  methods: {
    GetLoanList () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/Collection/findMyCollection', qs.stringify({
        page: '1',
        size: '300'
      }))
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            this.main = res.data.records
          } else if (res.code === 401) {
            this.$router.push({path: '/Login'})
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    // 取消收藏
    CancelCall (id) {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/Collection/delCollection', qs.stringify({
        id: id
      }))
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            this.GetLoanList()
            this.$toast.success('成功')
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
        })
    }
  }
}
</script>

<style scoped>
  .con-bg-img{
    font-size: 26px;
    color: #DDD;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -25px;
  }
  .list-bg{
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
    margin-bottom: 10px;
    background: #ffffff;
    margin-top: 15px;
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
