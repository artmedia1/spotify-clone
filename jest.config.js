module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // For testing in a browser-like environment
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for jest-dom and any global config
    // moduleNameMapper: { // Handle module aliases (if you use them) and static file imports
    //   '^@/components/(.*)$': '<rootDir>/components/$1',
    //   '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mocks CSS imports for Jest
    //   '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mocks image imports
    // },
    // testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // Avoid testing files in .next and node_modules
  };
  