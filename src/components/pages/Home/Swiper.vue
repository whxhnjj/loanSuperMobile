<template>
  <div>
    <div class="swiper-container">
      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide v-for="item of Main" :key="item.index">
          <img class="swiper-img" :src="item.imgAddress" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      Main: []
    }
  },
  created () {
    this.GetData()
  },
  computed: {
    swiperOption () {
      return {
        autoplay: 3000,
        speed: 1000,
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        loop: true
      }
    }
  },
  methods: {
    GetData () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/index/banner', qs.stringify({
      }))
        .then((res) => {
          res = res.data
          this.Main = res.data
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 120px;
}
</style>
