export default {
  axios: {
    baseURL: process.env.AXIOS_BASE_URL || "http://localhost:9000"
  },
  googleAnalytics: {
    id: process.env.GA_TRACKING_ID
  }
};
