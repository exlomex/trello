const nextJest = require('next/jest');
const path = require('node:path');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    clearMocks: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'], // <= setup file here

    testEnvironment: 'jsdom',

    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

    moduleDirectories: ['node_modules'],

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
    testMatch: ['<rootDir>/**/*(*.)@(spec|test).[tj]s?(x)'],

    preset: 'ts-jest/presets/default-esm',
    moduleNameMapper: {
        'react-dnd': 'react-dnd-cjs',
        'react-dnd-html5-backend': 'react-dnd-html5-backend-cjs',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};

module.exports = createJestConfig(customJestConfig);
