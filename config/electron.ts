export default {
  build: [
    {
      // Main-Process entry file of the Electron App.
      entry: "electron/main.ts"
    },
    {
      entry: "electron/preload.ts",
      onstart(options: any) {
        // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
        // instead of restarting the entire Electron App.
        options.reload();
      }
    }
  ],
  renderer: {}
}
