/* eslint-disable */
export default {
  displayName: 'designs',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  coverageDirectory: '../../coverage/libs/designs',
};
