import config from "./config";

export default {
  components: false,
  dev: process.env.NODE_ENV !== "production",
  ...config
};
