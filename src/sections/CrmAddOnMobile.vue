|<template>
    <swiper
        :slides-per-view="1"
        :space-between="20"
        :autoplay="{delay: 3500, disableOnInteraction: false}"
        :loop="true"
        :modules="modules" 
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide v-for="(crm_add, index) in crm_add_on_features" :key="index">
            <div class="add-on-main-box" :style="'margin-top:' + crm_add.margin">
                <div class="add-on-inner-text">
                    <div class="add-on-icon">
                        <img
                            loading="lazy"
                            :src="crm_add.add_on_icon"
                            class="img-fluid"
                            alt="slide"
                        />
                    </div>

                    <div class="add-on-icon-text">
                        <h3>{{ crm_add.add_on_icon_info_title }}</h3>
                        <p>{{ crm_add.add_on_icon_info_desc }}</p>
                    </div>
                    <!--add-on-icon-text-->
                </div>
                <!--add-on-inner-text-->
            </div>
            <!--add-on-main-box-->
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper ,SwiperSlide } from 'swiper/vue';
    // import CRMAddOnFeature from "@/components/CRMAddOnFeature.vue";
    // import VueSlickCarousel from "vue-slick-carousel";
    // import "vue-slick-carousel/dist/vue-slick-carousel.css";
    // import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
    import addon_icon_1 from "../assets/images/crm-images/addon_icon_1.png";
    import addon_icon_2 from "../assets/images/crm-images/addon_icon_2.png";
    import addon_icon_3 from "../assets/images/crm-images/addon_icon_3.png";
    import addon_icon_4 from "../assets/images/crm-images/addon_icon_4.png";
    import addon_icon_5 from "../assets/images/crm-images/addon_icon_5.png";
    import addon_icon_6 from "../assets/images/crm-images/addon_icon_6.png";
    import addon_icon_7 from "../assets/images/crm-images/addon_icon_7.png";
    import addon_icon_8 from "../assets/images/crm-images/addon_icon_8.png";
    import addon_icon_9 from "../assets/images/crm-images/addon_icon_9.png";
    import addon_icon_10 from "../assets/images/crm-images/addon_icon_10.png";
    import addon_icon_11 from "../assets/images/crm-images/addon_icon_11.png";

    import {Autoplay, Navigation} from "swiper";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import "swiper/css/autoplay";
    export default {
        name: "CrmAddOnMobile",
        components: {
            SwiperSlide,
            Swiper
            // CRMAddOnFeature,

        },

        data() {
            return {
                crm_add_on_features: [{
                    add_on_icon: addon_icon_1,
                    add_on_icon_info_title: "Estimation",
                    add_on_icon_info_desc: "Generate estimation reports for the customer within a minute.",
                },

                {
                    add_on_icon: addon_icon_2,
                    add_on_icon_info_title: "Generate potential leads",
                    add_on_icon_info_desc: "Keep tracking of leads in one place.",
                },

                {
                    add_on_icon: addon_icon_3,
                    add_on_icon_info_title: "Customize contracts",
                    add_on_icon_info_desc: "Set new contracts and demonstrates a clear picture of contracts.",
                }, {
                    add_on_icon: addon_icon_4,
                    add_on_icon_info_title: "Ticket system",
                    add_on_icon_info_desc: "The automotive ticket system allows ticket assignments and statuses.",


                },

                {
                    add_on_icon: addon_icon_5,
                    add_on_icon_info_title: "Scheduling",
                    add_on_icon_info_desc: "Set up staff schedules for team members by E-mail and other features.",


                }, {
                    add_on_icon: addon_icon_6,
                    add_on_icon_info_title: "Easy-to-implement theme styling",
                    add_on_icon_info_desc: "Style the CRM Software with easy-to-use theme styling functions without coding.",

                }, {
                    add_on_icon: addon_icon_7,
                    add_on_icon_info_title: "Report management ",
                    add_on_icon_info_desc: "Track real-time sales, expenses, and leads conversions. ",

                }, {
                    add_on_icon: addon_icon_8,
                    add_on_icon_info_title: "Track business goals",
                    add_on_icon_info_desc: "Tracking, management, and assignment of goals. ",

                }, {
                    add_on_icon: addon_icon_9,
                    add_on_icon_info_title: "One-click surveys ",
                    add_on_icon_info_desc: "Increase customer retention in one click via creating surveys. ",


                }, {
                    add_on_icon: addon_icon_10,
                    add_on_icon_info_title: "Personal-to-do dashboard",
                    add_on_icon_info_desc: "Every team member has their own dashboard to-do things.",

                },

                {
                    add_on_icon: addon_icon_11,
                    add_on_icon_info_title: "Set project milestones ",
                    add_on_icon_info_desc: "Track time spend and create milestones for projects.",

                },

        
                ]
            }
        },
        setup() {
            return {
                modules: [Autoplay, Navigation]
            };
        }

       
    }
