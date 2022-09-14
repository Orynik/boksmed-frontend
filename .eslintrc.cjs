module.exports = {
  root: true,

  env: {
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "vue/multi-word-component-names": 0,
    'promise/always-return': 'off',
  },
};
