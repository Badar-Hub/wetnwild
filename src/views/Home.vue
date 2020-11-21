<template>
  <div class="home">
    <Header />
    <Slider />
    <MegaLastLip />
    <HottestPick />
    <Footer />
    <input type="text" v-model="name">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Layout/Header.vue'
import Slider from '@/components/Layout/Slider.vue'
import MegaLastLip from '@/components/General/MegaLastLip.vue'
import HottestPick from '@/components/General/HottestPick.vue'
import Footer from '@/components/Layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    MegaLastLip,
    HottestPick,
    Footer
  },
}

</script>
<style scoped>

</style>