export default {
  authUrl: process.env.AUTH_URL || "http://localhost:9000",
  apiUrl: process.env.API_URL || "http://localhost:8090",
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
  auth: {
    origin: process.env.AUTH_ORIGIN || "http://localhost:3000"
  },
  public: {
    authSecret: process.env.AUTH_SECRET || "super-secret-localhost",
    authUrl: process.env.AUTH_URL || "http://localhost:9000",
    apiUrl: process.env.API_URL || "http://localhost:8090",
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    auth: {
      origin: process.env.AUTH_ORIGIN || "http://localhost:3000"
    }
  }
};
