<template>
  <div class="main-page-wrapper maildol-wrapper font-gordita">
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
            <img :src="header.logo" :alt="header.title" />
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
    <div class="sft-hero-section">
      <div class="container">
        <div class="px-4 py-5 my-5 text-center">
          <div class="col-lg-10 mx-auto">
            <h1 class="display-5 font-weight-bold mb-4">
              The
              <span class="sft-color-primary">Next Generation</span>
              <br />Email Marketing Dashboard
            </h1>
            <p class="lead mb-4 px-5">
              A Complete eCommerce Solution which is built by experts. Unlock
              the power of your <br />
              online store today with Maildoll!
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
            <h2>You can try premium features before purchasing</h2>
          </div>

          <!-- feature wrap -->
          <div class="col-lg-12 px-70">
            <div class="row">
              <div class="col-lg-3 col-12 col-md-6 mb-4">
                <div class="sft-single-fea">
                  <img
                    class="w-100"
                    src="../img/maildoll-new-landing.png"
                    alt=""
                  />
                  <span class="sft-color-primary text-capitalize sm-title mt-3"
                    >step 01</span
                  >
                  <a href="#" class="mt-1 title-link"
                    >Go to and write your store’s name</a
                  >
                </div>
              </div>
              <div class="col-lg-3 col-12 col-md-6 mb-4">
                <div class="sft-single-fea">
                  <img
                    class="w-100"
                    src="../img/maildoll-new-landing.png"
                    alt=""
                  />
                  <span class="sft-color-primary text-capitalize sm-title mt-3"
                    >step 01</span
                  >
                  <a href="#" class="mt-1 title-link"
                    >Go to and write your store’s name</a
                  >
                </div>
              </div>
              <div class="col-lg-3 col-12 col-md-6 mb-4">
                <div class="sft-single-fea">
                  <img
                    class="w-100"
                    src="../img/maildoll-new-landing.png"
                    alt=""
                  />
                  <span class="sft-color-primary text-capitalize sm-title mt-3"
                    >step 01</span
                  >
                  <a href="#" class="mt-1 title-link"
                    >Go to and write your store’s name</a
                  >
                </div>
              </div>
              <div class="col-lg-3 col-12 col-md-6 mb-4">
                <div class="sft-single-fea">
                  <img
                    class="w-100"
                    src="../img/maildoll-new-landing.png"
                    alt=""
                  />
                  <span class="sft-color-primary text-capitalize sm-title mt-3"
                    >step 01</span
                  >
                  <a href="#" class="mt-1 title-link"
                    >Go to and write your store’s name</a
                  >
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
          <h4 class="mb-3">Maildoll Online Documentation</h4>
          <p>
            Send us your idea, it may appear on maildoll in the next update!
          </p>
        </div>
        <div class="col-lg-2 mt-4 mt-lg-0">
          <a href="#" class="btn btn-primary btn-lg mr-3 btn sft-btn-primary"
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
    <div class="sft-fea-section convertion-section">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-lg-8 col-xxl-4 text-center mb-5">
            <h2>Instantly Improve Conversions by 120% in a day</h2>
          </div>

          <!-- feature wrap -->
          <div class="col-lg-12 px-70">
            <div class="row">
              <div class="col-12 col-md-6 mb-4">
                <div class="sft-single-fea">
                  <img class="mx-auto" src="../img/conversion1.png" alt="" />
                  <span class="sft-color-primary text-capitalize sm-title mt-3"
                    >step 01</span
                  >
                  <a href="#" class="mt-1 title-link"
                    >Go to and write your store’s name</a
                  >
                </div>
              </div>
              <div class="col-12 col-md-6 mb-4">
                <div class="sft-single-fea">
                  <img class="mx-auto" src="../img/conversion1.png" alt="" />
                  <span class="sft-color-primary text-capitalize sm-title mt-3"
                    >step 01</span
                  >
                  <a href="#" class="mt-1 title-link"
                    >Go to and write your store’s name</a
                  >
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
        <div class="row">
          <div
            class="col-lg-6 col-md-8 mr-auto"
            data-aoss="fade-right"
            data-aos-durationn="1200"
          >
            <div class="illustration-holder">
              <img src="/deski/images/assets/ils_11.svg" alt="" />
            </div>
          </div>
          <div class="col-lg-5" data-aoss="fade-left" data-aos-durationn="1200">
            <div class="text-wrapper">
              <h6>User Guides</h6>
              <h2 class="font-rubik title">
                Docs for your APIs, products, FAQs and user guides,
              </h2>
              <p>
                With deksi docs, you can write, edit, let it collaborate
                wherever you are lorem dumy text introduction.
              </p>
            </div>
            <!-- /.text-wrapper -->
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
        <div class="row">
          <div
            class="col-lg-6 col-md-8 ml-auto order-lg-last"
            data-aoss="fade-left"
            data-aos-durationn="1200"
          >
            <div class="illustration-holder">
              <img src="/deski/images/assets/ils_12.svg" alt="" />
            </div>
          </div>
          <div
            class="col-lg-5 order-lg-first"
            data-aoss="fade-right"
            data-aos-durationn="1200"
          >
            <div class="text-wrapper">
              <h6>Combine Idea</h6>
              <h2 class="font-rubik title">
                A place to think and track ideas for you & your team
              </h2>
              <p>
                With deksi docs, you can write, edit, let it collaborate
                wherever you are lorem dumy text introduction.
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
          class="tab-pane fade show active"
          id="one"
          role="tabpanel"
          aria-labelledby="one-tab"
        >
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            autoplay="true"
            data-setup="{}"
          >
            <source src="/video/dashboard-video.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
        <div
          class="tab-pane fade"
          id="two"
          role="tabpanel"
          aria-labelledby="two-tab"
        >
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            autoplay="true"
            data-setup="{}"
          >
            <source src="/video/dashboard-video.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
        <div
          class="tab-pane fade"
          id="three"
          role="tabpanel"
          aria-labelledby="three-tab"
        >
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            autoplay="true"
            data-setup="{}"
          >
            <source src="/video/dashboard-video.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
        <div
          class="tab-pane fade"
          id="four"
          role="tabpanel"
          aria-labelledby="four-tab"
        >
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            autoplay="true"
            data-setup="{}"
          >
            <source src="/video/dashboard-video.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
        <div
          class="tab-pane fade"
          id="five"
          role="tabpanel"
          aria-labelledby="five-tab"
        >
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            autoplay="true"
            data-setup="{}"
          >
            <source src="/video/dashboard-video.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
      </div>
      <ul class="nav mt-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link btn btn-primary btn-lg mr-3 btn active video-btn"
            id="one-tab"
            data-toggle="tab"
            href="#one"
            role="tab"
            aria-controls="one"
            aria-selected="true"
            ><i class="fa fa-play-circle" aria-hidden="true"></i> one</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link btn btn-primary btn-lg mr-3 btn video-btn"
            id="two-tab"
            data-toggle="tab"
            href="#two"
            role="tab"
            aria-controls="two"
            aria-selected="false"
            ><i class="fa fa-play-circle" aria-hidden="true"></i> two</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link btn btn-primary btn-lg mr-3 btn video-btn"
            id="three-tab"
            data-toggle="tab"
            href="#three"
            role="tab"
            aria-controls="three"
            aria-selected="false"
            ><i class="fa fa-play-circle" aria-hidden="true"></i> three</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link btn btn-primary btn-lg mr-3 btn video-btn"
            id="four-tab"
            data-toggle="tab"
            href="#four"
            role="tab"
            aria-controls="four"
            aria-selected="false"
            ><i class="fa fa-play-circle" aria-hidden="true"></i> four</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link btn btn-primary btn-lg mr-3 btn video-btn"
            id="five-tab"
            data-toggle="tab"
            href="#five"
            role="tab"
            aria-controls="five"
            aria-selected="false"
            ><i class="fa fa-play-circle" aria-hidden="true"></i> five</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@import "./single-style.css";
@import "./responsive.css";
</style>
<script>
import DEMO_JSON from "../json/demo.json";

import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  mounted() {
    console.log(DEMO_JSON[this.$route.params.software][0].features);
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      software_name: this.$route.params.software,
      header: [],
      navbar: [],
      screenshots: [],
      features: [],
      pricing: [],
      testimonials: [],
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
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
          itemsToShow: 2.5,
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
