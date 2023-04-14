import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import axios from "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(axios, { baseUrl: "http://localhost:9000" });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
