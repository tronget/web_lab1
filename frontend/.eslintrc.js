module.exports = {
    parser: "@typescript-eslint/parser", // Парсер для TypeScript
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: "./src/scripts/tsconfig.json", // Укажите путь к вашему tsconfig.json
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "import"], // Подключение плагинов
    rules: {
        // 'prettier/prettier': 'error',
        "import/extensions": [
            "error",
            "ignorePackages",
            { ts: "never" },
        ],
        "@typescript-eslint/no-unused-vars": ["error"], // Ошибка на неиспользуемые переменные
    },
    // settings: {
    //     react: {
    //         version: "detect", // Автодетект версии React
    //     },
    // },
};
