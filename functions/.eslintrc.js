module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
    "object-curly-spacing": [2, "always"],
  },
  rules: {
    quotes: ["error", "double"],
    indent: "off",
  },
};
