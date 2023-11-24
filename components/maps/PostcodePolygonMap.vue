<script>
  export default {
    props: {
      boundingBox: {
        type: [Array, Object],
        required: true
      },
      coordinates: {
        type: [Array, Object],
        required: true
      },
      height: {
        type: String,
        required: false,
        default() {
          return "300px";
        }
      },
      secondaryCoordinates: {
        type: [Array, Object],
        required: false,
        default() {
          return [];
        }
      },
      linkPrefix: {
        type: String,
        required: false,
        default: null
      },
      linkKey: {
        type: String,
        required: false,
        default() {
          return "";
        }
      },
      zoom: {
        type: Number,
        required: false,
        default() {
          return 12;
        }
      }
    },
    emits: ["update:zoom"],
    computed: {
      _zoom: {
        get() {
          return this.zoom;
        },
        set(zoom) {
          this.$emit("update:zoom", zoom);
        }
      }
    },
    methods: {},
    render(h) {
      const { boundingBox, height, _zoom: zoom } = this;
      return h(
        "l-map",
        {
          on: {
            click: this.onMapClicked
          },
          props: {
            bounds: boundingBox,
            options: {
              doubleClickZoom: false,
              dragging: false,
              keyboard: false,
              scrollWheelZoom: false,
              tapHold: false,
              touchZoom: false,
              zoomControl: false
            },
            zoom
          },
          style: { height }
        },
        [
          h("l-tile-layer", {
            props: {
              options: {
                accessToken: this.$config.mapbox.apiKey,
                attribution: ""
              },
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          }),
          ...this.coordinates.map((coordinate, index) => {
            const id = `area-polygon-layer-${index}`;
            return h("l-polygon", {
              id,
              key: id,
              name: id,
              on: { click: this.onPolygonClicked },
              props: { color: "#FF0000", interactive: true, "lat-lngs": coordinate, options: { id, name: id } }
            });
          }),
          ...this.secondaryCoordinates.map(coordinate => {
            return h("l-polygon", { props: { "lat-lngs": coordinate } });
          })
        ]
      );

      //           <l-layer-group v-if="false">
      //             <l-polygon
      //               v-for="(polygon, polygonIndex) in districtCoordinates"
      //               :id="`district-polygon-layer-${polygonIndex}`"
      //               :key="`district-polygon-layer-${polygonIndex}`"
      //               :lat-lngs="polygon"
      //               color="#1D1D1D"
      //               interactive
      //               :name="`${area.mapitCode}-${polygonIndex}`"
      //               @click="onPolygonClicked"
      //             />

      //           </l-layer-group>
    }
  };
</script>
