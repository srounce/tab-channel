const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
let outputPath = path.resolve(__dirname, "test");

if (mode === "production") {
  outputPath = path.resolve(__dirname);
}

module.exports = {
  entry: {
    index: "./src/index.js",
    BroadcastChannel: "./src/BroadcastChannel.js",
    polyfill: "./src/polyfill.js"
  },
  output: {
    path: outputPath,
    filename: "[name].js",
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: path.join(__dirname, "test"),
    compress: true,
    port: 9000
  },
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env"]
            }
          },
          {
            loader: "eslint-loader",
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  }
};
