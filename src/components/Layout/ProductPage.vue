<template>
  <div>
    <div class="shop">
      <div class="row">
        <div class="prod">
          <h5>HOME > STAR LUX GLITTER HIGHLIGHTER DUO</h5>
          <img class="img" src="@/assets/img/product/star-lux-glitter-highlighter.jpg" />
        </div>
        <div style="margin-top:80px" class="prod">
          <p class="pink font-roboto-semi-bold mb">NEW!</p>
          <h2
            style="font-size:2.2rem"
            class="mt font-roboto-semi-bold"
          >Star Lux Glitter Highlighter Duo</h2>
          <p>Rs. 600</p>
          <div style="justify-content: space-between" class="row">
            <select class="selectt">
              <option>Star Crazy</option>
              <option>Star Crazy</option>
              <option>Star Crazy</option>
              <option>Star Crazy</option>
              <option>Star Crazy</option>
            </select>
            <p>Qty</p>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <button class="btn">ADD TO CART ></button>
          </div>
          <div class="btn-des">
            <button @click="clearAll(); display = !display" class="btn-descriptions">DESCRIPTION</button>
            <div class="description-text" :style="{'display': display ? 'flex' : 'none' }">
              Ground control to Major Glitter! What has the power to take your highlighter game to star-heights? The most major of them all, of course—glitter! Enter wet n wild’s NEW Highlighter & Glitter Duo, featuring a multi-dimensional pearl-infused highlighter, and a glitter gel topper to shoot your glow to outer space. This celestial pairing offers customizable luminosity to achieve any look for everyday to extraordinary occasions! The highlighter formula blends effortlessly with a soft glide application that lifts and adds instant radiance for a full on strobe effect. So upgrade your glow to glittery new dimensions with your all-access pass to sparkle superstardom!
              Instantly sculpts, highlights and adds radiance to cheeks for a full on strobe effect
              Glitter and pearl pigment provide brilliant three-dimensional luster
              Blends effortlessly with soft glide application
            </div>
            <button @click="clearAll(); display1 = !display1" class="btn-descriptions">BENEFITS</button>
            <div
              class="description-text"
              :style="{'display': display1 ? 'flex' : 'none' }"
            >Cruelty-Free. Fragrance-Free. Vegan.</div>
          </div>
          <div class="row">
            <p>Share:</p>
            <p>FACEBOOK</p>
            <p>FACEBOOK</p>
            <p>FACEBOOK</p>
            <p>FACEBOOK</p>
          </div>
        </div>
      </div>
      <div class="row">
        <h3>Frequently Purchased</h3>
        <prod-shop />
      </div>
    </div>
  </div>
</template>

<script>
import ProdShop from "../General/ProdShop.vue";
export default {
  components: { ProdShop },
  data() {
    return {
      display: true,
      display1: false,
    };
  },
  methods: {
    clearAll() {
      this.display = false;
      this.display1 = false;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}
.btn-des {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px 0;
}
.img {
  max-width: 700px;
  margin: auto;
  width: 100%;
}
.btn {
  background-color: #ea27c2;
  padding: 15px;
  color: white;
}
.btn-descriptions {
  background-color: black;
  color: white;
  margin: 3px auto;
  padding: 15px;
  width: 100%;
}
.selectt {
  max-width: 180px;
  width: 100%;
}

.description-text {
  width: 500px;
  text-align: justify;
  padding: 10px 0;
}
</style>