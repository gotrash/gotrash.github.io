import { v4 } from "uuid";

export const useSessionStore = defineStore("session", {
  state: () => ({
    sessionId: v4()
  }),
  mutations: {
    resetSessionId(state) {
      state.sessionId = v4();
    }
  },
  getters: {
    getSessionId(state) {
      return state.sessionId;
    }
  }
});
