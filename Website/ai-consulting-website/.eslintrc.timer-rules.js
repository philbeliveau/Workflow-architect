/**
 * ESLint Rules for Timer Management Best Practices
 * 
 * Prevents common timer-related issues and race conditions
 * 
 * Usage: Add these rules to your main .eslintrc.js file
 */

module.exports = {
  rules: {
    // Prevent direct setInterval/setTimeout usage in components
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
    
    // Ensure proper cleanup of timers
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useStrictModeSafeTimer|useTimer)'
      }
    ],
    
    // Prevent missing cleanup in useEffect
    'react-hooks/rules-of-hooks': 'error',
    
    // Custom rules for timer management
    'timer-management/require-cleanup': 'error',
    'timer-management/no-timer-in-render': 'error',
    'timer-management/prefer-safe-timer-hook': 'warn'
  },
  
  // Custom rule definitions
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
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
      }
    }
  ],
  
  // Additional settings for timer validation
  settings: {
    'timer-management': {
      'safe-hooks': ['useStrictModeSafeTimer', 'useTimer'],
      'require-cleanup': true,
      'max-timers-per-component': 3
    }
  }
};

/**
 * Custom ESLint Rule: timer-management/require-cleanup
 * 
 * Ensures that any component using timers has proper cleanup
 */
const requireCleanupRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require proper timer cleanup in React components',
      category: 'Possible Errors',
      recommended: true
    },
    schema: []
  },
  
  create(context) {
    let hasTimer = false;
    let hasCleanup = false;
    
    return {
      CallExpression(node) {
        // Detect timer usage
        if (
          (node.callee.name === 'setInterval' || 
           node.callee.name === 'setTimeout') ||
          (node.callee.property && 
           (node.callee.property.name === 'setInterval' || 
            node.callee.property.name === 'setTimeout'))
        ) {
          hasTimer = true;
        }
      },
      
      ReturnStatement(node) {
        // Detect cleanup in useEffect
        if (
          node.argument && 
          node.argument.type === 'ArrowFunctionExpression'
        ) {
          hasCleanup = true;
        }
      },
      
      'Program:exit'() {
        if (hasTimer && !hasCleanup) {
          context.report({
            node: context.getSourceCode().ast,
            message: 'Components using timers must include cleanup in useEffect return function'
          });
        }
      }
    };
  }
};

/**
 * Custom ESLint Rule: timer-management/no-timer-in-render
 * 
 * Prevents timer creation during render
 */
const noTimerInRenderRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent timer creation during component render',
      category: 'Possible Errors',
      recommended: true
    },
    schema: []
  },
  
  create(context) {
    let inRenderFunction = false;
    
    return {
      FunctionDeclaration(node) {
        // Detect React component functions
        if (
          node.id && 
          /^[A-Z]/.test(node.id.name) && 
          node.params.length <= 1
        ) {
          inRenderFunction = true;
        }
      },
      
      ArrowFunctionExpression(node) {
        // Detect React component arrow functions
        const parent = node.parent;
        if (
          parent.type === 'VariableDeclarator' &&
          parent.id.name &&
          /^[A-Z]/.test(parent.id.name)
        ) {
          inRenderFunction = true;
        }
      },
      
      CallExpression(node) {
        if (
          inRenderFunction &&
          ((node.callee.name === 'setInterval' || node.callee.name === 'setTimeout') ||
           (node.callee.property && 
            (node.callee.property.name === 'setInterval' || node.callee.property.name === 'setTimeout')))
        ) {
          context.report({
            node,
            message: 'Do not create timers during component render. Use useEffect or timer hooks instead.'
          });
        }
      },
      
      'FunctionDeclaration:exit'() {
        inRenderFunction = false;
      },
      
      'ArrowFunctionExpression:exit'() {
        inRenderFunction = false;
      }
    };
  }
};

/**
 * Custom ESLint Rule: timer-management/prefer-safe-timer-hook
 * 
 * Suggests using safe timer hooks instead of raw timers
 */
const preferSafeTimerHookRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer safe timer hooks over raw timer APIs',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },
  
  create(context) {
    return {
      CallExpression(node) {
        if (
          (node.callee.name === 'setInterval' || node.callee.name === 'setTimeout') &&
          node.parent.type !== 'VariableDeclarator'
        ) {
          context.report({
            node,
            message: 'Consider using useStrictModeSafeTimer hook for better race condition protection'
          });
        }
      }
    };
  }
};

// Export custom rules for use in ESLint config
module.exports.rules = {
  'timer-management/require-cleanup': requireCleanupRule,
  'timer-management/no-timer-in-render': noTimerInRenderRule,
  'timer-management/prefer-safe-timer-hook': preferSafeTimerHookRule
};