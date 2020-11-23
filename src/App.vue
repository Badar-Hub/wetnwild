<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getData();
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

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.smrow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.pink {
  color: #ea27c2;
}

@font-face {
  font-family: origo;
  src: url(./assets/fonts/orgio/ORIGO_TRIAL.ttf);
}

@font-face {
  font-family: roboto;
  src: url(./assets/fonts/Roboto/Roboto-Regular.ttf);
}

.mt {
  margin-top: 0 !important;
}

.mb {
  margin-bottom: 0 !important;
}

.ml {
  margin-left: 0 !important;
}

.mr {
  margin-right: 0 !important;
}

.font-origo {
  font-family: origo;
}

.font-roboto {
  font-family: roboto !important;
  font-weight: 300 !important;
  &-medium {
    font-family: roboto !important;
    font-weight: 500 !important;
  }
  &-semi-bold {
    font-family: roboto !important;
    font-weight: 600 !important;
  }
  &-bold {
    font-family: roboto !important;
    font-weight: 700 !important;
  }
}

.heading-text {
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
