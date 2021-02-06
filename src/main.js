import Vue from "vue";
import VueRouter from "vue-router";
// import axios from "axios";
import Customers from "./components/Customers";
import About from "./components/About";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Customers },
    { path: "/about", component: About },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  template: `
    <div id="app">
      <router-link to="/about">About</router-link>
      <router-view></router-view>
  </div>
  `,
}).$mount("#app");
