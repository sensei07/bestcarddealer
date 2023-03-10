module.exports = {
    extends: [
        'react-app',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'jest',
        'unused-imports'
    ],
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    'settings': {
        'import/resolver': {
            'node': {
                'paths': [
                    'src'
                ]
            }
        }
    },
    'rules': {
        'prettier/prettier': [
            'warn',
            {
                'arrowParens': 'always',
                'bracketSpacing': true,
                'jsxBracketSameLine': false,
                'jsxSingleQuote': true,
                'printWidth': 120,
                'proseWrap': 'always',
                'quoteProps': 'as-needed',
                'semi': true,
                'singleQuote': true,
                'tabWidth': 2,
                'useTabs': false,
                'endOfLine': 'auto',
                'trailingComma': 'all'
            }
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
                'extensions': [
                    '.js',
                    '.jsx',
                    '.tsx',
                    '.ts',
                ]
            }
        ],
        'import/no-extraneous-dependencies': ['warn', {'devDependencies': true}],
        'no-unused-vars': 'off',
        'no-console': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'import/no-unresolved': 'off',
        'global-require': 'off',
        'react/no-unescaped-entities': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/state-in-constructor': 'off',
        'react/no-danger': 'off',
        'react/prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/no-unused-prop-types': 'off',
        'react/jsx-no-bind': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'quotes': [
            2,
            'single'
        ],
        'jsx-quotes': [
            2,
            'prefer-single'
        ],
        'object-curly-spacing': ['error', 'always'],
        'import/newline-after-import': 'error',
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index'
                ],
                'newlines-between': 'always',
                'alphabetize': {'order': 'asc', 'caseInsensitive': true}
            }
        ],
        'no-return-await': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                'required': {
                    'some': [
                        'nesting',
                        'id'
                    ]
                }
            }
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                'required': {
                    'some': [
                        'nesting',
                        'id'
                    ]
                }
            }
        ],
        'no-use-before-define': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never',
            }
        ],
        'no-shadow': 'off',
        'max-len': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'import/prefer-default-export': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/require-default-props': 'off',
        'react/jsx-one-expression-per-line': 0,
        'arrow-body-style': 'off',
        'camelcase': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement'
        ]
    }
}
