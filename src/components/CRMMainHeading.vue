<template>
  <div>
    <div class="crm_heading_box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="crm-heading-info text-center">
              <h3 class="small-heading position-relative m-0 text-capitalize">
                {{ crm_small_heading }} <br />
                {{ crm_small_sub_heading }}
              </h3>
              <h4 class="m-0 text-capitalize">{{ crm_main_heading }}</h4>
            </div>
          </div>
          <!--col-lg-12 col-md-12-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </div>
    <!--crm_heading_box-->
  </div>
</template>

<script>
export default {
  name: "CRMMainHeading",
  props: {
    crm_small_heading: String,
    crm_small_sub_heading: String,
    crm_main_heading: String,
  },
};
</script>

<style scoped>
.crm-heading-info {
  margin-bottom: 35px;
}

.crm-heading-info h3 {
  font-size: 24px;
  font-family: MPLUSRounded1c;
  font-weight: 500;
  color: var(--off-gray);
  padding-bottom: 10px;
}

.crm-heading-info h3::before {
  position: absolute;
  content: "";
  top: 8px;
  left: 315px;
  background-image: url(../assets/images/crm-images/heading-before.png);
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  width: 255px;
  height: 15px;
}

.crm-heading-info h3::after {
  position: absolute;
  content: "";
  top: 8px;
  right: 315px;
  background-image: url(../assets/images/crm-images/heading-after.png);
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  width: 255px;
  height: 15px;
}

.crm-heading-info h4 {
  font-family: MPLUSRounded1c;
  font-size: 26px;
  color: var(--teqo-text-off-blue);
  font-weight: 600;
}

section.choose-crm-sec .crm-heading-info h4 {
  color: var(--teqo-white);
}

section.choose-crm-sec .crm-heading-info h3::before {
  background-image: url(../assets/images/crm-images/heading-before-white.png);
}

section.choose-crm-sec .crm-heading-info h3::after {
  background-image: url(../assets/images/crm-images/heading-after-white.png);
}

section.add-on-features .crm-heading-info h3::before {
  left: 280px;
}

section.add-on-features .crm-heading-info h3::after {
  right: 280px;
}

section.all_in_one_crm .crm-heading-info h3::after {
  right: 230px;
}
section.all_in_one_crm .crm-heading-info h3::before {
  left: 230px;
}

@media all and (min-width: 1200px) and (max-width:1399px) {
  .crm-heading-info h3::before {
    left: 230px;
  }

  .crm-heading-info h3::after {
    right: 230px;
  }

  section.add-on-features .crm-heading-info h3::before {
    left: 190px;
  }

  
  section.add-on-features .crm-heading-info h3::after {
   right: 190px;
  }

  section.all_in_one_crm .crm-heading-info h3::before {
    left: 145px;
  }

  section.all_in_one_crm .crm-heading-info h3::after {
    right: 145px;
  }
}
 

 @media all and (min-width: 1025px) and (max-width: 1199px) {
  .crm-heading-info h3::before {
    left: 135px;
  }

  .crm-heading-info h3::after {
    right: 135px;
  }

  section.add-on-features .crm-heading-info h3::before {
    left: 98px;
  }

  section.add-on-features .crm-heading-info h3::after {
    right: 98px;
  }

  section.all_in_one_crm .crm-heading-info h3::before {
    left: 54px;
  }

  section.all_in_one_crm .crm-heading-info h3::after {
    right: 54px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .crm-heading-info h3::before {
    left: 135px;
  }

  .crm-heading-info h3::after {
    right: 135px;
  }

  section.add-on-features .crm-heading-info h3::before {
    left: 98px;
  }

  section.add-on-features .crm-heading-info h3::after {
    right: 98px;
  }

  section.all_in_one_crm .crm-heading-info h3::before {
    left: 54px;
  }

  section.all_in_one_crm .crm-heading-info h3::after {
    right: 54px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .crm-heading-info h4 {
    font-size: 20px;
  }
  .crm-heading-info h3::before {
    left: 20px;
  }
  .crm-heading-info h3::after {
    right: 20px;
  }
  section.add-on-features .crm-heading-info h3::before {
    left: 0;
    width: 230px;
  }

  section.add-on-features .crm-heading-info h3::after {
    right: 0;
    width: 230px;
  }

  section.all_in_one_crm .crm-heading-info h3::before {
    left: 0;
    width: 190px;
  }

  section.all_in_one_crm .crm-heading-info h3::after {
    right: 0;
    width: 190px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .crm-heading-info h3 {
    font-size: 21px;
  }
  .crm-heading-info h3::before {
    display: none;
  }
  .crm-heading-info h3::after {
    display: none;
  }

  .crm-heading-info h4 {
    font-size: 21px;
  }

  section.all_in_one_crm .crm-heading-info h3 {
    line-height: 30px;
  }

  section.crm-feature-sec  .crm-heading-info {
    margin-bottom: 0;
  }
}
</style>
