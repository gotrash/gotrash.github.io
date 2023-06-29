<template>
  <message-spinner v-if="$fetchState.pending" />
  <div v-else-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </div>
  <b-container v-else fluid>
    <h1>{{ $tc("PAGE_TITLE__POSTCODE_UNIT", 1) }} ({{ unit.postcodes }})</h1>

    <b-row>
      <b-col>
        <div class="position-relative">
          <div :style="{ height: contentHeight + 'px' }">
            <client-only>
              <l-map
                v-if="unit"
                :style="{ height: contentHeight + 'px' }"
                :center.sync="map.center"
                :bounds.sync="map.bounds"
                :zoom.sync="map.zoom"
                :options="{
                  zoomControl: false
                }"
              >
                <!-- Map Tile Layer - All props come from the `HasMap` mixin -->
                <l-tile-layer
                  :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"
                  :options="map.tiles.options"
                />
                <l-polygon
                  v-for="(polygon, polygonIndex) in polygonCoordinates"
                  :id="`unit-polygon-layer-${polygonIndex}`"
                  :key="`unit-polygon-layer-${polygonIndex}`"
                  :lat-lngs="polygon"
                  color="#ff0000"
                  interactive
                  :name="`unit-polygon-layer-${polygonIndex}`"
                  :options="{
                    unit: unit,
                    id: `unit-polygon-layer-${polygonIndex}`,
                    name: `unit-polygon-layer-${polygonIndex}`
                  }"
                />
              </l-map>
            </client-only>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    fetchOnServer: false,
    name: "EditPostcodeunitPage",
    layout: "admin",
    data() {
      return {
        unit: null,
        map: {
          autoBound: true,
          bounds: null,
          center: [53.357674, -3.069725],
          initialized: false,
          tiles: {
            options: {
              attribution: "",
              accessToken: this.$config.mapbox.apiKey
            },
            url: this.$config.mapbox.leafletUrl
          },
          zoom: 12,
          zoomControl: false
        }
      };
    },
    async fetch() {
      await this.$axios.get(`/postcodes/units/${this.$route.params.postcodes}`).then(res => {
        this.unit = res.data;
        this.map.bounds = res.data.boundingBox?.coordinates[0].map(item => [item[1], item[0]]);

        return Promise.resolve();
      });
    },
    computed: {
      polygonCoordinates() {
        const { unit } = this;
        const collector = [];
        if (!(unit && unit.coordinates && unit.coordinates.coordinates)) return collector;
        this.getPolygonCoordinates(unit.coordinates.coordinates, collector);
        return collector;
      },
      contentHeight() {
        if (this.maxHeight === this.controlSidebarHeight) {
          return this.maxHeight;
        } else if (this.maxHeight === this.windowHeight) {
          return this.maxHeight - this.headerHeight - this.footerHeight;
        } else {
          return this.maxHeight - this.headerHeight - this.footerHeight;
        }
      },
      controlSidebarHeight() {
        return this.$store.getters["layout/getHeight"]("controlSidebar");
      },
      footerHeight() {
        return this.$store.getters["layout/getHeight"]("footer");
      },
      headerHeight() {
        return this.$store.getters["layout/getHeight"]("header");
      },
      maxHeight() {
        return this.$store.getters["layout/getMaxHeight"];
      }
    },
    methods: {
      getPolygonCoordinates(coordinates, collector = []) {
        if (coordinates.every(item => Array.isArray(item) && item.length === 2)) {
          collector.push(coordinates.map(item => [item[1], item[0]]));
        } else {
          for (const coordinate of coordinates) {
            this.getPolygonCoordinates(coordinate, collector);
          }
        }
      }
    }
  };
</script>
