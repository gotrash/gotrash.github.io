<template>
  <b-container fluid>
    <h1>{{ $tc("PAGE_TITLE__POSTCODE_AREA", 1) }} ({{ _districts.length }})</h1>

    <b-row>
      <b-col>
        <div>
          <div :style="{ height: contentHeight + 'px' }">
            <client-only>
              <l-map
                v-if="area"
                :style="{ height: contentHeight + 'px' }"
                :center.sync="map.center"
                :bounds.sync="map.bounds"
                :zoom.sync="map.zoom"
                :options="{
                  doubleClickZoom: false,
                  dragging: false,
                  keyboard: false,
                  scrollWheelZoom: false,
                  tapHold: false,
                  touchZoom: false,
                  zoomControl: false
                }"
                @click="onMapClicked"
              >
                <!-- Map Tile Layer - All props come from the `HasMap` mixin -->
                <l-tile-layer
                  :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"
                  :options="map.tiles.options"
                />
                <l-layer-group>
                  <template v-if="false">
                    <l-polygon
                      v-for="(polygon, polygonIndex) in districtCoordinates"
                      :id="`district-polygon-layer-${polygonIndex}`"
                      :key="`district-polygon-layer-${polygonIndex}`"
                      :lat-lngs="polygon"
                      color="#1D1D1D"
                      interactive
                      :name="`${area.mapitCode}-${polygonIndex}`"
                      @click="onPolygonClicked"
                    />
                  </template>
                  <l-polygon
                    v-for="district in _districts"
                    :key="`district-polygon-${district.district}`"
                    :lat-lngs="district.coordinates"
                    color="#1d1d1d"
                    interactive
                    :options="{ district: district }"
                    @click="onPolygonClicked"
                  ></l-polygon>
                  <l-polygon
                    v-for="(polygon, polygonIndex) in polygonCoordinates"
                    :id="`area-polygon-layer-${polygonIndex}`"
                    :key="`area-polygon-layer-${polygonIndex}`"
                    :lat-lngs="polygon"
                    color="#ff0000"
                    :interactive="false"
                    :name="`area-polygon-layer-${polygonIndex}`"
                    :options="{ id: $route.params.area, name: $route.params.area }"
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
    name: "EditPostcodeAreaPage",
    layout: "admin",
    data() {
      return {
        area: null,
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
    computed: {
      _districts() {
        const { area } = this;
        if (!(area && area.districts) || !Array.isArray(area.districts)) return [];

        return area.districts.map(district => {
          const _district = { ...district };
          const collector = [];

          const areaCoordinates = district.coordinates.coordinates;
          this.getPolygonCoordinates(areaCoordinates, collector);

          _district.coordinates = collector;

          return _district;
        });
      },
      districtCoordinates() {
        const { area } = this;
        if (!(area && area.districts)) return [];
        const collector = [];

        for (const district of area.districts) {
          const areaCoordinates = district.coordinates.coordinates;
          this.getPolygonCoordinates(areaCoordinates, collector);
        }

        return collector;
      },
      polygonCoordinates() {
        const { area } = this;
        if (!(area && area.coordinates && area.coordinates.coordinates)) return [];
        const collector = [];
        const areaCoordinates = [...area.coordinates.coordinates];

        Object.freeze(areaCoordinates);

        this.getPolygonCoordinates(areaCoordinates, collector);

        Object.freeze(collector);

        console.log(collector);
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
      },
      sidebarHeight() {
        return this.$store.getters["layout/getHeight"]("sidebar");
      },
      windowHeight: {
        get() {
          return this.$store.getters["layout/getHeight"]("window");
        },
        set(height) {
          this.$store.commit("layout/setHeight", { key: "window", height });
        }
      },
      windowWidth: {
        get() {
          return this.$store.getters["layout/getWidth"]("window");
        },
        set(width) {
          this.$store.commit("layout/setWidth", { key: "window", width });
        }
      }
    },
    mounted() {
      this.getArea();
    },
    methods: {
      async getArea() {
        await this.$axios.get(`/postcodes/areas/${this.$route.params.area}`).then(res => {
          this.area = res.data;
          this.map.bounds = res.data.boundingBox?.coordinates[0].map(item => [item[1], item[0]]);
        });
      },
      getPolygonCoordinates(coordinates, collector = []) {
        if (coordinates.every(item => Array.isArray(item) && item.length === 2)) {
          collector.push(coordinates.map(item => [item[1], item[0]]));
        } else {
          for (const coordinate of coordinates) {
            this.getPolygonCoordinates(coordinate, collector);
          }
        }
      },
      onMapClicked(evt) {},
      onPolygonClicked(evt) {
        if (evt?.target?.options?.district)
          this.$router.push({
            name: "admin-postcodes-districts-district",
            params: { district: evt.target.options.district.district }
          });
      }
    }
  };
</script>
