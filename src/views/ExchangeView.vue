<template>
<div id="exchange-bg">
    <section class="home_data" id="home">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="header_content text-center text-white" data-aos="fade-up">
                        <h2 class="lh-base mb-4 fw-normal text-capitalize">
                            Own a fully encrypted
                            <span class="green_color fw-bold">digital currency exchange </span>in less than 30 days
                        </h2>
                        <p class="fs-4 opacity-75 mb-5 text-white">
                            TEQO SOLUTION delivers next-generation exchange software
                            development for trading.
                        </p>
                        <span class="custom_button custom_button_model">
                            <!-- <a href="javascript:void(0)" > Free Consultation </a> -->
                            <button type="button" class="btn btn-primary" id="modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Free Consultation
                            </button>
                            <span class="dot1">
                                <span class="dot_circle"></span>
                            </span>
                            <span class="dot1 dot2">
                                <span class="dot_circle"></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="col-lg-12 p-0">
                    <div class="header_img_bottom text-center">
                        <img src="../assets/images/exchange_img/header_img.png" alt="header_img" class="img-fluid" />

                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="exchanges mb-5 text-center text-lg-start">
                        <h3 class="text-white mb-3">
                            <span class="gradiant_text_custom">Features</span>
                        </h3>
                        <div class="heading_line justify-content-center justify-content-lg-start">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>

                    <div class="exchange-slide">
                        <div class="swiper-section">
                            <swiper :navigation="true" :modules="modules" class="mySwiper" :slides-per-view="3" :loop="true" :space-between="30" @swiper="onSwiper" :spaceBetween="10" :pagination="{ clickable: true }" @slideChange="onSlideChange" :breakpoints="{
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
                    spaceBetween: 0,
                  },
                }">

                                <swiper-slide v-for="(data, index) in ExchangeSlideData" :key="index">
                                    <div>
                                        <div class="exchanges_slider_items" data-aos="fade-up">
                                            <div class="exchanges_slider_items_inner">
                                                <div class="exchange_img">
                                                    <img :src="require(`../assets/images/exchange_img/${data.icon}`)" alt="" class="img-fluid" />
                                                </div>
                                                <div class="exchange_content">
                                                    <h4>{{ data.title }}</h4>
                                                    <p class="fs-6 opacity-75 mt-3">
                                                        {{ data.para }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <!-- <swiper-slide>
                                    1
                                </swiper-slide>

                                <swiper-slide>
                                    1
                                </swiper-slide>
                                <swiper-slide>
                                    1
                                </swiper-slide>
                                <swiper-slide>
                                    1
                                </swiper-slide>
                                <swiper-slide>
                                    1
                                </swiper-slide> -->
                            </swiper>
                        </div>
                    </div>
                    <!--exchange-slide-->
                </div>
            </div>
        </div>
    </section>

    <section class="bg_dark_custom mt_95">
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row">
                <div class="col-lg-7">
                    <div class="talk_data ptb_75" data-aos="fade-right">
                        <h3 class="text-white mb-4 fw-normal">
                            Download Now To Know More & Get more Crypto Business Solutions.
                        </h3>
                        <span class="custom_button">
                            <a href="javascript:void(0)"> Download Now </a>
                            <span class="dot1">
                                <span class="dot_circle"></span>
                            </span>
                            <span class="dot1 dot2">
                                <span class="dot_circle"></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="talk_img text-lg-end text-center mb-4 mb-lg-0" data-aos="fade-down-left">
                        <img src="../assets/images/exchange_img/crypto_business.png" alt="crypto_business" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75 feature-sec" id="features">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="exchanges pb-lg-5 mb-5 text-center">
                        <h3 class="text-white mb-3">
                            Key <span class="gradiant_text_custom">Features</span>
                        </h3>
                        <div class="heading_line justify-content-center">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-10" v-for="(keyfeature, index) in KeyFeatureData" :key="index">
                    <div class="features_outer" data-aos="fade-right">
                        <div class="features">
                            <h4 class="mb-4">
                                {{ keyfeature.title }}<br />
                                {{ keyfeature.sub_title }}
                            </h4>
                            <p class="fs-6 opacity-75">{{ keyfeature.para }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75 trading_data mobile_shadow">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="exchanges pb-lg-5 mb-5 text-center">
                        <h3 class="text-white mb-3">
                            Enjoy Trading From
                            <span class="gradiant_text_custom">One Screen</span>
                        </h3>
                        <div class="heading_line justify-content-center">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="screen" data-aos="zoom-in" data-aos-duration="600">
                        <img src="../assets/images/exchange_img/screen.png" alt="" class="desktop_img d-none img-fludi" />
                        <img src="../assets/images/exchange_img/mobile_screen.png" class="mobile_img" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="process_img" data-aos="fade-right" data-aos-delay="50">
                        <img src="../assets/images/exchange_img/process_img.png" alt="" class="img-fluid" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="exchanges pb-lg-5 mb-5 text-center">
                        <h3 class="text-white mb-3">
                            Mobile App For
                            <span class="gradiant_text_custom"> Every Devices</span>
                        </h3>
                        <h4 class="text-white mb-4">
                            We Provide Mobile App For IOS & Android
                        </h4>
                        <div class="heading_line justify-content-center">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>
                    <div class="process_content d-flex" data-aos="fade-left" data-aos-delay="200">
                        <div class="process_content_data w-100 text-white">
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> UI/UX
                                Design
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> Metaverse
                                Development
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> Graphic
                                Designing
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> Smart
                                Contract Integration
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> ICO
                                Marketing
                            </h5>
                        </div>
                        <div class="process_content_data w-100 text-white ps-4">
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> Token
                                Development
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> NFT
                                Development
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> Exchange
                                Development
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" /> Web & App
                                Development
                            </h5>
                            <h5>
                                <img src="../assets/images/exchange_img/icon.png" />
                                Whitepaper Creation
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75 mobile_shadow">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="exchanges pb-lg-5 mb-5">
                        <h3 class="text-white mb-3 text-center text-lg-start">
                            Additional Exchange
                            <span class="gradiant_text_custom">Features</span>
                        </h3>
                        <div class="
                  heading_line
                  justify-content-center justify-content-lg-start
                ">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="additional_img mb-4 mb-lg-0" data-aos="fade-up">
                        <img src="../assets/images/exchange_img/additional.png" />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-10 col-sm-10">
                            <div class="additional_content" data-aos="fade-right">
                                <h4 class="mb-4 d-flex gap-3 align-items-center">
                                    <span class="iconify" data-icon="tabler:exchange"></span>
                                    Trading Features
                                </h4>
                                <ul>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Order book</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Real-time market activities</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Group order book</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Time and sales</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Advanced tools</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>24/7 trade</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Leverage the trade</span>
                                    </li>
                                    <li>
                                        <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                        <span>Fill the pending orders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-10 col-sm-10">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="additional_content mb-4" data-aos="fade-down">
                                        <h4 class="mb-4 d-flex gap-3 align-items-center">
                                            <span class="iconify" data-icon="ion:layers-outline"></span>
                                            Interface features
                                        </h4>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Eye-catching colouring</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Day-night mode availability</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Customize layouts</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Many workplaces</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Web and desktop-based platform</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="additional_content" data-aos="fade-up">
                                        <h4 class="mb-4 d-flex gap-3 align-items-center">
                                            <span class="iconify" data-icon="bi:grid-3x3-gap-fill"></span>
                                            Other features
                                        </h4>
                                        <ul>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>FIX API</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Accept deposits and withdrawals</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Compatible with one converter</span>
                                            </li>
                                            <li>
                                                <img src="../assets/images/exchange_img/dot.svg" alt="dot" class="img-fluid" />
                                                <span>Crypto wallet available</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg_dark_custom get-touch mt_140">
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row">
                <div class="col-lg-6">
                    <div class="talk_data text-center text-lg-start ptb_75" data-aos="fade-right">
                        <h3 class="text-white mb-4">Talk To Our Experts</h3>
                        <span class="custom_button">
                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Call Now
                            </a>
                            <span class="dot1">
                                <span class="dot_circle"></span>
                            </span>
                            <span class="dot1 dot2">
                                <span class="dot_circle"></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="talk_img Experts_img text-lg-end text-center mb-4 mb-lg-0" data-aos="fade-down-left">
                        <img src="../assets/images/exchange_img/talk_img.png" />

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt_75 pb_75_media" id="security">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="exchanges pb-lg-5 mb-5 text-center text-lg-start">
                        <h3 class="text-white">Security Measurement</h3>
                        <h3 class="mb-3">
                            <span class="gradiant_text_custom">Meet Our Safe-guard System of exchange</span>
                        </h3>
                        <div class="
                  heading_line
                  justify-content-center justify-content-lg-start
                ">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="
            row
            justify-content-end
            align-items-center
            flex-column-reverse flex-lg-row
          ">
                <div class="col-lg-8">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-10" v-for="(securitycontent, index) in SecurityData" :key="index">
                            <div class="security_data" data-aos="fade-up">
                                <h5>{{ securitycontent.title }}</h5>
                                <p class="fs-6 opacity-75 mt-4 text-white">
                                    {{ securitycontent.para }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="security_measurement_img mb-5 mb-lg-0" data-aos="fade-left">
                        <img src="../assets/images/exchange_img/security.png" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75 pb_75_media mobile_shadow" id="comparison">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-9">
                    <div class="heading_data mb-5">
                        <h3 class="text-white text-center">
                            Comparison Between
                            <span class="green_color_light">Centralized</span> Vs
                            <span class="green_color_light">Decentralized</span> Vs
                            <span class="green_color_light">Hybrid</span> Exchange
                        </h3>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="comparison mb-4 mb-lg-0" data-aos="fade-up">
                        <h4>Centralized Exchange</h4>
                        <div class="comparison_data">
                            <div class="comparison_data_left">
                                <h5>
                                    <span>UI & UX</span><span class="opacity-75 fw-light">Ease To Use</span>
                                </h5>
                                <h5>
                                    <span>Matching Speed</span>
                                    <span class="opacity-75 fw-light">Very Fast</span>
                                </h5>
                                <h5>
                                    <span>Custody</span><span class="opacity-75 fw-light">User Trust The CEX</span>
                                </h5>
                                <h5>
                                    <span>Trading Volume</span><span class="opacity-75 fw-light">High</span>
                                </h5>
                                <h5>
                                    <span>Liquidity</span><span class="opacity-75 fw-light">High</span>
                                </h5>
                                <h5>
                                    <span>Features</span><span class="opacity-75 fw-light">Unlimited</span>
                                </h5>
                                <h5>
                                    <span>Flat Gateway</span><span class="opacity-75 fw-light">Yes</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="comparison comparison1 mb-4 mb-lg-0" data-aos="flip-left">
                        <h4>Decentralized Exchange</h4>
                        <div class="comparison_data">
                            <div class="comparison_data_left">
                                <h5>
                                    <span>UI & UX</span><span class="opacity-75 fw-light">Hard To Use</span>
                                </h5>
                                <h5>
                                    <span>Matching Speed</span>
                                    <span class="opacity-75 fw-light">Slow</span>
                                </h5>
                                <h5>
                                    <span>Custody</span><span class="opacity-75 fw-light">User Own their Funds</span>
                                </h5>
                                <h5>
                                    <span>Trading Volume</span><span class="opacity-75 fw-light">Low</span>
                                </h5>
                                <h5>
                                    <span>Liquidity</span><span class="opacity-75 fw-light">Low</span>
                                </h5>
                                <h5>
                                    <span>Features</span><span class="opacity-75 fw-light">Limited</span>
                                </h5>
                                <h5>
                                    <span>Flat Gateway</span><span class="opacity-75 fw-light">Yes</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="comparison comparison2 mb-4 mb-lg-0" data-aos="fade-down">
                        <h4>Hybrid Exchange</h4>
                        <div class="comparison_data">
                            <div class="comparison_data_left">
                                <h5>
                                    <span>UI & UX</span><span class="opacity-75 fw-light">Ease To Use</span>
                                </h5>
                                <h5>
                                    <span>Matching Speed</span>
                                    <span class="opacity-75 fw-light">Very Fast</span>
                                </h5>
                                <h5>
                                    <span>Custody</span><span class="opacity-75 fw-light">User Own their Funds</span>
                                </h5>
                                <h5>
                                    <span>Trading Volume</span><span class="opacity-75 fw-light">Low</span>
                                </h5>
                                <h5>
                                    <span>Liquidity</span><span class="opacity-75 fw-light">Low</span>
                                </h5>
                                <h5>
                                    <span>Features</span><span class="opacity-75 fw-light">Limited</span>
                                </h5>
                                <h5>
                                    <span>Flat Gateway</span><span class="opacity-75 fw-light">Yes</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ptb_75 pb-lg-0" id="technologies">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="exchanges pb-lg-5 mb-5">
                        <h3 class="text-white text-center">We Use</h3>
                        <h3 class="text-center mb-3">
                            <span class="gradiant_text_custom">Technologies</span>
                        </h3>

                        <div class="heading_line justify-content-center">
                            <div class="line long_line"></div>
                            <div class="line short_line"></div>
                            <div class="line short_line2"></div>
                        </div>
                    </div>
                </div>


<!-- changes -->


                <div class="technologies-slider">
                    <div class="exchange-slide">
                        <div class="swiper-section">
                            <swiper
                                :navigation="true" 
                                :modules="modules" 
                                class="mySwiper" 
                                :slides-per-view="4" 
                                :loop="true" 
                                :space-between="30" 
                                @swiper="onSwiper" 
                                :spaceBetween="10" 
                                :pagination="{ clickable: true }" 
                                @slideChange="onSlideChange" 
                                :breakpoints="{
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
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                    },
                            }"
                            >
                                <swiper-slide v-for="(technologieslide, index) in TechnologiesData" :key="index">
                                    <div class="technologies text-center" data-aos="fade-up">
                                        <img :src="require(`../assets/images/exchange_img/Technologies/${technologieslide.image}`)" />
                                        <h5 class="text-white mt-4">{{ technologieslide.name }}</h5>
                                    </div>
                                </swiper-slide>
                            </swiper>
                            
                        </div>
                    </div>
                </div>
                <!--technologies-slider-->
            </div>
        </div>
    </section>

    <section class="ptb_75 mobile_shadow">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="Customer_says">
                        <div class="exchanges pb-5 text-lg-start text-center">
                            <h3 class="text-white">
                                Our <span class="gradiant_text_custom"> Customer Says</span>
                            </h3>
                            <h3 class="text-white mb-3">We Make Brands</h3>

                            <div class="
                    heading_line
                    justify-content-center justify-content-lg-start
                  ">
                                <div class="line long_line"></div>
                                <div class="line short_line"></div>
                                <div class="line short_line2"></div>
                            </div>
                        </div>
                    </div>

                    <div class="customer_slider_data" data-aos="fade-right">
                        
                        <!-- <VueSlickCarousel ref="c1" :arrows="false" :asNavFor="c2" :focusOnSelect="true"> -->
                            <swiper
                                :navigation="true" 
                                :modules="modules" 
                                class="mySwiper" 
                                :slides-per-view="1" 
                                :loop="true" 
                                :space-between="30" 
                                @swiper="onSwiper" 
                                :spaceBetween="10" 
                                @slideChange="onSlideChange" 
                                
                            >
                                <swiper-slide v-for="(cutsomerinfo, index) in CustomerInfoData" :key="index">
                                   <div class="coming_soon_data_items">
                                        <p class="text-white opacity-75 mb-4">
                                            {{ cutsomerinfo.para }}
                                        </p>
                                        <div class="text-center text-lg-start">
                                            <span class="custom_button">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Call Now
                                                </a>
                                                <span class="dot1">
                                                    <span class="dot_circle"></span>
                                                </span>
                                                <span class="dot1 dot2">
                                                    <span class="dot_circle"></span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        <!-- </VueSlickCarousel> -->
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="customer_slider_img mt-5 pt-5 mt-lg-0 pt-lg-0" data-aos="fade-left">
                        <!-- <VueSlickCarousel ref="c2" :dots="true" :asNavFor="c1" :slidesToShow="4" :focusOnSelect="true"> -->
                             <div class="exchange-slide">
                                <div class="swiper-section">
                                    <swiper
                                        :navigation="true" 
                                        :modules="modules" 
                                        class="mySwiper" 
                                        :slides-per-view="4" 
                                        :loop="true" 
                                        :space-between="30" 
                                        :pagination="{ clickable: true }" 
                                        @swiper="onSwiper" 
                                        :spaceBetween="10" 
                                        @slideChange="onSlideChange" 
                                    
                                        
                                    >
                                        <swiper-slide v-for="(clientimage, index) in ClientImageData" :key="index">
                                            <img :src="
                                            require(`../assets/images/exchange_img/${clientimage.image}`)
                                            " alt="client-image" class="img-fluid" />
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        <!-- </VueSlickCarousel> -->
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- vueper slide  -->
    <section class="ptb_75 mobile_shadow">
        <div class="container">
            <div class="row align-items-center">
                
            </div>
        </div>
    </section>
<!-- vueper slide  -->

    <section class="ptb_75 faq-section" id="faq">
        <div class="container">
            <div class="col-12">
                <div class="exchanges pb-5">
                    <h3 class="text-white text-center">
                        <span class="gradiant_text_custom"> FAQs</span>
                    </h3>
                    <h3 class="text-white mb-3 text-center">
                        Do You Have A Questions Please Ask Us
                    </h3>

                    <div class="heading_line justify-content-center">
                        <div class="line long_line"></div>
                        <div class="line short_line"></div>
                        <div class="line short_line2"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="faq-content">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item" data-aos="fade-up">
                                <div class="accordion-item-inner">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How Long Does it Take to Make My Exchange?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body text-white">
                                            <small class="opacity-75">Are you planning to launch your exchange? Don’t
                                                worry! We help you get your exchange in the market. We
                                                have ready-to-use exchanges for business start-ups. We
                                                provide an exchange in just 7 days.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up">
                                <div class="accordion-item-inner">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How Long We Provide the Support Services After the
                                            Exchange Purchase?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body text-white">
                                            <small class="opacity-75">We will provide 1-year support services after
                                                launching your exchange. If you need more support, we
                                                are always there to help you.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="whatsapp">
        <a href="https://api.whatsapp.com/send/?phone=+918448443318&amp;text=I%27m+interested+in+your+Service" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--teqo-white); transform: ; msfilter: ">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
            </svg>
        </a>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" ref="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-image">
                    <img src="../assets/images/exchange_img/contact.png" alt="contact-image" class="img-fluid" />
                </div>
                <div class="modal-header">
                    <h5 class="modal-title text-black fs-3 text-opacity-75 fw-bold" id="exampleModalLabel">
                        Call me back Now... ?
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: var(--teqo-white)">
                            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-box">
                        <form @submit.prevent="formSubmit">
                            <div class="row form-row">
                                <div class="col-xl-12 col-lg-12 col-md-12 mb-4">
                                    <div class="form-inner">
                                        <label class="label">Name</label>
                                        <div class="input-group">
                                            <input v-model="name" type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <!--form-inner-->
                                    <!-- <div class="error" v-if="!$v.name.required && submit">
                      Name is required
                    </div> -->
                                    <div class="error">
                                        Name is required
                                    </div>
                                </div>
                                <!--col-xl-12 col-lg-12 col-md-12-->

                                <div class="col-xl-12 col-lg-12 col-md-12 mt-3 mb-4">
                                    <div class="form-inner">
                                        <label class="label">Contact Number</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">
                                                <div class="dropdown">
                                                    <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span>
                                                            <img :src="
                                    'https://flagpedia.net/data/flags/normal/' +
                                    country.code.toLowerCase() +
                                    '.png'
                                  " alt="" class="img-fluid" style="width: 14px" height="14px" />
                                                            {{ country.number }}</span>
                                                    </button> -->
                                                    <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li v-for="(country, index) in CountryCode" :key="index" @click="countryChange(country)">
                                                            <span>
                                                                <img :src="
                                      'https://flagpedia.net/data/flags/normal/' +
                                      country.code.toLowerCase() +
                                      '.png'
                                    " alt="" class="img-fluid" style="width: 14px" height="14px" />
                                                                {{ country.number }}</span>
                                                        </li>
                                                    </ul> -->
                                                </div>
                                            </span>

                                            <input type="text" v-model="phonenumber" class="form-control" aria-label="Username" id="number-field" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <!--form-inner-->

                                    <!-- <div
                      class="error"
                      v-if="!$v.phonenumber.required && submit"
                    >
                      Number is required
                    </div> -->
                                    <div class="error">
                                        Number is required
                                    </div>
                                    <!-- <div class="error" v-if="!$v.phonenumber.minLength && submit">
                                        Number must be 10 character
                                    </div> -->
                                    <div class="error">
                                        Number must be 10 character
                                    </div>
                                </div>
                                <!--col-xl-12 col-lg-12 col-md-12-->

                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="submit-butt">
                                        <span class="custom_button custom_button_form">
                                            <button id="call_me_button" type="submit" v-if="!loading">
                                                Submit
                                            </button>
                                            <button id="call_me_button" type="button" v-else>
                                                <div class="spinner-border" role="status">
                                                    <span class="visually-hidden"></span>
                                                </div>
                                            </button>
                                            <span class="dot1">
                                                <span class="dot_circle"></span>
                                            </span>
                                            <span class="dot1 dot2">
                                                <span class="dot_circle"></span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <!--col-xl-12 col-lg-12 col-md-12-->
                            </div>
                        </form>
                    </div>
                    <!--form-box-->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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

