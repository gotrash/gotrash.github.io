export default {
  dsn:
    process.env.SENTRY_DSN ||
    "https://4d5ae3c08af040e485d1a6d0115b42ac@o4505031174258688.ingest.sentry.io/4505031179108352",
  config: {
    debug: true
  },
  // initialize: true,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
};
