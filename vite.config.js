import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        appSchool: resolve(__dirname, "resources/school/index.html"),
        appStudent: resolve(__dirname, "resources/student/index.html"),
        appAuth: resolve(__dirname, "resources/auth/index.html"),
      },
    },
  },
});
