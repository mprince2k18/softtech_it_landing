<template>
  <div class="main-page-wrapper font-gordita">
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
                class="theme-btn-nine d-flex align-items-center"
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
    <div class="hero-banner-eight">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 m-auto">
            <h1 class="hero-heading">{{ header.title }}</h1>
            <p class="hero-sub-heading">{{ header.subtitle }}</p>
            <a
              :href="header.demo_link"
              target="_blank"
              class="theme-btn-nine py-1"
              >See Demo Now</a
            >
            <br />
            <a
              href="http://softtechitsupport.com"
              target="_blank"
              class="mt-5 text-info font-weight-bold border border-3 border-info px-4 py-2 rounded"
              >Ask For Full Access Of The Demo</a
            >
          </div>
        </div>

        <div class="video-wrapper">
          <video preload="" muted="muted" playsinline="" autoplay="" loop="">
            <source
              src="https://creativegigs.net/video/demo_01.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <!-- /.video-wrapper -->
      </div>

      <div class="partner-slider-two mt-130 md-mt-80">
        <div class="container">
          <div class="partnerSliderTwo soft-partnerSliderTwo">
            <carousel :items-to-show="1">
              <slide v-for="screenshot in screenshots" :key="screenshot">
                <div class="item">
                  <div
                    class="img-meta d-flex align-items-center justify-content-center"
                  >
                    <img :src="screenshot" alt="" />
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
      <!-- /.partner-slider-two -->
      <img
        src="https://html.creativegigstf.com/deski/deski/images/shape/173.svg"
        alt=""
        class="shapes shape-right"
      />
      <img
        src="https://html.creativegigstf.com/deski/deski/images/shape/174.svg"
        alt=""
        class="shapes shape-left"
      />
    </div>
    <!-- /.hero-banner-eight -->

    <!-- 
			=============================================
				Fancy Feature Nineteen
			============================================== 
			-->
    <div class="fancy-feature-nineteen mt-180 md-mt-100" id="effect">
      <div class="container soft-fancy-fea-nineteen">
        <div class="row">
          <div
            class="col-xl-9 col-lg-11 m-auto"
            data-aoss="fade-up"
            data-aos-durations="1200"
          >
            <div class="title-style-eight text-center mb-40 md-mb-20">
              <h2>{{ features.section_title }}</h2>
              <p>{{ features.section_subtitle }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-6"
            v-for="feature in features.lists"
            :key="feature"
            data-aoss="fade-up"
            data-aos-duration="1200"
          >
            <div class="block-style-nineteen">
              <div class="d-flex align-items-start">
                <img :src="feature.icon" alt="" class="icon" />
                <div class="text">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.subtitle }}</p>
                </div>
              </div>
            </div>
            <!-- /.block-style-nineteen -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.fancy-feature-nineteen -->

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
        <div class="title-style-five text-center mb-50 md-mb-30">
          <h6>{{ pricing.section_title }}</h6>
          <div class="row">
            <div class="col-lg-9 m-auto">
              <h2>{{ pricing.section_subtitle }}</h2>
            </div>
          </div>
        </div>

        <div class="pricing-table-area-three">
          <div class="row justify-content-center">
            <div
              class="col-lg-4 col-md-6"
              v-for="price in pricing.lists"
              :key="price"
            >
              <div class="pr-table-wrapper skew-right">
                <div class="pack-name pc1 font-slab">
                  <span>{{ price.title }}</span>
                </div>
                <div class="price font-slab">{{ price.price }}</div>
                <p class="user-condition">{{ price.subtitle }}</p>
                <img
                  src="https://html.creativegigstf.com/deski/deski/images/shape/114.svg"
                  alt=""
                  class="line"
                />
                <ul>
                  <li v-for="list in price.features" :key="list">{{ list }}</li>
                </ul>
                <a
                  :href="price.purchase_link"
                  target="_blank"
                  class="subscribe-btn font-rubik"
                  >Purchase {{ price.title }}</a
                >
              </div>
              <!-- /.pr-table-wrapper -->
            </div>
          </div>
        </div>
        <!-- /.pricing-table-area-three -->
      </div>
    </div>

    <!--
			=====================================================
				Client Feedback Slider Six
			=====================================================
			-->
    <div class="client-feedback-slider-six mt-170 md-mt-120" id="feedback">
      <div class="inner-container">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-7 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div class="title-style-eight text-center">
                <h6>FEEDBACK</h6>
                <h2>Trusted by millions of creators.</h2>
              </div>
            </div>
          </div>
          <div class="clientSliderSix row justify-content-center">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide
                v-for="testimonial in testimonials.lists"
                :key="testimonial"
              >
                <div class="item">
                  <div class="feedback-wrapper">
                    <span class="ribbon"></span>
                    <p class="d-flex justify-content-between">
                      {{ testimonial.description }}
                    </p>
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <h6 class="name">
                        {{ testimonial.name }},
                        <span>{{ testimonial.country }}</span>
                      </h6>
                      <ul class="d-flex">
                        <li>
                          <i
                            class="fa fa-star"
                            style="color: #ffb043"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="fa fa-star"
                            style="color: #ffb043"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="fa fa-star"
                            style="color: #ffb043"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="fa fa-star"
                            style="color: #ffb043"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li>
                          <i
                            class="fa fa-star"
                            style="color: #ffb043"
                            aria-hidden="true"
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- /.feedback-wrapper -->
                </div>
              </slide>

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
      <!-- /.inner-container -->
    </div>
    <!-- /.client-feedback-slider-six -->

    <!--
			=====================================================
				Faq Section Five
			=====================================================
			-->
    <div
      class="faq-section-five lg-container mt-200 pt-25 md-mt-80 d-none"
      id="faq"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="title-style-twelve">
              <div class="upper-title">FAQ</div>
              <h2>Any Questions find here.</h2>
              <p class="pt-25 pb-40 md-pb-30">
                Find your answers here. if you don’t find it here, please
                contact us.
              </p>
              <a href="contact-us(management).html" class="theme-btn-eight"
                >Contact us</a
              >
            </div>
          </div>
          <div class="col-lg-6 ml-auto">
            <div id="accordion" class="accordion-style-five md-mt-60">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      How does the free trial work?
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      How do you different criteria in your process?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      What does First Round look for in an idea?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      What do you look for in a founding team?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      Do you recommend Pay as you go or Pre pay?
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSix">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      Can I pass the fees on to my customers?
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSeven">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">
                      How do I get paid for the tickets sold?
                    </button>
                  </h5>
                </div>
                <div id="collapseSeven" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once
                      your sixth ticket purchase comes through we will start
                      charging the standard PAYG rate. If you would like to move
                      to Pre pay then head to "Billing" and "Buy ticket
                      credits".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
			=====================================================
				Fancy Short Banner Eight
			=====================================================
			-->
    <div class="fancy-short-banner-eight mt-170 md-mt-80">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-8 col-lg-11 m-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="title-style-seven text-center">
              <h2>
                <span>{{ header.total_clients }}</span> Customers have our
                <span class="text-uppercase">{{ software_name }}</span
                >. <br />Try it now!
              </h2>
              <p>Try it risk free — we provide full access of the demo.</p>
            </div>
            <!-- /.title-style-six -->
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
          <div class="download-btn">
            <a
              :href="header.envato_link"
              target="_blank"
              class="theme-btn-nine d-flex align-items-center text-center justify-content-center"
            >
              Get {{ software_name }} App
            </a>
          </div>
        </div>
      </div>
      <!-- /.container -->
      <img
        src="https://html.creativegigstf.com/deski/deski/images/shape/171.svg"
        alt=""
        class="shapes shape-one"
      />
      <img
        src="https://html.creativegigstf.com/deski/deski/images/shape/172.svg"
        alt=""
        class="shapes shape-two"
      />
    </div>
    <!-- /.fancy-short-banner-eight -->

    <!--
			=====================================================
				Footer Style Seven
			=====================================================
			-->
    <footer class="theme-footer-seven mt-120 md-mt-100">
      <div class="lg-container">
        <div class="container">
          <div class="bottom-footer">
            <div class="row">
              <div class="col-lg-4 order-lg-1 mb-20">
                <ul
                  class="d-flex justify-content-center justify-content-lg-start footer-nav"
                >
                  <li>
                    <a href="http://softtechitsupport.com" target="_blank"
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 order-lg-3 mb-20">
                <ul
                  class="d-flex justify-content-center justify-content-lg-end social-icon"
                >
                  <li>
                    <a
                      href="https://www.facebook.com/softtechitofficial"
                      target="_blank"
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/SofttechITLtd" target="_blank"
                      ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/softtech-it-limited"
                      target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 order-lg-2 mb-20">
                <p class="copyright text-center">
                  Copyright @2022 SoftTech-IT LTD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.lg-container -->
    </footer>
    <!-- /.theme-footer-seven -->
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
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
