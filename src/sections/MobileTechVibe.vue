<template>
  <div>
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-6">
        <div class="vibe_tech_info">
          <div class="vibe_tech_heading pb-5">
            <MobileAppHeading
              mobile_small_heading="Services"
              mobile_bold_heading_2="Vibing Tech"
              mobile_main_heading="Into Your"
              mobile_bold_heading="Ideas"
            />
          </div>
          <!--vibe_tech_heading-->

          <div class="vibe_tech_para">
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
        <div class="vibe_tech_image">
          <img
            loading="lazy"
            src="../assets/images/mobileapp/service-product/vibe_tech.png"
            class="img-fluid"
            alt=""
          />
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
  name: "MobileTechVibe",
  components: {
    MobileAppHeading,
  },
};
</script>

<style scoped>
.vibe_tech_para p {
  color:var(--teqo-white);
  font-weight: 400;
  font-family: "Poppins";
  line-height: 27px;
  text-align: justify;
}

.vibe_tech_image {
  text-align: center;
}

.vibe_tech_image img {
  max-width: 450px;
}



@media all and (min-width: 768px) and (max-width: 991px) {
  .vibe_tech_image img {
    max-width: 350px;
  }
  .vibe_tech_para p {
    font-size: 14px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
.vibe_tech_heading {
    padding-bottom: 33px !important;
}

.vibe_tech_image {
   margin-bottom: 25px;
 }
 
 .vibe_tech_image img {
    max-width: 300px;
  }

  .vibe_tech_para p {
    font-size: 15px;
  }
  
} 
</style>
