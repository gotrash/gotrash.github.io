import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB-dcwUf8qd2vAcwRnAvBVaTMd81tiq2aA",
    libraries: "places,drawing,visualization,directions" // This is required if you use the Autocomplete plugin
  }
});
