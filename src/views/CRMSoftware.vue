<template>
  <div>
    <section class="crm-banner-sec d-flex align-items-center justify-content-center position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 mx-auto">
            <div class="crm-banner-info">
              <div class="crm-main-head text-center my-0 mx-auto">
                <h1 class="m-0 text-capitalize text-light">CRM Software</h1>
              </div>

              <div class="inner-section-info text-center">
                <h2 class="text-center text-capitalize text-light m-0">
                  <span class="text-uppercase">Revamp </span>your business interactions with <br />
                  our customized <span class="text-uppercase">CRM development</span>.
                </h2>
                <p class="text-center m-0">
                  We excel at custom CRM development services that enable
                  companies to track <br />
                  business productivity. Bringing digital solutions to transform
                  their <br />
                  analysis to study large amounts of information.
                </p>

                <router-link to="" class="learn-text text-capitalize text-light text-decoration-none">learn more</router-link>
              </div>
              <!--inner-section-info-->

              <div class="dashboard-image position-absolute text-center my-0 mx-auto">
                <img
                  loading="lazy"
                  src="../assets/images/crm-images/dashboard-image.png"
                  class="img-fluid"
                  alt="CRMDashboard"
                />
              </div>
              <!--dashboard-image-->
            </div>
            <!--crm-banner-info-->
          </div>
          <!--col-lg-12 col-md-12-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--crm-banner-sec-->

    <section class="customer-manage-sec position-relative">
      <div class="container">
        <CRMMainHeading
          crm_small_heading="Customer"
          crm_main_heading="Scale the new heights of businesses with CRM solutions"
        />

        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="customer-manage-image text-center">
              <img
                loading="lazy"
                src="../assets/images/crm-images/video-element.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <!--customer-manage-image-->
          </div>
          <!--col-lg-6 col-md-6-->

          <div class="col-lg-6 col-md-6">
            <div class="customer-manage-info">
              <p class="pb-3 m-0 text-justify">
                No doubts! A fully functional CRM software development solution
                offers custom functionality to meet business needs. We have
                custom-built CRM software to help you get results. At Teqo we
                offer complete CRM solutions that make it possible to pursue
                customer-centric processes. It also increases profitability in
                marketing and sales. Our CRM follows the 360° vision of the
                company's relationships with customers.
              </p>
              <p class="m-0 text-justify">
                We Teqo has extensive knowledge of CRM software development. We
                work with our technical professionals on the best techniques in
                the industry for CRM development.
              </p>
            </div>
            <!--customer-manage-info-->
          </div>
          <!--col-lg-6 col-md-6-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--customer-manage-sec-->

    <section class="why-use-sec">
      <div class="container">
        <div class="row why-use-sec-row align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="why-choose-heading-text">
              <h4 class="pb-4 text-light m-0">
                Foster the productiveness of businesses with the use of CRM
                software
              </h4>

              <p class="pb-3 m-0">
                Customized CRM solutions efficiently manage your business
                activities. Whether it is marketing, sales, or other business
                processes CRM is what you all want. We at Teqo create
                state-of-the-art and feature-rich CRM solutions for smooth
                business activities.
              </p>

              <ul class="why-use-list">
                <li>
                  <img src="@/assets/images/icons/hand-point-right.svg" alt="hand-point-right" class="mb-1" /> Improve customer
                  revenue
                </li>
                <li>
                  <img src="@/assets/images/icons/hand-point-right.svg" alt="hand-point-right" class="mb-1" /> Channelize the
                  marketing performances
                </li>
                <li>
                  <img src="@/assets/images/icons/hand-point-right.svg" alt="hand-point-right" class="mb-1" /> Maximize the
                  business efforts
                </li>
                <li>
                  <img src="@/assets/images/icons/hand-point-right.svg" alt="hand-point-right" class="mb-1" /> Automate tasks
                </li>
                <li>
                  <img src="@/assets/images/icons/hand-point-right.svg" alt="hand-point-right" class="mb-1" /> Smooth communication
                </li>
              </ul>
            </div>
            <!--why-choose-heading-text-->
          </div>
          <!--col-lg-6 col-md-6-->

          <div class="col-lg-6 col-md-6 col-sm-12 order-first order-sm-1">
            <div class="why-use-image">
              <img
                loading="lazy"
                src="../assets/images/crm-images/why-girl.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <!--why-use-image-->
          </div>
          <!--col-lg-6 col-md-6-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--why-use-sec-->

    <section class="crm-feature-sec">
      <div class="container">
        <CRMMainHeading
          crm_small_heading="Feature"
          crm_main_heading="CRM Software Features"
        />

        <div class="row mt-5">
          <div class="col-lg-12 col-md-12 feature-slider">
            <!-- <VueSlickCarousel v-bind="response"> -->
                 <swiper
                    :slides-per-view="3"
                    :space-between="20"
                    :autoplay="{delay: 3500, disableOnInteraction: false}"
                    :loop="true"
                    :modules="modules" 
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    :breakpoints ="{
                        '320' : {
                            slidesPerView : 1, 
                        },
                        '991' : {
                            slidesPerView : 2,
                        },
                        '1199' : {
                            slidesPerView : 3,
                        }
                    }"
                >
              <swiper-slide
                v-for="(feature_data,index) in crm_feature_data"
                :key="index"
              >
                <CRMFeature :crmfeature_data="feature_data" />
              </swiper-slide>
              </swiper>
            <!-- </VueSlickCarousel> -->
          </div>
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--crm-feature-sec-->


    <section class="choose-crm-sec">
      <div class="container">
        <CRMMainHeading
          crm_small_heading="choose"
          crm_main_heading="Bring automation to business establishments with CRM Software"
        />
        <div class="row" v-if="isMobile">
            <div class="col-lg-12 col-md-12">
                  <CrmChooseMobile  />
            </div>
            <!--col-lg-12 col-md-12-->
        </div>
        <!--row-->
        <div class="row" v-else>
          <div
            class="col-lg-4 col-md-4"
            v-for="crm_data in crm_choose_data"
            :key="crm_data.title"
          >
              <CRMChoose :choose_data="crm_data" />
          </div>
          <!--col-lg-4 col-md-4-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--choose-crm-sec-->

    <section class="add-on-features">
        <div class="container">
            <CRMMainHeading
            crm_small_heading="Add On Features"
            crm_main_heading="CRM Software Features"
            />
            <div class="row" v-if="isMobile">
                <div class="col-lg-12 col-md-12">
                    <CrmAddOnMobile  />
                </div>
                <!--col-lg-12 col-md-12-->
            </div>
            <!--row-->
            <div class="row justify-content-center" v-else>
                <div
                    class="col-lg-4 col-md-4"
                    v-for="(crm_add, index) in crm_add_on_features"
                    :key="index"
                    :style="crm_add.left ? 'margin-left:1px' : ''"
                >
                    <CRMAddOnFeature :CRMAddOn_data="crm_add" />
                    <!--add-on-main-box-->
                </div>
                <!--col-lg-4 col-md-4-->
            </div>
            <!--row-->
        </div>
    <!--container-->
    </section>
    <!--add-on-features-->

    <div class="service-sec-heading">
      <CRMMainHeading
        crm_small_heading="Service"
        crm_main_heading="Industries We Service"
      />
    </div>

    <Testing />

    <section class="all_in_one_crm">
      <div class="container">
        <CRMMainHeading
          crm_small_heading="Super Charge Your Sales"
          crm_small_sub_heading="Marketing & Services"
          crm_main_heading="All In One CRM Software"
        />
        <AllCrmSoftware />
      </div>
    </section>
    
  </div>
