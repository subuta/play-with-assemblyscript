// SEE: [Support spack.config.cjs · Issue #3345 · swc-project/swc](https://github.com/swc-project/swc/issues/3345#issuecomment-1032196068)
const { config } = require("@swc/core/spack");

module.exports = config({
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
  },
  module: {},
});
