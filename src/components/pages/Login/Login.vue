<template>
  <div class="box">
    <div class="main">
      <h3 class="title">登录</h3>
      <p><van-field  class="number" type="text" v-model="valueName" value="" maxlength="11" placeholder="请输入用户名" /></p>
      <p><van-field class="Paswword" readonly clickable :value="value" placeholder="请输入密码" @touchstart.native.stop="show = true" /></p>
      <button class="button" v-if="elButton"  @click="clicklogin()">登录</button>
      <button class="button-el" v-else>登录</button>
      <span class="ahref-login" @click="clickregister()">去注册</span>
    </div>
    <van-number-keyboard  @input="onInput" v-model="value" :show="show" :maxlength="12" @blur="show = false" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      valueName: '',
      value: '',
      show: false,
      elButton: false
    }
  },
  methods: {
    onInput (key) {
      if (this.value.length >= 5) {
        this.elButton = true
      } else {
        this.elButton = false
      }
    },
    clickregister () {
      this.$router.push({path: '/LoginUp'})
    },
    clicklogin () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/json'
      // this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/auth/mobileLogin', {
        username: this.valueName,
        password: this.value
      })
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            localStorage.setItem('Token', res.data.token)
            localStorage.setItem('username', res.data.userDetail.username)
            localStorage.setItem('userId', res.data.userDetail.id)
            this.$toast.success(res.msg)
            this.$router.push({path: '/Home'})
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  beforeMount () {
  }

}
</script>

<style  scoped>
  .box{
    width: 100%;
    height: 4rem;
    background: url("../../../assets/image/bg-login.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }

    .main{
      width: 100%;
    }

      .title{
        text-align: left;
        padding-top: 1.84rem;
        font-size: 0.42rem;
        padding-left: 0.4rem;
      }

      p
      {
        margin-top: .5rem;
      }
        .number{
          width: 86%;
          padding: .3rem 0 .3rem 0.4rem;
          border: 1px solid #BBBBBB;
          outline: none;
          appearance: none;
          border-radius: 0.08rem;
          margin:0 7%;
          font-size: .36rem;
        }
      .Paswword{
        width: 86%;
        padding: .3rem 0 .3rem 0.4rem;
        border: 1px solid #BBBBBB;
        outline: none;
        appearance: none;
        border-radius: 0.08rem;
        margin:0 7%;
        font-size: .36rem;
      }
      .button{
        width: 90%;
        height: 1rem;
        border-radius: 0.1rem;
        color: white;
        font-size: 0.36rem;
        background: #FF9800;
        margin-top: 0.72rem;
      }
  .button-el{
    width: 90%;
    height: 1rem;
    border-radius: 0.1rem;
    color: white;
    font-size: 0.36rem;
    background: #CBCBCB;
    margin-top: 0.72rem;
  }
  .ahref-login{
    display: block;
    float: left;
    line-height: .5rem;
    padding-left: .4rem;
    color:  #FF9800;
  }
</style>
