/**
 * 
 */
import { unstable_vitePlugin as remix } from "@remix-run/dev";

/**
 * 
 */
import { defineConfig } from "vite";

/**
 * 
 */
import tsconfig from "vite-tsconfig-paths";

/**
 * 
 */
export default defineConfig({
  plugins: [remix(), tsconfig()]
});