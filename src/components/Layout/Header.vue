<template>
  <div>
      <div class="header">
          <div class="navigation">    
            <div class="header-navigation">
                <a href="/"><img src="@/assets/img/logo.png" /></a>
                <ul>
                    <li><a href="#">SIGN IN</a></li>
                    <li><a href="#">REGISTER</a></li>
                    <li><a href="#"><i class="fas fa-shopping-bag"></i></a></li>
                </ul>
            </div>
            <hr />
            <div class="header-navigation">
                <nav>
                <ul>
                    <li><a href="/new">NEW</a></li>
                    <li><a href="#">EYE</a></li>
                    <li><a href="#">LIPS</a></li>
                    <li><a href="#">NAILS</a></li>
                    <li><a href="#">FACE</a></li>
                    <li><a href="#">BRUSHES</a></li>
                    <li><a href="#">COLLECTION</a></li>
                    <li><a href="#">#STAYWILD</a></li>
                    <li><a href="#">SALES</a></li>
                </ul>
            </nav>
            <ul>
                    <li><a href="#">ICON BUNNY</a></li>
                    <li><a href="#">SEARCH ICON</a></li>
                </ul>
            </div>
            <div class="header-navigation">
                <h3 class="h3bm">40% OFF SITEWIDE - CODE: FALL40</h3>
                <li><h3 class="h3bm">FREE GIFT WITH $30 PURCHASE</h3></li>
                <li><h3 class="h3bm">FREE U.S. SHIPPING ON ORDERS $15 + </h3></li>
            </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.h3bm{
    margin-bottom: 0px;
}
.navigation{
    padding-top: 20px;
    background-color: black;
    color: white;
}
.header-navigation{
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
}
ul{
    display: flex;
    padding: 0!important;
}
li{
    list-style-type:none ;
    padding-right: 15px;
}
a{
    text-decoration: none;
    color: white;
}
a:hover{
    text-decoration: underline;
}
</style>