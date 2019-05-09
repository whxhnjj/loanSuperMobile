<template>
  <div>
    <div class="swiper-container">
      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide>
          <img class="swiper-img" src="../../../assets/image/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../../../assets/image/banner.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
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
    }
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
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 120px;
}
</style>
