<template>
  <div class="home-demo-section pt-150" id="demo">
    <img src="img/shape05.svg" alt="" class="shape-one" />
    <div class="container">
      <div class="main-title text-center">
        <h2>
          <span>All Of Our Applications <img src="img/line01.svg" alt="" /></span>
        </h2>
        <p class="font-rubik txt-lg">
          You will get over <span>{{ total_application }} Applications</span> from
          <span style="color: #ff7373">SoftTech-IT</span>
        </p>
      </div>

      <div class="mixitUp-containerOne mt-4 pt-4">
        <div class="home-item event" v-for="(product, index) in products" :key="index">
          <a :href="product.link" class="img-meta" style="background: #f1f2f6" target="_blank">
            <img :src="product.image" :alt="product.text" class="rounded" />
            <span class="view-page">Explore</span>
          </a>
          <div class="page-name font-rubik">{{ product.name }}</div>
        </div>
        <!-- /.mix -->

        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap"></div>
      </div>
      <!-- /.mixitUp-container -->
    </div>
  </div>
</template>

<script>
import HOME_JSON from "../../json/home.json";

export default {
  mounted() {
    console.log(HOME_JSON.products);
  },
  data() {
    return {
      total_application: HOME_JSON.info.total_application,
      products: HOME_JSON.products,
    };
  },
};
</script>
