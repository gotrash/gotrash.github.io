import path from "path";

export default function FileUtils(moduleOptions) {
  const _default = {};

  const _options = Object.assign(_default, this.options.spatial, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, "../plugins/spatial.utils.js"),
    options: _options
  });
}
