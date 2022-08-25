<template>
<div>
    <div class="container">
        <div class="row align-items-center">
            <div :class="`col-lg-5 ${screenWidth >= 991 ? offering_data.addClass : ''}`">
                <div class="offering_img">
                    <img loading="lazy" :src="offering_data.image" class="img-fluid" alt="img" />
                </div>
            </div>
            <div class="col-lg-7">
                <div class="offering_content">
                    <h3 class="mb-2">{{ offering_data.heading }}</h3>
                    <p class="mb-2">{{ offering_data.description }}</p>
                    <ul>
                        <li class="mb-2" v-for="(offer, index) in offering_data.li_list" :key="index">
                            {{ offer }}
                        </li>
                    </ul>
                    <router-link to="" class="btn  btn-cus">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "OfferingsSection",
    data() {
        return {
            screenWidth: 1200,
        };
    },
    props: {
        offering_data: Object,
    },
    methods: {
        handleResize() {
            this.screenWidth = screen.width;
        },
    },
    created() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
};
</script>

<style scoped>
.offering_content p {
    text-align: justify;
}
.offering_content h3{
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    color: var(--teqo-black);
    text-transform: uppercase;
    margin: 0;
    font-weight: 600;
}

.offering_content ul {
    padding-left: 0;
    list-style-position: inside;
}

.offering_img {
    margin-bottom: 25px;
    text-align: center;
}

.offering_content {
    margin-bottom: 25px;
}
.btn-cus {
    background: var(--teqo-white);
    color: var(--teqo-black);
    border-color: var(--teqo-oxford-blue)!important;
    font-weight: 500;
    box-shadow: none;
    font-size: 14px;
}
.btn-cus:hover {
    color: var(--teqo-white);
    background-color: var(--teqo-oxford-blue);
    border-color: var(--teqo-oxford-blue);
    box-shadow: none;
}
@media all and (max-width: 767px) {
.offering_content h3{
    font-size: 21px;
}
}
</style>
