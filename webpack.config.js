const path = require("path");

module.exports = [
  {
    entry: "./src/client.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".css", ".es6"]
    }
  },
  {
    entry: "./src/server.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "server.js"
    },
    target: "node",
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".css", ".es6"]
    }
  }
];
