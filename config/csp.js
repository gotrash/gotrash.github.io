export default {
  reportOnly: true,
  hashAlgorithm: "sha256",
  policies: {
    "default-src": ["'self'"],
    "img-src": ["https:", "*.google-analytics.com"],
    "worker-src": [
      "'self'",
      `blob:`
      // DefaultConfigValues.PRIMARY_HOSTS
    ],
    "style-src": [
      "'self'",
      "'unsafe-inline'"
      // DefaultConfigValues.PRIMARY_HOSTS,
    ],
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      // DefaultConfigValues.PRIMARY_HOSTS,
      "sentry.io",
      "*.sentry-cdn.com",
      "*.google-analytics.com"
    ],
    "connect-src": [
      // DefaultConfigValues.PRIMARY_HOSTS,
      "sentry.io",
      "*.google-analytics.com"
    ],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
    "object-src": ["'none'"],
    "base-uri": [
      // DefaultConfigValues.PRIMARY_HOSTS
    ],
    "report-uri": [`https://sentry.io/api/<project>/security/?sentry_key=<key>`]
  }
};
