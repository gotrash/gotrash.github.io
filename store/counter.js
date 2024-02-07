import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  getters: {},
  state: () => ({
    count: 0
  }),
  actions: {
    add() {
      this.count < Number.MAX_SAFE_INTEGER && this.count++;
    },
    subtract() {
      this.count > 0 && this.count--;
    }
  }
});
