/* eslint-env node */
// prettier.config.js
module.exports = {
  bracketSpacing: true,
  semi: false,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-organize-imports"),
  ],
}
