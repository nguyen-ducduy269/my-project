import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        appSchool: resolve(__dirname, "index.html"),
        appStudent: resolve(__dirname, "myorder.html"),
        appAuth: resolve(__dirname, "check-out.html"),
      },
    },
  },
});
