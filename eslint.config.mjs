// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // {
  //   ignores: [
  //     '**/api/**/*',
  //   ],
  // },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.vue'],
    rules: {
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['warn', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/singleline-html-element-content-newline': ['warn', {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'a'],
      }],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      eqeqeq: 'off',
      camelcase: 'off',
      'no-empty-pattern': 'warn',
      'require-await': 'warn',
      'vue/no-mutating-props': 'off',
      'no-useless-escape': 'off',

      // stylistic
      '@stylistic/indent': ['warn', 2, { SwitchCase: 1 }],
      '@stylistic/semi': ['warn', 'always', { omitLastInOneLineBlock: true }],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never',
      }],
      '@stylistic/quote-props': ['warn', 'as-needed'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'], // require padding inside curly braces
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // enable later:
      'no-console': 'off',
      'no-unused-vars': 'off',
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/max-statements-per-line': 'off',
      '@stylistic/operator-linebreak': 'off',
    },
  },
);
