module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": "off",
    "multiline-ternary": ["error", "never"],
    eqeqeq: ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "function-call-argument-newline": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "dot-location": ["error", "property"],
    "no-new-object": "error",
    "semi-spacing": ["error", { before: false, after: true }],
    "space-before-blocks": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "no-array-constructor": "error",
    camelcase: [
      "error",
      {
        properties: "always",
        ignoreDestructuring: true,
        ignoreGlobals: true,
      },
    ],
    "brace-style": ["error", "stroustrup"],
    "no-inline-comments": "error",
  },
};
