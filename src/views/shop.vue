<template>
  <div>
    <Header />
    <shop-img :img="this.$route.meta.img" />
    <div class="row">
      <div class="categoryBar">
        <h4 style="margin:0">HOME > {{ this.$route.meta.title }}</h4>
        <div class="subcategory">
          <div v-for="(category, index) in metadata.categories" :key="index">
            <div style="justify-content: space-between;" class="row">
              <router-link class="custom-link" :to="category.link">{{category.label}}</router-link>
              <p style="cursor:pointer" @click="category.displaySub = !category.displaySub">▼</p>
            </div>
            <div
              class="custom-link-sub"
              :style="{'display': category.displaySub ? 'block' : 'none'}"
              v-for="(subCategory, index1) in category.subCategories"
              :key="index1"
            >
              <hr />
              <router-link
                :to="subCategory.link"
                style="padding-left:2.5rem"
              >{{ subCategory.label }}</router-link>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div class="prod">
        <shop-text
          :headingText="this.$route.meta.title"
          :paragraphText="this.$route.meta.description"
        />
        <div style="justify-content: flex-end;" class="smrow">
          <h4 style="margin:10px">SORT BY</h4>
          <select>
            <option>Position</option>
          </select>
        </div>
        <div class="smrow">
          <prod-shop v-for="prod of products" :key="prod" v-bind="prod" />
        </div>
      </div>
    </div>
    <div class="row">
      <shop-text
        headingText="Hey, Wild One!"
        paragraphText="Welcome to Wet N Wild, the trusted beauty destination for all makeup lovers.  From our flawless foundations to bold lip colors, Wet N Wild has a reputation for game-changing makeup products at an affordable price.  That's why we are the #1 value makeup brand in America.  Oh, and did you know we are 100% cruelty-free, and always have been?  We are passionate about beauty, both inside and out.  Our dependable products and colorful styles are designed to help you look and feel your very best, no matter who you are or where you are in life.  Learn more about Wet n Wild Beauty & our commitment to cruelty-free cosmetics."
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
import shopImg from "@/components/Layout/ShopImg.vue";
import ShopText from "../components/General/ShopText.vue";
import ProdShop from "../components/General/ProdShop.vue";
const categories = require("@/metadata/categories.json");
import axios from "axios";
export default {
  components: { Header, shopImg, ShopText, ProdShop, Footer },
  data() {
    return {
      products: [],
      metadata: {
        categories: categories.categories,
      },
    };
  },
  mounted() {
    this.getData();
    console.log(this.$route);
  },
  methods: {
    getData() {
      axios.get("http://localhost/api/products").then((res) => {
        this.products = res.data;
        console.log(this.products);
      });
    },
  },
};
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}
.custom-link:hover {
  text-decoration: underline;
}

.custom-link-sub a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
.custom-link-sub a:hover {
  text-decoration: underline;
}
.row {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
}
.categoryBar {
  flex: 3;
}
.prod {
  flex: 9;
  justify-content: center;
  text-align: center;
  padding: 0 3rem;
}
.smrow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
select {
  height: 40px;
}
.subcategory {
  padding-top: 40px;
}

p {
  margin: 0;
}

@media (max-width: 765px) {
  .categoryBar {
    display: none;
  }
  .prod {
    flex: 12;
  }
}
</style>