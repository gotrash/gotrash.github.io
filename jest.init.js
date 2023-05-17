import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { config } from "@vue/test-utils";
import lang from "~/lang/en/index";

Vue.use(BootstrapVue);

config.mocks.$t = msg => lang[msg];

config.mocks.$auth = {
  loggedIn: false
};
