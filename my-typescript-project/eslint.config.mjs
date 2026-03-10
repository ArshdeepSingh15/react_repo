import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // General JS/TS files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, react: pluginReact },
    extends: [
      "js/recommended", // General JS rules
      tseslint.configs.recommended, // TypeScript rules
      pluginReact.configs.flat.recommended, // React rules
    ],
    languageOptions: { globals: globals.browser },
    settings: {
      react: { version: "detect" }, // Automatically detect React version
    },
  },

  // JS CommonJS files
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
]);
