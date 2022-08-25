<template>
  <div>
    <div class="crm-service-card">
      <div class="crm_card_image">
        <img
          loading="lazy"
          :src="CrmMobileService.crm_card_image_icon"
          class="img-fluid"
          alt=""
        />
      </div>
      <!--crm_card_image-->
      <div class="crm-card-image-info">
        <h2 class="text-center text-uppercase m-0">{{ CrmMobileService.crm_card_image_info_title }}</h2>
        <p class="m-0">
          {{ CrmMobileService.crm_card_image_info_para }}
        </p>
      </div>
      <!--crm-card-image-info-->
    </div>
    <!--crm-service-card-->
  </div>
</template>

<script>
export default {
  name: "CrmMobileService",
  props: {
    CrmMobileService: Object,
  },
};
</script>

<style scoped>
.crm-service-card {
  background-color: var(--teqo-oxford-off-blue);
  padding: 15px 15px;
  box-shadow: var(--teqo-crm-service-box-shadow);
  border-radius: 7px;
  margin-bottom: 25px;
}

.crm-card-image-info h2 {
  line-height: 31px;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
  color: var(--teqo-white);
}

.crm-card-image-info p {
  text-align: justify;
  line-height: 28px;
  font-size: 16px;
  color: var(--teqo-white);
  font-weight: 400;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .crm_card_image {
    margin-bottom: 15px;
  }

  .crm-card-image-info h2 {
    line-height: 21px;
    font-size: 17px;
  }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .crm-service-card {
    min-height: 610px;
  }

  .crm_card_image {
    margin-bottom: 15px;
  }

  .crm-card-image-info h2 {
    font-size: 17px;
    line-height: 25px;
  }

  .crm-card-image-info p {
    font-size: 15px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .crm-service-card {
    min-height: 610px;
  }

  .crm_card_image {
    margin-bottom: 15px;
  }

  .crm-card-image-info h2 {
    font-size: 17px;
    line-height: 25px;
  }

  .crm-card-image-info p {
    font-size: 15px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .crm-service-card {
    min-height: 603px;
  }

  .crm-card-image-info p {
    font-size: 14px;
  }
}


@media all and (min-width: 320px) and (max-width: 767px) {
  .crm_card_image {
    padding-bottom: 15px;
  }
  .crm-card-image-info h2 {
    line-height: 31px;
  }
  .crm-card-image-info p {
    font-size: 14px;
  }
}
</style>
