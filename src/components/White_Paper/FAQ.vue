<template>
  <div>
    <div class="faq-main-box">
      <h5>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fea icon-ex-md text-primary mr-2 feather feather-help-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line></svg
        ></span>
        {{ FAQ.faq_head }}
      </h5>
      <p>
        {{ FAQ.faq_desc }}
      </p>

            <ul class="faq-list mt-3">
              <li v-for="(faqorder, index) in FAQ.faq_list" :key="index">
                                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    style="
                      fill: #2f55d4;
                      transform: ;
                      msfilter: ;
                      margin-right: 5px;
                    "
                  >
                    <path
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                    ></path>
                    <path
                      d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"
                    ></path></svg
                  > {{ faqorder }}
              </li>
            </ul>
    </div>
    <!--faq-main-box-->
  </div>
</template>

<script>
export default {
  name: "FAQ",

  props: {
    FAQ: Object,
  },
};
</script>

<style scoped>
.faq-main-box h5 {
  margin-bottom: 0;
  color: #161c2d;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 19px;
  padding-bottom: 10px;
}

.faq-main-box p {
  text-align: justify;
  line-height: 28px;
  color: #8492a6;
  font-weight: 400;
  font-size: 15px;
}

ul.faq-list {
    padding: 0;
    margin-bottom: 0;
    list-style: none;
}

ul.faq-list li {
    font-size: 15px;
    font-family: "Poppins";
    font-weight: 400;
    color: #8492a6;
    margin-bottom: 10px;
}

@media all and (min-width:768px) and (max-width:991px) {

  .faq-main-box h5 {
    font-size: 15px;
  }

  .faq-main-box p {
    font-size: 13px;
    line-height: 21px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {

  .faq-main-box h5 {
    font-size: 17px; 
    text-align: center;
    line-height: 26px
  }
  .faq-main-box p {
    font-size: 14px;
    text-justify: distribute;
    /* text-justify: inter-word; */
  }
  ul.faq-list li {
    font-size: 14px;
  }
}
</style>