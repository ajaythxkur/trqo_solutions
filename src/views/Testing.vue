<template>
  <div>
    <div class="wrapper d-flex">
      <swiper
          :slides-per-view="1"
          :space-between="20"
          :autoplay="{delay: 3500, disableOnInteraction: false}"
          :loop="true"
          :modules="modules" 
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
      <swiper-slide>
    
        <section
          class="rmn section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center"
        >
          <div class="container">
            <div class="row crm-custom-row align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="chooser-crm-content">
                  <h2 class="m-0">Gym Management Software</h2>
                  <p class="m-0 text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <!--chooser-crm-content-->
              </div>
              <!--col-lg-6 col-md-12-->
              <div class="col-lg-6 col-md-12 order-first order-sm-1">
                <div class="chooser-crm-image text-center">
                  <img
                    src="../assets/images/crm-images/hotel-image.png"
                    alt="hotel-image"
                    class="img-fluid"
                  />
                </div>
                <!--chooser-crm-image-->
              </div>
              <!--col-lg-6 col-md-12-->
            </div>
            <!--row crm-custom-row-->
          </div>
          <!--container-->
        </section>
      </swiper-slide>
      <swiper-slide>
          <section
            class="rmn section section--dark section--small vw-100 vh-100 flex-shrink-0 d-flex justify-content-center align-items-center"
          >
            <div class="container">
              <div class="row crm-custom-row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="chooser-crm-content chooser-color">
                    <h2 class="m-0">Immigration CRM</h2>
                    <p class="m-0 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                  <!--chooser-crm-content-->
                </div>
                <!--col-lg-6 col-md-12-->

                <div class="col-lg-6 col-md-12 order-first order-sm-1">
                  <div class="chooser-crm-image text-center">
                    <img
                      src="../assets/images/crm-images/hotel-image.png"
                      alt="hotel-image"
                      class="img-fluid"
                    />
                  </div>
                  <!--chooser-crm-image-->
                </div>
                <!--col-lg-6 col-md-12-->
              </div>
              <!--row crm-custom-row-->
            </div>
            <!--container-->
          </section>
        </swiper-slide>
        <swiper-slide>
          <section
            class=" rmn section section--large vw-100 vh-100 flex-shrink-0 d-flex justify-content-center align-items-center"
          >
            <div class="container">
              <div class="row crm-custom-row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="chooser-crm-content">
                    <h2 class="m-0">Transport Management Software</h2>
                    <p class="m-0 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                  <!--chooser-crm-content-->
                </div>
                <!--col-lg-6 col-md-12-->

                <div class="col-lg-6 col-md-12 order-first order-sm-1">
                  <div class="chooser-crm-image">
                    <img
                      src="../assets/images/crm-images/hotel-image.png"
                      alt="hotel-image"
                      class="img-fluid"
                    />
                  </div>
                  <!--chooser-crm-image-->
                </div>
                <!--col-lg-6 col-md-12-->
              </div>
              <!--row crm-custom-row-->
            </div>
            <!--container-->
          </section>
          </swiper-slide>
          <swiper-slide>
          <section
            class="rmn section section--dark section--small vw-100 vh-100 flex-shrink-0 d-flex justify-content-center align-items-center"
          >
            <div class="container">
              <div class="row crm-custom-row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="chooser-crm-content chooser-color">
                    <h2 class="m-0">Hotel Management Software</h2>
                    <p class="m-0 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                  <!--chooser-crm-content-->
                </div>
                <!--col-lg-6 col-md-12-->

                <div class="col-lg-6 col-md-12 order-first order-sm-1">
                  <div class="chooser-crm-image text-center">
                    <img
                      src="../assets/images/crm-images/hotel-image.png"
                      alt="hotel-image"
                      class="img-fluid"
                    />
                  </div>
                  <!--chooser-crm-image-->
                </div>
                <!--col-lg-6 col-md-12-->
              </div>
              <!--row crm-custom-row-->
            </div>
            <!--container-->
          </section>
      </swiper-slide>
      <swiper-slide>
          <section
            class="rmn section section--large vw-100 vh-100 flex-shrink-0 d-flex justify-content-center align-items-center"
          >
            <div class="container">
              <div class="row crm-custom-row align-items-center">
                <div class="col-lg-6 col-md-12">
                  <div class="chooser-crm-content">
                    <h2 class="m-0">Real Estate CRM</h2>
                    <p class="m-0 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                  <!--chooser-crm-content-->
                </div>
                <!--col-lg-6 col-md-12-->

                <div class="col-lg-6 col-md-12 order-first order-sm-1">
                  <div class="chooser-crm-image text-center">
                    <img
                      src="../assets/images/crm-images/hotel-image.png"
                      alt="hotel-image"
                      class="img-fluid"
                    />
                  </div>
                  <!--chooser-crm-image-->
                </div>
                <!--col-lg-6 col-md-12-->
              </div>
              <!--row crm-custom-row-->
            </div>
            <!--container-->
          </section>
        </swiper-slide>
        <swiper-slide>
        <section
          class="rmn section section--dark section--small vw-100 vh-100 flex-shrink-0 d-flex justify-content-center align-items-center"
        >
          <div class="container">
            <div class="row crm-custom-row align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="chooser-crm-content chooser-color">
                  <h2 class="m-0">Customize CRM</h2>
                  <p class="m-0 text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <!--chooser-crm-content-->
              </div>
              <!--col-lg-6 col-md-12-->

              <div class="col-lg-6 col-md-12 order-first order-sm-1">
                <div class="chooser-crm-image text-center">
                  <img
                    src="../assets/images/crm-images/hotel-image.png"
                    alt="hotel-image"
                    class="img-fluid"
                  />
                </div>
                <!--chooser-crm-image-->
              </div>
              <!--col-lg-6 col-md-12-->
            </div>
            <!--row crm-custom-row-->
          </div>
          <!--container-->
        </section>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// import  gsap  from "gsap";
