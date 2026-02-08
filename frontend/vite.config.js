// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// ___________________________________________________________________________
// When Unit Test files are added, the above code is replaced with the below code to configure Vitest for testing.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
  },
  coverage: {
    exclude: [
      "src/components/Services/**",
      "src/components/Navbar/**",
      "src/assets/**",
    ],
  },
});
