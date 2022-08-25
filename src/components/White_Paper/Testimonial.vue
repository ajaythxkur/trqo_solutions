<template>
  <div>
    <div class="testimonial-box">
      <div class="testimonial-text">
        <p>
           " {{Testimonial.test_info}}"
        </p>
      </div>
      <!--testimonial-text-->

      <div class="testimonial-image">
        <img
          :src="Testimonial.test_img"
          alt=""
          class="img-fluid"
        />
      </div>
      <!--testimonial-image-->

      <div class="user-info">
        <h6>{{Testimonial.test_name}}</h6>
        <span class="sub-info">{{Testimonial.test_sub}}</span>
      </div>
      <!--user-info-->
    </div>
    <!--testimonial-box-->
  </div>
</template>


<script>
export default {
    name:'TestimonialComponent',
    props: {
        Testimonial:Object
    }
}
</script>


<style scoped>
   .testimonial-text {
        text-align: center;
        margin-bottom: 25px;
    }
    
    .testimonial-text p {
        line-height: 30px;
        font-size: 1.20rem;
        color: #8492a6;
        font-style: italic;
        font-weight: 400;
    }
    
    .testimonial-image {
        text-align: center;
        margin-bottom: 25px;
    }
    
    .testimonial-image img {
        height: 110px;
        width: 110px;
        border-radius: 60px;
        box-shadow: 0 10px 25px rgb(60 72 88 / 15%);
    }
    
    .user-info {
        text-align: center;
    }
    
    .user-info h6 {
        font-size: 20px;
        font-weight: 500;
        font-family: 'Poppins';
        color: #2f55d3;
    }
    
    .user-info span.sub-info {
        font-family: 'Poppins';
        font-size: 18px;
        font-weight: 400;
        color: #8492a6;
    }





    @media all and (min-width: 320px) and (max-width: 767px) {
      .testimonial-text p {
      font-size: 14px;
          line-height: 24px;
      }

      .testimonial-text p br {
        display: none;
      }
    }
</style>