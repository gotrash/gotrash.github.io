import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  actions: {},
  getters: {
    getHeight(state) {
      return key => state.heights[key];
    },
    getMaxHeight(state) {
      // Calculate the maximum number in a list
      let max = 0;

      Object.keys(state.heights).forEach(key => {
        if (state.heights[key] > max) {
          max = state.heights[key];
        }
      });

      return max;
    },
    getWidth(state) {
      return key => state.widths[key];
    }
  },
  mutations: {
    setHeight(state, { key, height }) {
      state.heights[key] = height;
    },
    setWidth(state, { key, width }) {
      state.widths[key] = width;
    }
  },
  state: () => ({
    heights: {
      controlSidebar: 0,
      header: 0,
      footer: 0,
      sidebar: 0,
      window: 0
    },
    widths: {
      controlSidebar: 0,
      header: 0,
      footer: 0,
      sidebar: 0,
      window: 0
    }
  })
});
