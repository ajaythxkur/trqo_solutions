<template>
  <div>
    <div class="swiper mySwiper">
      <swiper class="swiper" 
        :effect="'coverflow'" 
        :grabCursor="true"
        :centeredSlides="true"
        slidesPerView="auto"
        :coverflowEffect="{
          'rotate': 0,
          'stretch': 0,
          'depth': 100,
          'modifier': 3,
          'slideShadows': true
        }" 
        :pagination="true"
        :modules="modules" 
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      > 
        <swiper-slide>
          <img
            src="../assets/images/websites/sample_1.jpg"
            class="img-fluid"
            loading="lazy"
            alt="sample"
        /></swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/websites/sample_2.jpg"
            class="img-fluid"
            loading="lazy"
            alt="sample"
        /></swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/websites/sample_3.jpg"
            class="img-fluid"
            loading="lazy"
            alt="sample"
        /></swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/websites/sample_4.jpg"
            class="img-fluid"
            loading="lazy"
            alt="sample"
        /></swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/websites/sample_5.jpg"
            class="img-fluid"
            loading="lazy"
            alt="sample"
        /></swiper-slide>

        <div class="swiper-pagination"></div>
      </swiper>
      
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Navigation, EffectCoverflow, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
export default {
  name: "SampleWebsite",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      
    };
  },
  setup() {
    return {
        modules: [Autoplay, Navigation, EffectCoverflow, Pagination]
    };
  }
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 500px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 375px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


</style>
