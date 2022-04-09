// jest.config.js
/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'test/tsconfig.json',
      useESM: true
    }
  },
  preset: "ts-jest/presets/default-esm",
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/(__tests__|test)/$1',
    '$lib/(.*)$': '<rootDir>/src/lib/$1'
  },
  testMatch: [
    '<rootDir>/__tests__/**/(*.)test.(ts|js|tsx|jsx)',
    '<rootDir>/__tests__/**/(*.)spec.(ts|js|tsx|jsx)',
    '<rootDir>/test/**/(*.)test.(ts|js|tsx|jsx)',
    '<rootDir>/test/**/(*.)spec.(ts|js|tsx|jsx)'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'miniflare',
  testEnvironmentOptions: {
    kvNamespaces: ['TEST_SCG']
  },
  // watchPathIgnorePatterns: ['<rootDir>/node_modules'],
};
