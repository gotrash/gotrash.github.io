import { resolve } from "path";

export default {
  sources: {
    // overwrite default source AKA `content` directory
    content: {
      driver: "fs",
      prefix: "/info", // All contents inside this source will be prefixed with `/content`
      base: resolve(__dirname, "..", "content")
    }
  }
};
