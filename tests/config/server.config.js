module.exports = {
  roots: ['../'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [], // there aren't cookies on server
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/setupConfig.js'],
}
