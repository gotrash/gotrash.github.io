<template>
  <message-spinner v-if="$fetchState.pending" />
  <div v-else-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </div>
  <b-container v-else fluid>
    <h1>{{ $tc("PAGE_TITLE__POSTCODE_DISTRICT", 1) }} ({{ district.district }})</h1>

    <b-row>
      <b-col>
        <div class="position-relative">
          <div :style="{ height: contentHeight + 'px' }">
            <client-only>
              <l-map
                v-if="district"
                :style="{ height: contentHeight + 'px' }"
                :center.sync="map.center"
                :bounds.sync="map.bounds"
                :zoom.sync="map.zoom"
                :options="{}"
              >
                <!-- Map Tile Layer - All props come from the `HasMap` mixin -->
                <l-tile-layer :url="map.tiles.url" :options="map.tiles.options" />

                <l-layer-group>
                  <l-polygon
                    v-for="sector in _sectors"
                    :key="`sector-polygon-${sector.sector}`"
                    :lat-lngs="sector.coordinates"
                    color="#1d1d1d"
                    interactive
                    :options="{ sector: sector }"
                    @click="onPolygonClicked"
                  ></l-polygon>
                  <l-polygon
                    v-for="(polygon, polygonIndex) in polygonCoordinates"
                    :id="`district-polygon-layer-${polygonIndex}`"
                    :key="`district-polygon-layer-${polygonIndex}`"
                    :lat-lngs="polygon"
                    color="#ff0000"
                    :interactive="false"
                    :name="`district-polygon-layer-${polygonIndex}`"
                    :options="{
                      district: district,
                      id: `district-polygon-layer-${polygonIndex}`,
                      name: `district-polygon-layer-${polygonIndex}`
                    }"
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
    name: "EditPostcodeDistrictPage",
    layout: "admin",
    data() {
      return {
        district: null,
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
            url: this.$config.mapbox.leafletUrl || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          },
          zoom: 12,
          zoomControl: false
        }
      };
    },
    async fetch() {
      await this.$axios.get(`/postcodes/districts/${this.$route.params.district}`).then(res => {
        this.district = res.data;
        this.map.bounds = res.data.boundingBox?.coordinates[0].map(item => [item[1], item[0]]);

        return Promise.resolve();
      });
    },
    computed: {
      _sectors() {
        const { district } = this;
        if (!(district && district.sectors) || !Array.isArray(district.sectors)) return [];
        return district.sectors.map(sector => {
          const _sector = { ...sector };
          const collector = [];
          const sectorCoordinates = sector.coordinates.coordinates;
          this.getPolygonCoordinates(sectorCoordinates, collector);
          _sector.coordinates = collector;
          return _sector;
        });
      },
      // districtCoordinates() {
      //   const { area } = this;
      //   if (!(area && area.districts)) return [];
      //   const collector = [];
      //   for (const district of area.districts) {
      //     const areaCoordinates = district.coordinates.coordinates;
      //     this.getPolygonCoordinates(areaCoordinates, collector);
      //   }
      //   return collector;
      // },
      polygonCoordinates() {
        const { district } = this;
        if (!(district && district.coordinates && district.coordinates.coordinates)) return [];
        const collector = [];
        this.getPolygonCoordinates(district.coordinates.coordinates, collector);
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
        if (evt?.target?.options?.sector)
          this.$router.push({
            name: "admin-postcodes-sectors-sector",
            params: { sector: evt.target.options.sector.sector }
          });
      }
    }
  };
</script>
