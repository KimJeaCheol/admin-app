import pluginReact from "eslint-plugin-react";
import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            import: pluginImport, // 'import' 플러그인 객체 형식으로 수정
        },
        rules: {
            "import/prefer-default-export": "off", // 'import/prefer-default-export' 규칙 비활성화
        },
    },
];