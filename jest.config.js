module.exports = {
    roots: ['<rootDir>/'],
    testMatch: ["<rootDir>/**/*.test.{js,jsx,ts,tsx}",
        '<rootDir>/src/**/*.test.js'],
    moduleNameMapper: {
        "^.+\\.(css|less)$": "<rootDir>/config/cssTub.js",
        "\\.(gif|ttf|png|svg)$": "<rootDir>/config/imagesTub.js"
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    testEnvironment: "jsdom",
    "collectCoverage": true
};
