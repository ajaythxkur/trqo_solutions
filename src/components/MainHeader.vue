<template>
<div>
    <header class="head">

        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <router-link class="navbar-brand" to="/"><img loading="lazy" src="../assets/images/Logo.png" alt="" class="img-fluid" id="logo_light" />

                    <img loading="lazy" src="../assets/images/Logo_Dark.png" alt="" class="img-fluid" id="logo_dark" /></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="fill: var(--teqo-black)" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
                    </span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item data-main-toggle">
                            <router-link :style="'color:' + navColor" class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item data-main-toggle">
                            <router-link :style="styles()" class="nav-link" to="">About Us</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <router-link :style="styles()" class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service
                            </router-link>

                            <ul class="dropdown-menu toggle-class-data" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link class="dropdown-item" to="/Ecommerce">Ecommerce</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/CRMSoftware">CRM Software</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/MobileApp">Mobile Apps</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/DynamicWebsite">Dynamic Websites</router-link>
                                </li>

                                <li>
                                    <router-link class="dropdown-item" to="/WhitePaper">White Paper</router-link>
                                </li>

                                <li>
                                    <router-link class="dropdown-item" to="/Exchange">Exchange</router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item data-main-toggle">
                            <router-link :style="styles()" class="nav-link" to="/Contact">Contact Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :style="styles()" class="nav-link" to="/Contact">
                                <button type="button" class="btn btn-primary get-btn">
                                    Get Started
                                </button>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
</template>

<script>
export default {
    name: "MainHeader",
    data() {
        return {
            navColor: "var(--teqo-black)",
        };
    },

    created() {
        window.addEventListener("scroll", this.handleSCroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleSCroll);
    },

    methods: {
        handleSCroll() {
            console.log(window.scrollY);
            let header = document.querySelector(".head");
            if (window.scrollY > 100 && !header.className.includes("head-sticky")) {
                header.classList.add("head-sticky");
            } else if (window.scrollY < 100) {
                header.classList.remove("head-sticky");
            }
        },

        closeToggle() {
            const menuToggle = document.getElementById("navbarSupportedContent");
            menuToggle.classList.remove("show");
        },

        styles() {
            return {
                color: this.navColor
            };
        },
    },
    watch: {
        "$store.state.navColor": function () {
            this.navColor = this.$store.state.navColor;
        },
        $route(to) {
            if (to.name == "Home") {
                this.$store.commit("navColorChange", "var(--teqo-black)");
            }
            if (to.name == "CRMSoftware") {
                this.$store.commit("navColorChange", "var(--off-white)");
            }

            if (to.name == "Ecommerce") {
                this.$store.commit("navColorChange", "var(--teqo-black)");
            }

            if (to.name == "MobileApp") {
                this.$store.commit("navColorChange", "var(--teqo-black)");
            }

            if (to.name == "DynamicWebsite") {
                this.$store.commit("navColorChange", "var(--teqo-black)");
            }

            if (to.name == "Contact") {
                this.$store.commit("navColorChange", "var(--teqo-white)");
            }
        },
    },
};
</script>

<style scoped>
header.head {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
}

header.head.head-sticky {
    position: fixed;
    top: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: rgba(255, 255, 255, 0.97);
    animation-name: fadeInDown;
    animation-duration: 900ms;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
}

.navbar-toggler {
    border: 0 solid;
}
.navbar-toggler-icon {

    background-image: none;
}

img#logo_dark {
    display: none;
}

header.head.head-sticky img#logo_dark {
    display: block;
}

header.head.head-sticky img#logo_light {
    display: none;
}

header.head.head-sticky ul.navbar-nav li.nav-item a.nav-link {
    color: var(--teqo-black) !important;
}

header.head.head-sticky button.get-btn {
    background-color: var(--teqo-black);
    border-color: var(--teqo-black);
    color: var(--teqo-white);
}

header.head.head-sticky button.get-btn:hover {
    border-color: var(--teqo-blue);
}

