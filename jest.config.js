export default {
  testMatch: [
    // Test WASM code through JS Binding.
    "<rootDir>/public/**/__tests__/*.test.ts",
  ],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
