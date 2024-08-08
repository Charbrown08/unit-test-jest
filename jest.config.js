module.exports = {
  verbose: true,
  testMatch: ['**/__test__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '^@functions/(.*)$': '<rootDir>/src/functions/$1',
  },
}
