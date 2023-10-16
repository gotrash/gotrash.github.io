import { defu } from "defu";
import { StatusCodes } from "http-status-codes";

export function useApi(url, options = {}) {
  const config = useRuntimeConfig();

  const defaults = {
    baseURL: config.baseUrl ?? config.public.apiUrl ?? "http://localhost:8090",
    // cache request
    key: url,
    // Request Options
    // lazy: true,
    // server: false,
    onRequest(_ctx) {
      // Log request
      console.log("[fetch request]", _ctx.request, _ctx.options);
    },
    onRequestError(_ctx) {
      // Log error
      console.log("[fetch request error]", _ctx.request, _ctx.error);
    },
    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)

      _ctx.response.status = StatusCodes.UNAUTHORIZED;

      throw new Error();
    },
    onResponseError(_ctx) {
      // throw new myBusinessError()

      // Log error
      console.log("[fetch response error]", _ctx.request, _ctx.response.status, _ctx.response.body);
      if (_ctx.response?.status === StatusCodes.UNAUTHORIZED) {
        // const { signIn } = useAuth();

        // signIn("oidc");

        console.log("Unauthorized");
      }
    }
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
}
