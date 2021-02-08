import Vue from "vue";
import VueRouter from "vue-router";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import Customers from "./components/Customers";
import About from "./components/About";
import Add from "./components/Add";
import CustomerDetails from "./components/CustomerDetails";
import Edit from "./components/Edit";

Vue.use(VueRouter);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Customers },
    { path: "/about", component: About },
    { path: "/add", component: Add },
    { path: "/customer/:id", component: CustomerDetails },
    { path: "/edit/:id", component: Edit },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <div class="navbar-brand" href="#">vCustomers</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/add">Add Customer</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <router-view ></router-view>
  </div>
  `,
}).$mount("#app");
