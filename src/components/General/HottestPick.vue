<template>
  <div>
      <div class="mega">
          <h3 class="font-origo heading-text">Hottest Picks</h3>
          <div class="gr">
              <div class="single">
                    <img src="@/assets/img/megalast/2.jpg" />
                    <p>Mega Last Matte Lip Color</p>
                    <p>Rs. 600</p>                    
                    <button class="btn">SHOP NOW ></button>
              </div>
              <div class="single">
                    <img src="@/assets/img/megalast/2.jpg" />
                    <p>Mega Last Matte Lip Color</p>
                    <p>Rs. 600</p>
                    <button class="btn">SHOP NOW ></button>
              </div>
              <div class="single">
                    <img src="@/assets/img/megalast/2.jpg" />
                    <p>Mega Last Matte Lip Color</p>
                    <p>Rs. 600</p>
                    <button class="btn">SHOP NOW ></button>
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
.mega{
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
}

.gr {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    max-width: 1200px;
    margin: auto;
}
.btn{
    background-color: #EA27C2;
    color: white;
    font: 900;
    width: 150px;
    padding: 10px;
    margin: auto;
    border: none;
}
.single{
    display: flex;
    flex-direction: column;
    margin: auto;
}
.single p{
    margin: auto;
}
</style>