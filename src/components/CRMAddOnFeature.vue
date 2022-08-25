<template>
  <div>
    <div class="add-on-main-box" :style="'margin-top:' + CRMAddOn_data.margin">
      <div class="add-on-inner-text">
        <div class="add-on-icon">
          <img
            loading="lazy"
            :src="CRMAddOn_data.add_on_icon"
            class="img-fluid"
            alt=""
          />
        </div>

        <div class="add-on-icon-text">
          <h3>{{ CRMAddOn_data.add_on_icon_info_title }}</h3>
          <p>{{ CRMAddOn_data.add_on_icon_info_desc }}</p>
        </div>
        <!--add-on-icon-text-->
      </div>
      <!--add-on-inner-text-->
    </div>
    <!--add-on-main-box-->
  </div>
</template>

<script>
export default {
  name: "CRMAddOnFeature",
  props: {
    CRMAddOn_data: Object,
  },
};
</script>

<style scoped>
.add-on-main-box {
  padding: 20px 20px;
  background-image: url(../assets/images/crm-images/add_on_frame.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 414px;
  height: 434px;
  position: relative;
}

.add-on-inner-text {
  position: absolute;
  top: 0;
  transform: translate(0px, 90px);
  max-width: 300px;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.add-on-icon {
  text-align: center;
  margin-bottom: 25px;
}

.add-on-icon img {
  max-width: 60px;
}

.add-on-icon-text h3 {
  text-align: center;
  text-transform: uppercase;
  font-family: "Poppins";
      font-size: 19px;
  margin-bottom: 0;
  padding-bottom: 10px;
  color: #000;
  font-weight: 500;
  text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
}

.add-on-icon-text p {
  text-align: center;
  font-size: 16px;
  font-family: "Poppins";
  line-height: 27px;
  font-weight: 500;
  color: #000;
  margin: 0;
  white-space: break-spaces;
  word-break: break-word;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .add-on-main-box {
    width: 362px;
    height: 397px;
    margin: 0 auto;
  }

  .add-on-inner-text {
    max-width: 260px;
        transform: translate(0px, 75px);
  }

  .add-on-icon-text h3 {
    font-size: 22px;
  }

  
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
.add-on-main-box {
    width: 293px;
    height: 325px;
    margin: 0 auto;
}

.add-on-icon {
        margin-bottom: 11px;
}

.add-on-icon-text h3 {
    font-size: 17px;
    font-weight: 600;
    
}

.add-on-icon-text p {
    font-size: 14px;
}

.add-on-inner-text {
        transform: translate(0px, 56px);
    max-width: 190px;
}
}


@media all and (min-width: 992px) and (max-width: 1024px) {
.add-on-main-box {
    width: 293px;
    height: 325px;
    margin: 0 auto;
}

.add-on-icon {
        margin-bottom: 11px;
}

.add-on-icon-text h3 {
    font-size: 17px;
    font-weight: 600;
    
}

.add-on-icon-text p {
    font-size: 14px;
}

.add-on-inner-text {
        transform: translate(0px, 56px);
    max-width: 190px;
}
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .add-on-main-box {
    width: 337px;
    height: 359px;
        margin: 0 auto;
  }
  .add-on-inner-text {
    max-width: 232px;
    transform: translate(0px, 47px);
  }
  .add-on-icon-text h3 {
    font-size: 20px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .add-on-main-box {
    width: 290px;
    height: 295px;
    margin: 0 10px;
    overflow: hidden;
    margin: 0 auto;
  }
  .add-on-inner-text {
    max-width: 190px;
  }
  .add-on-icon {
    text-align: center;
    margin-bottom: 18px;
    padding-top: 27px;
  }
  .add-on-icon img {
    max-width: 45px;
  }
  .add-on-inner-text {
    position: unset;
    transform: none;
  }
  .add-on-icon-text h3 {
    font-size: 16px;
  }
  .add-on-icon-text p {
    font-size: 14px;
    line-height: 23px;
  }
}
</style>
