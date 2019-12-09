module.exports = {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        // 'plugin:angular/johnpapa'
    ],
    plugins: ["@typescript-eslint"],
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 'off',
        "@typescript-eslint/explicit-function-return-type": 'off',
        "@typescript-eslint/no-use-before-define": ['off'],
        "no-use-before-define": ['off'],
        "camelcase": ['error', {"ignoreDestructuring": true}],
        "eqeqeq": ['error', 'always'],
        "no-else-return": ['error'],
        "use-isnan": ['error'],
        "no-multi-spaces": ['error'],
        "no-floating-decimal": ['error'],
        "no-extra-bind": ['error'],
        "no-with": ['error'],
        "arrow-spacing": ['error'],
        "no-useless-rename": ['error'],
        "no-var": ['error'],
        "prefer-arrow-callback": ['error'],
        "prefer-const": ['error'],
        "prefer-numeric-literals": ['error'],
        "prefer-template": ['error'],
        "no-delete-var": ['error'],
        "no-self-assign": ['error', {props: true}],
        "no-useless-return": ['error'],
        "no-return-await": 'error',
        "require-await": 'error',
        "require-atomic-updates": 'error',
        "no-async-promise-executor": 'error',
        "no-undef": ['off'], // handled by tsc
        "no-unused-vars":['error',{ "ignoreRestSiblings": true }],
        "@typescript-eslint/no-unused-vars": ['error',{ "ignoreRestSiblings": true }],
        "semi": ['error', 'always'],
        "@typescript-eslint/no-var-requires": ['error'],
        "quotes": ['error', 'single', {allowTemplateLiterals: true}],
        "comma-dangle": ['error', {functions: 'only-multiline', imports: 'only-multiline', objects: 'only-multiline', arrays: 'only-multiline', exports: 'never'}],
        "curly": ['error', 'all'],
    }
};