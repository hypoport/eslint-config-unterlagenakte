module.exports = {
  rules: {
    "@typescript-eslint/explicit-function-return-type": 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    "@typescript-eslint/no-explicit-any": 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    "@typescript-eslint/no-unused-vars": ['error', {"ignoreRestSiblings": true}], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "@typescript-eslint/no-use-before-define": ['off'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "@typescript-eslint/no-var-requires": ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    "arrow-spacing": ['error'], // https://eslint.org/docs/rules/arrow-spacing
    "camelcase": ['error', {"ignoreDestructuring": true}], // https://eslint.org/docs/rules/camelcase
    "comma-dangle": ['error', {functions: 'only-multiline', imports: 'only-multiline', objects: 'only-multiline', arrays: 'only-multiline', exports: 'never'}], // https://eslint.org/docs/rules/comma-dangle
    "curly": ['error', 'all'], // https://eslint.org/docs/rules/curly
    "eqeqeq": ['error', 'always'], // https://eslint.org/docs/rules/eqeqeq
    "no-async-promise-executor": 'error', // https://eslint.org/docs/rules/no-async-promise-executor
    "no-delete-var": ['error'], // https://eslint.org/docs/rules/no-delete-var
    "no-else-return": ['error'], // https://eslint.org/docs/rules/no-else-return
    "no-extra-bind": ['error'],  // https://eslint.org/docs/rules/no-extra-bind
    "no-floating-decimal": ['error'], // https://eslint.org/docs/rules/no-floating-decimal
    "no-multi-spaces": ['error'], // https://eslint.org/docs/rules/no-multi-spaces
    "no-return-await": 'error', // https://eslint.org/docs/rules/no-return-await
    "no-self-assign": ['error', {props: true}], // https://eslint.org/docs/rules/no-self-assign
    "no-undef": ['off'], // handled by tsc // https://eslint.org/docs/rules/no-undef
    "no-unused-vars": ['error', {"ignoreRestSiblings": true}], // https://eslint.org/docs/rules/no-unused-vars
    "no-use-before-define": ['off'], // https://eslint.org/docs/rules/no-use-before-define
    "no-useless-rename": ['error'], // https://eslint.org/docs/rules/no-useless-rename
    "no-useless-return": ['error'], // https://eslint.org/docs/rules/no-useless-return
    "no-var": ['error'], // https://eslint.org/docs/rules/no-var
    "no-with": ['error'], // https://eslint.org/docs/rules/no-with
    "prefer-arrow-callback": ['error'], // https://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": ['error'], // https://eslint.org/docs/rules/prefer-const
    "prefer-numeric-literals": ['error'], // https://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-template": ['error'], // https://eslint.org/docs/rules/prefer-template
    "quotes": ['error', 'single', {allowTemplateLiterals: true}], // https://eslint.org/docs/rules/quotes
    "require-atomic-updates": 'error', // https://eslint.org/docs/rules/require-atomic-updates
    "require-await": 'error', // https://eslint.org/docs/rules/require-await
    "semi": ['error', 'always'], // https://eslint.org/docs/rules/semi
    "use-isnan": ['error'], // https://eslint.org/docs/rules/use-isnan
  }
};
