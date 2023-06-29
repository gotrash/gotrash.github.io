<template>
  <message-spinner v-if="$fetchState.pending" />
  <div v-else-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </div>
  <b-container v-else fluid>
    <h1>{{ $tc("PAGE_TITLE__POSTCODE_SECTOR", 1) }} ({{ sector.sector }})</h1>

    <b-row>
      <b-col>
        <div class="position-relative">
          <div :style="{ height: contentHeight + 'px' }">
            <client-only>
              <l-map
                v-if="sector"
                :style="{ height: contentHeight + 'px' }"
                :center.sync="map.center"
                :bounds.sync="map.bounds"
                :zoom.sync="map.zoom"
                :options="{}"
              >
                <!-- Map Tile Layer - All props come from the `HasMap` mixin -->
                <l-tile-layer
                  :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"
                  :options="map.tiles.options"
                />

                <l-layer-group>
                  <l-polygon
                    v-for="unit in _units"
                    :key="`unit-polygon-${unit.postcodes.replace(' ', '-')}`"
                    :lat-lngs="unit.coordinates"
                    color="#1d1d1d"
                    interactive
                    :options="{ unit: unit }"
                    @click="onPolygonClicked"
                  ></l-polygon>
                  <l-polygon
                    v-for="(polygon, polygonIndex) in polygonCoordinates"
                    :id="`sector-polygon-layer-${polygonIndex}`"
                    :key="`sector-polygon-layer-${polygonIndex}`"
                    :lat-lngs="polygon"
                    color="#ff0000"
                    :interactive="false"
                    :name="`sector-polygon-layer-${polygonIndex}`"
                    :options="{
                      sector: sector,
                      id: `sector-polygon-layer-${polygonIndex}`,
                      name: `sector-polygon-layer-${polygonIndex}`
                    }"
                    @click="onPolygonClicked"
                  />
                </l-layer-group>
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
    name: "EditPostcodeSectorPage",
    layout: "admin",
    data() {
      return {
        sector: null,
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
      await this.$axios.get(`/postcodes/sectors/${this.$route.params.sector}`).then(res => {
        this.sector = res.data;
        this.map.bounds = res.data.boundingBox?.coordinates[0].map(item => [item[1], item[0]]);

        return Promise.resolve();
      });
    },
    computed: {
      _units() {
        const { sector } = this;
        if (!(sector && sector.units) || !Array.isArray(sector.units)) return [];
        return sector.units.map(unit => {
          const _unit = { ...unit };
          const collector = [];
          const unitCoordinates = unit.coordinates.coordinates;
          this.getPolygonCoordinates(unitCoordinates, collector);
          _unit.coordinates = collector;
          return _unit;
        });
      },
      polygonCoordinates() {
        const { sector } = this;
        if (!(sector && sector.coordinates && sector.coordinates.coordinates)) return [];
        const collector = [];
        this.getPolygonCoordinates(sector.coordinates.coordinates, collector);
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
      },
      onPolygonClicked(evt) {
        if (evt?.target?.options?.unit)
          this.$router.push({
            name: "admin-postcodes-units-postcodes",
            params: { postcodes: evt.target.options.unit.postcodes }
          });
      }
    }
  };
</script>
