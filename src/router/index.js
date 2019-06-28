import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

import Login from "../views/auth/Login.vue";
import Logout from "../views/auth/Logout.vue";
import SignUp from "../views/auth/SignUp.vue";

import Recorder from "../views/recorder/Recorder.vue";

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
      path: "/logout",
      name: "logout",
      component: Logout,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/recorder",
      name: "recorder",
      component: Recorder,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ]
});
