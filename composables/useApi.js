import { ofetch } from "ofetch";

export const useApi = (url, opts) => {
  const config = useRuntimeConfig();

  return ofetch.create({
    baseURL: config.public.apiUrl,
    lazy: true,
    server: false,
    async onRequest(req) {
      // Log request
      console.log("[fetch request]", req.request, req.options);
      // Add `?t=1640125211170` to query search params
      // req.options.query = req.options.query || {};
      // req.options.query.t = new Date();
    },
    async onRequestError(req) {
      // Log error
      console.log("[fetch request error]", req.request, req.error, req.options);
    },
    async onResponse(res) {
      // Log response
      console.log("[fetch response]", res.request, res.response.status, res.response.body, res.options);
      return Promise.resolve(res);
    },
    async onResponseError(res) {
      // Log error
      console.log("[fetch response error]", res.request, res.response.status, res.response.body, res.options);
    }
  })(url, opts);
  // const config = useRuntimeConfig();
  // // eslint-disable-next-line no-undef
  // const { fetch } = useNuxtApp();
  // return fetch.create({
  //   baseURL: config.public.apiUrl,

  // });
};
