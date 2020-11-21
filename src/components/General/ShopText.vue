<template>
  <div>
      <div class="shoptxt">
          <h4>{{ headingText }}</h4>
          <h4>{{ paragraphText }}</h4>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        headingText: String,
        paragraphText: String
    }
}
</script>

<style scoped>

</style>