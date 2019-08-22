module.exports = {
  extends: "eslint:recommended",
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015
  },
  env: {
    browser: true
  },
  rules: {
    indent: ["error", 2]
  }
};
