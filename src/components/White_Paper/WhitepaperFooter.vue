<template>
  <div>
    <footer class="footer">
      <div class="footer-inner-box">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="copyright-text">
                <p>© 2021 TEQO SOLUTIONS. All Rights Reserved</p>
              </div>
              <!--copyright-text-->
            </div>
            <!--col-xl-6 col=lg-6 col-md-6-->

            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="footer-images">
                <ul class="footer-list">
                  <li>
                    <router-link to=""
                      ><img
                        loading="lazy"
                        src="../../assets/images/white_paper/footer-image-1.png"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </li>
                  <li>
                    <router-link to=""
                      ><img
                        loading="lazy"
                        src="../../assets/images/white_paper/footer-image-2.png"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </li>
                  <li>
                    <router-link to=""
                      ><img
                        loading="lazy"
                        src="../../assets/images/white_paper/footer-image-3.png"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </li>
                  <li>
                    <router-link to=""
                      ><img
                        loading="lazy"
                        src="../../assets/images/white_paper/footer-image-4.png"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </li>
                  <li>
                    <router-link to=""
                      ><img
                        loading="lazy"
                        src="../../assets/images/white_paper/footer-image-5.png"
                        class="img-fluid"
                        alt=""
                    /></router-link>
                  </li>
                </ul>
              </div>
              <!--footer-images-->
            </div>
            <!--col-xl-6 col-lg-6 col-md-6-->
          </div>
          <!--row-->
        </div>
        <!--container-->
      </div>
      <!--footer-inner-box-->
    </footer>
    <!--footer-->
  </div>
</template>

<script>
    export default {
        name: "WhitepaperFooter",
    };
</script>

<style scoped>
    .footer-inner-box {
        background: #202942;
        padding: 30px 0;
    }
    
    .copyright-text p {
        color: var(--teqo-white);
        font-size: 16px;
        font-family: Poppins, sans-serif;
        margin: 0;
    }
    
    ul.footer-list {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }
    
    ul.footer-list li {
        display: inline-block;
        margin-left: 8px;
    }
    
    ul.footer-list li:nth-child(1) {
        margin-left: 0;
    }
    
    ul.footer-list li a img {
        max-width: 40px;
    }

    @media all and (min-width: 767px) and (max-width: 991px) {
      .copyright-text p {
        font-size: 14px;
      }
    }

    @media all and (min-width: 320px) and (max-width: 767px) {
      .copyright-text p {
        font-size: 13px; 
        text-align: center;
        padding-bottom: 10px;
      }
    }
</style>