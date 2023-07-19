module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json', // Убедитесь, что здесь указан правильный путь к вашему tsconfig.json
        extraFileExtensions: ['.svelte'], // Добавьте это свойство для поддержки файлов .svelte
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString" : false,
                "allowNumber" : false
            }
        ]
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}