</template>

<script>

import CRMMainHeading from "@/components/CRMMainHeading.vue";
import CRMFeature from "@/components/CRMFeature.vue";
import CRMChoose from "@/components/CRMChoose.vue";
import CrmChooseMobile from "@/sections/CrmChooseMobile.vue";
import CRMAddOnFeature from "@/components/CRMAddOnFeature.vue";
import CrmAddOnMobile from "@/sections/CrmAddOnMobile.vue";
import AllCrmSoftware from "@/sections/AllCrmSoftware.vue";
import Testing from "@/views/Testing.vue"
import crm_feature_icon_1 from "../assets/images/crm-images/features-icon-1.png";
import crm_feature_icon_2 from "../assets/images/crm-images/features-icon-2.png";
import crm_choose_icon_1 from "../assets/images/crm-images/choose-icon-1.png";
import crm_choose_icon_2 from "../assets/images/crm-images/choose-icon-2.png";
import crm_choose_icon_3 from "../assets/images/crm-images/choose-icon-3.png";
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

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
export default {
  name: "CRMSoftware",
  components: {
    CRMMainHeading,
    CRMFeature,
    Swiper,
    SwiperSlide,
    CRMChoose,
    CrmChooseMobile,
    CRMAddOnFeature,
    CrmAddOnMobile,
    AllCrmSoftware,
    Testing
  },

  data() {
    return {
        isMobile: false,
        crm_feature_data: [
            {
            feature_icon: crm_feature_icon_1,
            feature_icon_info_title: "Powerful Support System",
            feature_icon_info_desc:
                "Enable support system with automation features.",
            read_btn: "read more...",
            },
            {
            feature_icon: crm_feature_icon_2,
            feature_icon_info_title: "Increase Customer Retention ",
            feature_icon_info_desc:
                "Create, manage, and maintain customer retention and leads from multiple sources.",
            read_btn: "read more...",
            },
            {
            feature_icon: crm_feature_icon_1,
            feature_icon_info_title: "Create Announcements",
            feature_icon_info_desc:
                "Customize the announcements to update your team members and customers.",
            read_btn: "read more...",
            },
            {
            feature_icon: crm_feature_icon_2,
            feature_icon_info_title: "Sales Data Management ",
            feature_icon_info_desc:
                "Smooth assimilation of project records and expenses with real-time details.",
            read_btn: "read more...",
            },

            {
            feature_icon: crm_feature_icon_2,
            feature_icon_info_title: "Seamless Account Management",
            feature_icon_info_desc:
                "Get complete activity history on the custom dashboard.",
            read_btn: "read more...",
            },
        
            ],
        crm_choose_data: [
            {
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
        ],

        crm_add_on_features: [
            {
            add_on_icon: addon_icon_1,
            add_on_icon_info_title: "Estimation",
            add_on_icon_info_desc:
                "Generate estimation reports for the customer within a minute.",
            },

            {
            add_on_icon: addon_icon_2,
            add_on_icon_info_title: "Generate potential leads",
            add_on_icon_info_desc:
                "Keep tracking of leads in one place. ",
            },

            {
            add_on_icon: addon_icon_3,
            add_on_icon_info_title: "Customize contracts",
            add_on_icon_info_desc:
                "Set new contracts and demonstrates a clear picture of contracts. ",
            },
            {
            add_on_icon: addon_icon_4,
            add_on_icon_info_title: "Ticket system",
            add_on_icon_info_desc:
                "The automotive ticket system allows ticket assignments and statuses.",
            margin: "-170px",
            left: true,
            },

            {
            add_on_icon: addon_icon_5,
            add_on_icon_info_title: "Scheduling",
            add_on_icon_info_desc:
                "Set up staff schedules for team members by E-mail and other features.",
            margin: "-170px",
            divide: true,
            },
            {
            add_on_icon: addon_icon_6,
            add_on_icon_info_title: "Easy-to-implement theme styling",
            add_on_icon_info_desc:
                "Style the CRM Software with easy-to-use theme styling functions without coding.",
            margin: "-170px",
            },
            {
            add_on_icon: addon_icon_7,
            add_on_icon_info_title: "Report management",
            add_on_icon_info_desc:
                "Track real-time sales, expenses, and leads conversions.",
            margin: "-170px",
            },
            {
            add_on_icon: addon_icon_8,
            add_on_icon_info_title: "Track business goals",
            add_on_icon_info_desc:
                "Tracking, management, and assignment of goals.",
            margin: "-170px",
            },
            {
            add_on_icon: addon_icon_9,
            add_on_icon_info_title: "One-click surveys",
            add_on_icon_info_desc:
                "Increase customer retention in one click via creating surveys.",
            margin: "-170px",
            left: true,
            },
            {
            add_on_icon: addon_icon_10,
            add_on_icon_info_title: "Personal-to-do dashboard",
            add_on_icon_info_desc:
                "Every team member has their own dashboard to-do things.",
            margin: "-170px",
            },

            {
            add_on_icon: addon_icon_11,
            add_on_icon_info_title: "Set project milestones",
            add_on_icon_info_desc:
                "Track time spend and create milestones for projects.",
            margin: "-170px",
            },


        ]
    };
  },

  mounted() {
    this.isMobile = window.innerWidth <= 1366 ? true : false;
  },

  methods: {
    myEventHandler(e) {
      this.isMobile = e.target.innerWidth <= 1366 ? true : false;
    },
  },
  beforeUpdate() {
    this.$store.commit("navColorChange", "var(--teqo-white)");
  },

  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  setup() {
    return {
        modules: [Autoplay, Navigation]
    };
  }
};
</script>

<style>
/**** CRM BANNER SECTION CSS START ****/

section.crm-banner-sec {
  background-image: url(../assets/images/crm-images/top-background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 750px;
  border-radius: 0 0 40px 40px;
}
.crm-main-head {
  text-align: center;
  background-color: var(--off-blue);
  max-width: 300px;
  padding: 10px 10px;
  border-radius: 35px;
}
.crm-main-head h1 {
  font-size: 26px;
  font-family: "MPLUSRounded1c";
  font-weight: 500;
}
.inner-section-info h2 {
  line-height: 60px;
  font-family: "MPLUSRounded1c";
  font-weight: 400;
  padding-bottom: 10px;
}
.inner-section-info {
  margin-top: 30px;
}
.inner-section-info h2 span {
  font-weight: 700;
}
.inner-section-info p {
  color: var(--teqo-off-white);
  line-height: 27px;
  font-weight: 400;
  padding-bottom: 30px;
  font-size: 16px;
}
.inner-section-info a.learn-text {
  background: var(--off-blue);
  padding: 8px 58px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
}
.dashboard-image {
  z-index: 1;
  bottom: -690px;
  left: 0;
  right: 0;
}
/**** CRM BANNER SECTION CSS FINISH ****/
/**** CUSTOMER MANAGE SECTION CSS START ****/
section.customer-manage-sec {
  padding-top: 44%;
  padding-bottom: 130px;
  overflow: hidden;
}
section.customer-manage-sec::before {
  content: "";
  position: absolute;
  bottom: 120px;
  left: -254px;
  background-image: url(../assets/images/crm-images/before-layers.png);
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  width: 500px;
  height: 500px;
}
.customer-manage-image img {
  max-width: 450px;
}
.customer-manage-info p {
  font-size: 16px;
  color: var(--teqo-off-gray);
  line-height: 27px;
  font-weight: 400;
}
/**** CUSTOMER MANAGE SECTION CSS FINISH ****/
/**** WHY USE SECTION CSS START ****/

section.why-use-sec {
  background-image: url(../assets/images/crm-images/top-background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
  overflow: hidden;
  padding: 80px 0px;
}

.why-choose-heading-text h4 {
  font-family: MPLUSRounded1c;
  font-weight: 500;
  font-size: 37px;
  line-height: 50px;
}

.why-choose-heading-text p {
  font-weight: 400;
  font-size: 16px;
  color: var(--teqo-white);
  line-height: 30px;
  text-align: justify;
}

ul.why-use-list {
  list-style: none;
}

ul.why-use-list li {
  font-size: 16px;
  color: var(--teqo-white);
  margin-bottom: 13px;
}
/**** WHY USE SECTION CSS FINISH ****/
/**** CRM FEATURES SECTION CSS START ****/

section.crm-feature-sec {
  background-color: var(--teqo-feature-white);
  overflow: hidden;
}
/**** CRM FEATURES SECTION CSS FINISH ****/
/**** CHOOSE CRM SECTION CSS START ****/

section.choose-crm-sec {
  background-image: url(../assets/images/crm-images/top-background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
/**** CHOOSE CRM SECTION CSS FINISH ****/
/**** ADD ON FEATURES CRM SECTION CSS START ****/

section.add-on-features {
  overflow: hidden;
}
/**** ADD ON FEATURES CRM SECTION CSS FINISH ****/
/**** SERVICE SECTION  CSS START ****/

.service-sec-heading {
  padding-top: 40px;
  padding-bottom: 10px;
}
/**** SERVICE SECTION  CSS FINISH ****/

section.all_in_one_crm {
  overflow: hidden;
}
/********/

@media screen and (max-width: 1440px) {
  section.customer-manage-sec {
    padding-top: 53%;
  }

  section.all_in_one_crm {
    padding-top: 10px;
  }
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .inner-section-info h2 {
    font-size: 38px;
  }
  section.customer-manage-sec {
    padding-top: 60%;
  }
  section.all_in_one_crm {
    padding-top: 0px;
  }
  .why-choose-heading-text h4 {
    font-size: 37px;
    line-height: 50px;
  }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .inner-section-info h2 {
    font-size: 30px;
    line-height: 45px;
  }
  .inner-section-info p {
    font-size: 15px;
  }
  .dashboard-image {
    bottom: -610px;
  }

  .why-choose-heading-text h4 {
    font-size: 30px;
    line-height: 39px;
  }
  section.customer-manage-sec {
    padding-top: 65%;
  }

  section.all_in_one_crm {
    padding-top: 0px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .inner-section-info h2 {
    font-size: 30px;
    line-height: 45px;
  }
  .inner-section-info p {
    font-size: 15px;
  }
  .dashboard-image {
    bottom: -610px;
  }

  .why-choose-heading-text h4 {
    font-size: 30px;
    line-height: 39px;
  }
  section.customer-manage-sec {
    padding-top: 65%;
  }

  section.all_in_one_crm {
    padding-top: 0px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  section.crm-banner-sec {
    min-height: 600px;
    padding-bottom: 0;
  }
  .inner-section-info h2 {
    line-height: 45px;
    font-size: 30px;
  }
  .dashboard-image {
    display: none;
  }
  section.customer-manage-sec {
    padding-top: 10%;
  }
  .customer-manage-image img {
    max-width: 300px;
  }
  .customer-manage-info p {
    font-size: 15px;
  }
  .why-choose-heading-text h4 {
    font-size: 25px;
    padding-bottom: 15px !important;
    line-height: 35px;
  }
  .why-choose-heading-text p {
    font-size: 14px;
    padding-bottom: 10px !important;
    line-height: 25px;
  }

  ul.why-use-list {
    padding: 0;
    margin: 0;
  }

  ul.why-use-list li {
    font-size: 15px;
  }
  section.all_in_one_crm {
    padding-top: 0px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  section.crm-banner-sec {
    min-height: 650px;
    padding-bottom: 0;
  }
  .inner-section-info h2 {
    line-height: 32px;
    font-size: 17px;
    font-family: "Poppins";
  }
  .inner-section-info h2 br {
    display: none;
  }
  .inner-section-info p {
    font-size: 15px;
  }
  .inner-section-info p br {
    display: none;
  }
  .dashboard-image {
    display: none;
  }
  section.customer-manage-sec {
    padding-top: 20%;
    padding-bottom: 80px;
  }
  .customer-manage-image {
    margin-bottom: 25px;
  }
  .customer-manage-image img {
    max-width: 280px;
  }
  .customer-manage-info p {
    font-size: 14px;
  }
  .why-use-image {
    margin-bottom: 25px;
  }

  .why-choose-heading-text h4 {
    font-size: 23px;
    text-align: center;
    padding-bottom: 15px !important;
    line-height: 32px;
  }
  .why-choose-heading-text p {
    font-size: 15px;
  }
  ul.why-use-list {
    padding: 0;
    margin: 0;
  }
  section.philosophie {
    display: none;
  }
  section.all_in_one_crm {
    padding-top: 0px;
  }

  .service-sec-heading {
    padding-bottom: 0;
  }
}
</style>
