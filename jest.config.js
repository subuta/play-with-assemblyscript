export default {
  testMatch: [
    // Test AssemblyScript code as TS.
    "<rootDir>/assembly/**/__tests__/*.test.ts",
    // Test WASM code through JS Binding.
    "<rootDir>/public/**/__tests__/*.test.ts",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
