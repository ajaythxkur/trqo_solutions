<template>
<div>
    <header class="head" id="myheader">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div class="container">
                <a href="/" class="navbar-brand" @click="closeToggle">
                    <img src="../../assets/images/Logo.png" alt="logo" class="img-fluid">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 gap-xxl-4 gap-xl-3 gap-2">
                        <li class="nav-item" @click="closeToggle">
                            <a class="nav-link "  href="#home">Home</a>
                        </li>
                        <li class="nav-item" @click="closeToggle">
                            <a class="nav-link" href="#features">Features</a>
                        </li>

                        <li class="nav-item" @click="closeToggle">
                            <a class="nav-link" href="#security">Security</a>
                        </li>
                        <li class="nav-item" @click="closeToggle">
                            <a class="nav-link" href="#comparison">Comparison</a>
                        </li>
                        <li class="nav-item" @click="closeToggle">
                            <a class="nav-link" href="#technologies">Technologies</a>
                        </li>
                        <li class="nav-item" @click="closeToggle">
                            <a class="nav-link" href="#faq">Faq</a>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <span class="custom_button">
                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="text-nowrap model-show">
                                Get Started
                            </a>
                            <span class="dot1">
                                <span class="dot_circle"></span>
                            </span>
                            <span class="dot1 dot2">
                                <span class="dot_circle"></span>
                            </span>
                        </span>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</div>
</template>

<script>
export default {
    name: 'ExchangeNav',

    mounted() {
        var $this = this;
        window.onscroll = function () {
            $this.myFunction();
        };
    },
    methods: {
        myFunction() {
            var header = document.getElementById("myheader");

            var sticky = header.offsetTop;

            if (window.pageYOffset > sticky) {
                header.classList.add("fixed_nav");
            } else {
                header.classList.remove("fixed_nav");
            }
        },

        closeToggle() {
            const menuToggle = document.getElementById("navbarSupportedContent");
            menuToggle.classList.remove("show");
        }
    },
}
</script>

<style scoped>
ul.navbar-nav li.nav-item a.nav-link {
    color: var(--teqo-white);
    font-size: 16px;
     font-family: 'Roboto', sans-serif;
}
</style>
