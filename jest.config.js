module.exports = {
  // depreciated use setupFilesAfterEnv instead.
  // setupTestFrameworkScriptFile:'<rootDir>/testSetup.js'
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css)$': 'jest-transform-css'
  }
}
