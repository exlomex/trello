/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    clearMocks: true,

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    // An array of directory names to
    // be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    testMatch: [
        '<rootDir>/**/*(*.)@(spec|test).[tj]s?()',
    ],

    preset: 'ts-jest',
};
