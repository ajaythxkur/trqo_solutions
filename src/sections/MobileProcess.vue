<template>
<div>
    <div class="row mt-5 align-items-center">
        <div class="col-lg-6 col-md-12">
            <div class="process-image">
                <img loading="lazy" src="../assets/images/mobileapp/work-process/process_image.png" class="img-fluid" alt="" />
            </div>
            <!--process-image-->
        </div>
        <!--col-lg-6 col-md-6-->

        <div class="col-lg-6 col-md-12">
            <div class="row process_info_row">
                <div class="col-lg-12 col-md-12 pro_1">
                    <div class="process_info_main_box">
                        <div class="process_point_image">
                            <img loading="lazy" src="../assets/images/mobileapp/work-process/download1.png" alt="" class="img-fluid" />
                        </div>
                        <!--process_point_image-->

                        <div class="process_point_info">
                            <h2 class="text-uppercase">Submit Your Website URL</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                                ducimus aliquam hic repellat soluta veritatis laboriosam illum
                                voluptate minus maiores tenetur!
                            </p>
                        </div>
                        <!--process_point_info-->
                    </div>
                    <!--process_info_main_box-->
                </div>
                <!--col-lg-12 col-md-12-->

                <div class="col-lg-12 col-md-12 pro_2">
                    <div class="process_info_main_box pro_right order-second order-sm-2">
                        <div class="process_upper_new_image">
                            <img loading="lazy" src="../assets/images/mobileapp/work-process/download1.png" class="img-fluid" alt="" />
                        </div>
                        <div class="process_point_info">
                            <h2 class="text-uppercase">Submit Your Website URL</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                                ducimus aliquam hic repellat soluta veritatis laboriosam illum
                                voluptate minus maiores tenetur!
                            </p>
                        </div>
                        <!--process_point_info-->

                        <div class="process_point_image pro_right order-first order-sm-1">
                            <img loading="lazy" src="../assets/images/mobileapp/work-process/download2.png" alt="" class="img-fluid" id="bottom-image" />
                        </div>
                        <!--process_point_image-->
                    </div>
                    <!--process_info_main_box-->
                </div>
                <!--col-lg-12 col-md-12-->

                <div class="col-lg-12 col-md-12 pro_3">
                    <div class="process_info_main_box">
                        <div class="process_point_image">
                            <img loading="lazy" src="../assets/images/mobileapp/work-process/download3.png" alt="" class="img-fluid" />
                        </div>
                        <!--process_point_image-->

                        <div class="process_point_info">
                            <h2 class="text-uppercase">Submit Your Website URL</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                                ducimus aliquam hic repellat soluta veritatis laboriosam illum
                                voluptate minus maiores tenetur!
                            </p>
                        </div>
                        <!--process_point_info-->
                    </div>
                    <!--process_info_main_box-->
                </div>
                <!--col-lg-12 col-md-12-->
            </div>
            <!--row process_info_row-->
        </div>
        <!--col-lg-6 col-md-6-->
    </div>
    <!--row-->
</div>
</template>

<script>
export default {
    name: "MobileProcess",
};
</script>

<style scoped>
.process_info_main_box {
    display: flex;
}

.process_point_image {
    margin-right: 35px;
}

.process_point_image img {
    max-width: 70px;
}

.process_point_info p {
    text-align: justify;
    line-height: 27px;
    color: var(--teqo-black);
    font-family: "Poppins";
    font-weight: 400;
}

.process_point_info h2 {
    font-size: 23px;
    font-family: "Poppins";
    font-weight: 400;
    color: var(--teqo-black);
    padding-bottom: 7px;
}

.pro_1 {
    position: relative;
    padding-bottom: 65px;
}

.pro_1::before {
    position: absolute;
    top: -41px;
    left: -33px;
    background-image: url(../assets/images/mobileapp/work-process/process_vector_1.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 671px;
    height: 190px;
    content: "";
}

.pro_right {
    margin-right: 0 !important;
    margin-left: 35px;
}

.pro_2 {
    position: relative;
    padding-bottom: 65px;
}

.pro_2::before {
    position: absolute;
    top: -41px;
    right: -40px;
    background-image: url(../assets/images/mobileapp/work-process/process_vector_2.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 671px;
    height: 190px;
    content: "";
}

.pro_3 {
    position: relative;
    padding-bottom: 65px;
}

.pro_3::before {
    position: absolute;
    top: -41px;
    left: -33px;
    background-image: url(../assets/images/mobileapp/work-process/process_vector_1.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 671px;
    height: 190px;
    content: "";
}

.process-image {
    text-align: center;
}

.process-image img {
    max-width: 530px;
}

.process_upper_new_image {
    display: none;
}

.process_upper_new_image img {
    max-width: 70px;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
    .pro_1::before {
        display: none;
    }

    .pro_2::before {
        display: none;
    }

    .pro_3::before {
        display: none;
    }

    .pro_right {
        margin-left: 0;
    }

    .process_upper_new_image {
        display: block;
        margin-right: 35px;
    }

    img#bottom-image {
        display: none;
    }

    .banner-info-box h2::before {
        width: 66%;
    }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
    .pro_1::before {
        display: none;
    }

    .pro_2::before {
        display: none;
    }

    .pro_3::before {
        display: none;
    }

    .process-image img {
        max-width: 450px;
    }

    img#bottom-image {
        display: none;
    }

    .process_upper_new_image {
        display: block;
        margin-right: 35px;
    }

    .pro_right {
        margin-left: 0;
    }
}

@media all and (min-width: 991px) and (max-width: 1024px) {
    .pro_1::before {
        display: none;
    }

    .pro_2::before {
        display: none;
    }

    .pro_3::before {
        display: none;
    }

    .process-image img {
        max-width: 450px;
    }

    img#bottom-image {
        display: none;
    }

    .process_upper_new_image {
        display: block;
        margin-right: 35px;
    }

    .pro_right {
        margin-left: 0;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .process-image {
        margin-bottom: 75px;
    }

    .pro_1::before {
        width: 700px;
    }

    .pro_2::before {
        width: 700px;
    }

    .pro_3::before {
        width: 700px;
    }

    .process_point_image {
        margin-left: 15px;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .process-image img {
        max-width: 300px;
    }

    .pro_1::before {
        display: none;
    }

    .pro_2::before {
        display: none;
    }

    .pro_3::before {
        display: none;
    }

    .process_upper_new_image {
        display: block;
        margin-bottom: 20px;
    }

    #bottom-image {
        display: none;
    }

    .process_info_main_box {
        display: block;
    }

    .pro_right {
        margin-left: 0;
    }

    .process-image {
        margin-bottom: 35px;
    }

    .process_point_image {
        margin-bottom: 20px;
    }

    .pro_1 {
        padding-bottom: 25px;
    }

    .pro_2 {
        padding-bottom: 25px;
    }

    .pro_3 {
        padding-bottom: 0;
    }
}
</style>
