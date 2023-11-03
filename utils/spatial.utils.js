/* eslint-disable eqeqeq */
const _ = require("lodash");
const flatten = _.flatten;

export const recursiveGeoJsonFix = coordinates => {
  if (Array.isArray(coordinates)) {
    coordinates.forEach((coord, i) => {
      if (Array.isArray(coordinates[i]) && coordinates[i].length > 0 && Array.isArray(coordinates[i][0])) {
        // In a container
        coordinates[i] = recursiveGeoJsonFix(coord);
      } else if (i < coordinates.length - 1) {
        // In a point
        while (coordinates[i][0] == coordinates[i + 1][0] && coordinates[i][1] == coordinates[i + 1][1]) {
          coordinates.splice(i + 1, 1);
        }
      }
    });
  }

  return coordinates;
};

export const findDuplicateGeoJsonCoordinates = coordinates => {
  const flattened = flatten(coordinates, true);
  const repeats = [];

  do {
    const point = flattened.shift();

    flattened.forEach(testPoint => {
      if (testPoint[0] == point[0] && testPoint[1] == point[1]) {
        repeats.push(point);
      }
    });
  } while (flattened.length > 0);

  return repeats;
};

export const removeGeoJsonDuplicates = (geoJson, i) => {
  recursiveGeoJsonFix(geoJson.coordinates);
};

export default {
  findDuplicateGeoJsonCoordinates,
  recursiveGeoJsonFix,
  removeGeoJsonDuplicates
};
