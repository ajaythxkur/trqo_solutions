<template>
  <div>
    <div class="mobile_app_heading">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="mobile_main_heading">
              <h2 class="pb-2 mb-0">{{ mobile_small_heading }}</h2>
              <h3>
                <span>{{ mobile_bold_heading_2 }}</span>
                {{ mobile_main_heading }} <span>{{ mobile_bold_heading }}</span>
              </h3>
            </div>
            <!--mobile_main_heading-->
          </div>
          <!--col-lg-12 col-md-12-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </div>
    <!--mobile_app_heading-->
  </div>
</template>
<script>
export default {
  name: "MobileAppHeading",
  props: {
    mobile_small_heading: String,
    mobile_main_heading: String,
    mobile_bold_heading: String,
    mobile_bold_heading_2: String,
  },
};
</script>

<style scoped>
.mobile_main_heading {
  margin-bottom: 70px;
  text-align: center;
}

.mobile_main_heading h2 {
  font-size: 20px;
  font-weight: 500;
  font-family: "Poppins";
  color: var(--teqo-brown);
}

.mobile_main_heading h3 {
  font-size: 35px;
  font-family: "Poppins";
  font-weight: 400;
  color: var(--teqo-lightcolor);
  margin: 0;
  text-transform: capitalize;
  position: relative;
}

.mobile_main_heading span {
  color: var( --teqo-head);
  font-weight: 600;
}

.mobile_main_heading h3::before {
  position: absolute;
  content: "";
  top: 48px;
  left: 530px;
  width: 153px;
  height: 7%;
  background-color: var(--teqo-beforebg);
}

section.app_service_sec .mobile_main_heading {
  text-align: left;
  margin-bottom: 0;
}

section.app_service_sec .container {
  padding: 0;
}

section.app_service_sec .mobile_main_heading h3::before {
  left: 0;
}

section.vibe_tech_sec .mobile_main_heading {
  text-align: left;
  margin-bottom: 0;
}

section.vibe_tech_sec .container {
  padding: 0;
}

section.vibe_tech_sec .mobile_main_heading h2 {
  color: var(--teqo-lightbg);
  font-weight: 400;
}

section.vibe_tech_sec .mobile_main_heading h3 {
  color: var(--teqo-lightbg);
  font-weight: 300;
}

section.vibe_tech_sec .mobile_main_heading h3 span {
  color: var(--teqo-lightbg);
}

section.vibe_tech_sec .mobile_main_heading h3::before {
  left: 0;
  background-color: var(--teqo-lightbg);
}

section.application-sec .mobile_main_heading {
  text-align: left;
  margin-bottom: 0;
}

section.application-sec .container {
  padding: 0;
}

section.application-sec .mobile_main_heading h3 {
  font-size: 30px;
}

section.application-sec .mobile_main_heading h3::before {
  left: 0;
}

section.innovation-sec .mobile_main_heading {
  text-align: left;
  margin-bottom: 0;
}

section.innovation-sec .container {
  padding: 0;
}

section.innovation-sec .mobile_main_heading h2 {
  color: var(--teqo-lightbg);
  font-weight: 400;
}

section.innovation-sec .mobile_main_heading h3 {
  color: var(--teqo-lightbg);
  font-weight: 300;
}

section.innovation-sec .mobile_main_heading h3 span {
  color: var(--teqo-lightbg);
}
section.innovation-sec .mobile_main_heading h3::before {
  left: 0;
  background-color: var(--teqo-lightbg);
}
section.development-sec .mobile_main_heading h3::before {
  left: 314px;
}

section.mobile_craft .mobile_main_heading {
  text-align: left;
  margin-bottom: 0;
}

section.mobile_craft .container {
  padding: 0;
}

section.mobile_craft .mobile_main_heading h2 {
  color: var(--teqo-lightbg);
  font-weight: 400;
}

section.mobile_craft .mobile_main_heading h3 {
  color: var(--teqo-lightbg);
  font-weight: 300;
}

section.mobile_craft .mobile_main_heading h3 span {
  color: var(--teqo-lightbg);
}

section.mobile_craft .mobile_main_heading h3::before {
  left: 0;
  background-color: var(--teqo-lightbg);
}

section.featured_service .mobile_main_heading h3::before {
  left: auto;
  right: 457px;
}

