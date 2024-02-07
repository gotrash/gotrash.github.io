import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  getters: {
    shouldRememberUser(state) {
      return state.rememberMe;
    }
  },
  state: () => ({
    rememberMe: false
  })
});
