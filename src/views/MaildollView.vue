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
          <router-link :to="{ 'name': 'software', params: { 'software' : software_name }  }">
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
                <ul class="navbar-nav main-side-nav font-gordita" id="one-page-nav">
                  <li class="nav-item" v-for="nav in navbar" :key="nav">
                    <a href="#feature" class="nav-link">{{ nav.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="right-widget">
          <ul class="d-flex align-items-center">
            <li>
              <a :href="header.envato_link" target="_blank"
                class="theme-btn-nine d-flex align-items-center">
                <img src="deski/images/icon/52.svg" alt="" />
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
            <a :href="header.demo_link" target="_blank" class="theme-btn-nine">Try Demo</a>
          </div>
        </div>

        <div class="video-wrapper">
          <video preload="" muted="muted" playsinline="" autoplay="" loop="">
            <source src="https://creativegigs.net/video/demo_01.mp4" type="video/mp4" />
          </video>
        </div>
        <!-- /.video-wrapper -->
      </div>

      <div class="partner-slider-two mt-130 md-mt-80">
        <div class="container">
          <div class="partnerSliderTwo">
            <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img src="deski/images/logo/logo-1.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img src="deski/images/logo/logo-2.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img src="deski/images/logo/logo-3.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img src="deski/images/logo/logo-4.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img src="deski/images/logo/logo-6.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img src="deski/images/logo/logo-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.partner-slider-two -->
      <img src="deski/images/shape/173.svg" alt="" class="shapes shape-right" />
      <img src="deski/images/shape/174.svg" alt="" class="shapes shape-left" />
    </div>
    <!-- /.hero-banner-eight -->

    <!-- fancy text block -->
    <div class="fancy-text-block-sixteen mt-200 md-mt-80">
      <div class="container">
        <div class="img-slick-slider">
          <div class="item">
            <img src="deski/images/assets/feature-img-12.png" alt="" />
          </div>
          <div class="item">
            <img src="deski/images/assets/feature-img-12.png" alt="" />
          </div>
          <div class="item">
            <img src="deski/images/assets/feature-img-12.png" alt="" />
          </div>
        </div>

        <div class="row justify-content-between">
          <div class="col-lg-3 col-md-4">
            <div class="block-style-eleven mt-40">
              <div class="num font-rubik">01</div>
              <div class="title">Personal Notes</div>
              <p class="font-rubik">A place to think and track ideas for you and your team</p>
            </div>
            <!-- /.block-style-eleven -->
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="block-style-eleven mt-40">
              <div class="num font-rubik">02</div>
              <div class="title">Knowledge Base</div>
              <p class="font-rubik">A home for your team, best practices and thoughts.</p>
            </div>
            <!-- /.block-style-eleven -->
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="block-style-eleven mt-40">
              <div class="num font-rubik">03</div>
              <div class="title">Products Doc</div>
              <p class="font-rubik">Beautiful docs for your APIs, Products, FAQs, & User Guides,</p>
            </div>
            <!-- /.block-style-eleven -->
          </div>
        </div>
      </div>
    </div>

    <!-- 
			=============================================
				Fancy Feature Nineteen
			============================================== 
			-->
    <div class="fancy-feature-nineteen mt-180 md-mt-100" id="effect">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-11 m-auto" data-aos="fade-up" data-aos-duration="1200">
            <div class="title-style-eight text-center mb-80 md-mb-40">
              <h2>Unleash Creativity with Pro Effects</h2>
              <p>Explore advanced video editing features that only professionals have access to!</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1200">
            <div class="block-style-nineteen" style="border-left-color: #ffce22">
              <div class="d-flex align-items-start">
                <img src="deski/images/icon/112.svg" alt="" class="icon" />
                <div class="text">
                  <h4>Green Screen</h4>
                  <p>Change your background and create special effects using the Green Screen tool.</p>
                </div>
              </div>
            </div>
            <!-- /.block-style-nineteen -->
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div class="block-style-nineteen" style="border-left-color: #8f6bf6">
              <div class="d-flex align-items-start">
                <img src="deski/images/icon/113.svg" alt="" class="icon" />
                <div class="text">
                  <h4>Audio Mixer</h4>
                  <p>Adjust the audio of each individual track on your timeline lorem elit extract.</p>
                </div>
              </div>
            </div>
            <!-- /.block-style-nineteen -->
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1200">
            <div class="block-style-nineteen" style="border-left-color: #ff5c5c">
              <div class="d-flex align-items-start">
                <img src="deski/images/icon/114.svg" alt="" class="icon" />
                <div class="text">
                  <h4>Pan & Zoom</h4>
                  <p>Add panning and zooming movements to still footage.</p>
                </div>
              </div>
            </div>
            <!-- /.block-style-nineteen -->
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div class="block-style-nineteen" style="border-left-color: #63eaa9">
              <div class="d-flex align-items-start">
                <img src="deski/images/icon/115.svg" alt="" class="icon" />
                <div class="text">
                  <h4>Advanced Text Editing</h4>
                  <p>Edit the color, size, font, and even animation of your text and titles.</p>
                </div>
              </div>
            </div>
            <!-- /.block-style-nineteen -->
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1200">
            <div class="block-style-nineteen" style="border-left-color: #5be2ff">
              <div class="d-flex align-items-start">
                <img src="deski/images/icon/116.svg" alt="" class="icon" />
                <div class="text">
                  <h4>Color Tuning</h4>
                  <p>Adjust the white balance and dynamic range of your clips & long videos.</p>
                </div>
              </div>
            </div>
            <!-- /.block-style-nineteen -->
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div class="block-style-nineteen" style="border-left-color: #ff56ee">
              <div class="d-flex align-items-start">
                <img src="deski/images/icon/117.svg" alt="" class="icon" />
                <div class="text">
                  <h4>3D Lut</h4>
                  <p>Choose from a selection of color grading presets inspired by popular movies.</p>
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
				Fancy Text block Twenty Three
			=====================================================
			-->
    <div class="fancy-text-block-twentyThree lg-container mt-200 pt-30 md-mt-90" id="feature">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-lg-last" data-aos="fade-left">
            <div class="text-wrapper pl-xl-5">
              <div class="cl-text">Over <span>150,000+</span> client</div>
              <div class="title-style-twelve">
                <h2>Signture that work Smoothly.</h2>
                <p class="mt-35 mb-60 md-mb-40">Commonly used in the graphic, prit quis due & publishing indust for
                  previewing lightly visual mockups.</p>
              </div>
              <a href="#" class="theme-btn-eight">Start Free Trial</a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-right">
            <div class="img-container position-relative md-mt-60">
              <img src="deski/images/assets/screen_30.png" alt="" class="main-screen" />
              <img src="deski/images/assets/screen_31.png" alt="" class="screen-one" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-90 md-mt-50">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-3 col-md-4" data-aos="fade-up">
              <div class="block-style-twentyEight text-center mt-40">
                <div class="icon d-flex justify-content-center align-items-end">
                  <img src="deski/images/icon/149.svg" alt="" />
                </div>
                <h4>Sign Doc Anywhere</h4>
                <p>Deski Web offers a complete lineup of features from any major browser.</p>
              </div>
              <!-- /.block-style-twentyEight -->
            </div>
            <div class="col-xl-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div class="block-style-twentyEight text-center mt-40">
                <div class="icon d-flex justify-content-center align-items-end">
                  <img src="deski/images/icon/150.svg" alt="" />
                </div>
                <h4>Simple to use</h4>
                <p>Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis</p>
              </div>
              <!-- /.block-style-twentyEight -->
            </div>
            <div class="col-xl-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div class="block-style-twentyEight text-center mt-40">
                <div class="icon d-flex justify-content-center align-items-end">
                  <img src="deski/images/icon/151.svg" alt="" />
                </div>
                <h4>Save time & Effort</h4>
                <p>Creation timelines for the standard lorem ipsum passage vary, with qius some citing.</p>
              </div>
              <!-- /.block-style-twentyEight -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.fancy-text-block-twentyThree -->

    <!--
			=====================================================
				Pricing Section Eight
			=====================================================
			-->
    <div class="pricing-section-eight lg-container mt-150 md-mt-100" id="pricing">
      <div class="container">
        <div class="border-top pt-150 md-pt-100">
          <div class="title-style-twelve text-center pb-120 md-pb-60">
            <h2>
              <span>Get your plan<img src="images/shape/line-shape-13.svg" alt="" /></span>
            </h2>
            <p class="mt-40 md-mt-20">Get access to the largest library of legal forms and easily integrate deski into
              your apps</p>
          </div>
        </div>

        <div class="row no-gutters position-relative">
          <div class="col-lg-3 pr-list-wrapper d-none d-lg-block">
            <ul>
              <li>Send documents for eSigning</li>
              <li>Multiple User</li>
              <li>Refund</li>
              <li>Bulk invite to sign</li>
              <li>Live Chat</li>
              <li>Send invite via Link</li>
            </ul>
          </div>
          <div class="col-lg-9 pr-table-wrapper ml-auto">
            <div class="row no-gutters">
              <div class="col-md-4 pr-column">
                <div class="pr-header">
                  <div class="plan">Silver Plan</div>
                  <div class="price">$97</div>
                  <div class="info">Great for Individial Person</div>
                </div>
                <!-- /.pr-header -->
                <div class="pr-body">
                  <ul>
                    <li>
                      <span class="pr-text d-lg-none">Send documents for eSigning</span>
                      <img src="deski/images/icon/154.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Multiple User</span>
                      <img src="deski/images/icon/154.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Refund</span>
                      <img src="images/icon/154.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Bulk invite to sign</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Live Chat</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Send invite via Link</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                  </ul>
                </div>
                <div class="pr-footer">
                  <a href="#" class="trial-button">Sign up</a>
                  <div class="trial-text">Get your 30 day free trial</div>
                </div>
              </div>
              <!-- /.pr-column -->
              <div class="col-md-4 pr-column">
                <div class="pr-header">
                  <div class="plan">Gold Plan</div>
                  <div class="price">$199</div>
                  <div class="info">Great for Startup</div>
                </div>
                <!-- /.pr-header -->
                <div class="pr-body">
                  <ul>
                    <li>
                      <span class="pr-text d-lg-none">Send documents for eSigning</span>
                      <img src="deski/images/icon/154.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Multiple User</span>
                      <img src="deski/images/icon/154.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Refund</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Bulk invite to sign</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Live Chat</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Send invite via Link</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                  </ul>
                </div>
                <div class="pr-footer">
                  <a href="#" class="trial-button">Sign up</a>
                  <div class="trial-text">Get your 30 day free trial</div>
                </div>
              </div>
              <!-- /.pr-column -->
              <div class="col-md-4 pr-column">
                <div class="pr-header">
                  <div class="plan">Business Plan</div>
                  <div class="price">$239</div>
                  <div class="info">Great for Large Business</div>
                </div>
                <!-- /.pr-header -->
                <div class="pr-body">
                  <ul>
                    <li>
                      <span class="pr-text d-lg-none">Send documents for eSigning</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Multiple User</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Refund</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Bulk invite to sign</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Live Chat</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                    <li>
                      <span class="pr-text d-lg-none">Send invite via Link</span>
                      <img src="deski/images/icon/155.svg" alt="" class="m-auto" />
                    </li>
                  </ul>
                </div>
                <div class="pr-footer">
                  <a href="#" class="trial-button">Sign up</a>
                  <div class="trial-text">Get your 30 day free trial</div>
                </div>
              </div>
              <!-- /.pr-column -->
            </div>
          </div>
        </div>
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
            <div class="col-lg-7 m-auto" data-aos="fade-up" data-aos-duration="1200">
              <div class="title-style-eight text-center">
                <h6>FEEDBACK</h6>
                <h2>Trusted by millions of creators.</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="clientSliderSix row">
          <div class="item">
            <div class="feedback-wrapper">
              <span class="ribbon" style="background: #ff47e2"></span>
              <p>Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others”
                that will be closing in the near future!</p>
              <div class="d-flex align-items-center">
                <img src="deski/images/media/img_78.png" alt="" class="avatar" />
                <h6 class="name">Martin Jonas, <span>USA</span></h6>
              </div>
            </div>
            <!-- /.feedback-wrapper -->
          </div>
          <div class="item">
            <div class="feedback-wrapper">
              <span class="ribbon" style="background: #00e5f3"></span>
              <p>Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others”
                that will be closing in the near future!</p>
              <div class="d-flex align-items-center">
                <img src="deski/images/media/img_79.png" alt="" class="avatar" />
                <h6 class="name">Elias Brett, <span>USA</span></h6>
              </div>
            </div>
            <!-- /.feedback-wrapper -->
          </div>
          <div class="item">
            <div class="feedback-wrapper">
              <span class="ribbon" style="background: #ffcf24"></span>
              <p>Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others”
                that will be closing in the near future!</p>
              <div class="d-flex align-items-center">
                <img src="deski/images/media/img_80.png" alt="" class="avatar" />
                <h6 class="name">Rashed Ka, <span>Spain</span></h6>
              </div>
            </div>
            <!-- /.feedback-wrapper -->
          </div>
          <div class="item">
            <div class="feedback-wrapper">
              <span class="ribbon" style="background: #8f6bf6"></span>
              <p>Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others”
                that will be closing in the near future!</p>
              <div class="d-flex align-items-center">
                <img src="deski/images/media/img_78.png" alt="" class="avatar" />
                <h6 class="name">Martin Jonas, <span>USA</span></h6>
              </div>
            </div>
            <!-- /.feedback-wrapper -->
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
    <div class="faq-section-five lg-container mt-200 pt-25 md-mt-80" id="faq">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="title-style-twelve">
              <div class="upper-title">FAQ</div>
              <h2>Any Questions find here.</h2>
              <p class="pt-25 pb-40 md-pb-30">Find your answers here. if you don’t find it here, please contact us.</p>
              <a href="contact-us(management).html" class="theme-btn-eight">Contact us</a>
            </div>
          </div>
          <div class="col-lg-6 ml-auto">
            <div id="accordion" class="accordion-style-five md-mt-60">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">How does the free trial work?</button>
                  </h5>
                </div>
                <div id="collapseOne" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">How do you different criteria in your process?</button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">What does First Round look for in an idea?</button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">What do you look for in a founding team?</button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">Do you recommend Pay as you go or Pre pay?</button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSix">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">Can I pass the fees on to my customers?</button>
                  </h5>
                </div>
                <div id="collapseSix" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSeven">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed">How do I get paid for the tickets sold?</button>
                  </h5>
                </div>
                <div id="collapseSeven" class="collapse">
                  <div class="card-body">
                    <p>
                      It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through
                      we will start charging the standard PAYG rate. If you would
                      like to move to Pre pay then head to "Billing" and "Buy ticket credits".
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
          <div class="col-xl-8 col-lg-11 m-auto" data-aos="fade-up" data-aos-duration="1200">
            <div class="title-style-seven text-center">
              <h2><span>200k+</span> Customers have our deski.Try it now!</h2>
              <p>Try it risk free — we don’t charge cancellation fees.</p>
            </div>
            <!-- /.title-style-six -->
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
          <div class="dropdown download-btn">
            <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Get Deski app</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item d-flex align-items-center" href="#">
                <img src="deski/images/icon/103.svg" alt="" />
                <span>IOS & Android</span>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <img src="deski/images/icon/104.svg" alt="" />
                <span>Mac & Windows</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container -->
      <img src="deski/images/shape/171.svg" alt="" class="shapes shape-one" />
      <img src="deski/images/shape/172.svg" alt="" class="shapes shape-two" />
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
                <ul class="d-flex justify-content-center justify-content-lg-start footer-nav">
                  <li><a href="#">Privacy & Terms.</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-lg-4 order-lg-3 mb-20">
                <ul class="d-flex justify-content-center justify-content-lg-end social-icon">
                  <li>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 order-lg-2 mb-20">
                <p class="copyright text-center">Copyright @2022 deski inc.</p>
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

<script>
import DEMO_JSON from "../json/demo.json";

export default {
  mounted() {
    console.log(DEMO_JSON[this.$route.params.software][0].header.logo);
  },
  data() {
    return {
      'software_name': this.$route.params.software,
      'header': [],
      'navbar': [],
    }
  },
  methods: {
    getHeader() {
      this.header = DEMO_JSON[this.$route.params.software][0].header;
    },
    getNavbar() {
      this.navbar = DEMO_JSON.navbar;
    },
  },
  created() {
    this.getHeader();
    this.getNavbar();
  }
}
</script>