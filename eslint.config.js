import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["src/**/*.{js,jsx}"],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true }, sourceType: "module" },
    },
    rules: {
      // Components (<Icon />) and the lightweight motion component (<m.div>) are used only in JSX,
      // which the base rule can't see, so those names are ignored.
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]|^m$", argsIgnorePattern: "^_" }],
    },
  },
]);
