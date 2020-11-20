<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
.smrow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@font-face {
  font-family: origo;
  src: url(./assets/fonts/orgio/ORIGO_TRIAL.ttf);
}

.font-origo{
  font-family: origo;
}
.heading-text{
  font-size: 70px;
  margin: 1rem auto;
  color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
