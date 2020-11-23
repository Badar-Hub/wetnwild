import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tutorials",
    name: "tutorial",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tutorial.vue"),
  },
  {
    path: "/new",
    name: "new",
    meta: {
      title: "NEW",
      description:
        "Love to stay ahead of the trend?  Get our limited edition makeup collections while you can!  As a brand that strives to push the boundaries of the cosmetics industry with innovative beauty trends, our newest makeup collections are bolder, brighter, and better than ever.  Discover affordable new makeup releases and trendy beauty products from wet n wild.",
      img: require("@/assets/img/slider/new.jpg"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/new/makeup-palettes",
    name: "Makeup Palettes",
    meta: {
      title: "MAKEUP PALETTES",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/new/skin-care",
    name: "Skin Care",
    meta: {
      title: "SKIN CARE",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/new/megaglo",
    name: "MegaGlo",
    meta: {
      title: "MEGAGLO",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/new/liquid-catsuit",
    name: "Liquid-Catsuit",
    meta: {
      title: "LIQUID CATSUIT",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/new/mega-jelly",
    name: "Mega-Jelly",
    meta: {
      title: "MEGA JELLY",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/new/gift-cards",
    name: "Gift Cards",
    meta: {
      title: "GIFT CARDS",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },

  {
    path: "/eyes",
    name: "eye",
    meta: {
      title: "EYES",
      description:
        "Get big & beautiful eyes with wet n wild's cruelty-free eye makeup. Explore trendy and afforable eyeshadow palettes, liquid eyeliners and pencils, lasting mascaras, false eyelashes, and beautiful brow shapers. Try fabulous EDIT beauty kits for smoky eye, cat eye, and other dramatic looks. Our eye makeup is always gentle on sensitive eyes and outrageously gorgeous!",
      img: require("@/assets/img/slider/eyes.jpg"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/eyes/mascara",
    name: "Mascara",
    meta: {
      title: "MASCARA",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/eyes/eyeshadow",
    name: "Eyeshadow",
    meta: {
      title: "EYESHADOW",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/eyes/eyeliner",
    name: "Eyeliner",
    meta: {
      title: "EYELINER",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/eyes/brow",
    name: "Brow",
    meta: {
      title: "BROW",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/eyes/primer",
    name: "Primer",
    meta: {
      title: "PRIMER",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/eyes/false-lashes",
    name: "False Lashes",
    meta: {
      title: "FALSE LASHES",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/lips",
    name: "lips",
    meta: {
      title: "LIPS",
      description:
        "Accentuate your lips in bold colors with wet n wild's matte & liquid lipstick, lip gloss, lip kits, masks & balms, and lip liner! This trendy collection includes wild colors ranging from metallic liquid lipstick to subtle nudes and lovely lavenders. Explore lip gloss for ultimate shine, liquid lipstick for perfect definition, and Mega Last lip color for sophisticated style. Get glossed up and perfect your pout!",
      img: require("@/assets/img/slider/lips.jpg"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/lips/lip-color",
    name: "Lip Color",
    meta: {
      title: "LIP COLOR",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/lips/lip-liner",
    name: "Lip Liner",
    meta: {
      title: "LIP LINER",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/lips/lip-gloss",
    name: "Lip Gloss",
    meta: {
      title: "LIP GLOSS",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/lips/lip-balm",
    name: "Lip Balm",
    meta: {
      title: "LIP BALM",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/nails",
    name: "nails",
    meta: {
      title: "NAILS",
      description:
        "Beautify your nails with our claim to fame, our pride and joy: our nail color!  Wet n wild nail polish has been flying off the shelves since '79.  Our classic Wild Shine nail colors beautifully accent any look.  Explore bold nail colors, long-lasting gel nail polish, plus base coats, top coats, and nail care!  With so many creamy, shiny, glittery, and metallic nail colors, you can always add a new polish to your collection.",
      img: require("@/assets/img/slider/nails.jpg"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/nails/nail-care",
    name: "Nail Care",
    meta: {
      title: "NAIL CARE",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/nails/nail-color",
    name: "Nail Color",
    meta: {
      title: "NAIL COLOR",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face",
    name: "face",
    meta: {
      title: "FACE",
      description:
        "Look luminous with wet n wild's full face makeup!  Camera-ready skin starts with our Photo Focus foundations, concealers, and color correctors.  Next, cheer up your cheeks with our highlight and contour palettes, bronzers and blushes, and pressed powders.  From simple setting powders to beautiful blush palettes, your complexion is destined to dazzle. Wet n wild face makeup is always beautiful and always cruelty-free, so get glowing!",
      img: require("@/assets/img/slider/face.jpg"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/cheeks",
    name: "Cheeks",
    meta: {
      title: "CHEEKS",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/foundation",
    name: "Foundation",
    meta: {
      title: "FOUNDATION",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/concealer",
    name: "Concealer",
    meta: {
      title: "CONCEALER",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/face-powder",
    name: "Face Powder",
    meta: {
      title: "FACE POWDER",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/prime-set",
    name: "Prime & Set",
    meta: {
      title: "PRIME & SET",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/highlight-contour",
    name: "Highlight Contour",
    meta: {
      title: "HIGHLIGHT & CONTOUR",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/glitter",
    name: "Glitter",
    meta: {
      title: "GLITTER",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/face/body",
    name: "Body",
    meta: {
      title: "BODY",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/brushes",
    name: "brushes",
    meta: {
      title: "BRUSHES",
      description:
        "Sculpt and accentuate your face with precision.  Apply your favorite face powders with our cruelty-free and vegan makeup brushes.  Wild ones adore our signature 17-piece collection, fluffy blending brushes, makeup sponges, stipple brushes, and more!  Not sure which tool to use?  Find out from wet n wild's makeup brush finder!",
      img: require("@/assets/img/slider/brushes.png"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/brushes/pro-line-brush",
    name: "Pro Line Brush",
    meta: {
      title: "PRO LINE BRUSH",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/brushes/essential-brushes",
    name: "Essentisl Brushes",
    meta: {
      title: "ESSENTIAL BRUSHES",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/brushes/makeup-sponges",
    name: "Makeup Sponges",
    meta: {
      title: "MAKEUP SPONGES",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/sale",
    name: "sale",
    meta: {
      title: "SALE",
      img: require("@/assets/img/slider/sale.jpg"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/sale/bundles",
    name: "Bundles",
    meta: {
      title: "BUNDLES",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/sale/special-offer",
    name: "Special Offers",
    meta: {
      title: "SPECIAL OFFERS",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shop.vue"),
  },
  {
    path: "/prod",
    name: "prod",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductPage.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
