const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        return /.*\/wordlists\/(?!english).*\.json/.test(resource);
      }
    }),
    new TerserPlugin({
      terserOptions: {
        mangle: {
          reserved: [
            "generateKeypair",
            "generateMnemonic",
            "getPairFromPrivate",
            "Key"
          ]
        }
      }
    })
  ],
  mode: "production"
};
