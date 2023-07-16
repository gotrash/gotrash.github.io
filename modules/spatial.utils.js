// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import defu from "defu";
import path from "path";
import { defineNuxtModule, addPlugin } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "SpatialUtils"
  },
  defaults: {},
  setup(moduleOptions, nuxt) {
    console.log(Object.keys(nuxt.options));
    console.log(nuxt.options.runtimeConfig);

    // Default runtimeConfig
    nuxt.options.runtimeConfig.spatialUtils = defu(nuxt.options.runtimeConfig?.spatialUtils || {}, {
      url: moduleOptions.url,
      prefix: moduleOptions.prefix,
      version: moduleOptions.version
    });

    // Register plugin
    addPlugin({
      src: path.resolve(__dirname, "../plugins/spatial.utils.js")
    });
  }
});
