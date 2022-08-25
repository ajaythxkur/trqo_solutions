<template>
<div>
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
            <div class="mobile_craft_info">
                <div class="mobile_craft_heading pb-5">
                    <MobileAppHeading mobile_small_heading="Experiences" mobile_bold_heading_2="Craft Ingenious" mobile_main_heading="Mobile Experiences" />
                </div>
                <!--vibe_tech_heading-->

                <div class="mobile_craft_para">
                    <p class="pb-3 mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        obcaecati consectetur, maxime voluptatem harum vero ab minima quos
                        incidunt laboriosam aliquam architecto a doloremque assumenda
                        dicta delectus voluptatum deserunt eaque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        obcaecati consectetur, maxime voluptatem harum vero ab minima quos
                        incidunt laboriosam aliquam architecto a doloremque assumenda
                        dicta delectus voluptatum deserunt eaque!
                    </p>
                </div>
                <!--vibe_tech_para-->
            </div>
            <!--vibe_tech_info-->
        </div>
        <!--col-lg-6 col-md-6-->

        <div class="col-lg-6 col-md-6 order-first order-sm-1">
            <div class="mobile_craft_image text-center">
                <img loading="lazy" src="../assets/images/mobileapp/craft-mobile/craft_image.png" class="img-fluid" alt="image" />
            </div>
            <!--vibe_tech_image-->
        </div>
        <!--col-lg-6 col-md-6-->
    </div>
    <!--row-->
</div>
</template>

<script>
import MobileAppHeading from "@/components/MobileAppHeading.vue";
export default {
    name: "MobileCraft",
    components: {
        MobileAppHeading,
    },
};
</script>

<style scoped>
.mobile_craft_para p {
    color: var(--teqo-white);
    font-weight: 400;
    font-family: "Poppins";
    line-height: 27px;
    text-align: justify;
}
.mobile_craft_image img {
    max-width: 450px;
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .mobile_craft_image img {
        max-width: 300px
    }

    .mobile_craft_para p {
        font-size: 14px;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .mobile_craft_image img {
        max-width: 300px;
    }

    .mobile_craft_para p {
        font-size: 15px;
    }
}
</style>