//Vueper slide 
// import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ExchangeSLiderjson from "@/assets/json/ExchangeSlider.json";
import KeyFeaturejson from "@/assets/json/KeyFeature.json";
import SecurityContentjson from "@/assets/json/SecurityContent.json";
import Technologiesjson from "@/assets/json/Technologies.json";
import Testimonialjson from "@/assets/json/Testimonial.json";
import countriesjson from "@/assets/json/countries.json";

// import { required, minLength } from "vuelidate/lib/validators";
import { Modal } from "bootstrap";
// import ApiClass from "@/api/api";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: "ExchangeView",

    components: {
        // VueSlickCarousel,
        Swiper,
        SwiperSlide,
        // VueperSlides,
        // VueperSlide
    },

    data() {
        return {
            settings: {
                dots: true,
                focusOnSelect: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                touchThreshold: 5,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },

            technologies: {
                dots: true,
                focusOnSelect: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                touchThreshold: 5,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },

            ExchangeSlideData: ExchangeSLiderjson.ExchangeSlideData,
            KeyFeatureData: KeyFeaturejson.FeatureData,
            SecurityData: SecurityContentjson.SecurityData,
            TechnologiesData: Technologiesjson.TechnologiesData,
            CustomerInfoData: Testimonialjson.CustomerInfo,
            ClientImageData: Testimonialjson.ClientImage,
            c1: undefined,
            c2: undefined,

            country: {
                number: "+91",
                flag: "🇮🇳",
                code: "IN",
            },
            CountryCode: countriesjson.sort(
                (a, b) =>
                parseFloat(a.number.substring(1)) - parseFloat(b.number.substring(1))
            ),
            name: "",
            phonenumber: "",
            submit: false,
            loading: false,
        };
    },
    setup() {
        return {
            modules: [Autoplay, Navigation, Pagination],
        };
    },
    mounted() {
      this.c1 = this.$refs.c1;
      this.c2 = this.$refs.c2;
      this.showModal();
      this.hideModal();
      AOS.init()
    },

    methods: {
      //ONLOAD SHOW MODAL
      showModal() {
        setTimeout(() => {
          var el = new Modal(this.$refs.Modal);
          el.show();
        }, 3000);
      },

      //HIDE MODAL
      hideModal() {
        var el = new Modal(this.$refs.Modal);
        el.hide();
      },

      //COUNTRY SELECT
      countryChange(selected_country) {
        console.log("HERE");
        this.country = selected_country;
        this.country.number = selected_country.number;
      },

      //RESET FORM
    //   resetForm() {
    //     this.country = {
    //       number: "+91",
    //       flag: "🇮🇳",
    //       code: "IN",
    //     };
    //     this.phonenumber = "";
    //     this.name = "";
    //     this.v$.$reset();
    //   },

      //FORM SUBMIT
    //   async formSubmit() {
    //     console.log("submit");
    //     this.submit = true;
    //     if (this.$v.$invalid) {
    //       return;
    //       // this.submitStatus = 'ERROR'
    //     }

        //VALIDATION

        //FORM DATA
        // let form_data = {
        //   leaddata: {
        //     name: this.name,
        //     phonenumber: this.phonenumber,
        //     country_code: this.country.number,
        //     status: "2",
        //     source: "22",
        //   },
        // };

        //LOADING
        // this.loading = true;
        // //API HIT
        // let response = await ApiClass.postRequest(
        //   "Leads/addlead",
        //   false,
        //   form_data,
        //   null,
        //   null,
        //   "https://login.lbmsolutions.in/"
        // );
        // //LOADING
        // this.loading = false;

        // if (response?.data) {
        //   //ERROR MESSAGE
        //   if (response.data.status == "error") {
        //     this.$swal({
        //       position: "center",
        //       icon: "error",
        //       title: response.data.msg,
        //       showConfirmButton: false,
        //       timer: 3000,
        //     });
        //     return;
        //   }

        //   //SUCCESS MESSAGE
        //   if (response.data.status == "success") {
        //     this.$swal({
        //       position: "center",
        //       icon: "success",
        //       title: response.data.msg,
        //       showConfirmButton: false,
        //       timer: 3000,
        //     });

        //     this.resetForm();
        //     this.hideModal();

        //     return;
        //   }
        // }

        // //LOADING
        // this.loading = false;
    //   },
    },

    // validations: {
    //     name: {
    //         required,
    //     },

    //     phonenumber: {
    //         required,
    //         minLength: minLength(10),
    //     },
    // }
};
</script>

