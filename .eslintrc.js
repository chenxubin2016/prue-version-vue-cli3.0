module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // allow async-await
    'generator-star-spacing': 'off',
    'allowEmptyReject': 0,
    // allow debugger during development
    'no-trailing-spaces': 'off',
    'semi': ['error', 'always', {'omitLastInOneLineBlock': true}],
    'one-var': ['error', {
      'var': 'consecutive',
      'let': 'consecutive',
      'const': 'consecutive'
    }]
  }
};
