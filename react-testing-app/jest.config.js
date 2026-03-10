module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",       // often excluded (just bootstraps React)
    "!**/*.d.ts"
  ],
  coverageReporters: ["text", "html", "lcov"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  }
};