import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    name: "default",
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/components/**/*.test.tsx"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/components/**/*.tsx"],
      exclude: ["src/components/**/*.stories.tsx"],
    },
  },
});
