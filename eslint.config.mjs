import pluginReact from "eslint-plugin-react";
import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginReact.configs.flat.recommended,
    {
        plugins: ["import"], // eslint-plugin-import 플러그인 활성화
        rules: {
            "import/prefer-default-export": "off", // 'import/prefer-default-export' 규칙 비활성화
        },
    },
];