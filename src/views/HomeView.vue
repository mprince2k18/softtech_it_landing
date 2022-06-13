
<script setup>
import Preloader from "../preloader/Preloader.vue";
import HeroSection from "../component/HomeView/HeroSection.vue";
import LandingBanner from "../component/HomeView/LandingBanner.vue";
import HomeDemo from "../component/HomeView/HomeDemo.vue";
import UsefullFeature from "../component/HomeView/UsefullFeature.vue";
import WhyChooseUs from "../component/HomeView/WhyChooseUs.vue";
import SupportBanner from "../component/HomeView/SupportBanner.vue";
import FooterLayout from "../layout/FooterLayout.vue";
</script>

<template>
  <div class="main-page-wrapper feature-page home-page-one">
    <!-- Preloader -->
    <Preloader />
    <!-- Feature Banner -->
    <HeroSection />

    <!-- Home Demo -->
    <HomeDemo />

    <!-- 	usefull Feature -->
    <UsefullFeature />

    <!-- why-choose-us -->
    <WhyChooseUs />

    <!-- Supoort Banner -->
    <SupportBanner />

    <!-- landing footer -->
    <FooterLayout />
  </div>
</template>

<script>
import HOME_JSON from "../json/home.json";

export default {
  mounted() {
    this.home = HOME_JSON;
    console.log(this.home.navbar);
  },
  data() {
    return {
      title: HOME_JSON.header.title,
      subtitle: HOME_JSON.header.subtitle,
      navbar: HOME_JSON.navbar,
      products: HOME_JSON.header.products,
    };
  },
};
</script>
