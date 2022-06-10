// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config

module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/",
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@env": "<rootDir>/src/environments/environment",
    "@test/(.*)": "<rootDir>/src/test/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
  moduleFileExtensions: ["ts", "html", "js", "json", "mjs"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
};
