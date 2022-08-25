<template>
<div>
    <!-- __________section start___________ -->
    <section class="ecommerce_banner">
        <div class="container">
            <div class="row align-items-center banner_cus_row">
                <div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="banner_info">
                        <h2 class="mb-3">
                            We <span>Transform</span> Your <span>Vision</span> Into A
                            <span>Successful Business</span>.
                        </h2>
                        <p class="mb-3">
                            Teqo Design Impactful E-commerce Websites for Making It Happen.
                        </p>
                        <div class="btn_banner_box">
                            <router-link to="" class="btn btn_banner shadow-none">Get Started</router-link>
                        </div>
                    </div>
                    <!-- _____________banner info_______________ -->
                </div>
                <!-- ___________banner info____________ -->
                <div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="img_banner text-center mb-3">
                        <img src="../assets/images/ecommerce/banner/banner-rightimg.png" alt="banner_img" class="img-fluid">
                    </div>
                </div>
                <!-- _____________banner img____________ -->
            </div>
            <!-- ___________row end____________ -->
        </div>
        <!-- __________container end____________ -->
    </section>
    <!---------- section end  ------------->

    <section class="single_vendor">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 col-xl-6">
                    <div class="single_vendor_img text-center">
                        <img src="../assets/images/ecommerce/single-vendor/single_vendor.png" loading="lazy" class="img-fluid" alt="img" />
                    </div>
                </div>
                <!-- _____________vendor image_____________ -->
                <div class="col-lg-6 col-md-12 col-xl-6">
                    <div class="single_vendor_text">
                        <EcommerceMainHeading small_eheading="ABOUT SINGLE VENDOR" main_eheading_bold="SINGLE-VENDOR" main_eheading="E-commerce" />
                        <p>
                            Be a selling king by providing a smooth shopping experience to
                            clients. We create your single vendor online store with our
                            e-commerce skills. This will grab more customers with greater
                            ease. Impact the growth of your business with our best-in-class
                            e-commerce solutions. We will take you to new heights with
                            futuristic automation.
                        </p>
                    </div>
                </div>
                <!-- _____________vender content_____________ -->
            </div>
            <!-- _____________row end_____________ -->
        </div>
    </section>
    <!--single Vendor-->
    <!----------- section end  -------------->

    <section class="multi_vendor">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <EcommerceMainHeading small_eheading="Multi VENDOR" main_eheading_bold="MULTI-VENDOR" main_eheading="E-commerce" />
                </div>
            </div>
            <div class="row align-items-center multi_vendor_reverse">
                <div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="multi_vendor_text mt-5 pt-5">
                        <h3 class="mb-4">About Multi Vendor</h3>
                        <p class="mb-3">
                            If you want to launch a multivendor eCommerce Marketplace to
                            target the audience and industry, let's design for you. We can
                            help you in getting your dreamt multi-vendor e-commerce
                            platform. Sell anything, everywhere with our effective
                            e-commerce websites. We don't just make sure your e-commerce
                            business generates income. Yet, it also helps strengthen the
                            brand image.
                        </p>
                        <p>
                            Let the e-commerce experts deploy your online store. Ask us if
                            you already have an e-commerce website that needs to be
                            polished. We revamp your Multi-vendor e-commerce website.
                        </p>
                    </div>
                </div>
                <!-- _____________multi-banner info___________ -->
                <div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="multi_vendor_img text-center">
                        <img src="../assets/images/ecommerce/multi-vendor/multi-vendor.png" loading="lazy" class="img-fluid" alt="img" />
                    </div>
                </div>
                <!-- _____________multi-vendor img____________ -->
            </div>
            <!-- ____________row end____________ -->
        </div>
        <!-- __________container____________ -->
    </section>
    <!---------------multi_vendor------------------>

    <section class="features_ecommerce">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <EcommerceMainHeading small_eheading="Features" main_eheading_bold="Key Features" main_eheading="of E-commerce " main_esubheading="Website" />
                </div>
            </div>
        </div>
        <div class="container-fluid"  id="feature_ecommerce_layer">
            <div class="container">
                <div class="row align-items-end mt-5 pt-5 ">
                    <div class="col-lg-4">
                        <div class="features_ecommerce_img text-center">
                            <img src="../assets/images/ecommerce/feature-ecommerce/features_img.png" loading="lazy" class="img-fluid" alt="img" />
                            <!-- <img src="../assets/images/ecommerce/feature-ecommerce/features_img.png" alt=""> -->
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row feature_margin">
                            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-6" v-for="(data, index) in FeatureData" :key="index">
                                <div class="ecommerce_content_box mb-4">
                                    <div class="ecommerce_content_icon">
                                        <!-- <img 
                                        :src="require(`@/assets/images/ecommerce/feature-ecommerce/${data.image}`)" 
                                        alt="image" loading="lazy" class="img-fluid"> -->
                                        <img :src="require(`@/assets/images/ecommerce/feature-ecommerce/${data.image}`)" alt="image" loading="lazy" class="img-fluid" />
                                        <!-- {{data.image}} -->
                                    </div>
                                    <div class="ecommerce_content_text">
                                        <p class="mb-0">{{data.info1}} <br />{{data.info2}}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- columns end -->
                        </div>
                    </div>
                    <!-- _____________col-end_________________ -->
                </div>
            </div>
        </div>
        <!-- ______________container end________________ -->
    </section>
    <!-- section end -->
    <!-------------Feature E-commerce-------------->

    <section class="ecommerce-solution">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <EcommerceMainHeading small_eheading="Solution" main_eheading_bold="Supporting Distinct" main_eheading=" E-commerce " main_esubheading="Solution" />
                    <p>
                        Teqo understands your requirements to deliver the expected
                        e-commerce solutions.
                    </p>
                </div>
            </div>
            <div class="row justify-content-between mt-5 pt-5">
                <div class="col-md-6 col-lg-4  col-xl-3 cus_col" v-for="(solution, index) in solution_data" :key="index">
                    <!-- :style="index % 3 == 1 ? 'margin-left:1px;' : ''" -->
                    <!-- <EcommerceSolution :solution_data="solution" /> -->
                    <div class="ecommercesolution_box">
                        <h3 class="text-uppercase">
                            {{ solution.heading }} <br />
                            {{ solution.subheading }}
                        </h3>
                        <div class="ecommercesolution_icon mb-3">
                            <!-- <img :src="require(`../../assets/images/ecommerce/ecommerce-solution/${solution.image}`)" alt="image" loading="lazy" class="img-fluid"> -->
                            <!-- <img :src="solution.image" loading="lazy" class="img-fluid" alt="img" /> -->
                            <img :src="require(`@/assets/images/ecommerce/ecommerce-solution/${solution.image}`)" alt="image" class="img-fluid" />
                            <!-- {{solution.image}} -->
                        </div>

                        <p>{{ solution.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------section end--------------- -->
    <!--Ecommerce Solution-->

    <section class="product_management">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <EcommerceMainHeading small_eheading="MANAGEMENT" main_eheading_bold="Product " main_eheading="Management" />
                </div>
            </div>
            <div class="row pt-5 mt-5 align-items-center product_management_row">
                <!-- <ProductManagement /> -->
                <div class="col-lg-6 col-xl-6 col-md-12">
                    <div class="product_management_content">
                        <h2 class="mb-3 fw-bolder text-uppercase">Track real-time customers and orders</h2>
                        <p class="text-white">
                            You might not have time to focus on automating the business
                            operations Don't Worry! we will do it for you. We simplify the
                            E-commerce activities with the order management system. At Teqo,
                            we offer E-commerce website development services to improve
                            transparency, boost delivery capacity. We simply work on
                            automating the business management.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-6 col-md-12">
                    <div class="product_management_img text-center">
                        <img src="../assets/images/ecommerce/product-management/product_management_img.png" loading="lazy" class="img-fluid" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------section end--------------- -->
    <!--product_management-->

    <section class="product_report">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <EcommerceMainHeading small_eheading="Reports" main_eheading_bold="Product" main_eheading="Reports" />
                </div>
            </div>

            <div class="row mt-5 pt-5" id="report_icon_line">
                <div class="col-lg-5"></div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img1.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="reports_content_1">
                        <h3 class="mb-0">Sales Report</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
            </div>
            <!--row-1-->
            <div class="row report_reverse">
                <div class="col-lg-5">
                    <div class="reports_content_2">
                        <h3 class="mb-0">TAX REPORT</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img2.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5"></div>
            </div>
            <!--row-2-->
            <div class="row">
                <div class="col-lg-5"></div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img3.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="reports_content_1">
                        <h3 class="mb-0">SELL/PURCHASE REPORT</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
            </div>
            <!--row-3-->
            <div class="row report_reverse">
                <div class="col-lg-5">
                    <div class="reports_content_2">
                        <h3 class="mb-0">CUSTOMER REPORT</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img4.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5"></div>
            </div>
            <!--row-4-->
            <div class="row">
                <div class="col-lg-5"></div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img5.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="reports_content_1">
                        <h3 class="mb-0">PROFIT/LOSS REPORT</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
            </div>
            <!--row-5-->
            <div class="row report_reverse">
                <div class="col-lg-5">
                    <div class="reports_content_2">
                        <h3 class="mb-0">EXPENSE REPORT</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img6.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5"></div>
            </div>
            <!--row-6-->
            <div class="row">
                <div class="col-lg-5"></div>
                <div class="col-lg-2">
                    <div class="report_icon">
                        <img src="../assets/images/ecommerce/product-report/img7.png" loading="lazy" alt="icon" />
                    </div>
                </div>
                <div class="col-lg-5 ">
                    <div class="reports_content_1">
                        <h3 class="mb-0">PRODUCT REPORT</h3>
                        <div class="divider_line">
                            <img src="../assets/images/ecommerce/product-report/line.png" loading="lazy" alt="icon" />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                            impedit qui magni, commodi explicabo dolorem nostrum excepturi
                            cumque. Sequi, praesentium eos? Numquam incidunt, natus a
                            tempora id repellendus blanditiis impedit!
                        </p>
                    </div>
                </div>
            </div>
            <!--row-7-->
        </div>
    </section>
    <!-- -------------section end--------------- -->
    <!--product Report-->

    <section class="invoice_staff">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <EcommerceMainHeading small_eheading="COMMERCIAL DOCUMENT" main_eheading_bold="Invoice" />
                </div>
            </div>
        </div>
        <div class="container-fluid" id="staff_invoice_bg">
            <div class="container">
                <div class="row my-5 py-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="invoice_staff_text">
                            <h3 class="mb-4 text-uppercase">
                                About Invoice ?
                            </h3>
                            <p>
                                An invoice is a time-stamped commercial document that itemizes
                                and records a transaction between a buyer and a seller. If
                                goods or services were purchased on credit, the invoice
                                usually specifies the terms of the deal and provides
                                information on the available methods of payment.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="invoice_staff_img text-center">
                            <img src="../assets/images/ecommerce/invoice-ecommerce/invoice_img.png" class="img-fluid" loading="lazy" alt="img" />
                        </div>
                    </div>
                </div>
                <!--incoice document-->
                <div class="row staff_text">
                    <div class="col-lg-12 text-center">
                        <EcommerceMainHeading small_eheading="Management" main_eheading_bold="Staff" main_eheading="Management" />
                    </div>
                </div>
                <div class="row mt-5 pt-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="invoice_staff_img text-center">
                            <img src="../assets/images/ecommerce/invoice-ecommerce/staff_img.png" class="img-fluid" loading="lazy" alt="img" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="invoice_staff_text">
                            <h3 class="mb-4 text-uppercase">
                                About Staff Management ?
                            </h3>
                            <p>
                                Staff management is the management of subordinates in an
                                organization. ... They serve the line managers of the
                                organization in an advisory or support capacity by providing
                                them with information and advice. Furthermore, staff managers
                                usually do not make operating decisions.
                            </p>
                        </div>
                    </div>
                </div>
                <!--staff management-->
            </div>
        </div>
    </section>
    <!-- -------------section end--------------- -->
    <!--invoice_staff-->

    <section class="delivery_management">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <EcommerceMainHeading small_eheading="MANAGEMENT" main_eheading_bold="Delivery  "
              main_eheading="Management" />
          </div>
        </div>
        <div class="row pt-5 mt-5 align-items-center">
          <div class="col-lg-6">
            <div class="delivery_management_text">
              <h3 class="mb-4">About Delivery Management</h3>
              <p>
                Delivery management is the function of applying processes to
                ensure goods are effectively and efficiently transferred from
                one location to the next. Sometimes called dispatch or fleet
                management, it answers the question, “how do we get this item
                from point a to point b?”. As consumer expectations continue to
                rise, this function has never been in greater demand. In this
                article, we will discuss who is typically in charge of delivery
                management within an organization and how they can leverage
                software to do that job more effectively.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="delivery_management_img text-center">
              <img src="../assets/images/ecommerce/delivery-management/delivery_img.png" class="img-fluid" loading="lazy" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--product_management-->
</div>
</template>

<script>
import EcommerceMainHeading from '@/components/EcommerceMainHeading.vue'
export default {
    name: 'EcommerceView',
    components: {
        EcommerceMainHeading
    },
    data() {
        return {
            FeatureData: [
                {
                    image: 'download1.png',
                    info1: 'Multi-Platform CMS',
                    info2: 'Capabilities',
                },
                {
                    image: 'download2.png',
                    info1: 'Mobile Friendly',
                    info2: 'Website',
                },
                {
                    image: 'download3.png',
                    info1: 'Easy to Use Checkout',
                    // info2: 'Capabilities',
                },
                {
                    image: 'download4.png',
                    info1: 'Social Connection with',
                    info2: 'Customers',
                },
                {
                    image: 'download5.png',
                    info1: 'Multiple Payment',
                    info2: 'Options',
                },
                {
                    image: 'download6.png',
                    info1: 'Display of Best Selling',
                    info2: 'Products',
                }
            ],
            solution_data: [{
                image: 'solution_1.png',
                heading: "Auction & Bidding",
                subheading: "Platform",
                description: "Create a fully-featured online bidding portal to accelerate business growth. We deals-in world-class auction platform design services. We facilitate cutting-edge sales channels for products.",
            }, {
                image: 'solution_2.png',
                heading: "ECommerce ",
                subheading: "Aggregators",
                description: "Partnered with us to deploy feature-rich, responsive e-commerce aggregators. Our trendy platform lets you track sales and other business operations.",
            }, {
                image: 'solution_3.png',
                heading: "Ticketing & Booking",
                subheading: "Solutions",
                description: "Teqo is a one-stop solution to meet your Booking and Event Ticketing requirements. Render phenomenal ticketing solutions to scale events requirements. We follow the latest approaches to come with something exceptional and innovative.",
            }, {
                image: 'solution_4.png',
                heading: "Social E-Commerce",
                subheading: "Development",
                description: "Design cost-efficient social e-commerce websites to provide reliable and flawless services. We are expertise in every skill to embed the modules for social shopping. We are the industry leaders to enable the digital you.",
            }, {
                image: 'solution_5.png',
                heading: "B2B Or B2C",
                subheading: "Marketplace",
                description: "Bring the ambitious business ideations to life with our experts. We customized B2b or B2c marketplaces as per brand requirements. We allow you to boost operational efficiency, and reduce the cost.",
            }, {
                image: 'solution_6.png',
                heading: "Online Store",
                subheading: "Development",
                description: "We employ comprehensive feature-rich and scalable solutions. We help the brands find the best ways to rank with an online stores development. Rethink what's possible with us.",
            }, ]
        }
    }
}
</script>

<style scoped>
.ecommerce_banner {
    background-image: url('@/assets/images/ecommerce/banner/banner_ecommerce.png');
    min-height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.banner_cus_row {
    transform: translateY(40%);
}

.ecommerce_banner .banner_info h2 {
    font-weight: 700;
    color: var(--teqo-white);
    font-size: 39px;
    font-family: "MPLUSRounded1c", sans-serif;

}

.ecommerce_banner .banner_info p {
    color: var(--teqo-white);
}

.btn_banner_box .btn_banner {
    color: var(--teqo-white);
    background-color: var(--teqo-btnb);
    border-color: var(--teqo-btnb);
    font-weight: 500;
    font-size: 15px;
    min-width: 150px;
}

.btn_banner_box .btn_banner:hover {
    background: var(--teqo-white);
    color: var(--teqo-btnb);
    border-color: var(--teqo-btnb);

}

/*---------Single Vendor Section--------------------*/

section.single_vendor {
    position: relative;
    background-color: var(--teqo-offwhite-bg);
    padding: 120px 0;
    overflow: hidden;
}

section.single_vendor::before {
    position: absolute;
    content: "";
    top: -13px;
    left: -130px;
    background-image: url(../assets/images/ecommerce//single-vendor/single-vendor-before.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 500px;
    height: 508px;
}

section.single_vendor::after {
    position: absolute;
    content: "";
    background-image: url(../assets/images/ecommerce//single-vendor/single-vendor-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 1400px;
    height: 1135px;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
}

.single_vendor_img {
    position: relative;
}

.single_vendor_text p {
    font-size: 16px;
    color: var(--teqo-black);
    position: relative;
}

section.multi_vendor {
    position: relative;
    background-color: var(--teqo-offwhite-bg);
    background-image: url(../assets/images/ecommerce/multi-vendor/vendor-multi-bg.png);
    background-position: center 180px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}

section.multi_vendor::before {
    position: absolute;
    content: "";
    background-image: url(../assets/images/ecommerce/multi-vendor/multi-vendor-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 300px;
    height: 248px;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.multi_vendor_text h3 {
    color: var(--teqo-white);
    position: relative;
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    font-weight: 600;
}

.multi_vendor_text h3::before {
    position: absolute;
    content: "";
    bottom: -5px;
    left: 0;
    width: 140px;
    height: 1px;
    background: var(--teqo-white);
}

.multi_vendor_text p {
    color: var(--teqo-white);
}

/*---------features_ecommerce Section--------------------*/

section.features_ecommerce {
    padding: 100px 0;
    position: relative;
    background-color: var(--teqo-offwhite-bg);
    overflow: hidden;
}

section.features_ecommerce::before {
    position: absolute;
    content: "";
    top: 60px;
    right: -100px;
    background-image: url(../assets/images/ecommerce/feature-ecommerce/features_before.png);
    width: 300px;
    height: 259px;
    background-repeat: no-repeat;
}

.features_ecommerce_img {
    position: relative;
    z-index: 50;
}

section.features_ecommerce::after {
    position: absolute;
    content: "";
    top: 65%;
    left: -100px;
    background-image: url(../assets/images/ecommerce/feature-ecommerce/features_after.png);
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
}

#feature_ecommerce_layer {
    position: relative;
}

#feature_ecommerce_layer::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    background-image: url(../assets/images/ecommerce/feature-ecommerce/feature_img1.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 653px;
}

.features_ecommerce_img {
    position: relative;
}

.ecommerce_content_box {
    display: flex;
    align-items: center;
    background-color: var(--teqo-white);
    box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    position: relative;
    padding: 15px;
    border-radius: 15px;
}

.ecommerce_content_box::before {
    position: absolute;
    content: "";
    left: -10px;
    top: 0;
    background-image: url(../assets/images/ecommerce/feature-ecommerce/download.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 105px;
    height: 64px;
    bottom: 0;
    margin: auto 0;
}

.ecommerce_content_icon {
    width: 30%;
}

.ecommerce_content_text {
    width: 70%;
}

.ecommerce_content_text p {
    color: var(--teqo-black);
    font-weight: 500;
}

.ecommerce_content_icon img {
    position: relative;
}

/* ------------------ecommerce solution ------------*/
.ecommercesolution_box {
    text-align: center;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    padding: 20px;
    border-radius: 15px;
    min-height: 595px;
    position: relative;
    margin-bottom: 40px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    background: var(--teqo-white);
}

.ecommercesolution_box::before {
    position: absolute;
    content: "";
    top: 0;
    left: -54px;
    background-image: url(../assets/images/ecommerce/ecommerce-solution/solution_before.png);
    width: 450px;
    height: 124px;
    background-position: center;
    background-repeat: no-repeat;
}

.ecommercesolution_box::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    width: 90px;
    height: 15px;
    margin: 0 auto;
    background-color: var(--teqo-light-blue);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.ecommercesolution_box h3 {
    margin: 120px 0 10px 0;
    font-size: 21px;
    font-weight: 600;
    font-family: "MPLUSRounded1c", sans-serif;
}

.ecommercesolution_icon {
    margin-bottom: 10px;
}

.ecommercesolution_box p,
.ecommerce-solution p {
    font-size: 16px;
    color: var(--teqo-info);
}

section.ecommerce-solution {
    padding: 100px 0;
    position: relative;
    background-color:var(--teqo-offwhite-bg);
    overflow: hidden;
}

.cus_col {
    min-width: 28%;
}

/*---------product_management Section--------------------*/

.product_management {
    padding: 100px 0;
    background-image: url(../assets/images/ecommerce/product-management/product_management.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
}

.product_management_content h2 {
    font-size: 39px;
    font-weight: 600;
    font-family: "MPLUSRounded1c", sans-serif;
    color: var(--teqo-white);
}

section.product_report {
    padding: 100px 0;
    background-color: #fbf8f1;
    position: relative;
    overflow: hidden;
}

section.product_report::before {
    position: absolute;
    content: "";
    top: -31px;
    right: -100px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: hsl(42deg 52% 85% / 50%);
}

section.product_report::after {
    position: absolute;
    content: "";
    top: 50%;
    left: -100px;
    width: 252px;
    height: 464px;
    background-image: url(../assets/images/ecommerce/product-report/circle_report.png);
}

.divider_line {
    position: relative;
    top: -13px;
}

.reports_content_1,
.reports_content_2 {
    background-color:var(--teqo-white);
    padding: 25px;
    box-shadow: 0 0 10px rgb(0 0 0 / 25%);
    border-radius: 10px;
    position: relative;
    z-index: 99;
}

.reports_content_1 h3,
.reports_content_2 h3 {
    font-size: 21px;
    font-family: "MPLUSRounded1c", sans-serif;
    color: var(--teqo-black);
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
}

.reports_content_1 p,
.reports_content_2 p {
    color: var(--teqo-info);
}

.reports_content_1::before {
    position: absolute;
    content: "";
    top: 27px;
    left: -29px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 30px solid white;
    transform: rotate(90deg);
    filter: drop-shadow(0px 8px 6px);
    color: rgb(0 0 0 / 10%);
}

.reports_content_2::before {
    position: absolute;
    content: "";
    top: 27px;
    right: -29px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 30px solid white;
    transform: rotate(-90deg);
    filter: drop-shadow(0px 8px 6px);
    color: rgb(0 0 0 / 10%);
}

.report_icon {
    width: 100px;
    height: 100px;
    background-color:var(--teqo-white);
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: 8px solid #f8b304;
    border-radius: 50%;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(-45deg);
}

.report_icon img {
    transform: rotate(45deg);
}

#report_icon_line {
    position: relative;
}

#report_icon_line::before {
    position: absolute;
    content: "";
    top: 0;
    left: 8px;
    right: 0;
    margin: 0 auto;
    background-color: #f8b304;
    width: 8px;
    min-height: 1620px;
    border-radius: 10px;
}
  /*---------invoice_staff Section--------------------*/
    
    section.invoice_staff {
        padding: 100px 0;
        overflow: hidden;
        background-color:var(--teqo-offwhite-bg);
        overflow: hidden;
    }
    
    #staff_invoice_bg {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(../assets/images/ecommerce/invoice-ecommerce/invoice_staff.png);
        width: 100%;
        min-height: 1240px;
        position: relative;
    }
    
    #staff_invoice_bg::before {
        position: absolute;
        content: "";
        top: 28%;
        right: -45px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: rgb(255 255 255 / 20%);
    }
    
    .invoice_staff_text h3 {
        font-weight: 600;
        font-size: 21px;
        color:var(--teqo-white);
        font-family: "MPLUSRounded1c", sans-serif;
    }
    .invoice_staff_text p{
       color:var(--teqo-white);  
    }
     /*---------Delivery_management Section--------------------*/
    
    section.delivery_management {
        padding: 100px 0;
        background-color:var( --teqo-offwhite-bg);
        overflow: hidden;
    }
    
    .delivery_management_text h3 {
        text-transform: capitalize;
        position: relative;
    }
    
    .delivery_management_text h3::before {
        position: absolute;
        content: "";
        bottom: -5px;
        left: 0;
        width: 200px;
        height: 1px;
        background: var(--teqo-black);
    }
    
    .delivery_management_text p {
        color: var(--teqo-black);
    }
    .delivery_management_text h3 {
        font-weight: 600;
        font-size: 21px;
        color:var(--teqo-black);
        font-family: "MPLUSRounded1c", sans-serif;
    }
    /* media query */
        @media all and (min-width: 1200px) and (max-width: 1199px){
            section.ecommerce_banner {
            min-height: 650px;
        }
        .cus_col {
            min-width: 33.33%;
        }
        #report_icon_line::before {
            min-height: 1800px;
        }
        .product_management_content h2 {
            font-size: 35px;
        }
          .ecommercesolution_box::before{
            display: none;
        }
        .ecommercesolution_box h3{
            margin-top: 10px;
        }
        .ecommercesolution_box{
            min-height: 507px;
        }
   
    }
    @media all and (min-width: 992px) and (max-width: 1199px){
            section.ecommerce_banner {
            min-height: 650px;
        }
        .cus_col {
            min-width: 33.33%;
        }
        #report_icon_line::before {
            min-height: 1800px;
        }
        .product_management_content h2 {
            font-size: 35px;
        }
          .ecommercesolution_box::before{
            display: none;
        }
        .ecommercesolution_box h3{
            margin-top: 10px;
        }
        .ecommercesolution_box{
            min-height: 507px;
        }
   
    }

 @media all and (min-width: 768px) and (max-width: 991px) {
        section.ecommerce_banner{
            background-image: none;
            background-color: #193772;
            min-height: 780px;
            padding: 40px 0 !important;
        }
         .ecommerce_banner .banner_info {
            text-align: center;
        }
         .ecommerce_banner .banner_info h2 {
            font-size: 30px;
        }
          .banner_cus_row {
            transform: translateY(15%);
            display: flex;
            flex-direction: column-reverse;
        }
        .multi_vendor_reverse {
            display: flex;
            flex-direction: column-reverse;
        }
        section.multi_vendor {
            background-color: #193670;
            background-image: none;
        }
        .multi_vendor_text h3 {
            text-align: center;
        }
        .multi_vendor_text h3::before {
            right: 0;
            margin: 0 auto;
        }
        .multi_vendor_text {
            margin: 20px 0 0 !important;
            padding: 0 !important;
        }
        section.single_vendor::after,
        section.single_vendor::before,
        section.multi_vendor::before,
        section.features_ecommerce::before,
        section.product_report::before,
        section.product_report::after,
        #staff_invoice_bg::before,
        section.features_ecommerce::after,
        .reports_content_1::before,
        .reports_content_2::before,
        section.ecommerce-solution::before {
            display: none;
        }
        section.features_ecommerce {
            padding: 60px 0;
        }
        .feature_margin {
            margin-top: 25px;
        }
        section.ecommerce-solution {
            padding: 60px 0;
        }
        .cus_col {
            min-width: 50%;
        }
        section.product_management {
            padding: 60px 0;
        }
        .reports_content_1,
        .reports_content_2 {
            margin-bottom: 20px;
        }
        .report_icon {
            margin-bottom: 20px;
        }
        .report_reverse {
            display: flex;
            flex-direction: column-reverse;
        }
        #report_icon_line::before {
            display: none;
        }
        section.product_report {
            padding: 60px 0;
        }
        section.invoice_staff {
            padding: 60px 0;
        }
        #staff_invoice_bg {
            background-image: none;
            min-height: auto;
            background-color: #1a3975;
        }
        .py-5 {
            padding: 30px 0 !important;
        }
        .my-5 {
            margin: 30px 0 !important;
        }
        .mt-5 {
            margin: 30px 0 0 !important;
        }
        .pt-5 {
            padding: 30px 0 0 !important;
        }
        .invoice_staff_text {
            margin-bottom: 25px;
        }
        .invoice_staff_text h3 {
            text-align: center;
        }
        .delivery_management_img {
            margin-top: 25px;
        }
        section.delivery_management {
            padding: 60px 0;
        }
        .product_management_content h2 {
            font-size: 22px;
        }
        .product_management_row {
            display: flex;
            flex-direction: column-reverse;
        }
        .product_management_img {
            margin-bottom: 25px;
        }
        .ecommercesolution_box::before{
            display: none;
        }
        .ecommercesolution_box h3{
            margin-top: 10px;
        }
        .ecommercesolution_box{
            min-height: 507px;
        }
    }

  @media all and (min-width: 320px) and (max-width: 767px) {
        section.ecommerce_banner {
            background-image: none;
            background-color: #193772;
            min-height: 680px;
            padding: 40px 0 !important;
        }
        .banner_info {
            text-align: center;
        }
        .ecommerce_banner .banner_info h2{
            font-size: 25px;
        }
        .ecommerce_banner .banner_info p{
            font-size: 14px;
        }
        .banner_cus_row {
            transform: translateY(15%);
            display: flex;
            flex-direction: column-reverse;
        }
        section.single_vendor::after,
        section.single_vendor::before,
        section.multi_vendor::before,
        section.features_ecommerce::before,
        section.product_report::before,
        section.product_report::after,
        #staff_invoice_bg::before,
        section.features_ecommerce::after,
        .reports_content_1::before,
        .reports_content_2::before,
        section.ecommerce-solution::before {
            display: none;
        }
        section.single_vendor {
            padding: 40px 0;
        }
        .multi_vendor_reverse {
            display: flex;
            flex-direction: column-reverse;
        }
        section.multi_vendor {
            background-color: #193670;
            background-image: none;
        }
        .multi_vendor_text h3 {
            text-align: center;
        }
        .multi_vendor_text h3::before {
            right: 0;
            margin: 0 auto;
        }
        .multi_vendor_text {
            margin: 20px 0 0 !important;
            padding: 0 !important;
        }
        section.features_ecommerce {
            padding: 40px 0;
        }
        .feature_margin {
            margin-top: 25px;
        }
        .ecommerce_content_text p {
            font-size: 10px;
            margin-left: 22px;
        }
        section.ecommerce-solution {
            padding: 40px 0;
        }
        section.product_management {
            padding: 40px 0;
        }
        .reports_content_1,
        .reports_content_2 {
            margin-bottom: 20px;
        }
        .report_icon {
            margin-bottom: 20px;
        }
        .report_reverse {
            display: flex;
            flex-direction: column-reverse;
        }
        #report_icon_line::before {
            display: none;
        }
        section.product_report {
            padding: 40px 0;
        }
        section.invoice_staff {
            padding: 40px 0;
        }
        #staff_invoice_bg {
            background-image: none;
            min-height: auto;
            background-color: #1a3975;
        }
        .py-5 {
            padding: 20px 0 !important;
        }
        .my-5 {
            margin: 20px 0 !important;
        }
        .mt-5 {
            margin: 20px 0 0 !important;
        }
        .pt-5 {
            padding: 20px 0 0 !important;
        }
        .invoice_staff_text {
            margin-bottom: 25px;
        }
        .invoice_staff_text h3 {
            text-align: center;
        }
        .delivery_management_img {
            margin-top: 25px;
        }
        section.delivery_management {
            padding: 40px 0;
        }
        .product_management_content h2 {
            font-size: 22px;
        }
        .product_management_row {
            display: flex;
            flex-direction: column-reverse;
        }
        .product_management_img {
            margin-bottom: 25px;
        }
        .ecommercesolution_box{
            min-height: 450px;
        }
        .ecommercesolution_box::before{
            display: none;
        }
        .ecommercesolution_box h3{
            margin-top: 10px !important;
                font-size: 18px;
        }
    }
</style>
