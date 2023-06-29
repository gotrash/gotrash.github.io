import * as SpatialUtils from "~/utils/spatial.utils";

export default (ctx, inject) => {
  // Create new axios instance
  const _spatial = {
    findDuplicateGeoJsonCoordinates: SpatialUtils.findDuplicateGeoJsonCoordinates,
    recursiveGeoJsonFix: SpatialUtils.recursiveGeoJsonFix,
    removeGeoJsonDuplicates: SpatialUtils.removeGeoJsonDuplicates
  };

  // Inject spatial data utilities to $spatial
  ctx.$spatial = _spatial;
  inject("spatial", _spatial);
};
