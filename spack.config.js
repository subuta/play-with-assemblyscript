const { config } = require("@swc/core/spack");

module.exports = config({
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
  },
  module: {},
});
