import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  getters: {
    shouldRememberUser(state) {
      return state.rememberMe;
    }
  },
  state: () => ({
    rememberMe: false
  })
});
