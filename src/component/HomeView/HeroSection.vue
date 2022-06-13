<template>
  <div class="landing-banner" id="intro">
    <div class="landing-menu">
      <div class="container-fluid">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo order-md-1">
            <router-link :to="{ 'name' : home }"><img
                src="https://cdn.discordapp.com/attachments/985836867494764584/985845411422011392/logo.png" alt="" />
            </router-link>
          </div>
          <div class="order-md-3">
            <a href="https://codecanyon.net/user/softtech-it/portfolio" class="menu-btn buy-button font-rubik"
              target="_blank">Envato Profile</a>
          </div>
          <nav id="mega-menu-holder" class="navbar navbar-expand-sm order-md-2">
            <div class="m-auto nav-container">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav" id="theme-menu-list">
                  <li class="nav-item dropdown position-static" v-for="(nav, index) in navbar" :key="index">
                    <a :href="nav.href" :target="nav.target" class="nav-link" :class="
                      nav.children.length > 0 ? 'dropdown-toggle' : null
                    ">{{ nav.text }}</a>
                    <div class="dropdown-menu softtech-dropdown mt-30 mx-auto" v-if="nav.children.length > 0">
                      <ul class="mega-menu d-flex">
                        <li v-for="product in nav.children" :key="product">
                          <a :href="product.href" class="dropdown-item img-box">
                            <img :src="product.image" :alt="product.text" class="rounded" />
                            <span class="font-rubik">{{ product.text }}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /.container-fluid -->
          </nav>
          <!-- /#feature-menu -->
        </div>
      </div>
    </div>
    <!-- /.landing-menu -->

    <div class="container">
      <div class="text-wrapper">
        <div class="row">
          <div class="col-xl-11 m-auto">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <p class="font-rubik sub-text">
          {{ subtitle }}
        </p>
      </div>
      <!-- /.text-wrapper -->

      <div class="text-center mt-5">
        <a href="#demo" class="btn-one">See Demos</a>
        <small class="pt-3 d-block">For <strong>Software Customisation</strong> at lower price, you can
          <a :href="contact" target="_blank" style="text-decoration: underline">Contact</a>
          with us.</small>
      </div>

      <div class="block-bg-wrapper">
        <div class="row">
          <div class="col-md-4">
            <div class="single-block">
              <div class="num font-rubik" style="color: #5cd0a7">{{ total_application }}</div>
              <p class="font-rubik">{{ total_application_subtitle }}</p>
            </div>
            <!-- /.single-block -->
          </div>
          <div class="col-md-4">
            <div class="single-block border-style">
              <div class="num font-rubik" style="color: #ff7373">{{ total_addons }}</div>
              <p class="font-rubik">{{ total_addons_title }}</p>
            </div>
            <!-- /.single-block -->
          </div>
          <div class="col-md-4">
            <div class="single-block">
              <div class="num font-rubik" style="color: #8b50ff">{{ total_saas }}</div>
              <p class="font-rubik">
                {{ total_saas_title }}
              </p>
            </div>
            <!-- /.single-block -->
          </div>
        </div>
      </div>
      <!-- /.block-bg-wrapper -->
    </div>
    <img src="img/shape01.svg" alt="" class="shape shape-one" />
    <img src="img/shape02.svg" alt="" class="shape shape-two" />
    <img src="img/shape03.svg" alt="" class="shape shape-three" />
    <img src="img/shape04.svg" alt="" class="shape shape-four" />
  </div>
</template>

<script>
import HOME_JSON from "../../json/home.json";

export default {
  data() {
    return {
      title: HOME_JSON.header.title,
      subtitle: HOME_JSON.header.subtitle,
      navbar: HOME_JSON.navbar,
      products: HOME_JSON.header.products,
      contact: HOME_JSON.header.contact,
      total_application: HOME_JSON.info.total_application,
      total_application_subtitle: HOME_JSON.info.total_application_subtitle,
      total_addons: HOME_JSON.info.total_addons,
      total_addons_title: HOME_JSON.info.total_addons_title,
      total_saas: HOME_JSON.info.total_saas,
      total_saas_title: HOME_JSON.info.total_saas_title,
    };
  },
};
</script>
