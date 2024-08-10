module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest-dom/recommended", // Add jest-dom recommended rules
  ],
  plugins: ["react", "jest-dom"],
  rules: {
    "jest-dom/prefer-enabled-disabled": "error", // Enables the rule you're seeing in the terminal
    // Other rules...
  },
};
