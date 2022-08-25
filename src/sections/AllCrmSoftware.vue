<template>
  <div>
    <div class="row align-items-center">
      <div class="col-lg-4 col-md-4">
        <div class="manage-box">
          <div class="manage-icon">
           <img loading="lazy" src="../assets/images/crm-images/all_one_icon_1.png" class="img-fluid" alt="">
          </div>

          <div class="manage-icon-info">
            <h2>Build long-lasting relations</h2>
            <p>Create reports to set up a relationship with customers.</p>
          </div>
        </div>

        <div class="manage-box">
          <div class="manage-icon">
            <img loading="lazy" src="../assets/images/crm-images/all_one_icon_2.png" class="img-fluid" alt="">        </div>

          <div class="manage-icon-info">
            <h2>Seamless customer managements</h2>
            <p>Supercharge the task management with automation.</p>
          </div>
        </div>

        <div class="manage-box">
          <div class="manage-icon">
            <img loading="lazy" src="../assets/images/crm-images/all_one_icon_3.png" class="img-fluid" alt="">
          </div>

          <div class="manage-icon-info">
            <h2>Automate & Grow</h2>
            <p>Automate the typical business processes and stair-up your business productivity. </p>
          </div>
        </div>
      </div>
      <!--col-lg-4 col-md-4-->

      <div class="col-lg-4 col-md-4 all_one_text">
        <div class="all_one_bg my-0 mx-auto"></div>
      </div>
      <!--col-lg-4 col-md-4-->

      <div class="col-lg-4 col-md-4">
        <div class="manage-box-right">
          <div class="manage-icon-right">
            <img loading="lazy" src="../assets/images/crm-images/all_one_icon_4.png" class="img-fluid" alt="">
          </div>

          <div class="manage-icon-info">
            <h2>Marketing & customer engagements</h2>
            <p>Customize marketing solutions according to requirements. </p>
          </div>
        </div>

        <div class="manage-box-right">
          <div class="manage-icon-right">
            <img loading="lazy" src="../assets/images/crm-images/all_one_icon_5.png" class="img-fluid" alt="">
          </div>

          <div class="manage-icon-info">
            <h2>Strengthen customer relationships</h2>
            <p>Optimize the efficiency for client appreciation. </p>
          </div>
        </div>

        <div class="manage-box-right">
          <div class="manage-icon-right">
            <img loading="lazy" src="../assets/images/crm-images/all_one_icon_6.png" class="img-fluid" alt="">
          </div>

          <div class="manage-icon-info">
            <h2>Functionality</h2>
            <p>It improves workflow.</p>
          </div>
        </div>
      </div>
      <!--col-lg-4 col-md-4-->
    </div>
    <!--row-->
  </div>
</template>

<script>
    export default {
        name: "AllCrmSoftware",
    };
</script>

