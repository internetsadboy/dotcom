const path = require('path');

module.exports = {
  entry: './src/App.js', // rel path
  output: {
    path: path.join(__dirname, 'public'), // abs path
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.(png|jpg|gif)$/,
        loader: 'file-loader',
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map', // debugging
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