// import  ScrollTrigger  from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

export default {
  name: "TestingView",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
        modules: [Autoplay, Navigation]
    };
  }

  // mounted() {
  //   this.constant();
  // },

  // methods: {
  //   constant() {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const sections = gsap.utils.toArray(".rmn");
  //     let maxWidth = 0;

  //     const getMaxWidth = () => {
  //       maxWidth = 0;
  //       sections.forEach((section) => {
  //         maxWidth += section.offsetWidth;
  //       });
  //     };
  //     getMaxWidth();
  //     ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
      
  //     gsap.to(sections, {
  //       x: () => `-${maxWidth - window.innerWidth}`,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".wrapper",
  //         pin: true,
  //         scrub: true,
  //         markers: false,
  //         end: () => `+=${maxWidth}`,
  //         invalidateOnRefresh: true,
          
  //       },
  //     });

  //     sections.forEach((sct) => {
  //       ScrollTrigger.create({
  //         trigger: sct,
  //         start: () =>
  //           "top top-=" +
  //           (sct.offsetLeft - window.innerWidth / 2) *
  //             (maxWidth / (maxWidth - window.innerWidth)),
  //         end: () =>
  //           "+=" +
  //           sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
  //         toggleClass: { targets: sct, className: "active" },
  //       });
  //     });
  //   },
  // },
};
</script>

<style scoped>
.wrapper {
  overflow-x: hidden !important;
  padding: 80px 0;
}

.section--large {
  width: 100%;
  background-color: var(--off-blue);
  color: var(--teqo-white);
}

.section--small {
  width: 100%;
  background-color: var(--off-white);
}

.chooser-crm-content h2 {
  font-family: "MPLUSRounded1c";
  font-weight: 500;
  color: var(--teqo-white);
  font-size: 30px;
  line-height: normal;
  padding-bottom: 15px;
}

.chooser-color h2 {
  color: var(--teqo-black);
}

.chooser-crm-content p {
  color: var(--teqo-testing-off-white);
  text-align: justify;
  line-height: 28px;
  font-size: 16px;
  font-weight: 400;
}

.chooser-color p {
  color: var(--teqo-black);
}


@media all and (min-width: 1200px) and (max-width: 1399px) {
    .chooser-crm-content h2 {
      font-size: 28px;
        line-height: 21px;
    }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
    .chooser-crm-content h2 {
            font-size: 29px;
    line-height: 25px;
    }

    .chooser-crm-content p {
        font-size: 15px;
    }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
    .chooser-crm-content h2 {
            font-size: 29px;
    line-height: 25px;
    }

    .chooser-crm-content p {
        font-size: 15px;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .vh-100 {
    height: 85vh !important;
  }

  .row.crm-custom-row {
    flex-direction: column-reverse;
  }

  .chooser-crm-image {
      padding-bottom: 15px;
  }

  .chooser-crm-content h2 {
          font-size: 40px;
    line-height: 45px;
    padding-bottom: 16px;
    text-align: center;
  }

    .chooser-crm-content p {
        font-size: 15px;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
 .wrapper {
     padding-bottom: 40px;
     padding-top: 0 !important;
 }
 
 
 .vh-100 {
     height: 90vh;
 }
 
 .chooser-crm-content h2 {
     font-size: 18px;
    line-height: 30px;
    padding-bottom: 8px;
    text-align: center;
    font-weight: 600;
  }

  .chooser-crm-content p {
    font-size: 14px;
  }
}
</style>
