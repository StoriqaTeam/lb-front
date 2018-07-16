const webpack                    = require('webpack');
const UglifyJSPlugin             = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin          = require('extract-text-webpack-plugin');
const path                       = require('path');
const CleanWebpackPlugin         = require('clean-webpack-plugin');
const HtmlWebpackPlugin          = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const   NODE_ENV = "production"            


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  target: 'web',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: "css-loader",
            options: {
              minimize: true
            }
          }],
        })
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /.*\.(jpg|jpeg|png|svg)$/i,
        loader: 'file-loader?name=src/images/[name].[ext]'
      },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=src/fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=src/fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=src/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=src/fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=src/fonts/[name].[ext]' }
    ]
  },
  plugins: [


    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin('src/stylesheets/[name].css', {
        allChunks: true
    })
    ,
   
    new HtmlWebpackPlugin({
      template: "./build/index.html",
      inject: "footer",
      title: 'Caching'

    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  }
 }