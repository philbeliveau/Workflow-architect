import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      
      // Timer Management Best Practices
      'no-restricted-globals': [
        'error',
        {
          name: 'setInterval',
          message: 'Use useStrictModeSafeTimer hook instead of direct setInterval to prevent race conditions'
        },
        {
          name: 'setTimeout',
          message: 'Consider using useCallback with dependencies or useStrictModeSafeTimer for timer-related functionality'
        }
      ],
      
      // Ensure proper cleanup of timers in React components
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useStrictModeSafeTimer|useTimer)'
        }
      ],
      
      // Pattern matching for common timer anti-patterns
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.name="setInterval"] ~ :not(ReturnStatement)',
          message: 'setInterval must have corresponding clearInterval in cleanup function'
        },
        {
          selector: 'CallExpression[callee.property.name="setInterval"]:not(:has(ReturnStatement))',
          message: 'Timer must be cleared in useEffect cleanup'
        }
      ]
    },
  },
  // Allow timer utilities to use raw timers for their safeguard implementations
  {
    files: ["src/hooks/useStrictModeSafeTimer.ts", "src/utils/timerValidation.ts"],
    rules: {
      'no-restricted-globals': 'off',
      'no-restricted-syntax': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];

export default eslintConfig;
