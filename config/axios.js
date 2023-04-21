export default {
  baseURL: process.env.AXIOS_BASE_URL || "http://localhost:9000",
  progress: true,
  retry: { retries: 10 }
};
