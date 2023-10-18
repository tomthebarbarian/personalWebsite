module.exports = {
  root: true,
  env: {
    browser: true, es2020: true, "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }],
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      // "semi": [
      //   "error",
      //   "always"
      // ],
      "no-var": "error",
      "no-console": "off",
      "no-unused-vars": "warn",
      "func-call-spacing": [
        "error",
        "never"
      ],
      "space-before-blocks": "error",
      "keyword-spacing": "error",
      "no-trailing-spaces": ["error", { "skipBlankLines": true }],
      "semi-spacing": "error",
      "func-style": ["error", "expression"],
      "space-infix-ops": "error",
      "space-in-parens": "error",
      // "camelcase": "error",
      "eqeqeq": "error",
      "brace-style": "error",
      "space-before-function-paren": ["warn", { "anonymous": "never", "named": "never", "asyncArrow": "never" }],
      "func-names": ["error", "never"],
      "quotes": "off"
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
}

