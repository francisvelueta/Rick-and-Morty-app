const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
       },

      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }

    ]
  },
  plugins: [
             new CleanWebpackPlugin([settings.distPath], {
                 verbose: true
             }),
             new HtmlWebpackPlugin({
                 template: srcPathExtend("index.html")
             })
         ]

}
