module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: true,
  clearMocks: true,
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.{ts,js}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/*.config.js",
    "!**/coverage/**"
  ]
};
