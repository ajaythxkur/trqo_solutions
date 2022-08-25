<template>
  <div>
    <swiper
    :slides-per-view="1"
    :space-between="20"
    :autoplay="{delay: 3500, disableOnInteraction: false}"
    :loop="true"
    :modules="modules" 
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(data,index) in crm_choose_data" :key="index">
         <div class="choose-main-box">
            <div class="choose-icon">
              <img loading="lazy" :src="data.icon" class="img-fluid" alt="" />
              <h3>{{ data.title }}</h3>
            </div>
            <!--choose-icon-->

            <div class="choose-info">
              <ul class="choose-list">
                <li v-for="(li_data, index) in data.li_list" :key="index">
                  <em class="fas fa-circle"></em> {{ li_data }}
                </li>
              </ul>
            </div>
            <!--choose-info-->
    </div>
    <!--choose-main-box-->
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
    import 'swiper/css';
    import 'swiper/css/navigation';
    import "swiper/css/autoplay";
    import crm_choose_icon_1 from "../assets/images/crm-images/choose-icon-1.png";
    import crm_choose_icon_2 from "../assets/images/crm-images/choose-icon-2.png";
    import crm_choose_icon_3 from "../assets/images/crm-images/choose-icon-3.png";
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Autoplay, Navigation} from "swiper";
    export default {
        name: "CrmChooseMobile",
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                
                crm_choose_data: [ {
                    icon: crm_choose_icon_1,
                    title: "Automate processes",
                    li_list: [
                        "CRM manages multiple bills, customers, and activities at the same time.",
                        "It enables efficient sales and marketing strategy.", 
                    ],
                    },
                    {
                    icon: crm_choose_icon_2,
                    title: "Ease of use",
                    li_list: [
                        "Stand apart from the crowd with unique services.",
                        "Need less training to know what's in it.",
                    ],
                    },
                    {
                    icon: crm_choose_icon_3,
                    title: "Secure",
                    li_list: [
                        "More security as you can use a high-end security system.",
                        "It is customized as per the security requirements your business premise needs.",
                    ],
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
.choose-main-box {
  background-image: url(../assets/images/crm-images/circle_element_frame.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 412px;
  width: 350px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.choose-icon {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 28px;
  text-align: center;
}

.choose-info {
  position: absolute;
  top: 195px;
  left: 18px;

  right: 0;
  margin: 0 auto;
  overflow: hidden;
  max-width: 270px;
}

ul.choose-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul.choose-list li {
  margin-bottom: 13px;
  font-family: "Poppins";
  font-size: 16px;
  color: #000;
  font-weight: 500;
  white-space: break-spaces;
  word-break: break-word;
}

ul.choose-list li:nth-child(2) {
  margin-bottom: 0;
}

ul.choose-list li .fas {
  color: #df8021;
  font-size: 10px;
}

.choose-icon img {
  max-width: 70px;
  margin-bottom: 12px;
}

.choose-icon h3 {
  color: var(--teqo-white);
  margin: 0;
  text-transform: capitalize;
  font-family: "Poppins";
  font-size: 25px;
  font-weight: 500;
}



@media all and (min-width: 1200px) and (max-width: 1399px) {
.choose-info {
      top: 185px;
    left: 31px;
}
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .choose-main-box {
    height: 360px;
    width: 320px;
    margin: 0 auto;
  }

.choose-icon h3 {
      font-size: 22px;
}
  .choose-icon {
    top: 20px;
  }

  .choose-info {
    max-width: 265px;
    top: 165px;
        left: 31px;
  }

  ul.choose-list li {
font-size: 15px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .choose-main-box {
    height: 360px;
    width: 320px;
    margin: 0 auto;
  }

.choose-icon h3 {
      font-size: 22px;
}
  .choose-icon {
    top: 20px;
  }

  .choose-info {
    max-width: 265px;
    top: 165px;
        left: 31px;
  }

  ul.choose-list li {
font-size: 15px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .choose-main-box {
    width: 338px;
    height: 404px;
    margin: 0 auto;
  }

  .choose-icon {
    top: 30px;
  }

  .choose-info {
    top: 188px;
    left: 39px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .choose-main-box {
    width: 295px;
    margin: 0 auto;
    border-radius: 12px;
    height: 357px;
  }

  .choose-icon {
    top: 20px;
  }

  .choose-icon img {
    margin-bottom: 8px;
  }

  .choose-info {
    padding: 10px 10px;
    text-align: unset;
    max-width: 230px;
    top: 157px;
  }

  .choose-icon h3 {
    font-size: 22px;
  }

ul.choose-list li {
  font-size: 14px;
}
}
</style>