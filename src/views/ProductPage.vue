<template>
  <div>
    <Header />
    <product-page />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import ProductPage from "../components/Layout/ProductPage.vue";
import Footer from "../components/Layout/Footer.vue";
export default {
  components: { Header, ProductPage, Footer },
};
</script>

<style>
</style>