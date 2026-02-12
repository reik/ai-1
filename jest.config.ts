import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}

export default config
