import * as SpatialUtils from "~/utils/spatial.utils";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use({
    install(app) {
      // Create new axios instance
      const _spatial = {
        findDuplicateGeoJsonCoordinates: SpatialUtils.findDuplicateGeoJsonCoordinates,
        recursiveGeoJsonFix: SpatialUtils.recursiveGeoJsonFix,
        removeGeoJsonDuplicates: SpatialUtils.removeGeoJsonDuplicates
      };

      app.provide("spatial", _spatial);
    }
  });
});
