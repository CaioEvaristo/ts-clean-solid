module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        'src/**/*.d.ts',
        'src/index.tsx',
    ],
    coverageDirectory: 'coverage',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest',
    }
};