<style scoped>
    /**** ALL IN ONE CRM SECTION  CSS START ****/
    
    .row.all_in_one {
        margin-top: 10%;
    }
    
    .all_one_bg {
        background-image: url(../assets/images/crm-images/all_one_main.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 314px;
        width: 198px;
    }
    /**** ALL IN ONE CRM SECTION  CSS FINISH ****/
    
    .manage-box {
        width: 280px;
        height: 280px;
        background-color: var(--teqo-white);
        border-radius: 152px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: auto;
    }
    
    .manage-box::before {
        position: absolute;
        content: "";
        top: -5px;
        left: -10px;
        width: 104%;
        height: 104%;
        background-color: #344f56;
        border-radius: 169px;
        z-index: -1;
    }
    
    .manage-icon {
        position: absolute;
        height: 70px;
        width: 70px;
        background-color: var(--teqo-all-softwares-off-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 33px;
        border: 5px solid var(--teqo-white);
        left: -50px;
    }
    
    .manage-icon img {
        max-width: 37px;
        filter: invert(1);
    }
    
    .manage-icon-info {
        padding: 0 20px;
    }
    
    .manage-icon-info h2 {
        text-align: center;
        text-transform: capitalize;
        font-size: 20px;
        line-height: 33px;
        margin: 0;
        padding-bottom: 10px;
        color: var(--teqo-black);
    }
    
    .manage-icon-info p {
        text-align: center;
        font-size: 15px;
        font-family: "Poppins";
        line-height: 27px;
        color: var(--teqo-black);
        margin: 0;
        font-weight: 500;
    }
    /***right ***/
    
    .manage-box-right {
        width: 280px;
        height: 280px;
        background-color: var(--teqo-white);
        border-radius: 152px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
    }
    
    .manage-box-right::before {
        position: absolute;
        content: "";
        top: -5px;
        right: -10px;
        width: 104%;
        height: 104%;
        background-color: var(--teqo-oxford-blue);
        border-radius: 169px;
        z-index: -1;
    }
    
    .manage-icon-right {
        position: absolute;
        height: 70px;
        width: 70px;
        background-color: var(--teqo-all-softwares-off-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 33px;
        border: 5px solid var(--teqo-white);
        right: -50px;
    }
    
    .manage-icon-right img {
        max-width: 37px;
        filter: invert(1);
    }
    
    .manage-box:nth-child(1) {
        right: -200px;
        position: relative;
    }
    
    .manage-box:nth-child(1)::after {
        position: absolute;
        content: "";
        top: 304px;
        right: -114px;
        width: 165px;
        height: 8px;
        background-image: url(../assets/images/crm-images/all_one_before.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(39deg);
    }
    
    .manage-box:nth-child(2) {
        right: 0px;
    }
    
    .manage-box:nth-child(2)::after {
        position: absolute;
        content: "";
        top: 131px;
        right: -276px;
        width: 260px;
        height: 12px;
        background-image: url(../assets/images/crm-images/all_one_middle_before.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .manage-box:nth-child(3) {
        right: -200px;
    }
    
    .manage-box:nth-child(3)::after {
        position: absolute;
        content: "";
        top: -21px;
        right: -128px;
        width: 165px;
        height: 8px;
        background-image: url(../assets/images/crm-images/all_one_before.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(-39deg);
    }
    /*** right ****/
    
    .manage-box-right:nth-child(1) {
        right: 200px;
        position: relative;
    }
    
    .manage-box-right:nth-child(1)::after {
        position: absolute;
        content: "";
        top: 296px;
        left: -114px;
        width: 165px;
        height: 8px;
        background-image: url(../assets/images/crm-images/all_one_before.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(137deg);
    }
    
    .manage-box-right:nth-child(2) {
        right: 0px;
    }
    
    .manage-box-right:nth-child(2)::after {
        position: absolute;
        content: "";
        top: 131px;
        left: -273px;
        width: 260px;
        height: 12px;
        background-image: url(../assets/images/crm-images/all_one_middle_before.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(180deg);
    }
    
    .manage-box-right:nth-child(3) {
        right: 200px;
    }
    
    .manage-box-right:nth-child(3)::after {
        position: absolute;
        content: "";
        top: -15px;
        left: -128px;
        width: 165px;
        height: 8px;
        background-image: url(../assets/images/crm-images/all_one_before.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(-135deg);
    }
    
    @media all and (min-width: 1200px) and (max-width: 1399px) {
        .all_one_text {
            z-index: 5;
        }
        .manage-box:nth-child(2) {
            right: -12px;
        }
        .manage-box:nth-child(3)::after {
            right: -114px;
        }
        .manage-box-right:nth-child(2) {
            left: -12px;
        }
    }
    
    @media all and (min-width: 1025px) and (max-width: 1199px) {
        .manage-box:nth-child(1)::after {
            display: none;
        }
        .manage-box:nth-child(2) {
            right: -70px;
        }
        .manage-box:nth-child(2)::after {
            display: none;
        }
        .manage-box:nth-child(3)::after {
            display: none;
        }
        .manage-box-right:nth-child(1)::after {
            display: none;
        }
        .manage-box-right:nth-child(2)::after {
            display: none;
        }
        .manage-box-right:nth-child(2) {
            left: -70px;
        }
        .manage-box-right:nth-child(3)::after {
            display: none;
        }
        .manage-box {
            width: 230px;
            height: 230px;
        }
        .manage-box::before {
            left: -8px;
        }
        .manage-box-right {
            width: 230px;
            height: 230px;
        }
        .manage-box-right::before {
            right: -8px;
        }
        .manage-icon-info h2 {
            font-size: 24px;
            line-height: 29px;
        }
    }
    
    @media all and (min-width: 992px) and (max-width: 1024px) {
        .manage-box:nth-child(1)::after {
            display: none;
        }
        .manage-box:nth-child(2) {
            right: -70px;
        }
        .manage-box:nth-child(2)::after {
            display: none;
        }
        .manage-box:nth-child(3)::after {
            display: none;
        }
        .manage-box-right:nth-child(1)::after {
            display: none;
        }
        .manage-box-right:nth-child(2)::after {
            display: none;
        }
        .manage-box-right:nth-child(2) {
            left: -70px;
        }
        .manage-box-right:nth-child(3)::after {
            display: none;
        }
        .manage-box {
            width: 230px;
            height: 230px;
        }
        .manage-box::before {
            left: -8px;
        }
        .manage-box-right {
            width: 230px;
            height: 230px;
        }
        .manage-box-right::before {
            right: -8px;
        }
        .manage-icon-info {
            padding: 0 17px;
        }
        .manage-icon-info h2 {
            font-size: 16px;
            line-height: 29px;
        }
    }
    
    @media all and (min-width: 768px) and (max-width: 991px) {
        .all_one_bg {
            display: none;
        }
        .manage-box {
            margin-bottom: 25px;
        }
        .manage-box:nth-child(1)::after {
            display: none;
        }
        .manage-box:nth-child(1) {
            right: -50px;
        }
        .manage-box:nth-child(2)::after {
            display: none;
        }
        .manage-box:nth-child(2) {
            right: -50px;
        }
        .manage-box:nth-child(3) {
            right: -50px;
            margin-bottom: 0px;
        }
        .manage-box:nth-child(3)::after {
            display: none;
        }
        .manage-box-right {
            margin-bottom: 25px;
        }
        .manage-box-right:nth-child(1) {
            left: -80px;
        }
        .manage-box-right:nth-child(1)::after {
            display: none;
        }
        .manage-box-right:nth-child(2) {
            left: -80px;
        }
        .manage-box-right:nth-child(2)::after {
            display: none;
        }
        .manage-box-right:nth-child(3) {
            left: -80px;
            margin-bottom: 0px;
        }
        .manage-box-right:nth-child(3)::after {
            display: none;
        }
    }
    
    @media all and (min-width: 320px) and (max-width: 767px) {
        .manage-box:nth-child(1) {
            right: 0;
        }
        .manage-box:nth-child(1)::after {
            display: none;
        }
        .manage-box:nth-child(2)::after {
            display: none;
        }
        .manage-box:nth-child(3) {
            right: 0;
        }
        .manage-box:nth-child(3)::after {
            display: none;
        }
        .manage-box-right:nth-child(1) {
            left: 0;
        }
        .manage-box-right:nth-child(1)::after {
            display: none;
        }
        .manage-box-right:nth-child(2)::after {
            display: none;
        }
        .manage-box-right:nth-child(3) {
            left: 0;
        }
        .manage-box-right:nth-child(3)::after {
            display: none;
        }
        .manage-box {
            width: 240px;
            height: 240px;
            margin: 0 auto;
            margin-bottom: 35px;
        }
        .manage-box:nth-child(3) {
            margin-bottom: 25px;
        }
        .manage-box-right {
            width: 240px;
            height: 240px;
            margin: 0 auto;
            margin-bottom: 35px;
        }
        .manage-box-right:nth-child(3) {
            margin-bottom: 0;
        }
        .manage-icon {
            width: 50px;
            height: 50px;
            left: -32px;
            font-size: 25px;
        }
        .manage-icon img {
            max-width: 25px;
        }
        .manage-icon-right {
            width: 50px;
            height: 50px;
            right: -32px;
            font-size: 25px;
        }
        .manage-icon-right img {
            max-width: 25px;
        }
        .manage-icon-info h2 {
            font-size: 17px;
            line-height: 27px;
        }
        .all_one_bg {
            display: none;
        }
    }
</style>