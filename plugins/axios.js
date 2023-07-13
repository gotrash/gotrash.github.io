import * as Sentry from "@sentry/vue";

export default function ({ $axios }) {
  $axios.onError(error => {
    Sentry.captureException(error);

    // Do something with request error
    return Promise.reject(error);
  });

  $axios.onRequest(config => {
    console.log("Request Config: %o", { ...config });
  });

  $axios.onResponse(response => {
    if (process.client) {
      console.log("Response: %o", response.data);
    }
  });
}
