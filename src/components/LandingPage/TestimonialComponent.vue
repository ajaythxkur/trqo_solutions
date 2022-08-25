<template>
<div>
    <div class="testimonials_box mb-5" v-for="(data, index) in TestimonialsData" :key="index">
        <div class="testimonial_img">
            <img :src="require(`@/assets/images/index/${data.image}`)" alt="stars">
        </div>
        <h3 class="mb-2">{{data.heading}}</h3>
        <div class="star_box mb-2 text-center">
            <img src="../../assets/images/icons/star.svg" alt="stars">
            <img src="../../assets/images/icons/star.svg" alt="stars">
            <img src="../../assets/images/icons/star.svg" alt="stars">
            <img src="../../assets/images/icons/star.svg" alt="stars">
            <img src="../../assets/images/icons/star.svg" alt="stars">
        </div>
        <p> {{data.description}}</p>
    </div>
</div>
</template>

<script>
import HomeData from "@/assets/json/HomeData.json";
export default {
    name: "TestimonialComponent",
    data() {
        return {
            TestimonialsData: HomeData.TestimonialsData,
        }
    },
};
</script>

<style scoped>
.testimonials_box {
    background-color: var(--teqo-white);
    padding: 30px;
    position: relative;
    min-height: 490px;
    height: auto;
    border-radius: 10px;
}

.testimonials_box::before {
    position: absolute;
    content: "";
    top: 10px;
    left: 0;
    width: 90%;
    height: 100%;
    background-color: rgb(255 255 255 / 70%);
    right: 0;
    margin: 0 auto;
    border-radius: 10px;
    z-index: -1;
}

.testimonials_box::after {
    position: absolute;
    content: '';
    top: 20px;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: rgb(255 255 255 / 50%);
    right: 0;
    margin: 0 auto;
    z-index: -1;
    border-radius: 10px;
}

.testimonials_box img {
    text-align: center;
    position: relative;
}

.testimonials_box h3 {
    text-align: center;
}

.testimonials_box h3 {
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    color: var(--teqo-black);
    text-transform: uppercase;
    margin: 0;
    font-weight: 600;
}

.testimonials_box p {
    font-size: 16px;
    color: var(--teqo-off-gray);
    font-family: "Poppins", sans-serif;
    margin: 0;
}

.testimonial_img {
    text-align: center;
    margin-bottom: 15px;
}

@media all and (max-width: 1199px) {
    .testimonials_box {
        min-height: 410px;

    }
}

@media all and (max-width: 1024px) {
    .testimonials_box {
        min-height: 410px;

    }
}

@media all and (max-width: 991px) {
    .testimonials_box {
        min-height: 400px;

    }
}

@media all and (max-width: 767px) {

    .testimonials_box {
        min-height: 0px;
        height: auto;
    }
    section.testimonials .testimonials_box {
    padding: 5px 10px;
    margin: 0px 3px;
    border-radius: 10px;
    min-height: 360px;
}
.testimonials_box p {
    font-size: 14px;
}

}
</style>
