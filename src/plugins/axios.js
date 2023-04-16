import axios from "axios";

export default {
  install: (app, options = {}) => {
    app.prototype.$axios = axios.create({
      baseURL: options?.baseUrl || null,
      headers: {
        Authorization: options?.token ? `Bearer ${options.token}` : ""
      }
    });
  }
};
