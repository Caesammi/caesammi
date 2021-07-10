<template>
  <div class="recommendPage">
    <swiper
      ref="mySwiper"
      :options="swiperOption"
    >
      <swiper-slide>I'm Slide 1</swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed:1000, // 匀速时间
        direction: 'vertical',
        autoplay: {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.SwiperTest);
    this.SwiperTest.slideTo(3, 1000, false);
  }
};
</script>
<style>
.recommendPage .swiper-container{
    position: relative;
    width: 100%;
    height: 200px;
    background: pink;
}
.recommendPage .swiper-container .swiper-slide{
    width: 100%;
    line-height: 200px;
    background: yellowgreen;
    color: #000;
    font-size: 16px;
    text-align: center;
}
.swiper-container .swiper-wrapper{
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
}
</style>
