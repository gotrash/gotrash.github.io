export default {
  public: {
    authUrl: process.env.AUTH_URL || "http://localhost:9000",
    apiUrl: process.env.API_URL || "http://localhost:8090",
    baseURL: process.env.BASE_URL || "http://localhost:8090",
    auth: {
      origin: process.env.AUTH_ORIGIN || "http://localhost:3000"
    }
  }
};
