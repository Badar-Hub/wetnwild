<template>
  <div>
    <div class="shop">
      <img :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  },
};
</script>

<style scoped>
img {
  max-width: -webkit-fill-available;
}
</style>