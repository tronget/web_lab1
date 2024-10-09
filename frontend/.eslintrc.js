module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: "./src/scripts/tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
        // 'prettier/prettier': 'error',
        "import/extensions": [
            "error",
            "ignorePackages",
            { ts: "never" },
        ],
        "@typescript-eslint/no-unused-vars": ["error"],
    },
};