<style scoped>
@import "../assets/css/custom.css";



#exchange-bg {
    background-color: hsl(0deg 0% 11%);
}
.feature-sec {
    padding: 40px 0;
}

.additional_img img {
    z-index: 1;
    position: relative;
}

.additional_content ul li {
    color: var(--teqo-white);
}

.additional_content ul li img {
    max-width: 15px;
    max-height: 15px;
}

.get-touch {
    padding: 40px 0;
}

#modal-btn {
    display: inline-block;
    background: linear-gradient(45deg,
            hsl(143deg 25% 45%),
            hsl(126deg 21% 29%),
            hsl(143deg 25% 45%));
    padding: 8px 35px;
    border-radius: 30px;
    color: var(--teqo-white);
    border: none;
}

#modal-btn:focus {
    box-shadow: none;
}

.modal-content {
    background-color: hsl(120deg 100% 97%) !important;
    box-shadow: 0px 25px 122px 0px rgb(50 35 215 / 10%);
    border-radius: 25px;
    position: relative;
}

.modal-header {
    border: none;
    position: relative;
    margin-top: 50px;
}

.modal-header .btn-close {
    position: absolute;
    right: 0;
    top: -62px;
    background: linear-gradient(45deg,
            hsl(143deg 25% 45%),
            hsl(126deg 21% 29%),
            hsl(143deg 25% 45%));
    min-width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 1;
}

