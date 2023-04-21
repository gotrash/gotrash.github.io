import * as Sentry from "@sentry/vue";

export default function ({ $axios }) {
  $axios.onError(error => {
    Sentry.captureException(error);

    // Do something with request error
    return Promise.reject(error);
  });
}
