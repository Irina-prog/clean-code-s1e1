module.exports = {
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/quotes': ['error', 'double'],
        '@html-eslint/indent': ['error', 2],
        "@html-eslint/no-multiple-empty-lines": "error",
        "@html-eslint/no-trailing-spaces": "error",
        "@html-eslint/no-inline-styles": "error",
        "@html-eslint/no-duplicate-attrs": "error",
        "@html-eslint/no-multiple-h1": "error",
        "@html-eslint/element-newline": "error",
        "@html-eslint/no-trailing-spaces": "error",
        "@html-eslint/no-extra-spacing-attrs": "error",
      },
    }
  ],
  rules: {
    indent: ['error', 2],
  },
};
