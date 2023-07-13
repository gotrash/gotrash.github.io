export default defineNitroPlugin(nitroApp => {
  // You can also intercept the response here.
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    if (!response) return;

    if (response.headers) {
      if (response.headers["X-Powered-By"]) response.headers["X-Powered-By"] = "GoTrash";
      if (response.headers["x-powered-by"]) response.headers["x-powered-by"] = "GoTrash";
    }
  });
});
