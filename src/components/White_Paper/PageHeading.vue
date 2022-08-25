<template>
  <div>
    <div class="row heading-row mb-5">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="heading-text">
          <h2>{{heading_text}}</h2>
          <p>
            {{heading_desc}}
            <br />
            {{heading_sub_desc}}
          </p>
        </div>
        <!--heading-text-->
      </div>
      <!--col-xl-12 col-lg-12 col-md-12-->
    </div>
    <!--row heading-row-->
  </div>
</template>


<script>
export default {
    name: 'PageHeading',
    props: {
heading_text: String,
heading_desc: String,
heading_sub_desc: String,


    }
}
</script>

<style scoped>
.heading-text {
    text-align: center;
    margin-bottom: 65px;
}

.heading-text h2 {
    font-family: 'Poppins';
    font-size: 39px;
    font-weight: 500;
    margin: 0;
    position: relative;
    text-transform: uppercase;
    padding-bottom: 10px;
}

.heading-text p {
    line-height: 25px;
}

section.contact-sec .heading-text {
    margin-bottom: 0;
}


@media all and (min-width: 768px) and (max-width: 991px) {
    .heading-text {
    margin-bottom: 15px;
} 
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .heading-text  {
        margin-bottom: 0;
    }
    .heading-text h2 {
    line-height: 35px;
    font-size: 28px;
    }

    .heading-text p br {
        display: none;
    }

}

</style>