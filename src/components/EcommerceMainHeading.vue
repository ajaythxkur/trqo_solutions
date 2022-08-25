<template>
<div>
    <div class="mainheading_ecommerce">
        <h6 class="mb-2 text-uppercase">{{small_eheading}}</h6>
        <h1 class="mb-3"><span>{{main_eheading_bold}}</span> {{main_eheading}}<br>{{main_esubheading}}</h1>
    </div>
</div>
</template>

<script>
export default {
    name: "EcommerceMainHeading",
    props: {
        small_eheading: String,
        main_eheading_bold: String,
        main_eheading: String,
        main_esubheading: String,

    }
};
</script>

<style scoped>
.mainheading_ecommerce h6 {
    margin: 0;
    color: var(--teqo-greyhead);
    font-size: 16px;
    font-weight: 600;
}

.mainheading_ecommerce h1 {
    font-size: 39px;
    letter-spacing: .5px;
    font-weight: 300;
    font-family: "MPLUSRounded1c", sans-serif;
}

.mainheading_ecommerce h1 span {
    font-weight: 600;
     font-family: "Poppins", sans-serif;
     text-transform: uppercase;
}

.staff_text .mainheading_ecommerce h6,
.staff_text .mainheading_ecommerce h1 {
    color: var(--teqo-white);
}

.product_management .mainheading_ecommerce h6,
.product_management .mainheading_ecommerce h1 {
    color: var(--teqo-white) !important;
}

@media all and (max-width:767px) {
    .mainheading_ecommerce h1 {
        font-size: 21px !important;
    }

    .mainheading_ecommerce h1 br {
        display: none;
    }

    .single_vendor_text .mainheading_ecommerce {
        text-align: center;
    }

    section.multi_vendor .mainheading_ecommerce h1,
    section.multi_vendor .mainheading_ecommerce h6 {
        color: var(--teqo-white);
    }
}
</style>
