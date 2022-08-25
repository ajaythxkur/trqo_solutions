<template>
  <div>
    <div class="choose-box">
      <div class="choose-icon">
        <img
          loading="lazy"
          :src="WhyChoose.choose_img"
          alt=""
          class="img-fluid"
        />
      </div>
      <!--choose-icon-->

      <div class="choose-info">
        <h4>{{ WhyChoose.choose_heading }}</h4>
        <p>
          {{ WhyChoose.desc_1 }} <br />
          {{ WhyChoose.desc_2 }} <br />
          {{ WhyChoose.desc_3 }}
        </p>

        <router-link to="">{{ WhyChoose.choose_link }}</router-link>
      </div>
      <!--choose-info-->
    </div>
    <!--choose-box"-->
  </div>
</template>

<script>
export default {
  name: "WhyChoose",
  props: {
    WhyChoose: Object,
  },
};
</script>

<style scoped>
.choose-icon {
  margin-bottom: 35px;
  text-align: center;
}

.choose-info {
  text-align: center;
}
.choose-info h4 {
  text-align: center;
  color: #3c4858;
  font-size: 17px;
  font-family: "Poppins";
  font-weight: 500;
}

.choose-info p {
  text-align: center;
  font-weight: 400;
  line-height: 25px;
  color: #8492a6;
  margin-bottom: 15px;
}

.choose-info a {
  text-decoration: none;
  color: #2f55d4;
  font-weight: 500;
  font-family: "Poppins";
}


@media all and (min-width: 1025px) and (max-width: 1199px) {
  .choose-info p {
    font-size: 14px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .choose-info p {
    font-size: 14px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .choose-box {
    margin-bottom: 35px;
}

.choose-box:nth-child(3) {
  margin-bottom: 0;
}
}
</style>
