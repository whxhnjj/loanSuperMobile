<template>
  <div>
    <div class="main">
      <img src="../../../assets/image/account-bg.png">
      <span>您还未添加银行卡</span>
    </div>
    <div class="box">
      <div class="list">
        <img src="../../../assets/image/back-logo.png" />
        <div class="card">
          <div>招商银行<span>(招商银行3541)</span></div>
          <i>预计两小时到账</i>
        </div>
      </div>
    </div>
    <router-link class="add" to="/AddCard">添加银行卡</router-link>
  </div>
</template>

<script>
export default {
  name: 'BankCard',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
  .main{
    height: 6.03rem;
  }
  .list{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .main img{
    width: 3.62rem ;
    height: 3.04rem;
    margin: 1.34rem 25.87% .47rem 25.87%;
  }
  .main span{
    color: #666666;
    font-size: .28rem;
    height: .4rem;
    display: block;
    line-height: .4rem;
    text-align: center;
    margin-bottom: 7.8rem;
  }
  .add{
    display: block;
    margin-bottom: .5rem;
    height: 1rem;
    line-height: 1rem;
    padding: 0 .4rem;
    background:#FFF url("../../../assets/image/borrow-jiantou.png") no-repeat right .4rem center;
    background-size: .44rem;
    font-size: .3rem;
    color: #333333;
    overflow: hidden;
  }
  /*银行卡*/
  .box{
    height: 100%;
    background: #FFFFFF;
    overflow: hidden;
    padding: 0 .3rem;
    margin: .16rem 0;
  }
  .list{
    border-bottom: 0.01rem solid #E7E7E7;
    height: 1.59rem;
  }
  .list:last-child{
    border-bottom: 0 solid transparent;
  }
  .list img{
    width: .84rem;
    height: .84rem;
    float: left;
    display: block;
    margin: .35rem .3rem .35rem 0;
  }
  .card{
    float: left;
    margin: .35rem 0 .2rem 0;
  }
  .card div{
    height: .48rem;
    font-size: .34rem;
    color: #333333;
    line-height: .48rem;
  }
  .card div span{
    font-size: .24rem;
    color: #333333;
  }
  .card i{
    font-style: normal;
    color: #999999;
    line-height: .42rem;
    font-size: .3rem;
  }
</style>
