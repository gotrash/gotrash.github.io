import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "uk.co.gotrash.app",
  appName: "GoTrash",
  webDir: "dist",
  server: {
    androidScheme: "https"
  }
};

export default config;
