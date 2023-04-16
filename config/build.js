import Fiber from "fibers";
import Sass from "sass";

export default {
  analyze: true,
  babel: {
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": ".",
            "~": "."
          }
        }
      ]
    ],

    presets(env) {
      const envTargets = {
        client: { browsers: ["last 2 versions"], ie: 10 },
        server: { node: "current" }
      };

      return [
        [
          "@nuxt/babel-preset-app",
          {
            corejs: 3,
            loose: true,
            targets: envTargets[env.envName],
            debug: !!process.env.BABEL_DEBUG,
            useBuiltIns: "usage",
            polyfills: [
              "es.array.iterator",
              "es.array.from",
              "es.promise",
              "es.promise.finally",
              "es.object.assign",
              "es.object.entries",
              "es.map"
            ]
          }
        ]
      ];
    }
  },
  html: {
    minify: {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: false,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  },
  loaders: {
    scss: {
      implementation: Sass,
      sassOptions: {
        fiber: Fiber,
        quietDeps: true
      },
      additionalData: '@use "sass:math";'
    }
  },
  parallel: false || true,
  profile: false || true,
  // transpile: [/^vue2-google-maps($|\/)/, "vuejs-datepicker", "pdfjs-dist"],
  extend(config, ctx) {
    config.node = {
      fs: "empty"
    };
  }
};