.modal-header .btn-close:focus {
    box-shadow: none;
}

.form-inner {
    position: relative;
}

.label {
    position: absolute;
    left: 40px;
    top: -10px;
    padding: 0 7px;
    z-index: 1;
    background: var(--exchange-off-white);
    font-size: 16px;
    color: #7f7f7f;
}

.form-control {
    background: var(--exchange-off-white);
    box-shadow: unset;
    border-radius: 30px;
    border: 2px solid hsl(108deg 57% 84%);
    min-height: 55px;
    color: var(--teqo-black);
    font-size: 15px;
    font-weight: 500;
    position: relative;
}

.form-control:focus {
    box-shadow: none;
    z-index: 0;
}

.country-drop {
    padding: 0;
    padding-left: 0px;
    padding-left: 6px;
}

.input-group #basic-addon1 {
    background: var(--exchange-off-white);
    border: 2px solid hsl(108deg 57% 84%);
    border-radius: 32px 0 0 32px;
}

.dropdown #dropdownMenuButton1 {
    background-color: var(--exchange-off-white);
    border: none;
    color: var(--teqo-black);
    width: 100%;
    font-weight: 400;
}

.dropdown #dropdownMenuButton1:focus {
    box-shadow: none;
}

#number-field {
    border-left: none;
}

.dropdown-menu {
    max-height: 245px;
    overflow-y: scroll;
}

.dropdown-menu li {
    cursor: pointer;
    padding: 0 10px;
}

.dropdown-menu li:hover {
    background: var(--ex-bg);
}

.submit-butt {
    text-align: center;
}

#call_me_button {
    background: linear-gradient(45deg,
            hsl(143deg 25% 45%),
            hsl(126deg 21% 29%),
            hsl(143deg 25% 45%));
    border: unset;
    padding: 6px 25px;
    border-radius: 29px;
    color: var(--teqo-white);
    min-width: 130px;
    font-weight: 600;
}

.custom_button_form::before,
.custom_button_form::after {
    border-color: #ccc !important;
}

.modal-image {
    position: absolute;
    top: -189px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
}

.modal-image img {
    max-width: 250px;
}

@media all and (min-width: 1200px) and (max-width: 1440px) {
    .modal-image {
        display: none;
    }
}

@media all and (min-width: 1025px) and (max-width: 1166px) {
    .modal-image {
        display: none;
    }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
    .modal-image {
        display: none;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .modal-image {
        display: none;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .modal-image {
        display: none;
    }
}
</style>
