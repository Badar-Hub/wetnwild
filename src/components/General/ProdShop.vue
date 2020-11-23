<template>
  <div>
    <div class="prod">
      <img :src="`${(!isDev? '/admin/' : '' ) + img}`" />
      <h4>{{ name }}</h4>
      <h4>Rs. {{ price }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDev: false,
    };
  },
  props: {
    img: String,
    name: String,
    price: Number,
  },
  mounted() {
    this.isDev = process.env.NODE_ENV === "development";
  },
};
</script>

<style scoped>
img {
  max-width: 250px;
  margin: auto;
}

.prod {
  padding: 15px 0;
  margin: auto;
}
</style>