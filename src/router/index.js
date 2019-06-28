import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

import Login from "../views/auth/Login.vue";
import SignUp from "../views/auth/SignUp.vue";

import store from "../store";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },

    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
