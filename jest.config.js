module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/',
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss|less)$',
    ],

  };