import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import FlashMessage from "@smartweb/vue-flash-message";
import VModal from "vue-js-modal";

Vue.use(VModal);

Vue.use(FlashMessage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
