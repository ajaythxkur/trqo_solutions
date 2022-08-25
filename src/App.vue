<template>
<div>
    <WhiteNav v-if="this.$route.name == 'WhitePaper'" />
    <ExchangeNav v-if="this.$route.name == 'Exchange'" />
    <!-- <Navbar v-if="this.$route.name != 'WhitePaper'" /> -->
    <MainHeader v-if="this.$route.name != 'WhitePaper' && this.$route.name != 'Exchange'" />
    <router-view />
    <WhitepaperFooter v-if="this.$route.name == 'WhitePaper'" />
    <!-- <ExchangeFooter v-if="this.$route.name == 'Exchange'" /> -->

    <MainFooter v-if="this.$route.name != 'WhitePaper' && this.$route.name != 'Exchange'" />
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import ExchangeNav from "@/components/Exchange/ExchangeNav.vue";
import WhiteNav from "@/components/White_Paper/WhiteNav.vue";
import WhitepaperFooter from "@/components/White_Paper/WhitepaperFooter.vue";
// import MainFooter from "@/components/MainFooter.vue"
export default {
    components: {
        MainHeader,
        MainFooter,
        ExchangeNav,
        WhiteNav,
        WhitepaperFooter
    }
}
</script>

<style>
#app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@font-face {
    font-family: MPLUSRounded1c;
    src: url('@/assets/fonts/MPLUS/MPLUSRounded1c-Regular.ttf');
    font-weight: 400;
}

@font-face {
    font-family: MPLUSRounded1c;
    src: url('@/assets/fonts/MPLUS/MPLUSRounded1c-Medium.ttf');
    font-weight: 500;
}

@font-face {
    font-family: MPLUSRounded1c;
    src: url('@/assets/fonts/MPLUS/MPLUSRounded1c-Bold.ttf');
    font-weight: 700;
}

@font-face {
    font-family: MPLUSRounded1c;
    src: url('@/assets/fonts/MPLUS/MPLUSRounded1c-ExtraBold.ttf');
    font-weight: 800;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins/Poppins-Light.ttf');
    font-weight: 300;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins/Poppins-Regular.ttf');
    font-weight: 400;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins/Poppins-Medium.ttf');
    font-weight: 500;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins/Poppins-SemiBold.ttf');
    font-weight: 600;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins/Poppins-Bold.ttf');
    font-weight: 700;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins/Poppins-ExtraBold.ttf');
    font-weight: 800;
}

:root {
    /* comman roots */
    --teqo-black: #000;
    --teqo-white: #fff;
    --teqo-oxford-blue: #344f56;
    --teqo-blue: #2a464e;
    --off-white: #f1f1f1;
    --teqo-banner: #f6f6f6;
    --teqo-grey: #656565;
    --footer-blue: #28498a;
    --footer-grey: #a7aeb0;
    --dynamic-yellow: #f6ad2a;
    --dynamic-blue: #264047;
    --icon-yellow: #e99809;
    --light-blue: #2b454e;
    --off-gray: #b9b9b9;
    --exchange-off-white:#f0fff0;
    --ex-bg:#ddd;
    --active-green:#8fe99a;

    /* home page root */
    --border-grey: #949494;
    --grey-text: #a1a1a1;
    --achievements-grey: #efefef;
    --industries-bg: #29454d;
    --work-process: #212728;
    --start-project: #4d646b;

    /* dynamic page root */
    --light-black: #0000004f;
    --feature-bg: linear-gradient(178deg, #263e44, #4b5f64);
    --light-yellow: #f5e4c5;
    --website_feature: #e7ebeb;
    --dynamic-light-blue: #4c90a1;
    --dynamic-light: #e2edf1;

    /* crm roots */
    --teqo-off-gray: #525252;
    --teqo-all-softwares-off-blue: #364f57;
    --teqo-orange: #ecb47c;
    --teqo-feature-off-pink: #e8ebec;
    --teqo-oxford-off-blue: #2c505b;
    --teqo-crm-service-box-shadow: rgb(100 100 111 / 22%) 0px 7px 29px 0px;

    --teqo-whitepaper-blue: #161c2d;
    --teqo-head: #334e55;
    --teqo-less-white: #f6f6f6;
    --off-blue: #496e79;
    --teqo-off-white: #d3dde0;
    --teqo-text-off-blue: #264047;
    --teqo-feature-white: #f9f9f9;
    --teqo-heading: #0a0a0a;
    --teqo-testing-off-white: #e1e5e6;
    --teqo-whitepaper-blue: #161c2d;
    --teqo-whitepaper-blue-light: #2f55d4;

    /* --teqo-whitepaper-white:#dee2e6; */
    --teqo-whitepaper-oxford-blue: #3c4858;
    --teqo-whitepaper-green: #25d366;
    --teqo-whitepaper-oxford-blue-light: #0088cc;
    --teqo-whitepaper-blue-light-b: #00aff0;
    --teqo-whitepaper-white: #d7d9e0;
    --teqo-whitepaper-oxford-off-blue: #8492a6;
    --teqo-whitepaper-off-white-b: #ccc;
    --teqo-whitepaper-off-white-a: #f4f6fa;

    /* E-COMMERCE ROOTS /MOBILE  */
    --teqo-input: #e8f2f4;
    --teqo-btnb: #f6ad2a;
    --teqo-greyhead: #a5a5a5;
    --teqo-info: #525252;
    --teqo-offwhite-bg:#fcfcfc;
    --teqo-light-blue: #4d93ff;
    --teqo-light-greym:#666666;
    --teqo-off-whitebg:#dcdddd;
    --teqo-brown:#7b7b7b;
    --teqo-lightbg:#f5f5f5;
    --teqo-beforebg:#77898e;
    --teqo-lightcolor:#a7a7a7;
    --teqo-backgroundbg:var(--teqo-white);
}

/* __________COMMAN CSS_____________*/

section {
    padding: 80px 0;
}
/* _________________TESTIMONIAL SLIDER CSS_________________ */
.testimonials .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    opacity: 0.3;
    margin-left: 12px !important;
}

.testimonials .swiper-pagination-bullet:hover {
    opacity: 1;
}

.swiper-pagination-bullet-active {
    opacity: 1 !important;
    background: var(--teqo-black) !important;
    position: relative;
}

.testimonials .swiper-pagination-bullet-active:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: -4px;
    left: -4px;
    width: 14px;
    height: 14px;
    content: '•';
    text-align: center;
    opacity: 1;
    background: var(--teqo-white);
    border-radius: 50%;
    z-index: -1;
}

.testimonials .swiper-wrapper {
    margin-bottom: 25px !important;
}
.testimonials .swiper-button-next:after, .swiper-button-prev:after{
    display: none;
}
/* _________________EXCHANGE SLIDER CSS_________________ */
.exchange-slide .swiper-slide {
    margin-bottom: 45px !important;
}

.exchange-slide .swiper-pagination-bullet {
    display: inline-block;
    border-radius: 50%;
    background: transparent !important;
    opacity:1 !important;
    margin-right: 8px !important;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--teqo-white) !important;
    height: 15px !important;
    width: 15px !important;
}
.exchange-slide .swiper-pagination-bullet-active {
    background: var(--active-green) !important;
    border: 1px solid var(--teqo-white) !important;
}
@media all and (max-width: 767px) {
    section {
        padding: 40px 0;
    }
}
</style>
