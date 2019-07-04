<template>
  <div>
    <textarea class="feedback" v-model="feedbackContent" placeholder="请留下您的意见反馈！"></textarea>
    <button class="feedback-submit" @click="FeedbackSubmit">提交</button>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'Feedback',
  data () {
    return {
      feedbackContent: ''
    }
  },
  methods: {
    FeedbackSubmit () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/addFeedback', qs.stringify({
        content: this.feedbackContent
      }))
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            this.$toast.success('提交成功')
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
  .feedback{
    width:86%;
    height: 3.2rem;
    background: #FFFFFF;
    border-radius: 0.08rem;
    border: 0.01rem solid #BBBBBB;
    display: block;
    margin: .62rem 5% 0 5%;
    padding: 0.32rem 2%;
  }
  input::-webkit-input-placeholder{
    color: #999999;
    font-size: .24rem;
    font-weight: 400;
    line-height: .34rem;
  }
  .feedback-submit{
    width: 4.6rem;
    height: .84rem;
    background: url("../../../assets/image/money-button.png") no-repeat center center;
    background-size: 4.6rem .84rem;
    color: #FFF;
    display: block;
    border-radius: 0.1rem;
    margin: 0.42rem auto;
    line-height: .84rem;
    font-size: 0.36rem;
  }
</style>
