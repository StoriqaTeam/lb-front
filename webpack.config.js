const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
     entry: "./src/index.js",
  output: {
     filename: "bundled.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/'
  },   watchOptions: {
        poll: true
    },
      devServer: {
        port: 3022,
        historyApiFallback: true,
publicPath: '/',

        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3022",
            "Access-Control-Allow-Credentials": "true"
        }
    },
    module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg|ttf|woff|woff2|eot)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}