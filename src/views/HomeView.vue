<template>
<div>
    <section class="teqo_banner">
        <div class="container">
            <div class="row align-items-center banner_cus_row">
                <div class="col-lg-6">
                    <div class="banner-image">
                        <img src="../assets/images/index/banner_image.png" loading="lazy" class="img-fluid" alt="img" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h2 class="mb-3">
                            Dive into the <span>DIGITAL WORLD</span> for
                            <span>LEAD GENERATION</span>
                        </h2>
                        <p class="mb-3">
                            We bring the latest IT advancements to create customized
                            products and solutions.
                        </p>
                        <div class="btn_banner_box">
                            <router-link to="" class="btn btn-success btn-banner">Try it for free</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--__________BANNER SECTION__________-->

    <section class="what_offer before-img">
        <div class="container">
            <MainHeading main_small_heading="Our Specializations" main_sec_heading="What WE OFFER" main_before_heading="Offerings" />
            <div class="row ">
                <OfferingsSection v-for="(offer_data, index) in offering_data" :key="index" :offering_data="offer_data" />
            </div>
        </div>
    </section>
    <!--__________OFFERING SECTION__________-->

    <section class="Work_process">
        <div class="container pt-1 mt-5">
            <MainHeading main_small_heading="Work Progress" main_sec_heading="The Way of Deal in" main_before_heading="Way to Deal" />
            <div class="row pt-5">
                <div class="col-lg-6 col-12" v-for="(data,index) in WorprogresskData" :key="index">
                    <div class="row pb-5">
                        <div class="col-md-4 col-12">
                            <div class="progress_img">
                                <img :src="require(`@/assets/images/index/${data.image}`)" loading="lazy" alt="call" />
                            </div>
                        </div>
                        <div class="col-md-8 col-12">
                            <div class="progress_content">
                                <h3 class="mb-2">{{data.heading}}</h3>
                                <p class="mb-0">{{data.para}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--____________WORK PROCESS______________-->

    <section class="key_features">
        <div class="container">
            <MainHeading main_small_heading="Key Features" main_sec_heading="Why to Choose Teqo" main_before_heading="Features" />
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-3" v-for="(data,index) in FeatureData" :key="index">
                    <div class="key_feature_img">
                        <img :src="require(`@/assets/images/index/${data.image}`)" loading="lazy" alt="image" />
                    </div>
                    <div class="key_feature_content">
                        <h3 class="mb-2">{{data.heading}}</h3>
                        <p>{{data.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--____________KEY FEATTURES______________-->

    <section class="start_project">
        <div class="container">
            <div class="row start_project_row">
                <div class="col-lg-6">
                    <div class="start_project_img">
                        <img src="../assets/images/index/project_img.png" class="img-fluid" loading="lazy" alt="img" />
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="start_project_content">
                        <h2 class="mb-4">Let's Start Working With Us Today</h2>
                        <p class="mb-4">
                            We don't like wasting your time as time is money. So choose us right from now to take desired development solutions.
                        </p>
                        <p class="mb-4">
                            Time is of the essence. Let's talk today and see what we can do
                            with your vision.
                        </p>

                        <a href="tel:+6494461709" class="btn  btn-cus btn_call">Call Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--____________START PROJECT______________-->

    <section class="industries-serve">
        <div class="container">
            <MainHeading main_small_heading="Supply" main_sec_heading="Industries We Serve" main_before_heading="Servings" />
        </div>
        <div class="container-fluid">
            <div class="row industries_row  industries_row_cus">
                <div class="col-lg-2 col-6 col-sm-4 col-md-4 ">
                    <div class="industries-box">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_1.png" loading="lazy" alt="icon" />
                            <p>Banking</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box translate-industries">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_2.png" loading="lazy" alt="icon" />
                            <p>Education</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_3.png" loading="lazy" alt="icon" />
                            <p>Retail</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box translate-industries">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_4.png" loading="lazy" alt="icon" />
                            <p>Entertainment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box ">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_5.png" loading="lazy" alt="icon" />
                            <p>Travel</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box translate-industries">
                        <div class="industries_content ">
                            <img src="../assets/images/index/industries_6.png" loading="lazy" alt="icon" />
                            <p>Hotel</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--row 1-->
            <div class="row">
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_7.png" loading="lazy" alt="icon" />
                            <p>Food</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box translate-industries">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_8.png" loading="lazy" alt="icon" />
                            <p>Hospital</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_9.png" loading="lazy" alt="icon" />
                            <p>Government</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box translate-industries">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_10.png" loading="lazy" alt="icon" />
                            <p>Manufacturing</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_11.png" loading="lazy" alt="icon" />
                            <p>Consulting</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                    <div class="industries-box translate-industries">
                        <div class="industries_content">
                            <img src="../assets/images/index/industries_12.png" loading="lazy" alt="icon" />
                            <p>Shipping</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--row 2-->
        </div>
    </section>
    <!--_____________INDUSTRIES WE SERVE______________--->
    <section class="customer_satisfaction">
        <div class="container">
            <MainHeading main_small_heading="FULFILMENT" main_sec_heading="Guranteed Customer Satisfaction" main_before_heading="Happiness" />
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="customer_satisfaction_content">
                        <h3 class="mb-4">
                            We <span>create</span> whatever you <span>need</span>.
                        </h3>
                        <p>
                            Our motto is making industries succeed. We refine a revolutionary approach to be specialized in app, web, or software development business. We wheel up your business with 360° development services expertise. We pour our dedication and expertise into every development. We believe in providing the "WOW'' factor to every client. With our innovative ideas, We create everything exceptional from beginning to end.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="customer_satisfaction_img">
                        <img src="../assets/images/index/cus_satisfaction.png" loading="lazy" class="img-fluid" alt="satisfaction" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--_____________CUSTOMER SATISFACTION______________--->

    <section class="teqo_achievements">
        <div class="container">
            <MainHeading main_small_heading="Achievements" main_sec_heading="Customers Who Use Crm" main_sec_sub_heading="Have Achieved" main_before_heading="Results" />

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6" v-for="(data, index) in AchievementsData" :key="index">
                    <div class="achievements_box" AchievementsData>
                        <img :src="require(`@/assets/images/index/${data.image}`)" alt="">
                        <p class="mt-3 mb-0">{{data.count }}<br>{{data.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--_____________ACHIVEMENTS______________--->
    <section class="testimonials">
        <div class="container">
            <MainHeading main_small_heading="Customer Reviews" main_sec_heading='"Testimonials"' />

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <!-- <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :speed="500" :slidesToShow="3" :responsive="responsive">
                        <div v-for="(testimonial, index) in testimonials_data" :key="index">
                            <Testimonial :testimonials_data="testimonial" />
                        </div>

                    </VueSlickCarousel> -->
                    <div class="swiper-section">
                        <swiper :autoplay="{ delay: 250000, disableOnInteraction: false }" :navigation="true" :modules="modules" class="mySwiper" :slides-per-view="3" :loop="true" :space-between="30" @swiper="onSwiper" :spaceBetween="10" :pagination="{ clickable: true }" @slideChange="onSlideChange" :breakpoints="{
                  '320': {
                    slidesPerView: 1,
                    spaceBetween: 30,
                     navigation:false
                  },
                  '767': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  '1024': {
                    slidesPerView: 2,
                    spaceBetween: 120,
                  },
                  '1200': {
                    slidesPerView: 3,
                    spaceBetween: 120,
                  },
                }">

                            <swiper-slide>
                                <TestimonialComponent />
                            </swiper-slide>
                            <swiper-slide>
                                <TestimonialComponent />
                            </swiper-slide>

                            <swiper-slide>
                                <TestimonialComponent />
                            </swiper-slide>
                            <swiper-slide>
                                <TestimonialComponent />
                            </swiper-slide>
                            <swiper-slide>
                                <TestimonialComponent />
                            </swiper-slide>
                            <swiper-slide>
                                <TestimonialComponent />
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--_____________TESTOMONIAL______________--->

    <div class="technologies">
        <div class="technologies_we">
            <div class="container-fluid">
                <MainHeading main_small_heading="Technologies" main_sec_heading="We Use" />
            </div>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <ul class="list-group list-group-horizontal list-unstyled technologies_use">
                        <li class="mb-4" v-for="(data, index) in TechnologiesData" :key="index">
                            <img loading="lazy" :src="require(`@/assets/images/index/${data.image}`)" alt="">
                            <p class="mt-2">{{data.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--_____________TECHNOLOGY SECTION______________--->

</div>
</template>

<script>
import HomeData from "@/assets/json/HomeData.json";
import MainHeading from "@/components/LandingPage/MainHeading.vue";
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import {
    Autoplay,
    Navigation,
    Pagination
} from "swiper";

import OfferingsSection from "@/components/LandingPage/OfferingsSection.vue";
import offer_img_1 from "../assets/images/index/offerings_1.png";
import offer_img_2 from "../assets/images/index/offerings_2.png";
import offer_img_3 from "../assets/images/index/offerings_3.png";
import TestimonialComponent from "@/components/LandingPage/TestimonialComponent.vue";

export default {
    name: "HomeView",
    components: {
        MainHeading,
        OfferingsSection,
        Swiper,
        SwiperSlide,
        // Achievement,
        TestimonialComponent,
    },

    data() {
        return {
            WorprogresskData: HomeData.WorprogresskData,
            FeatureData: HomeData.FeatureData,
            AchievementsData: HomeData.AchievementsData,
            TechnologiesData: HomeData.TechnologiesData,

            response: [{
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0,

            }, ],
            responsive: [{
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],

            offering_data: [{
                    image: offer_img_1,
                    heading: "Website Designing & Development",
                    description: "Our game-changing engagements to the websites are driving the results you want. We utilize the latest front-end or back-end automation to make your digital future well-built.",
                    li_list: [
                        "Static Websites",
                        "Dynamic Websites",
                        "E-Commerce Websites",
                    ],
                },
                {
                    image: offer_img_2,
                    heading: "Software Development",
                    description: "We innovate the software you want. We can develop pretty much software with masterful team engagement. We deploy software that creates momentum. ",
                    li_list: [
                        "CRM Software Solutions",
                        "Blockchain Software",
                        "Customized Software",
                        "Learning Management Software",
                        "Crowdfunding Software",
                    ],
                    addClass: "order-2",
                },
                {
                    image: offer_img_3,
                    heading: "Mobile Application Development",
                    description: "Handcrafted mobile apps and the latest styles we make to improve results. We have built world-class applications on time and budget.",
                    li_list: [
                        "CRM Apps",
                        "Ecommerce Apps",
                        "Customized Apps",

                    ]
                }
            ]
        };
    },
    setup() {
        return {
            modules: [Autoplay, Navigation, Pagination],
        };
    },
};
</script>

<style scoped>

/*______________offer section CSS start______________*/

section.what_offer {
    background: var(--teqo-banner);
    position: relative;
}

.what_offer::before {
    position: absolute;
    content: "";
    top: 35%;
    left: -90px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
    transform: rotate(45deg);
}

/*_____________Banner section CSS _____________*/
.banner-content h2 {
    color: var(--teqo-blue);
    font-weight: 500;
    text-transform: inherit;
    font-size: 39px;
    font-family: "MPLUSRounded1c", sans-serif;
    margin: 0;
    position: relative;
}

.banner-content h2 span {
    font-weight: 800;
}

section.teqo_banner {
    background-image: url(../assets/images/index/banner_shape.png);
    background-size: cover;
    background-position: 0px center;
    width: 100%;
    min-height: 800px;
    background-repeat: no-repeat;
    overflow: hidden !important;
    padding: 0 !important;
    background-color: var(--teqo-banner);
}

.banner_cus_row {
    transform: translateY(35%);
}

.banner-image {
    position: relative;
}

.banner-content {
    position: relative;
    padding-left: 75px;
}
.banner-content p{
font-size: 16px;
}


.btn-banner {
    color: var(--teqo-white);
    background-color: var(var(--teqo-oxford-blue));
    border-color: var(var(--teqo-oxford-blue));
    font-weight: 500;
    box-shadow: none;
}

.btn-banner:active,
.btn-banner:focus {
    color: var(--teqo-white);
    background-color: var(var(--teqo-oxford-blue));
    border-color: var(var(--teqo-oxford-blue));
    font-weight: 500;
    box-shadow: none;
}

.btn-banner:hover {
    background: var(--teqo-white);
    color: var(--teqo-black);
    border-color: var(var(--teqo-oxford-blue));
    box-shadow: none;
}

/*_____________Banner section CSS End_____________*/
/*___________Process section CSS start___________*/
section.Work_process {
    background-color: var(--teqo-banner);
    position: relative;
    background-image: url(../assets/images/index/Path_16.png);
    background-size: cover;
    background-position: -1px -15px;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 1019px;
    height: auto;
    overflow: hidden;
}

.Work_process::before {
    position: absolute;
    content: "";
    top: 0;
    right: -25px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
    transform: rotate(-25deg);
}

.Work_process::after {
    position: absolute;
    content: "";
    top: 50%;
    left: -100px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
    transform: rotate(-45deg);
    z-index: 9999;
    filter: invert(1);
}

.progress_img {
    background: var(--teqo-white);
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: auto;
}

.progress_content h3,
.progress_content p {
    color: var(--teqo-white);
}

.progress_content h3 {
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    text-transform: uppercase;
    margin: 0;
    font-weight: 600;
    position: relative;

}

.progress_content p {
    text-align: justify;
}


/*___________key_features section CSS Start___________*/
section.key_features {
    background-color: var(--teqo-banner);
    position: relative;
}

section.key_features::before {
    position: absolute;
    content: "";
    top: 75%;
    left: -100px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
}

.key_feature_content h3 {
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    color: var(--teqo-black);
    text-transform: uppercase;
    margin: 0;
    font-weight: 600;
    position: relative;
}

.key_feature_content p {
    font-size: 16px;
    color: var(--teqo-off-gray);
    font-family: "Poppins", sans-serif;
    margin: 0;
    position: relative;
}

.key_feature_img {
    width: 70px;
    height: 70px;
    background: var(--teqo-white);
    justify-content: center;
    align-items: center;
    display: flex;
    border: 2px solid var(--border-grey);
    margin-bottom: 15px;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
}

/*--------------key_features section CSS End--------------------------*/
/*--------------start_project section CSS Start--------------------------*/
.btn-cus {
    background: var(--teqo-white);
    color: var(--teqo-black);
    border-color: var(--teqo-oxford-blue) !important;
    font-weight: 500;
    box-shadow: none;
    font-size: 14px;
}

.btn-cus:hover {
    color: var(--teqo-white);
    background-color: var(--teqo-oxford-blue);
    border-color: var(--teqo-oxford-blue);
    box-shadow: none;
}

section.start_project {
    background-image: url(../assets/images/index/start_project.png);
    background-color: var(--teqo-banner);
    position: relative;
    background-size: cover;
    background-position: -5px -15px;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 1059px;
    height: auto;
    overflow: hidden;
    position: relative;
}

section.start_project::before {
    position: absolute;
    content: "";
    top: 85%;
    right: -50px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
}

.row.start_project_row {
    transform: translateY(50%);
}

.start_project_content p {
    color: var(--teqo-white);
}

.start_project_content {
    padding: 0 60px;
}

.start_project_img {
    text-align: center;
    margin-bottom: 30px;
}

.start_project_content h2 {
    color: var(--teqo-white);
    line-height: 55px;
}

.btn_call {
    width: 130px;
}

/*--------------start_project section CSS End--------------------------*/
/*--------------customer_satisfaction section CSS Start--------------------------*/

.customer_satisfaction_content h3 span {
    color: var(--teqo-oxford-blue);
}

.customer_satisfaction_content h3 {
    color: var(--grey-text);
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    text-transform: uppercase;
    margin: 0;
    font-weight: 600;
    position: relative;
}

.customer_satisfaction_content P {
    color: var(--teqo-off-gray);
}

.customer_satisfaction_content {
    margin-bottom: 25px;
}

/*--------------customer_satisfaction section CSS End--------------------------*/

/*--------------technologies section CSS Start--------------------------*/
.technologies_we {
    background-color: var(--teqo-banner);
    padding: 80px 0;
    position: relative;
}

.technologies_we::before {
    position: absolute;
    content: "";
    top: 37%;
    left: -70px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
    transform: rotate(45deg);
}

ul.technologies_use {
    display: flex;
    flex-wrap: wrap;
}

ul.technologies_use li {
    padding: 0px 51px;
}

ul.technologies_use li p {
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
}

/*--------------technologies section CSS End--------------------------*/

/*--------------Achievements section CSS Start--------------------------*/

section.teqo_achievements {
    position: relative;
    overflow: hidden;
}

.achievements_box {
    background-color: var(--achievements-grey);
    padding: 10px 25px;
    text-align: center;
    margin-bottom: 30px;
    box-shadow: 0 2px 5px rgb(0 0 0 / 30%);
    min-height: 280px;
}

.achievements_box p {
    font-weight: 600;
    color: var(--teqo-off-gray);

}

section.teqo_achievements::before {
    position: absolute;
    content: "";
    top: 10%;
    left: -70px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
    transform: rotate(45deg);
}

section.teqo_achievements::after {
    position: absolute;
    content: "";
    top: 80%;
    right: -70px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
}

/*--------------Achievements section CSS End--------------------------*/

/*--------------Industries serve section CSS start--------------------------*/
section.industries-serve {
    position: relative;
    margin-bottom: 60px;
}

section.industries-serve::before {
    position: absolute;
    content: "";
    top: 10%;
    left: -70px;
    background-image: url(../assets/images/index/Group_14.png);
    width: 160px;
    height: 102px;
    background-repeat: no-repeat;
}

.industries-box {
    width: 150px;
    height: 150px;
    border: 1px solid var(--industries-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgb(0 0 0 / 30%);
    margin: 0 auto;
    position: relative;
    background: var(--teqo-white);
}

.industries_content {
    text-align: center;
    position: relative;
}

.industries_content p {
    font-weight: 500;
    margin-top: 10px;
    color: var(--teqo-black);
}

.industries_row {
    margin-bottom: 200px;
}

.industries-box.translate-industries {
    transform: translateY(100px);
}

.industries_row_cus {
    position: relative;
}

.industries_row_cus::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background-image: url(../assets/images/index/industries_shape.png);
    height: 600px;
    width: 100%;
    background-repeat: no-repeat;
    right: 0;
    background-position: center;
}

/*--------------Industries serve section CSS End--------------------------*/

/*--------------Testomonial section CSS Start--------------------------*/
section.testimonials {
    background-image: url(../assets/images/index/testimonial.png);
    background-repeat: no-repeat;
    background-size: cover;
}

/*--------------Testomonial section CSS End--------------------------*/
@media all and (max-width:1860px) {
    .industries_row_cus[data-v-fae5bece]::before {
        display: none;
    }
}

@media all and (max-width: 1199px) {
    section.Work_process {
        background-color: var(--work-process);
        background-image: none;
    }

    .progress_img {
        margin: 0 auto;
    }

    .Work_process::before {
        display: none;
    }

    .progress_content h3 {
        font-size: 17px;
    }
}

@media all and (min-width: 1366px) and (max-width: 1699px) {
    section.Work_process {
        background-color: var(--work-process);
        background-image: none;
        min-height: auto;
    }

    .progress_img {
        margin: 0 auto;
    }

    .Work_process::before {
        display: none;
    }

    .banner-content {
        transform: translate(151px, -20px);
    }

    .banner-content p {
        white-space: break-spaces;
        font-size: 19px;
    }

    .banner-content h2 {
        white-space: break-spaces;
    }
}

@media all and (max-width: 1199px) {
    section.Work_process {
        background-color: var(--work-process);
        background-image: none;
        min-height: auto;
    }

    .progress_img {
        margin: 0 auto;
    }

    .Work_process::before {
        display: none;
    }

    section.teqo_banner {
        background-image: none;
        min-height: 450px;
    }

    .row.start_project_row {
        transform: unset;
    }

    section.start_project {
        background-image: none;

        min-height: auto;

        background-color: var(--start-project);
    }

    .industries_row_cus::before {
        display: none;
    }

    ul.technologies_use li {
        padding: 0px 26px;
    }
}

@media all and (max-width: 1024px) {
    section.Work_process {
        background-color: var(--work-process);
        background-image: none;
        min-height: auto;
    }

    .progress_img {
        margin: 0 auto;
    }

    .Work_process::before {
        display: none;
    }

    .progress_content h3 {
        font-size: 17px;
    }

    ul.technologies_use li {
        padding: 0px 27px;
    }

    .industries_row_cus::before {
        display: none;
    }

    section.teqo_banner {
        background-image: none;
        min-height: 450px;
    }

    section.start_project {
        background-image: none;

        min-height: auto;

        background-color: var(--start-project);
    }

    .row.start_project_row {
        transform: unset;
    }

    .start_project_content h2 {
        color: var(--teqo-white);
        line-height: 40px;
        font-size: 29px;
    }

}

@media all and (max-width: 991px) {
    section.Work_process {
        background-color: var(--work-process);
        background-image: none;
        min-height: auto;
    }

    .progress_img {
        margin: 0 auto;
    }

    .Work_process::before {
        display: none;
    }

    ul.technologies_use li {
        padding: 0px 27px;
    }

    section.teqo_banner {
        background-image: none;
        min-height: 800px;
        background-color: var(--teqo-white)fff;
    }

    .banner_cus_row {
        transform: translateY(10%);
    }

    .banner-content {
        padding-left: 0;
    }

    .banner-content h2 {
        font-size: 30px;
        text-align: center;
    }

    .btn_banner_box {
        text-align: center;
    }

    .row.start_project_row {
        transform: unset;
    }

    .start_project_content {
        padding: 0 10px;
    }

    .start_project_content h2 {
        font-size: 25px;
        line-height: normal !important;
    }

    section.start_project {
        background-image: none;

        min-height: auto;

        background-color: var(--start-project);
    }

    .industries_row_cus::before {
        display: none;
    }

    .industries_row {
        margin-bottom: 0;
    }

    section.industries-serve {
        margin-bottom: 0;
    }

    .industries-box.translate-industries {
        transform: unset;
    }

    .industries-box {
        margin-bottom: 25px;
    }
}

@media all and (max-width: 767px) {
    .what_offer::before {
        display: none;
    }

    .Work_process::before {
        display: none;
    }

    section.Work_process {
        background-color: var(--work-process);
        background-image: none;
        min-height: auto;
    }

    .progress_content h3 {
        font-size: 17px;
        text-align: center;
    }

    .progress_img {
        margin: 0px auto 25px;
    }

    .Work_process::after {
        display: none;
    }

    section.teqo_banner {
        background-image: none;
        min-height: 600px;
        background-color: var(--teqo-white)fff;
    }

    .banner_cus_row {
        transform: translateY(15%);
    }

    .banner-content {
        padding-left: 0;
    }

    .banner-content h2 {
        font-size: 30px;
        text-align: center;
    }

    section.start_project {
        background-image: none;

        min-height: auto;

        background-color: var(--start-project);
    }

    .row.start_project_row {
        transform: unset;
    }

    .start_project_content {
        padding: 0 10px;
    }

    .start_project_content h2 {
        font-size: 25px;
        line-height: normal !important;
    }

    .industries_row_cus::before {
        display: none;
    }

    .industries-box.translate-industries {
        transform: unset;
    }

    .industries-box {
        margin-bottom: 25px;
    }

    section.industries-serve::before {
        display: none;
    }

    .industries_row {
        margin-bottom: 0;
    }

    section.industries-serve {
        margin-bottom: 0;
    }

    section.teqo_achievements::before {
        display: none;
    }

    section.teqo_achievements::after {
        display: none;
    }

    .technologies_we::before {
        display: none;
    }

    .technologies_we {
        padding: 40px 0;
    }

    section.testimonials {
        background-image: none;
        background-color: var(--teqo-off-gray);
        margin-bottom: 40px;
    }

    


    button.slick-arrow.slick-prev {
        display: none !important;
    }

    button.slick-arrow.slick-next {
        display: none !important;
    }

    ul.technologies_use {
        flex-wrap: nowrap;
        overflow: auto;
    }

    ul.technologies_use li p {
        font-size: 14px;
    }

    .customer_satisfaction_content p {
        text-align: justify;
    }

    .customer_satisfaction_content h3 {
        text-align: center;
    }

    .banner-content {
        text-align: center;
    }

    .key_feature_img {
        margin: 0 auto 15px;
    }

    .key_feature_content {
        text-align: center;
    }

    .achievements_box p {
        font-size: 14px;
    }
    .banner-content p{
font-size: 14px;
}


}
</style>
