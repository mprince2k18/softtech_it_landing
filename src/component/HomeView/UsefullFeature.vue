<template>
  <div class="theme-feature mt-200" id="feature">
    <img src="img/shape08.svg" alt="" class="shapes shape-one" />
    <img src="img/shape09.svg" alt="" class="shapes shape-two" />
    <img src="img/shape10.svg" alt="" class="shapes shape-three" />
    <img src="img/shape11.svg" alt="" class="shapes shape-four" />
    <div class="main-title text-center">
      <h2>
        <span>Technologies We Use <img src="img/line02.svg" alt="" /></span>
      </h2>
    </div>
    <div class="main-wrapper">
      <div class="row justify-content-center">


        <div class="col-lg-3 col-md-4 col-sm-6 d-flex mt-30" data-aos="zoom-in" data-aos-duration="1200"
          v-for="(technology, index) in technologies" :key="index">
          <div class="feature-block">
            <div class="icon d-flex justify-content-center align-items-end">
              <img :src="technology.icon" :alt="technology.title" />
            </div>
            <p class="font-rubik">{{ technology.title }}</p>
          </div>
          <!-- /.feature-block -->
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import HOME_JSON from "../../json/home.json";

export default {
  data() {
    return {
      technologies: HOME_JSON.technologies,
    };
  },
};
</script>
