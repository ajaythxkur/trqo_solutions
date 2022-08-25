<template>
    <div id="header" class="header-section">
        <!-- top-header-nav -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid container-lg">
                <a class="navbar-brand" href="/">
                    <img src="@/assets/images/header/Logo.png" alt="main-logo" class="img-fluid" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Toggle -->
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="main-menu">
                        <ul class="navbar-nav justify-content-end">
                            <li id="mobile_close" class="d-flex justify-content-end d-lg-none py-2 border-bottom px-1">
                                <svg data-bs-dismiss="offcanvas" aria-label="Close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: var(--tq-blue); cursor: pointer;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#index">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Us</a>
                            </li>
                            <li class="nav-item dropdown-items position-relative">
                                <a class="nav-link dropdown-toggle" href="#OurServices" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Service</span>
                                </a>
                                <div class="dropdown-menu" id="dropdown-services" aria-labelledby="navbarDropdown">
                                    <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#accounting">Ecommerce</a>
                                        <a class="dropdown-item" href="#taxation">CRM Software</a>
                                        <a class="dropdown-item" href="#advisory">Mobile Apps</a>
                                        <a class="dropdown-item" href="#ITServices">Dynamic Websites</a>
                                    </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#business-support">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <!-- main-menu -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style>
.fixed-header-left, .fixed-header-right{
    padding: 10px 0px;
}
.fixed-header-left ul{
    display: flex;
    padding: 0px;
    margin: 0px;
    gap: 20px;
}
.fixed-header-left ul li{
    list-style: none;
    font-size: 15px;
    color: var(--tq-white);
}
.fixed-header-right ul {
    display: flex;
    padding: 0px;
    margin: 0px;
    gap: 20px;
    justify-content: end;
}
.fixed-header-right ul li{
    list-style: none;
}
 .top-header-nav::before{
    position: absolute;
    content: "";
    background: var(--tq-blue);
    width: 69%;
    height: 100%;
    left: 0;
    clip-path: polygon(0 0,100% 0,98% 100%,0 100%);
} 
/* #down header css  */
div#navbarNav {
    justify-content: end;
}
a.navbar-brand img {
    width: 120px;
}
.main-menu ul li a {
    padding: 10px 14px !important;
    color: var(--tq-blue) !important;
    font-size: 15px;
    font-weight: 600;
}
.main-menu ul li a:hover, .main-menu ul li a:focus-visible{
    color: var(--tq-gray) !important;
}
.dropdown-items .dropdown-menu {
    padding: 0px;
    border-radius: unset;
    width: 270px;
}
.dropdown-items .dropdown-menu .dropdown-divider{
    margin: 0px;
    background-color: var(--tq-orange);
    padding: 1px 0px;
}
.dropdown-items .dropdown-menu .dropdown-item {
    padding: 12px !important;
    background-color: var(--tq-blue);
    color:var(--tq-white) !important;
    font-weight: 400;
    font-size: 15px;
}
.dropdown-items a:hover > .dropdown-items .dropdown-menu {
    display: block !important;
}
</style>