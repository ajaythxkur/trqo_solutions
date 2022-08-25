<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="main_heading text-center">
          <h6>{{ main_small_heading }}</h6>
          <h2>{{ main_sec_heading }}<br />{{ main_sec_sub_heading }}</h2>
          <h1>{{ main_before_heading }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeading",
  props: {
    main_small_heading: String,
    main_sec_heading: String,
    main_sec_sub_heading: String,
    main_before_heading: String,
  },
};
</script>

<style scoped>
.main_heading.text-center p {
  margin-top: 15px;
}

.main_heading h2 {
  font-size: 39px;
  font-weight: bold;
  font-family: "MPLUSRounded1c", sans-serif;
  margin: 0;
  position: relative;
  text-transform: uppercase;
}

.main_heading h2::before {
  position: absolute;
  content: "";
  bottom: -7px;
  left: 0;
  right: 0;
  width: 120px;
  height: 2px;
  background-color: var(var(--teqo-oxford-blue));
  margin: 0 auto;
}

.main_heading {
  position: relative;
  padding: 15px 0;
  margin-bottom: 70px;
}

.main_heading h1 {
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 140px;
  font-weight: bold;
  font-family: "MPLUSRounded1c", sans-serif;
  opacity: 0.05;
  text-transform: uppercase;
}

.main_heading h6 {
  font-size: 19px;
  font-weight: normal;
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: var(--teqo-grey);
  text-transform: capitalize;
  margin-bottom: 5px;
}

section.Work_process .main_heading h2 {
  color: var(--teqo-white);
}

section.Work_process .main_heading h6 {
  color: var(--teqo-white);
}

section.Work_process .main_heading h1 {
  color: var(--teqo-white);
}

section.Work_process .main_heading h2::before {
  background-color: var(--teqo-white);
}

.technologies_we .main_heading {
    margin-bottom: 0 !important;
}
section.testimonials .main_heading h6, section.testimonials .main_heading h2 {
    color: var(--teqo-white);
}
section.testimonials .main_heading h2::before{
  background: var(--teqo-white);
}

@media all and (max-width: 991px) {
  .main_heading h1 {
    top: -5px;
    font-size: 100px;
  }
}

@media all and (max-width: 767px) {
  .main_heading h1 {
    top: -5px;
    font-size: 55px;
  }
  .main_heading h2 {
    font-size: 30px;
  }
  .main_heading {
    padding: 0;
  }
}
</style>
