const path = require('path');

module.exports = {
  mode: 'development', // production
  entry: {
    digimon: './src/index.js',
    regVerify: './src/regVerify/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
}