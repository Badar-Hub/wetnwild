<template>
  <div>
      <div class="mega">
          <h3 class="font-origo heading-text">Mega Last Lip Color</h3>
          <div class="gr">
              <iframe width="550" height="350px" src="https://www.youtube.com/embed/aroTXebka5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="txtimg">
                  <h4>
                      A long-lasting lip color in creamy matte and luscious high-shine for rich, all day color in 26 shades. 
                      Two finishes that won’t feather or fade for lips that last as long as you want.
                  </h4>
                  <div class="imgtxtcontainer">  
                    <div class="single">
                        <img src="@/assets/img/megalast/1.jpg" />
                        <p>Mega Last High Shine Lip Color</p>
                    </div>
                    <div class="single">
                        <img src="@/assets/img/megalast/2.jpg" />
                        <p>Mega Last Matte Lip Color</p>
                    </div>
                  </div>

              </div>
          
          
          
          </div>
          <button class="btn">MORE TUTORIALS ></button>
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
.txtimg{
    display: flex;
    flex-direction: column;
}
.imgtxtcontainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.imgtxtcontainer p{
    font-size: 14px;
    font-weight: 900;
}
.btn{
    background-color: #EA27C2;
    color: white;
    font-weight: 900;
    width: 200px;
    padding: 10px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 0;
    border: none;
}
h4{
    margin-top: 0;
}
</style>