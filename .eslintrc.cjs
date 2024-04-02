module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:eqeqeq-fix/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'import', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^react',
            '^@?\\w',
            '^(app|pages|widgets|features|entities|shared|main)(/.*|$)',
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'line-length',
        order: 'desc',
        groups: ['multiline', 'unknown', 'shorthand'],
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],

    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],
  },
};
