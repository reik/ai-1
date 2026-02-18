/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
      tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}

module.exports = config
