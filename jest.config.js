module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatters: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.scss|sass|css)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src'],
};
