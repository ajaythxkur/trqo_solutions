<template>
    
     
<div class="feature-main-box">
    <div class="feature-icon d-flex align-items-center justify-content-center mx-auto text-center">
      <img
        loading="lazy"
        :src="crmfeature_data.feature_icon"
        alt="image"
        class="img-fluid"
      />
      
    </div>
    <!--feature-icon-->
  <!-- {{crmfeature_data}} -->
    <div class="feature-icon-info text-center">
        <h3 class="text-center m-0 text-uppercase">{{ crmfeature_data.feature_icon_info_title }}</h3>
        <p class="m-0">
          {{ crmfeature_data.feature_icon_info_desc }}
        </p>
        <router-link to="" class="read-btn text-capitalize text-decoration-none">{{
          crmfeature_data.read_btn
        }}</router-link>
      </div>
      <!--feature-icon-info-->
  </div>
<!-- feature-main-box -->   
</template>

<script>
export default {
  name: "CRMFeature",
  props: {
    crmfeature_data: Object,
  }
  
};
</script>

<style scoped>
.feature-main-box {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: var(--teqo-white);
  padding: 25px 45px;
  margin: 0 10px;
}

.feature-icon {
  background-color: var(--teqo-feature-off-pink);
  height: 120px;
  width: 120px;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  margin-bottom: 20px;
}

.feature-icon img {
  max-width: 60px;
}

.feature-icon-info {
  min-height: 150px;
}

.feature-icon-info h3 {
  font-size: 18px;
  padding-bottom: 7px;
  color: var(--teqo-black);
}

.feature-icon-info p {
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  padding-bottom: 10px;
  overflow: hidden;
  word-break: break-word;
  white-space: break-spaces;
}

.feature-main-box a.read-btn {
  font-weight: 400;
  color: var(--teqo-black);
  transition: all 0.5s ease;
  font-size: 16px;
}

.feature-main-box a.read-btn:hover {
  transition: all 0.5s ease;
  text-decoration: underline;
  color: var(--teqo-orange);
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .feature-main-box {
    padding: 25px 25px;
  }

  .feature-icon-info h3 {
    font-size: 17px;
    padding-bottom: 7px;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .feature-icon-info {
    max-width: 300px;
  }

  .feature-icon-info p {
    font-size: 14px;
  }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .feature-main-box {
    padding: 25px 28px;
  }
  .feature-icon-info h3 {
    font-size: 17px;
    line-height: 30px;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .feature-icon-info p {
    font-size: 14px;
    line-height: 20px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .feature-main-box {
    padding: 25px 28px;
  }
  .feature-icon-info h3 {
    font-size: 17px;
    line-height: 30px;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .feature-icon-info p {
    font-size: 14px;
    line-height: 20px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .feature-main-box {
    padding: 25px 32px;
  }
  .feature-icon-info h3 {
    font-size: 15px;
  }

  .feature-icon-info p {
    font-size: 15px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .feature-main-box {
    clip-path: none;
    width: auto;
    min-height: 350px;
    padding: 25px 10px;
    box-shadow: rgb(100 100 111 / 20%) 0px 0 29px 0px;
    margin: 0;
  }

  .feature-icon-info h3 {
    font-size: 15px;
    padding-bottom: 10px;
  }

  .feature-icon-info p {
    font-size: 15px;
    line-height: 26px;
  }
}
</style>