section.featured_service .mobile_main_heading h3::after {
  position: absolute;
  content: "";
  top: -62px;
  right: 409px;
  width: 75px;
  height: 143px;
  background-image: url(../assets/images/mobileapp/service-product/featured_boy.png);
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .mobile_main_heading h3 {
    font-size: 28px;
  }
  section.application-sec .mobile_main_heading h3 {
    font-size: 28px;
  }
  .mobile_main_heading h3::before {
    margin: 0 auto;
    right: 0;
    left: 0;
  }
  section.app_service_sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.vibe_tech_sec .mobile_main_heading h3::before {
    right: auto;
  }
  section.application-sec .mobile_main_heading h3::before {
    right: auto;
  }
  section.innovation-sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.development-sec .mobile_main_heading h3::before {
    left: 0;
  }

  section.mobile_craft .mobile_main_heading h3::before {
    right: auto;
  }

  section.featured_service .mobile_main_heading h3::before {
    right: 395px;
  }

    section.featured_service .mobile_main_heading h3::after {
right: 349px;
  }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .mobile_main_heading h3 {
    font-size: 32px;
  }

  .mobile_main_heading h3::before {
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  section.app_service_sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.vibe_tech_sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.innovation-sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.application-sec .mobile_main_heading h3::before {
    top: 80px;
    right: auto;
  }

  section.development-sec .mobile_main_heading h3::before {
    left: 0;
  }

  section.mobile_craft .mobile_main_heading h3::before {
    right: auto;
    top: 85px;
  }

  section.featured_service .mobile_main_heading h3::before {
    right: 279px;
  }

  section.featured_service .mobile_main_heading h3::after {
    right: 234px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .mobile_main_heading h3 {
    font-size: 32px;
  }

  .mobile_main_heading h3::before {
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  section.app_service_sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.vibe_tech_sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.innovation-sec .mobile_main_heading h3::before {
    right: auto;
  }

  section.application-sec .mobile_main_heading h3::before {
    top: 80px;
    right: auto;
  }

  section.development-sec .mobile_main_heading h3::before {
    left: 0;
  }

  section.mobile_craft .mobile_main_heading h3::before {
    right: auto;
    top: 85px;
  }

  section.featured_service .mobile_main_heading h3::before {
    right: 279px;
  }

  section.featured_service .mobile_main_heading h3::after {
    right: 234px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .mobile_main_heading h3 {
    font-size: 30px;
  }
  .mobile_main_heading h3::before {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  section.app_service_sec .mobile_main_heading {
    text-align: center;
  }

  section.app_service_sec .mobile_main_heading h3::before {
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  section.vibe_tech_sec .mobile_main_heading h3::before {
    right: auto;
    top: 80px;
  }

  section.application-sec .mobile_main_heading h3::before {
    right: auto;
    top: 80px;
  }

  section.innovation-sec .mobile_main_heading h3::before {
    right: auto;
    top: 50px;
  }

  section.development-sec .mobile_main_heading h3::before {
    left: 0;
  }

  section.mobile_craft .mobile_main_heading h3::before {
    right: auto;
    top: 80px;
  }

  section.featured_service .mobile_main_heading h3::before {
    right: 180px;
  }

  section.featured_service .mobile_main_heading h3::after {
    right: 132px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .mobile_main_heading h3::before {
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .mobile_main_heading h3 {
    font-size: 30px;
  }
  section.app_service_sec .mobile_main_heading {
    text-align: center;
  }

  section.app_service_sec .mobile_main_heading h3::before {
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  section.vibe_tech_sec .mobile_main_heading {
    text-align: center;
  }

  section.vibe_tech_sec .mobile_main_heading h3::before {
    right: 0;
    margin: 0 auto;
    top: 82px;
  }

  section.application-sec .mobile_main_heading {
    text-align: center;
  }

  section.application-sec .mobile_main_heading h3 {
    font-size: 28px;
    line-height: 35px;
  }

  section.application-sec .mobile_main_heading h3::before {
    right: 0;
    margin: 0 auto;
    top: 80px;
  }

  section.featured_service .mobile_main_heading h3::after {
    display: none;
  }

  section.development-sec .mobile_main_heading h3::before {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 138px;
  }

  section.innovation-sec .mobile_main_heading {
    text-align: center;
  }

  section.mobile_craft .mobile_main_heading {
    text-align: center;
  }

  section.mobile_craft .mobile_main_heading h3::before {
    top: 85px;
  }

  section.featured_service .mobile_main_heading h3::before {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
