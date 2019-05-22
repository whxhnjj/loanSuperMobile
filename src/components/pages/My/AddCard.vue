<template>
  <div>
    <div class="main">
      <div class="list">
        <span>姓名</span>
        <input type="text" value="张三" v-model="name" placeholder="请输入姓名" readonly="readonly"/>
      </div>
      <div class="list">
        <span>身份证号</span>
        <input type="text" v-model="idCard" value="123456789110564859" placeholder="请输入身份证"/>
      </div>
      <div class="list">
        <span>卡行</span>
        <input type="text" value="" v-model="bankCard" placeholder="请输入卡行" />
      </div>
      <div class="list">
        <span>银行卡号</span>
        <input type="text" value="" v-model="bankCard" placeholder="请输入银行卡号" />
      </div>
      <div class="list">
        <span>预留手机</span>
        <input type="text" value="" v-model="phone" placeholder="请输入预留手机" />
      </div>
      <div class="list">
        <span>验证码</span>
        <i v-show="sendAuthCode" @click="getAuthCode">获取验证码</i>
        <i class="code-text" v-show="!sendAuthCode">重新发送<b>({{code_num}}s)</b></i>
        <input type="text" value="" v-model="authCode" placeholder="" />
      </div>
    </div>
    <div class="button">确定</div>
  </div>
</template>

<script>
export default {
  name: 'AddCard',
  data () {
    return {
      sendAuthCode: true,
      code_num: 0,
      name: '王杰',
      idCard: '123',
      bankCard: '',
      phone: '',
      authCode: ''
    }
  },
  watch: {
  },
  created () {
  },
  methods: {
    // 短信倒计时
    getAuthCode: function () {
      this.sendAuthCode = false
      this.code_num = 30
      let timefun = setInterval(() => {
        this.code_num--
        if (this.code_num <= 0) {
          this.sendAuthCode = true
          clearInterval(timefun)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .main{
    margin: .16rem 0 .42rem 0;
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
    padding: 0 .4rem;
  }
  .list{
    height: 1.09rem;
    border-bottom: 0.01rem solid #E7E7E7;
  }
  .list:last-child{
    border-bottom: 0 solid transparent;
  }
  .list span{
    height: 1.09rem;
    line-height: 1.09rem;
    font-size: .28rem;
    color: #333333;
    display: block;
    float: left;
  }
  .list input{
    float: right;
    height: 1.05rem;
    line-height:1.05rem;
    text-align: right;
    display: block;
    font-size: .28rem;
    color: #333333;
    -webkit-appearance: none;
  }
  .list input::-webkit-input-placeholder {
    color: #AAA;
  }
  .list input:-moz-placeholder {
    color: #AAA;
  }
  .list input:-ms-input-placeholder {
    color: #AAA;
  }
  .list i{
    color: #FF6332;
    display: block;
    float: right;
    font-size: .28rem;
    height: 1.09rem;
    padding-left: .2rem;
    line-height: 1.09rem;
  }
  .code-text{
    color: #AAAAAA!important;
  }
  .code-text b{
    color: #FF6332;
  }
  .bank-card{
    float: right;
    height: 1.05rem;
    line-height:1.05rem;
    text-align: right;
    display: block;
    padding-right: .44rem;
    font-size: .28rem;
    color: #AAA;
    background: url("../../../assets/image/borrow-jiantou.png") no-repeat right center;
    background-size: .44rem;
  }
  .bank-card-color{
    float: right;
    height: 1.05rem;
    line-height:1.05rem;
    text-align: right;
    display: block;
    padding-right: .44rem;
    font-size: .28rem;
    color: #333333;
    background: url("../../../assets/image/borrow-jiantou.png") no-repeat right center;
    background-size: .44rem;
  }
  .button{
    margin: 0 .4rem;
    display: block;
    background: url("../../../assets/image/AddCard-button.png") no-repeat center center;
    background-size:100% .88rem;
    height: .88rem;
    color: #FFFFFF;
    line-height: .88rem;
    font-size: .32rem;
    text-align: center;
  }
</style>
