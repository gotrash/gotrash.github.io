import { resolve } from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n";

export default {
  plugins: [
    VueI18nPlugin.vite({
      compositionOnly: false,
      compilation: {
        strictMessage: false
      },
      fullInstall: true,
      forceStringify: false,
      runtimeOnly: false,
      include: resolve(__dirname, "..", "lang/**"),
      precompile: {
        strictMessage: false
      },
      strictMessage: false
    })
  ]
};
