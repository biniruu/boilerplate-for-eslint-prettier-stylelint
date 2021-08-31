module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    // 'plugin:chai-friendly/recommended',
    // 'plugin:mocha/recommended',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:jest/recommended',
    // 'plugin:jsx-a11y/recommended', // react.js 프로젝트 시 필요
    // 'plugin:nuxt/recommended',
    'plugin:prettier/recommended', // eslint의 포매팅 기능을 prettier로 사용. 항상 마지막에 세팅 되어야? (eslint-plugin-prettier)
    // 'plugin:react/recommended',
    // 'plugin:vue/strongly-recommended',
    // 'prettier/@typescript-eslint', // eslint의 typescript 포매팅 기능을 제거 (eslint-config-prettier)
    // 'prettier/react',
    // 'tsconfig.json', // project: 'tsconfig.json'을 활성화 하기 위해 꼭 필요
  ],
  // globals: {
  //   $nuxt: true,
  // },
  // ignorePatterns: ['.eslintrc.js'], // The file does not match your project config: eslintrc.js 에러 해결을 위해 필요
  // parser: '@typescript-eslint/parser',
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true, // 리액트의 JSX 파싱을 위해서
    // },
    ecmaVersion: 6,
    // project: 'tsconfig.json', // parser: @typescript-eslint/parsergst를 활성화 하기 위해 꼭 필요
    sourceType: 'module', // 모듈 시스템 사용 시
  },
  plugins: [
    // 'react-hooks',
  ],
  root: true,
  rules: {
    // '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    'generator-star-spacing': 'off', // allow async-await
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': ['warn', { bracketSpacing: true, printWidth: 120, singleQuote: true, trailingComma: 'all' }],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    // 'react/prop-types': [
    //   'warn',
    //   {
    //     // ignore: [], // optional array of props name to ignore during validation
    //     // customValidators: [], // optional array of validators used for propTypes validation
    //     skipUndeclared: true, // optional boolean to only error on components that have a propTypes block declared
    //   },
    // ],
    'space-before-function-paren': 'off', // allow debugger during development
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    // 'vue/no-unused-components': 'warn',
  },
  // settings: {
  //   react: {
  //     version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
  //   },
  // },
}
