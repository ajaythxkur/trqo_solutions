<template>
  <div>
    <div class="choose-main-box">
      <div class="choose-icon">
        <img loading="lazy" :src="choose_data.icon" class="img-fluid" alt="" />
        <h3>{{ choose_data.title }}</h3>
      </div>
      <!--choose-icon-->

      <div class="choose-info">
        <ul class="choose-list">
          <li v-for="(li_data, index) in choose_data.li_list" :key="index">
           <img src="../assets/images/icons/circle-yellow.svg" alt="icon"> {{ li_data }}
          </li>
        </ul>
      </div>
      <!--choose-info-->
    </div>
    <!--choose-main-box-->
  </div>
</template>

<script>
export default {
  name: "CRMChoose",
  props: {
    choose_data: Object,
  },
};
</script>

<style scoped>
.choose-main-box {
  background-image: url(../assets/images/crm-images/circle_element_frame.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 412px;
  width: 350px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.choose-icon {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 28px;
  text-align: center;
}

.choose-info {
  position: absolute;
  top: 195px;
  left: 18px;

  right: 0;
  margin: 0 auto;
  overflow: hidden;
  max-width: 270px;
}

ul.choose-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul.choose-list li {
  margin-bottom: 13px;
  font-family: "Poppins";
  font-size: 16px;
  color: #000;
  font-weight: 500;
  white-space: break-spaces;
  word-break: break-word;
}

ul.choose-list li:nth-child(2) {
  margin-bottom: 0;
}

ul.choose-list li .fas {
  color: #df8021;
  font-size: 10px;
}

.choose-icon img {
  max-width: 70px;
  margin-bottom: 12px;
}

.choose-icon h3 {
  color: var(--teqo-white);
  margin: 0;
  text-transform: capitalize;
  font-family: "Poppins";
  font-size: 25px;
  font-weight: 500;
}



@media all and (min-width: 1200px) and (max-width: 1399px) {
.choose-info {
      top: 185px;
    left: 31px;
}
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .choose-main-box {
    height: 360px;
    width: 320px;
    margin: 0 auto;
  }

.choose-icon h3 {
      font-size: 22px;
}
  .choose-icon {
    top: 20px;
  }

  .choose-info {
    max-width: 265px;
    top: 165px;
        left: 31px;
  }

  ul.choose-list li {
font-size: 15px;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .choose-main-box {
    height: 360px;
    width: 320px;
    margin: 0 auto;
  }

.choose-icon h3 {
      font-size: 22px;
}
  .choose-icon {
    top: 20px;
  }

  .choose-info {
    max-width: 265px;
    top: 165px;
        left: 31px;
  }

  ul.choose-list li {
font-size: 15px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .choose-main-box {
    width: 338px;
    height: 404px;
    margin: 0 auto;
  }

  .choose-icon {
    top: 30px;
  }

  .choose-info {
    top: 188px;
    left: 39px;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .choose-main-box {
    width: 295px;
    margin: 0 auto;
    border-radius: 12px;
    height: 357px;
  }

  .choose-icon {
    top: 20px;
  }

  .choose-icon img {
    margin-bottom: 8px;
  }

  .choose-info {
    padding: 10px 10px;
    text-align: unset;
    max-width: 230px;
    top: 157px;
  }

  .choose-icon h3 {
    font-size: 22px;
  }

ul.choose-list li {
  font-size: 14px;
}
}
</style>