.navbar-nav {
    align-items: center;
}

a.navbar-brand img {
    max-width: 120px;
}

ul.navbar-nav li.nav-item {
    padding: 0px 10px;
}

ul.navbar-nav li.nav-item a.nav-link {
    color: var(--teqo-white);
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    transition: all 0.5s ease;
    position: relative;
    text-transform: capitalize;
}

ul.navbar-nav li.nav-item:nth-child(5) {
    padding-left: 25px;
}

button.get-btn {
    background-color: var(--teqo-white);
    color: var(--teqo-black);
    border-color: var(--teqo-blue);
    border: 1px solid;
    transition: all 0.5s ease;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
    padding: 10px 25px;
}

button.get-btn:hover {
    background-color: var(--teqo-blue);
    transition: all 0.5s ease;
    color: var(--teqo-white);
}

ul.navbar-nav li.nav-item:hover ul.dropdown-menu {
    display: block;
    transition: all 0.5s ease;
}

ul.dropdown-menu {
    background-color: var(--teqo-white);
    border: none;
    box-shadow: 0rem 0rem 1.25rem rgb(30 34 40 / 4%);
    transition: all 0.5s ease;
}

ul.dropdown-menu a.dropdown-item {
    color: var(--teqo-black);
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    transition: all 0.5s ease;
    text-transform: capitalize;
}

ul.dropdown-menu a.dropdown-item:hover {
    background-color: transparent;
    color: var(--teqo-black);
    transition: all 0.5s ease;
}

a.dropdown-item:focus {
    background-color: transparent;
    color: var(--teqo-blue);
    transition: all 0.5s ease;
}

@media all and (min-width: 768px) and (max-width: 991px) {
    ul.navbar-nav li {
        width: 100%;
    }

    header.head {
        background-color: var(--teqo-white);
    }

    .navbar-toggler-icon {
        height: auto;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }

    .navbar-nav {
        align-items: start;
    }

    ul.navbar-nav li.nav-item a.nav-link {
        color: var(--teqo-black);
    }

    ul.navbar-nav li.nav-item:nth-child(5) {
        padding-left: 0;
        margin: 0 auto;
        width: auto;
    }

    button.get-btn {
        width: 250px;
        margin: 0 auto;
    }

    .navbar-collapse {
        padding-top: 20px;
        background: var(--teqo-white);
        padding-bottom: 20px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    }

    ul.dropdown-menu.toggle-data-ul {
        display: none !important;
    }

    ul.dropdown-menu.toggle-data-ul.show.show_custom {
        display: block !important;
    }

    ul.dropdown-menu {
        max-width: 250px;
    }

    ul.dropdown-menu.toggle-data-ul {
        display: none !important;
    }

    ul.dropdown-menu.toggle-data-ul.show.show_custom {
        display: block !important;
    }

    ul.dropdown-menu {
        display: none !important;
    }

    ul.dropdown-menu.show {
        display: block !important;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    header.head {
        background-color: var(--teqo-white);
    }

    .navbar-toggler-icon {
        height: auto;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }

    .navbar-nav {
        align-items: start;
    }

    ul.navbar-nav li.nav-item a.nav-link {
        color: var(--teqo-black) !important;
    }

    ul.navbar-nav li.nav-item:nth-child(5) {
        padding-left: 0;
        margin: 0 auto;
    }

    button.get-btn {
        width: 250px;
        margin: 0 auto;
    }

    .navbar-collapse {
        padding-top: 20px;
        background: var(--teqo-white);
        padding-bottom: 20px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    }

    ul.navbar-nav li {
        width: 100%;
    }

    ul.navbar-nav li:nth-child(5) {
        width: auto;
    }

    ul.dropdown-menu {
        max-width: 250px;
    }

    ul.dropdown-menu {
        display: none !important;
    }

    ul.dropdown-menu.show {
        display: block !important;
    }
}
</style>
