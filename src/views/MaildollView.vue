<template>
  <div class="main-page-wrapper" :class="theme">
    <!-- 
			=============================================
				Theme Main Menu
			============================================== 
			-->
    <div class="theme-main-menu sticky-menu theme-menu-five">
      <div class="d-flex align-items-center justify-content-center">
        <div class="logo" style="width: 210px">
          <router-link
            :to="{ name: 'software', params: { software: software_name } }"
          >
            <img class="logo" :src="header.logo" :alt="header.title" />
          </router-link>
        </div>

        <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
          <div class="nav-container">
            <button class="navbar-toggler">
              <span></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarSupportedContent">
              <div class="d-lg-flex justify-content-between align-items-center">
                <ul
                  class="navbar-nav main-side-nav font-gordita"
                  id="one-page-nav"
                >
                  <li class="nav-item" v-for="nav in navbar" :key="nav">
                    <a :href="nav.href" class="nav-link">{{ nav.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="right-widget">
          <ul class="d-flex align-items-center">
            <li>
              <a
                :href="header.envato_link"
                target="_blank"
                class="btn btn-primary btn-lg mr-3 btn sft-btn-primary"
              >
                Purchase of {{ header.price }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.theme-main-menu -->

    <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			-->
    <div
      class="hero-banner-three sft-hero-section"
      :style="{ 'background-image': 'url(' + hero_bg + ')' }"
    >
      <div class="container">
        <div class="px-4 py-5 my-5 text-center">
          <div class="col-lg-10 mx-auto">
            <h2 class="display-5 font-weight-bold mb-4">
              <span v-html="hero_title"></span>
            </h2>
            <p class="lead mb-4 px-5">
              <span v-html="hero_subtitle"></span>
            </p>
            <div class="d-flex justify-content-center mb-3">
              <button
                type="button"
                class="btn btn-primary btn-lg mr-3 btn sft-btn-primary"
              >
                Explore Features
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4 sft-btn-secondary"
              >
                View Demos
              </button>
            </div>
          </div>
        </div>

        <img :src="hero_img" alt="" class="illustration" />
      </div>
    </div>

    <!-- 
			=============================================
				Theme Feature Section
			============================================== 
			-->
    <div class="sft-fea-section">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-lg-8 col-xxl-4 text-center mb-5">
            <h2 v-html="fea_subtitle"></h2>
          </div>

          <!-- feature wrap -->
          <div class="col-lg-12 px-70">
            <div class="row">
              <div
                class="col-lg-3 col-12 col-md-6 mb-4"
                v-for="list in fea_list"
                :key="list"
              >
                <div class="sft-single-fea">
                  <video
                    :src="list.url"
                    playsinline=""
                    autoplay=""
                    loop=""
                    muted=""
                  ></video>

                  <span
                    class="sft-color-primary text-capitalize sm-title mt-3"
                    >{{ list.title }}</span
                  >
                  <a href="#" class="mt-1 title-link"> {{ list.subtitle }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 
			=============================================
			docs section
			============================================== 
			-->
    <div class="container sft-docs-section mb-120 position-relative">
      <div class="row align-items-center">
        <img class="docs-pos-img" src="../img/doc-img.png" alt="img" />

        <div class="col-lg-6 offset-lg-3">
          <h4 class="mb-3" v-html="docs_banner.title"></h4>
          <p v-html="docs_banner.subtitle"></p>
        </div>
        <div class="col-lg-2 mt-4 mt-lg-0">
          <a
            :href="docs_banner.docs_link"
            class="btn btn-primary btn-lg mr-3 btn sft-btn-primary"
            >Documentation</a
          >
        </div>
      </div>
    </div>

    <!-- 
			=============================================
				Theme Feature Section
			============================================== 
			-->
    <div
      class="sft-fea-section convertion-section"
      :style="{ 'background-image': 'url(' + res_device.section_bg + ')' }"
    >
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-lg-8 col-xxl-4 text-center mb-5">
            <h2>{{ res_device.section_title }}</h2>
          </div>

          <!-- feature wrap -->
          <div class="col-lg-12 px-70">
            <div class="row">
              <div
                class="col-12 col-md-6 mb-4"
                v-for="list in res_device_list"
                :key="list"
              >
                <div class="sft-single-fea">
                  <video
                    :src="list.url"
                    playsinline=""
                    autoplay=""
                    loop=""
                    muted=""
                  ></video>
                  <span
                    class="sft-color-primary text-capitalize sm-title mt-3"
                    >{{ list.title }}</span
                  >
                  <a href="#" class="mt-1 title-link">{{ list.subtitle }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 
			=============================================
				Theme Feature Section
			============================================== 
			-->
    <div class="container">
      <div class="block-style-twelve">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <h2 v-html="feature_section_title"></h2>
          </div>
        </div>
        <div
          class="row mt-5"
          v-for="(list, index) in feature_list"
          :key="index"
          :class="index % 2 != 0 ? 'flex-row-reverse' : 'flex-row'"
        >
          <div
            class="col-lg-6 col-md-8"
            data-aoss="fade-right"
            data-aos-durationn="1200"
          >
            <div class="illustration-holder">
              <img :src="list.url" alt="" />
            </div>
          </div>
          <div class="col-lg-5" data-aoss="fade-left" data-aos-durationn="1200">
            <div class="text-wrapper">
              <h6>{{ list.title }}</h6>
              <h2 class="font-rubik title">
                {{ list.subtitle }}
              </h2>
              <p>
                {{ list.para }}
              </p>
            </div>
            <!-- /.text-wrapper -->
          </div>
        </div>
      </div>
    </div>
    <!-- 
        =============================================
        video  Section
        ============================================== 
         -->
    <div class="container mt-120 mb-120">
      <div class="tab-content" id="myTabContent">
        <div
          v-for="(tab, index) in tab_video"
          :key="index"
          class="tab-pane fade"
          :class="index == 0 ? 'show active' : ''"
          :id="'hom-' + index"
          role="tabpanel"
          :aria-labelledby="'home-' + index"
        >
          <iframe
            width="100"
            height="450"
            class="w-100"
            :src="tab.url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <ul
        class="nav nav-item d-flex justify-content-center align-items-center mt-5"
        id="myTab"
        role="tablist"
      >
        <li
          v-for="(tab, index) in tab_video"
          :key="index"
          class="nav-item"
          role="presentation"
        >
          <a
            class="nav-link btn btn-primary btn-lg mr-3 btn video-btn w-initial"
            :class="index == 0 ? 'active' : ''"
            :id="'home-' + index"
            data-toggle="tab"
            :href="'#hom-' + index"
            role="tab"
            :aria-controls="'hom-' + index"
            aria-selected="true"
            >{{ tab.title }}</a
          >
        </li>
      </ul>
    </div>
    <!--
			=====================================================
				Client Feedback Slider Two
			=====================================================
			-->
    <div
      class="client-feedback-slider-two mt-180 md-mt-100"
      :style="{ 'background-image': 'url(' + testimonial.section_bg + ')' }"
    >
      <div class="container">
        <div class="title-style-four text-center mb-100 md-mb-60">
          <div class="row">
            <div class="col-lg-7 col-md-9 m-auto">
              <h6 v-html="testimonial.section_title"></h6>
              <h2 v-html="testimonial.section_subtitle"></h2>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="slider-content">
          <div class="clientSliderTwo">
            <carousel :settings="settings">
              <slide v-for="slide in testimonial.lists" :key="slide">
                <div class="item">
                  <div class="bg-wrapper">
                    <img
                      src="/deski/images/logo/logo-8.png"
                      alt=""
                      class="logo mx-auto"
                    />
                    <p>
                      {{ slide.description }}
                    </p>
                    <div class="name font-rubik">{{ slide.name }}</div>
                    <div class="desig">{{ slide.desig }}</div>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
        </div>
      </div>
      <!-- /.slider-content -->
    </div>

    <!--
			=====================================================
				Pricing Section Eight
			=====================================================
			-->
    <div
      class="pricing-section-eight lg-container mt-150 md-mt-100"
      id="pricing"
    >
      <div class="container">
        <div class="border-top pt-150 md-pt-100">
          <div class="title-style-twelve text-center pb-120 md-pb-60">
            <h2 v-html="pricing.section_title"></h2>
            <p class="mt-40 md-mt-20" v-html="pricing.section_subtitle"></p>
          </div>
        </div>

        <div class="row no-gutters position-relative">
          <div class="col-lg-3 pr-list-wrapper d-none d-lg-block">
            <ul>
              <li v-for="price in pricing.fea_names" :key="price">
                {{ price }}
              </li>
            </ul>
          </div>
          <div class="col-lg-9 pr-table-wrapper ml-auto">
            <div class="row no-gutters">
              <div
                class="col-md-4 pr-column"
                v-for="plan in pricing.plans"
                :key="plan"
              >
                <div class="pr-header">
                  <div class="plan">{{ plan.plan_name }}</div>
                  <div class="price">{{ plan.plan_price }}</div>
                  <div class="info">{{ plan.subtitle }}</div>
                </div>
                <!-- /.pr-header -->
                <div class="pr-body">
                  <ul>
                    <li v-for="fea in plan.fea_availability" :key="fea">
                      <img :src="fea" alt="" class="m-auto" />
                    </li>
                  </ul>
                </div>
                <div class="pr-footer">
                  <a :href="plan.foo_btn_link" class="trial-button">{{
                    plan.foo_btn_txt
                  }}</a>
                  <div class="trial-text">
                    {{ plan.foo_subtitle }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 
			=============================================
				Theme Feature Section
			============================================== 
			-->
    <div class="sft-fea-section">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-lg-8 col-xxl-4 text-center mb-5">
            <h2>{{ instructional_vdo.section_title }}</h2>
          </div>

          <!-- feature wrap -->
          <div class="col-lg-12 px-70">
            <div class="row">
              <div
                class="col-lg-3 col-12 col-md-6 mb-4"
                v-for="list in instructional_vdo.lists"
                :key="list"
              >
                <div class="sft-single-fea">
                  <video
                    :src="list.url"
                    playsinline=""
                    autoplay=""
                    loop=""
                    muted=""
                  ></video>

                  <span
                    class="sft-color-primary text-capitalize sm-title mt-3"
                    >{{ list.title }}</span
                  >
                  <a href="#" class="mt-1 title-link"> {{ list.subtitle }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
			=====================================================
				Faq Classic
			=====================================================
			-->
    <div
      class="faq-classic with-bg"
      :style="{ 'background-image': 'url(' + faq.section_bg + ')' }"
    >
      <div class="container">
        <div class="title-style-four text-center mb-100 md-mb-70">
          <div class="row">
            <div class="col-lg-7 m-auto">
              <h6>{{ faq.section_title }}</h6>
              <h2 v-html="faq.section_subtitle"></h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="accordion" id="faqAccordionOne">
              <div
                class="card"
                v-for="(card, index) in faq.accordion_list_one"
                :key="index"
              >
                <div class="card-header" :id="'heading' + index">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapseOne' + index"
                      aria-expanded="true"
                      :aria-controls="'collapseOne' + index"
                    >
                      {{ card.title }}
                    </button>
                  </h2>
                </div>

                <div
                  :id="'collapseOne' + index"
                  class="collapse"
                  :class="index == 0 ? 'show' : ''"
                  :aria-labelledby="'heading' + index"
                  data-parent="#faqAccordionOne"
                >
                  <div class="card-body" v-html="card.description"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="accordion" id="faqAccordionTwo">
              <div
                class="card"
                v-for="(card, index) in faq.accordion_list_two"
                :key="index"
              >
                <div class="card-header" :id="'heading' + index">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapseTwo' + index"
                      aria-expanded="true"
                      :aria-controls="'collapseTwo' + index"
                    >
                      {{ card.title }}
                    </button>
                  </h2>
                </div>

                <div
                  :id="'collapseTwo' + index"
                  class="collapse"
                  :class="index == 0 ? 'show' : ''"
                  :aria-labelledby="'heading' + index"
                  data-parent="#faqAccordionTwo"
                >
                  <div class="card-body" v-html="card.description"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
			=====================================================
				Fancy Short Banner Four
			=====================================================
			-->
    <div class="fancy-short-banner-four">
      <div class="container">
        <div
          class="bg-wrapper bg-mobile-none rounded-lg"
          :style="{
            'background-image': 'url(' + short_banner.section_bg + ')',
            'background-size': '100% 100%',
            'background-repeat': 'no-repeat',
          }"
        >
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6">
              <div class="title text-center">
                <h3 class="text-white">
                  {{ short_banner.section_title }}
                </h3>
                <a
                  :href="short_banner.btn_link"
                  class="white-purple-btn mt-4"
                  >{{ short_banner.btn_txt }}</a
                >
              </div>
              <!-- /.title-style-one -->
            </div>
          </div>
        </div>
        <!-- /.bg-wrapper -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.fancy-short-banner-four -->

    <!--
			=====================================================
				Footer Style Three
			=====================================================
			-->
    <footer class="theme-footer-three pt-100">
      <div class="top-footer">
        <div class="container">
          <div class="row justify-content-between">
            <div
              class="col-lg-4 col-12 footer-about-widget"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img class="logo" :src="header.logo" :alt="header.title" />
            </div>
            <!-- /.about-widget -->
            <div
              class="col-lg-2 col-md-4 footer-list"
              data-aoss="fade-up"
              data-aos-durations="1200"
              data-aos-delays="50"
            >
              <h5 class="footer-title">Services</h5>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Wordpress</a></li>
                <li><a href="#">Online Marketing</a></li>
                <li><a href="#">Content</a></li>
              </ul>
            </div>
            <!-- /.footer-list -->
            <div
              class="col-lg-2 col-md-4 footer-list"
              data-aoss="fade-up"
              data-aos-durations="1200"
              data-aos-delays="100"
            >
              <h5 class="footer-title">About us</h5>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Work Portfolio</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Plan & Pricing</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <!-- /.footer-list -->
            <div
              class="col-lg-3 col-md-4 address-list"
              data-aoss="fade-up"
              data-aos-durations="1200"
              data-aos-delays="150"
            >
              <h5 class="footer-title">Contact Info</h5>
              <p class="font-rubik">
                432 Mirpur National Stadium Market <br />Dhaka, Bangladesh
              </p>
              <ul class="info">
                <li><a href="#">deskisupportinc@gmail.com</a></li>
                <li><a href="#" class="mobile-num">+761 412 3224</a></li>
              </ul>
              <ul class="social-icon d-flex pt-15">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
            <!-- /.footer-list -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.top-footer -->

      <div class="container">
        <div class="bottom-footer-content">
          <div class="row">
            <div class="col-lg-8 ml-auto">
              <div class="d-md-flex align-items-center justify-content-between">
                <ul
                  class="order-md-last"
                  data-aoss="fade-left"
                  data-aos-durations="1200"
                  data-aos-delays="50"
                  data-aos-anchors=".theme-footer-three"
                >
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
                <p
                  class="order-md-first"
                  data-aoss="fade-right"
                  data-aos-durations="1200"
                  data-aos-delays="50"
                  data-aos-anchors=".theme-footer-three"
                >
                  Copyright @2022 deski inc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- /.bottom-footer -->
      </div>
    </footer>
    <!-- /.theme-footer-three -->
  </div>
</template>

<style>
@import "./single-style.css";
@import "./responsive.css";
</style>
<script>
// data
import DEMO_JSON from "../json/demo.json";
// vue carousel
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  mounted() {
    // console.log(DEMO_JSON[this.$route.params.software][0].features);
    // const theme = this.$route.params.software;
    console.log("params", instructional_vdo.lists);
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      software_name: this.$route.params.software,
      theme: DEMO_JSON[this.$route.params.software][0].header.theme,
      // hero section
      hero_bg: DEMO_JSON[this.$route.params.software][0].header.hero_bg,
      hero_img: DEMO_JSON[this.$route.params.software][0].header.hero_img,
      hero_title: DEMO_JSON[this.$route.params.software][0].header.title,
      hero_subtitle: DEMO_JSON[this.$route.params.software][0].header.subtitle,
      // feature section
      fea_subtitle:
        DEMO_JSON[this.$route.params.software][0].features.section_subtitle,
      fea_list: DEMO_JSON[this.$route.params.software][0].features.lists,
      // banneer docs
      docs_banner: DEMO_JSON[this.$route.params.software][0].banner_docs,
      // responsive device
      res_device: DEMO_JSON[this.$route.params.software][0].responsive_device,
      res_device_list:
        DEMO_JSON[this.$route.params.software][0].responsive_device.lists,
      // feature two
      feature_section_title:
        DEMO_JSON[this.$route.params.software][0].features_two.section_title,
      feature_list:
        DEMO_JSON[this.$route.params.software][0].features_two.lists,
      // tab video
      tab_video: DEMO_JSON[this.$route.params.software][0].tab_video,
      // feedback /testimonials
      testimonial: DEMO_JSON[this.$route.params.software][0].testimonials,
      // feedback /testimonials
      pricing: DEMO_JSON[this.$route.params.software][0].pricing,
      pricing_plans: DEMO_JSON[this.$route.params.software][0].plans,
      // instructional video
      instructional_vdo:
        DEMO_JSON[this.$route.params.software][0].instructional_vdo,
      // faq
      faq: DEMO_JSON[this.$route.params.software][0].faq,
      // short_banner
      short_banner: DEMO_JSON[this.$route.params.software][0].short_banner,

      // header menu
      header: [],
      navbar: [],
      screenshots: [],
      features: [],
      pricing: [],
      testimonials: [],
      // carousel settings
      settings: {
        itemsToShow: 3,
        snapAlign: "center",
        autoplay: "2000",
        transition: "300",
        wrapAround: true,
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        576: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    getHeader() {
      this.header = DEMO_JSON[this.$route.params.software][0].header;
    },
    getNavbar() {
      this.navbar = DEMO_JSON.navbar;
    },
    getScreenshots() {
      this.screenshots = DEMO_JSON[this.$route.params.software][0].screenshots;
    },
    getFeatures() {
      this.features = DEMO_JSON[this.$route.params.software][0].features;
    },
    getPricing() {
      this.pricing = DEMO_JSON[this.$route.params.software][0].pricing;
    },
    getTestimonials() {
      this.testimonials =
        DEMO_JSON[this.$route.params.software][0].testimonials;
    },
  },
  created() {
    this.getHeader();
    this.getNavbar();
    this.getScreenshots();
    this.getFeatures();
    this.getPricing();
    this.getTestimonials();
  },
};
</script>
