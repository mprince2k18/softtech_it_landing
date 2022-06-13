<!-- <script setup>
@import "../../public/deski/css/style.css";
@import "../../public/deski/css/responsive.css";
</script> -->

<template>
  <div class="main-page-wrapper font-gordita">
    <!-- ===================================================
				Loading Transition
			==================================================== -->
    <section>
      <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
              <span data-text-preloader="D" class="letters-loading"> D </span>
              <span data-text-preloader="E" class="letters-loading"> E </span>
              <span data-text-preloader="S" class="letters-loading"> S </span>
              <span data-text-preloader="K" class="letters-loading"> K </span>
              <span data-text-preloader="I" class="letters-loading"> I </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 
			=============================================
				Theme Main Menu
			============================================== 
			-->
    <div class="theme-main-menu sticky-menu theme-menu-five">
      <div class="d-flex align-items-center justify-content-center">
        <div class="logo">
          <a href="index.html"><img src="images/logo/deski_06.svg" alt="" /></a>
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
                  <li class="nav-item dropdown position-static">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      >Home</a
                    >
                    <div class="dropdown-menu">
                      <ul class="mega-menu d-flex">
                        <li>
                          <a
                            href="index-event.html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home01.png" alt="" />
                            <span class="font-rubik">Event Organiser</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index-doc.html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home02.png" alt="" />
                            <span class="font-rubik">Doc landing</span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html" class="dropdown-item img-box">
                            <img src="images/menu/home03.png" alt="" />
                            <span class="font-rubik">Project Management</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index-customer-support.html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home04.png" alt="" />
                            <span class="font-rubik">Customer Support</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(product-landing).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home05.png" alt="" />
                            <span class="font-rubik">Product landing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(product-landing-dark).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home06.png" alt="" />
                            <span class="font-rubik">Product landing Dark</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(note-taking).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home07.png" alt="" />
                            <span class="font-rubik"
                              >Note Taking App landing</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(video-editor).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home08.png" alt="" />
                            <span class="font-rubik">Video Editor Landing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(appointment-scheduling).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home10.png" alt="" />
                            <span class="font-rubik"
                              >Appointment Scheduling</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(mobile-appV1).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home11.png" alt="" />
                            <span class="font-rubik">Mobile App Landing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(doc-signature).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home12.png" alt="" />
                            <span class="font-rubik"
                              >Doc Signature Landing</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(webiste-builder).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home13.png" alt="" />
                            <span class="font-rubik">Website Builder</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(form-survey).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home14.png" alt="" />
                            <span class="font-rubik">Form & Survey</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="index(vr).html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home16.png" alt="" />
                            <span class="font-rubik">VR Landing</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="coming-soon-v1.html"
                            class="dropdown-item img-box"
                          >
                            <img src="images/menu/home09.png" alt="" />
                            <span class="font-rubik">Coming Soon</span>
                          </a>
                        </li>
                        <li>
                          <div class="img-box">
                            <img src="images/menu/home15.png" alt="" />
                            <div
                              class="hover d-flex align-items-center justify-content-center"
                            >
                              <div class="font-rubik">Coming Soon</div>
                            </div>
                          </div>
                          <span class="font-rubik">E-commerce</span>
                        </li>
                      </ul>
                    </div>
                    <!-- /.dropdown-menu -->
                  </li>
                  <li class="nav-item">
                    <a href="#feature" class="nav-link">Features</a>
                  </li>
                  <li class="nav-item">
                    <a href="#effect" class="nav-link">Effects</a>
                  </li>
                  <li class="nav-item">
                    <a href="#template" class="nav-link">Template</a>
                  </li>
                  <li class="nav-item">
                    <a href="#feedback" class="nav-link">Feedback</a>
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
                href="login.html"
                class="signIn-action d-flex align-items-center"
              >
                <img src="images/icon/52.svg" alt="" />
                <span>login</span>
              </a>
            </li>
            <li>
              <a href="sign-up.html" class="signup-btn"
                ><span>Sign up</span>- It’s Free</a
              >
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
            <h1 class="hero-heading">Edit video & create great content</h1>
            <p class="hero-sub-heading">
              Make stunning videos with animation, stock footage, and photos.
            </p>
            <a href="#" class="theme-btn-nine">Download - It’s free</a>
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
          <div class="partnerSliderTwo">
            <div class="item">
              <div
                class="img-meta d-flex align-items-center justify-content-center"
              >
                <img src="images/logo/logo-1.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div
                class="img-meta d-flex align-items-center justify-content-center"
              >
                <img src="images/logo/logo-2.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div
                class="img-meta d-flex align-items-center justify-content-center"
              >
                <img src="images/logo/logo-3.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div
                class="img-meta d-flex align-items-center justify-content-center"
              >
                <img src="images/logo/logo-4.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div
                class="img-meta d-flex align-items-center justify-content-center"
              >
                <img src="images/logo/logo-6.png" alt="" />
              </div>
            </div>
            <div class="item">
              <div
                class="img-meta d-flex align-items-center justify-content-center"
              >
                <img src="images/logo/logo-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.partner-slider-two -->
      <img src="images/shape/173.svg" alt="" class="shapes shape-right" />
      <img src="images/shape/174.svg" alt="" class="shapes shape-left" />
    </div>
    <!-- /.hero-banner-eight -->
  </div>
</template>
