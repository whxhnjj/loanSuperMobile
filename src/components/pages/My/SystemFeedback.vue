<template>
  <div>
    <div class="box">
     <div v-for="item in main" :key="item.index">
       <div class="info-left">
         <img src="../../../assets/image/touxiang.png" />
         <div class="content">
           <p><i style="color: #f00">{{UserName}}</i>提问：</p>
           <span>{{item.content}}</span>
         </div>
       </div>
       <div class="info-right" v-if="item.replyContent">
         <img src="../../../assets/image/kfu.png" />
         <div class="content">
           <p><i style="color: #FF9800">满意金</i>回答：</p>
           <span>{{item.replyContent}}</span>
         </div>
       </div>
     </div>
      <p class="ct" v-show="show"><button class="Again" @click="AgainFeedbackClick" type="button">重新反馈</button></p>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'SystemFeedback',
  data () {
    return {
      show: true,
      main: [],
      UserName: localStorage.getItem('username')
    }
  },
  methods: {
    SystemFeedback () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/findFeedbackListPageH5', qs.stringify({
        page: '1',
        size: '1000'
      }))
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            this.main = res.data.data.records
            if (res.data.status === '0') {
              this.show = false
            } else if (res.data.status === '1') {
              this.show = true
            }
          } else if (res.code === 401) {
            this.$router.push({path: '/Login'})
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
        })
    },
    AgainFeedbackClick () {
      this.$router.push({path: '/Feedback'})
    }
  },
  mounted () {
    this.SystemFeedback()
  }
}
</script>

<style scoped>
  .box{
    width:96%;
    margin: .66rem 2%;
  }
    .info-left{
      width: 100%;
      margin-bottom: .3rem;
      float: left;
    }
    .info-left img{
      width: .58rem;
      height: .58rem;
      display: block;
      float: left;
      margin-right: .14rem;
    }
    .info-left .content{
      width: 4.28rem;
      float: left;
      background: rgba(255,255,255,1);
      box-shadow: 0 -0.01rem 0 0 rgba(205,205,205,0.5);
      border-radius: 0.06rem;
      border: 0.01rem solid #E5E5E5;
      padding: .24rem .3rem .34rem .3rem;
    }
    .info-left .content p {
      width: 4.28rem;
      color: #333333;
      font-size: .3rem;
      font-weight: 400;
      line-height: .42rem;
      display: block;
    }

    .info-left .content span {
      width: 4.28rem;
      display: block;
      font-size: .18rem;
      font-weight: 400;
      height: .26rem;
      line-height: .26rem;
      margin-top: .15rem;
      color: #666666;
      text-align: left;
    }
    .info-right {
      width: 100%;
      margin-bottom: .3rem;
      float: right;
    }
    .info-right img{
      width: .66rem;
      height: .58rem;
      display: block;
      float: right;
    }
    .info-right .content {
      margin-right: .14rem;
      width: 4.28rem;
      float: right;
      background: rgba(255, 255, 255, 1);
      box-shadow0: -0.01rem 0 0 rgba(205, 205, 205, 0.5);
      border-radius: 0.06rem;
      border: 0.01rem solid #E5E5E5;
      padding: .24rem .3rem .34rem .3rem;
    }
    .info-right .content p {
      width: 4.28rem;
      color: #333333;
      font-size: .3rem;
      font-weight: 400;
      line-height: .42rem;
      display: block;
    }
    .info-right .content span{
      width: 4.28rem;
      display: block;
      font-size: .18rem;
      font-weight: 400;
      height :.26rem;
      line-height: .26rem;
      margin-top: .15rem;
      color: #666666;
      text-align: right;
    }
    .ct{
      text-align: center;
    }
      .Again {
        width: 2.6rem ;
        height:.8rem;
        background: #FF9800;
        border-radius :0.1rem;
        font-size :0.34rem;
        color:#ffffff;
      }
</style>
