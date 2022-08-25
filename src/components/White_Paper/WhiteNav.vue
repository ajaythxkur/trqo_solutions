<template>
  <div>
    <header class="header" id="myheader">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <router-link @click="closeToggle" class="navbar-brand" to="/"
            ><img
              src="../../assets/images/Logo_Dark.png"
              alt=""
              class="img-fluid"
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-md-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
              <li class="nav-item" @click="closeToggle">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item" @click="closeToggle">
                <a class="nav-link" href="#choose">Process</a>
              </li>

              <li class="nav-item" @click="closeToggle">
                <a class="nav-link" href="#seo">Features</a>
              </li>

              <li class="nav-item" @click="closeToggle">
                <a class="nav-link" href="#testimonial">Testimonials</a>
              </li>

              <li class="nav-item" @click="closeToggle">
                <a class="nav-link" href="#faq">FAQ</a>
              </li>
            </ul>
            <div class="nav-btn-box d-flex">
              <button class="btn btn-success d-none d-xl-block d-lg-block">Call Now</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "WhiteNav",
  mounted() {
    var $this = this;
    window.onscroll = function() {
      $this.myFunction();
    };
  },
  methods: {
    myFunction() {
      var header = document.getElementById("myheader");

      var sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    },

     closeToggle() {
      const menuToggle = document.getElementById("navbarSupportedContent");
      menuToggle.classList.remove("show");
    }
  },
};
</script>

<style scoped>
header.header {
  position: fixed;
  width: 100%;
  z-index: 4;
}

.sticky {
  position: fixed;
  top: 0;
  box-shadow: 0 7px 29px 0 rgb(100 100 111 / 20%);
  background: hsla(0, 0%, 100%, 0.97);
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 0.9s;
  animation-duration: 0.9s;
  -webkit-animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-fill-mode: none;
  animation-fill-mode: none;
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

header.header nav.navbar {
  padding: 0;
}

a.navbar-brand img {
  max-width: 120px;
}

.navbar-nav {
  margin-left: auto;
}

ul.navbar-nav li.nav-item {
  margin-left: 15px;
}

ul.navbar-nav li.nav-item:nth-child(1) {
  margin-left: 0;
}

ul.navbar-nav li.nav-item a.nav-link {
  color: #3c4858;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.5s ease;
  position: relative;
  text-transform: capitalize;
  font-family: "Poppins";
}

.nav-btn-box button.btn.btn-success {
  padding: 8px 20px;
  outline: none;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 0.5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: 600;
  border-radius: 6px;
  background-color: #2f55d4;
  border-color: #2f55d4;
  box-shadow: 0 3px 5px 0 rgb(47 85 212 / 30%);
}


@media all and (min-width: 768px) and (max-width: 991px) {
  header.header {
    background-color: var(--teqo-white);
    box-shadow: 0 7px 29px 0 rgb(100 100 111 / 20%);
  }

  ul.navbar-nav li.nav-item {
    margin-left: 0;
  }
  .nav-btn-box button.btn.btn-success {
    width: 17%;
    margin-bottom: 10px;
    border-radius: 0;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  header.header {
    background-color: var(--teqo-white);
    box-shadow: 0 7px 29px 0 rgb(100 100 111 / 20%);
  }

  ul.navbar-nav li.nav-item {
    margin-left: 0;
  }
  .nav-btn-box button.btn.btn-success {
    width: 100%;
    margin-bottom: 10px;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }
}
</style>
