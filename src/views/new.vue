<template>
  <div>
      <Header />
      <shop-img/>
      <div class="row">
          <div class="categoryBar">
              <h4 style="margin:0">HOME > NEW</h4>
              <div class="subcategory">
                <h3>SALES</h3>
                <hr />
                <h3>SALES</h3>
                <hr />
                <h3>SALES</h3>
                <hr />
                <h3>SALES</h3>
                <hr />
                <h3>SALES</h3>
                <hr />
                <h3>SALES</h3>
                <hr />
                <h3>SALES</h3>
                <hr />
              </div>
          </div>
          <div class="prod">
              <shop-text headingText="NEW" paragraphText="Love to stay ahead of the trend?  Get our limited edition makeup collections while you can!  As a brand that strives to push the boundaries of the cosmetics industry with innovative beauty trends, our newest makeup collections are bolder, brighter, and better than ever.  Discover affordable new makeup releases and trendy beauty products from wet n wild."/> 
              <div style="justify-content: flex-end;" class="smrow">
                <h4 style="margin:10px">SORT BY</h4> 
                <select>
                    <option>Position</option>    
                </select>
              </div>
              <div class="smrow">
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
                <prod-shop/>
              </div>
          </div>
      </div>
      <div class="row">
        <shop-text headingText="Hey, Wild One!" paragraphText="Welcome to Wet N Wild, the trusted beauty destination for all makeup lovers.  From our flawless foundations to bold lip colors, Wet N Wild has a reputation for game-changing makeup products at an affordable price.  That's why we are the #1 value makeup brand in America.  Oh, and did you know we are 100% cruelty-free, and always have been?  We are passionate about beauty, both inside and out.  Our dependable products and colorful styles are designed to help you look and feel your very best, no matter who you are or where you are in life.  Learn more about Wet n Wild Beauty & our commitment to cruelty-free cosmetics."/> 
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import shopImg from '@/components/Layout/ShopImg.vue'
import ShopText from '../components/General/ShopText.vue'
import ProdShop from '../components/General/ProdShop.vue'
export default {
  components: { Header, shopImg, ShopText, ProdShop, Footer },
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: auto;
}
.categoryBar{
    flex: 3;
}
.prod{
    flex: 9;
    justify-content: center;
    text-align: center;
    padding: 0 3rem;
}
.smrow{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
select{
    height: 40px;
}
.subcategory {
    padding-top: 40px;
}
@media (max-width:765px){
    .categoryBar{
        display: none;
    }
    .prod{
        flex: 12;   
    }
}
</style>