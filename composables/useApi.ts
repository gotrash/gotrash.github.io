import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export async function useApi<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  // const userAuth = useCookie("token");
  const { getSession } = useAuth();
  const config = useRuntimeConfig();
  const session = await getSession();

  const defaults: UseFetchOptions<T> = {
    method: "GET",
    baseURL: config.public.apiUrl ?? "http://localhost:8090",
    // this overrides the default key generation, which includes a hash of
    // url, method, headers, etc. - this should be used with care as the key
    // is how Nuxt decides how responses should be deduplicated between
    // client and server
    // key: url,

    // set user token if connected
    headers: {
      Authorization: `Bearer ${session?.session?.access_token}`
    },
    lazy: true,
    server: false

    // onResponse(_ctx) {
    //   // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    // },

    // onResponseError(_ctx) {
    //   // throw new myBusinessError()
    // }
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
}
