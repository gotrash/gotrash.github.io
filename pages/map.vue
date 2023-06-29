<script>
  export const IDS = {
    AREAS: "area",
    DISTRICTS: "district",
    SECTORS: "sector",
    UNITS: "postcodes"
  };

  export const MODES = {
    AREAS: "AREAS",
    DISTRICTS: "DISTRICTS",
    SECTORS: "SECTORS",
    UNITS: "UNITS"
  };

  export const URLS = {
    AREAS: "/postcodes/areas",
    DISTRICTS: "/postcodes/districts",
    SECTORS: "/postcodes/sectors",
    UNITS: "/postcodes/units"
  };

  let Bottleneck = null;
  let latLngBounds = null;
  // let L;

  if (process.client) {
    Bottleneck = require("bottleneck");
    latLngBounds = require("leaflet").latLngBounds;
    // L = require("leaflet");
  }

  export default {
    fetchOnServer: false,
    fetchKey: "MapTestPage",
    data() {
      return {
        fetched: false,
        areas: [],
        areasQueue: Bottleneck && new Bottleneck({ maxConcurrent: 1 }),
        districts: [],
        sectors: [],
        units: [],
        selected: [],
        map: {
          bounds: null,
          center: [53.343993, -3.039093],
          initialized: false,
          maxBounds: null,
          // process.client
          //   ? latLngBounds([
          //       [49.809631563563094, -8.701171875000002],
          //       [62.55285695857292, 1.9116210937500002]
          //     ])
          //   : null,
          options: {
            minZoom: 0
          },
          tiles: {
            options: {
              attribution: "",
              accessToken: this.$config.mapbox.apiKey
            },
            url: this.$config.mapbox.leafletUrl
          },
          zoom: 2,
          zoomControl: false
        },
        loading: false,
        toggling: false
      };
    },
    async fetch() {},
    computed: {
      geoJsonLayers() {
        return {
          areas: [],
          districts: [],
          sectors: [],
          units: []
        };
      },
      visibleAreas() {
        const { areas } = this;
        return areas.filter(this.itemFilter);
      }
    },
    watch: {
      "map.bounds": {
        handler(newBounds, oldBounds) {
          if (newBounds && !newBounds.equals(oldBounds)) {
            this.areasQueue.schedule(this.getAreas);
            this.fetched = true;
            // if (this.map.zoom >= 10) {
            //   this.districtsQueue.schedule(this.getDistricts);
            // }
          }
        }
      }
    },
    mounted() {
      const {
        map: { center }
      } = this;

      this.$nextTick(() => {
        this.onMapCenterUpdated(center);

        this.onMapBoundsUpdated(
          latLngBounds([
            [52.932086, -4.378052],
            [53.751959, -1.700134]
          ])
        );

        this.initialized = true;
      });
    },
    beforeDestroy() {
      this.initialized = false;
    },
    methods: {
      selectItem(areaName) {
        const area = this.areas.find(area => area.area === areaName);
        const items = [...this.selected];
        const index = items.findIndex(_item => _item?.area === areaName);

        if (index !== -1) {
          items.splice(index, 1);
        } else {
          items.push(area);
        }

        this.selected = items;
      },
      itemFilter(item) {
        const {
          map: { bounds }
        } = this;

        const coordinates = item.boundingBox.coordinates[0];
        const northEast = coordinates[0];
        const southWest = coordinates[2];
        const latIndex = 0;
        const lngIndex = 1;

        return (
          northEast[latIndex] <= bounds._northEast.lng &&
          northEast[lngIndex] <= bounds._northEast.lat &&
          southWest[latIndex] >= bounds._southWest.lng &&
          southWest[lngIndex] >= bounds._southWest.lat
        );
      },
      addArea(area) {
        const { areas } = this;

        if (areas.findIndex(_area => _area.area === area.area) === -1) {
          areas.push(area);
        }

        return Promise.resolve(area);
      },
      async getAreas() {
        await new Promise(resolve => {
          this.loading = true;

          resolve();
        });

        const {
          map: { bounds }
        } = this;

        const exclude = this.getExclusions(this.areas, IDS.AREAS);

        const areas = await this.$axios
          .post(URLS.AREAS, { bounds, exclude })
          .then(result => result.data)
          .catch(err => {
            this.$sentry.captureException(err);

            return [];
          });

        if (!areas || areas.length === 0) return;

        await Promise.all(
          areas.map(async area => {
            await this.addArea(area);

            return Promise.resolve();
          })
        );

        this.loading = false;
      },
      filterItems(items) {},
      getExclusions(items, primaryKey) {
        return items.map(i => i[primaryKey]);
      },
      // Attribute Providers
      getMapAttributes() {
        const {
          map: { bounds, center, options, maxBounds, zoom }
        } = this;
        return {
          on: {
            click: this.onMapClicked,
            drag: this.onMapDragged,
            "update:bounds": this.onMapBoundsUpdated,
            "update:center": this.onMapCenterUpdated,
            "update:zoom": this.onMapZoomUpdated
          },
          props: { bounds, center, maxBounds, options, zoom },
          ref: "map",
          style: "height: 500px"
        };
      },
      getTileLayerAttributes() {
        const {
          map: {
            tiles: { options, url }
          }
        } = this;

        return { props: { url, options } };
      },
      // Map Handlers
      onMapClicked(evt) {},
      onMapDragged(evt) {},
      onMapBoundsUpdated(bounds) {
        this.map.bounds = bounds;
      },
      onMapCenterUpdated(center) {
        this.map.center = center;
      },
      onMapZoomUpdated(zoom) {
        this.map.zoom = zoom;
      },
      // Render Methods
      renderDebugRow() {
        const h = this.$createElement;

        const leftContents = [
          h("div", { domProps: { innerHTML: "Areas: " + this.areas.length } }),
          h("div", { domProps: { innerHTML: "Visible Areas: " + this.visibleAreas.length } }),
          h("div", { domProps: { innerHTML: "Districts: " + this.districts.length } }),
          h("div", { domProps: { innerHTML: "Visible Districts: " + this.visibleAreas.length } }),
          h("div", { domProps: { innerHTML: "Sectors: " + this.sectors.length } }),
          h("div", { domProps: { innerHTML: "Visible Sectors: " + this.visibleAreas.length } }),
          h("div", { domProps: { innerHTML: "Units: " + this.units.length } }),
          h("div", { domProps: { innerHTML: "Visible Units: " + this.visibleAreas.length } })
        ];

        const rightContents = [
          h("div", { domProps: { innerHTML: "Bounds: " + Object.values({ ...(this.map.bounds || {}) }) } }),
          h("div", { domProps: { innerHTML: "Center: " + this.map.center } }),
          h("div", { domProps: { innerHTML: "Zoom: " + this.map.zoom } })
        ];

        if (this.loading) rightContents.push(h("div", { domProps: { innerHTML: "Loading" } }));
        if (this.toggling) rightContents.push(h("div", { domProps: { innerHTML: "Toggling" } }));

        return h("b-row", [
          h("b-col", { props: { cols: 12, sm: 6 } }, leftContents),
          h("b-col", { props: { cols: 12, sm: 6 } }, rightContents)
        ]);
      },
      renderMapRow() {
        const h = this.$createElement;

        // const coordinates = this.areas.map(area =>
        //   area.coordinates.coordinates.map(coordinate => coordinate.map(co => this.cleanCoordinates(co)))
        // );

        // const polygons = coordinates.map

        // const polygons = this.areas.map(area => {
        //   return map(coord => {
        //     return h("l-polygon", {
        //       props: {
        //         color: "#FF0000",
        //         "lat-lngs": coord.map(co => this.cleanCoordinates(co))
        //       }
        //     });
        //   });
        // });

        // return h("b-row", [
        //   h("b-col", [
        //     h("client-only", [
        //       h("l-map", this.getMapAttributes(), [
        //         h("l-tile-layer", this.getTileLayerAttributes()),
        //         ...polygons,
        //         ...this.areas.map(polygon =>
        //           h("l-marker", { props: { "lat-lng": L.polygon(polygon, { color: "red" }).getBounds().getCenter() } })
        //         )
        //       ])
        //     ])
        //   ])
        // ]);

        // return h("b-row", {}, [
        //   h("b-col", {}, [h("l-map", this.getMapAttributes(), [h("l-tile-layer", this.getTileLayerAttributes())])])
        // ]);

        const {
          map: { bounds }
        } = this;

        return h("b-row", {}, [
          h("b-col", {}, [
            h("l-map", this.getMapAttributes(), [
              h("l-tile-layer", this.getTileLayerAttributes()),
              ...this.areas
                .filter(area => {
                  const coordinates = area.boundingBox.coordinates[0];
                  const northEast = coordinates[0];
                  const southWest = coordinates[2];
                  const latIndex = 0;
                  const lngIndex = 1;

                  return (
                    northEast[latIndex] <= bounds._northEast.lng &&
                    northEast[lngIndex] <= bounds._northEast.lat &&
                    southWest[latIndex] >= bounds._southWest.lng &&
                    southWest[lngIndex] >= bounds._southWest.lat
                  );
                })
                .map(area =>
                  h("l-geo-json", {
                    on: {
                      click: evt => {
                        this.selectItem(evt.layer.options.name);
                      }
                    },
                    props: {
                      geojson: area.coordinates,
                      name: area.area,
                      interactive: true,
                      options: {
                        name: area.area,
                        properties: {
                          name: area.area
                        }
                      },
                      optionsStyle: {
                        color: this.selected.map(_area => _area.area).includes(area.area) ? "#00FF00" : "#FF0000",
                        weight: 1,
                        opacity: 0.65
                      }
                    },
                    ref: area.area
                  })
                )
            ])
          ])
        ]);
      },
      renderTitleRow() {
        const h = this.$createElement;

        return h("b-row", [h("b-col", [h("h1", "Map Test Page")])]);
      },
      cleanCoordinates(coordinates) {
        const collector = [...coordinates.map(c => [...c])];

        collector.forEach(c => c.reverse());
        // const lastItem = coordinates[coordinates.length - 1];
        // const collector = Array.from(new Set(coordinates.map(JSON.stringify))).map(JSON.parse);
        // collector.push(lastItem);

        // for (const coordinateIndex in coordinates) {
        //   const coordinate = coordinates[coordinateIndex];

        //   if (
        //     collector.findIndex(i => i[0] === coordinate[0] && i[1] === coordinate[1]) === -1 ||
        //     coordinateIndex === coordinates.length - 1
        //   )
        //     collector.push(coordinate);
        // }

        return collector;
      }
    },
    render(h) {
      const contents = [
        // Title
        this.renderTitleRow()
      ];

      // Map
      if (this.initialized) contents.push(this.renderMapRow());

      // Add debug info if we're in dev mode
      if (process.dev) contents.push(this.renderDebugRow());

      return h("b-container", { props: { fluid: true } }, contents);
    }
  };
</script>
