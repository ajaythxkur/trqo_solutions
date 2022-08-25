<template>
  <div>
    <section class="crm-service-mobile">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="(CrmMobileService, index) in CrmMobileServiceSecdata"
            :key="index"
          >
            <CrmMobileService :CrmMobileService="CrmMobileService" />
          </div>
          <!--col-lg-4 col-md-4-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--crm-service-mobile-->
   
  </div>
</template>

<script>
    import CrmMobileService from "@/components/CrmMobileService.vue";
    import crm_card_image_1 from "../assets/images/crm-images/hotel-image.png";
    export default {
        name: "CrmMobileServiceSec",
        components: {
            CrmMobileService,
        },

        data() {
            return {
                CrmMobileServiceSecdata: [{
                        crm_card_image_icon: crm_card_image_1,
                        crm_card_image_info_title: "Gym Management Software",
                        crm_card_image_info_para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },

                    {
                        crm_card_image_icon: crm_card_image_1,
                        crm_card_image_info_title: "Immigration CRM",
                        crm_card_image_info_para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },


                    {
                        crm_card_image_icon: crm_card_image_1,
                        crm_card_image_info_title: "Transport Management Software",
                        crm_card_image_info_para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },


                    {
                        crm_card_image_icon: crm_card_image_1,
                        crm_card_image_info_title: "Hotel Management Software",
                        crm_card_image_info_para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },


                    {
                        crm_card_image_icon: crm_card_image_1,
                        crm_card_image_info_title: "Real Estate CRM",
                        crm_card_image_info_para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },


                    {
                        crm_card_image_icon: crm_card_image_1,
                        crm_card_image_info_title: "Customize CRM",
                        crm_card_image_info_para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },
                ]
            }
        }
    };
</script>

<style scoped>
    section.crm-service-mobile {
        padding: 80px 0;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        section.crm-service-mobile {
            padding-top: 0;
        }
    }
</style>