/* eslint-disable no-magic-numbers */
module.exports = {
  env: { es6: true, browser: true },
  parserOptions: { ecmaVersion: 2020 },
  plugins: ['import'],
  extends: ['eslint:recommended', 'plugin:import/errors'],
  rules: {
    // eslint:recommended
    'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],

    // Auto-fixable rules
    'no-extra-parens': 'error',
    curly: 'error',
    'dot-location': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: true }],
    yoda: 'error',

    // Possible errors
    'no-console': 'error',
    'no-import-assign': 'error',
    'no-template-curly-in-string': 'warn',

    // Best practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'warn',
    'default-param-last': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['warn', { ignoreArrayIndexes: true, enforceConst: true }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: true }],
    'no-proto': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'warn',
    'vars-on-top': 'error',

    // Variables
    'init-declarations': 'error',
    'no-shadow': 'error',
    'no-undefined': 'warn',
    'no-use-before-define': 'error',

    // Callbacks
    'callback-return': 'error',
    'handle-callback-err': ['error', '^.*(e|E)rr'],

    // Code style (most are autofix)
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    camelcase: 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['warn', { code: 100 }],
    'max-params': 'warn',
    'multiline-comment-style': ['error', 'separate-lines'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'warn',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'warn',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'default' },
      { blankLine: 'always', prev: '*', next: 'expression' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },
      { blankLine: 'always', prev: '*', next: 'debugger' },
      { blankLine: 'always', prev: 'debugger', next: '*' },
      { blankLine: 'always', prev: '*', next: 'import' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'cjs-import' },
      { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
      { blankLine: 'always', prev: '*', next: 'cjs-export' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' }
    ],
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': 'error',
    'space-infix-ops': ['error', { int32Hint: true }],
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',

    // ES6
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',

    // import
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'unknown', ['internal', 'parent', 'sibling', 'index']],
        'newlines-between': 'always-and-inside-groups'
      }
    ]
  }
}