</script>
<style>
.add-on-main-box {
  padding: 20px 20px;
  background-image: url(../assets/images/crm-images/add_on_frame.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 414px;
  height: 434px;
  position: relative;
}

.add-on-inner-text {
  position: absolute;
  top: 0;
  transform: translate(0px, 90px);
  max-width: 300px;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.add-on-icon {
  text-align: center;
  margin-bottom: 25px;
}

.add-on-icon img {
  max-width: 60px;
}

.add-on-icon-text h3 {
  text-align: center;
  text-transform: uppercase;
  font-family: "Poppins";
      font-size: 19px;
  margin-bottom: 0;
  padding-bottom: 10px;
  color: #000;
  font-weight: 500;
  text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
}

.add-on-icon-text p {
  text-align: center;
  font-size: 16px;
  font-family: "Poppins";
  line-height: 27px;
  font-weight: 500;
  color: #000;
  margin: 0;
  white-space: break-spaces;
  word-break: break-word;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .add-on-main-box {
    width: 362px;
    height: 397px;
    margin: 0 auto;
  }

  .add-on-inner-text {
    max-width: 260px;
        transform: translate(0px, 75px);
  }

  .add-on-icon-text h3 {
    font-size: 22px;
  }

  
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
.add-on-main-box {
    width: 293px;
    height: 325px;
    margin: 0 auto;
}

.add-on-icon {
        margin-bottom: 11px;
}

.add-on-icon-text h3 {
    font-size: 17px;
    font-weight: 600;
    
}

.add-on-icon-text p {
    font-size: 14px;
}

.add-on-inner-text {
        transform: translate(0px, 56px);
    max-width: 190px;
}
}


@media all and (min-width: 992px) and (max-width: 1024px) {
.add-on-main-box {
    width: 293px;
    height: 325px;
    margin: 0 auto;
}

.add-on-icon {
        margin-bottom: 11px;
}

.add-on-icon-text h3 {
    font-size: 17px;
    font-weight: 600;
    
}

.add-on-icon-text p {
    font-size: 14px;
}

.add-on-inner-text {
        transform: translate(0px, 56px);
    max-width: 190px;
}
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .add-on-main-box {
    width: 337px;
    height: 359px;
        margin: 0 auto;
  }
  .add-on-inner-text {
    max-width: 232px;
    transform: translate(0px, 47px);
  }
  .add-on-icon-text h3 {
    font-size: 20px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .add-on-main-box {
    width: 290px;
    height: 295px;
    margin: 0 10px;
    overflow: hidden;
    margin: 0 auto;
  }
  .add-on-inner-text {
    max-width: 190px;
  }
  .add-on-icon {
    text-align: center;
    margin-bottom: 18px;
    padding-top: 27px;
  }
  .add-on-icon img {
    max-width: 45px;
  }
  .add-on-inner-text {
    position: unset;
    transform: none;
  }
  .add-on-icon-text h3 {
    font-size: 16px;
  }
  .add-on-icon-text p {
    font-size: 14px;
    line-height: 23px;
  }
}
</style>