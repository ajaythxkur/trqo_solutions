<template>
<div class="contact_us_banner">
    <div class="contact_us_home"></div>
    <!--___________ section banner ___________-->
    <div class="main_banner_box">
        <div class="container">
            <div class="row form_row_box p-5">
                <div class="col-md-6 col-lg-6 col-xl-6">
                    <div class="form_box">
                        <div class="form_headings">
                            <h2 class="mb-4">Get In Touch With Us.</h2>
                            <p class="mb-0">How can we help you?</p>
                        </div>
                        <!--________ top headings________ -->
                        <form class="row mt-5">
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <div class=" mb-3">
                                    <input type="text" class="form-control shadow-none border-0" placeholder="Enter Your Name" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                </div>
                            </div>
                            <!--________ name ___________-->
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <div class=" mb-3">
                                    <input type="text" class="form-control shadow-none border-0" placeholder="Phone" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                </div>
                            </div>
                            <!--________ phone no ___________-->
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class=" mb-3">
                                    <input type="text" class="form-control shadow-none border-0" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                </div>
                            </div>
                            <!--________ email address ___________-->
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="mb-3">
                                    <textarea class="form-control  shadow-none border-0 p-2"  placeholder="Type Your Message Here"  id="floatingTextarea2" style="height: 278px"></textarea>
                                </div>
                            </div>
                            <!--________comments ___________-->
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="contact_btn">
                                    <button type="submit" class="btn btn_contact w-100 shadow-none">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                            <!-- ___________contact us button ___________-->
                        </form>
                        <!--________ form end ________-->
                    </div>
                </div>
                <!--________ first col end ________-->
                <div class="col-md-6 col-lg-6 col-xl-6">

                </div>
                <!--________ second col end ________-->
            </div>
        </div>
    </div>

    <!-- ________section banner end________-->

</div>
</template>

<script>
export default {
    name: 'ContactusView'
}
</script>

<style scoped>
.contact_us_banner {
    background-image: url('@/assets/images/contactus/bannercontactus.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 990px;
    position: relative;
}

.main_banner_box {
    position: absolute;
    bottom: -27px;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.main_banner_box .form_row_box {
    background-color: var(--teqo-white);
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    position: relative;
    border-radius: 10px 10px 10px 0;
}

.form_box .form_headings h2 {
    font-size: 25px;
    font-family: "Poppins";
    font-weight: 600;
    color: var(--teqo-head);
}

.form_box .form_headings p {
    font-size: 16px;
    color: var(--teqo-black);
    font-family: "Poppins";
}

.form_box .form-control {
    background-color: var(--teqo-input);
    font-family: 'Poppins';
    font-size: 16px;
    color: var(--teqo-head);
    font-weight: 400;
}

.contact_btn .btn_contact {
    background-color: var(--teqo-head);
    border-color: var(--teqo-head);
    font-size: 20px;
    font-family: 'Poppins';
    color: var(--teqo-white);
}
</style>
