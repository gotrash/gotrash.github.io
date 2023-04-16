export default {
  googleAnalytics: {
    id: process.env.GA_TRACKING_ID
  },
  sentry: {
    config: {
      dsn: process.env.SENTRY_DSN
    }
  }
};
