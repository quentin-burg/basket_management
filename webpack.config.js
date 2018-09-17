const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry  : './src/index.js',
  output : {
    filename   : 'bundle.js',
    path       : path.resolve(__dirname, 'dist'),
    publicPath : '/',
  },
  mode      : 'development',
  devServer : {
    historyApiFallback : true,
  },
  module : {
    rules : [
      {
        test    : /\.jsx?$/,
        exclude : /node_modules/,
        use     : [
          {
            loader  : 'babel-loader',
            options : {
              presets : ['@babel/react'],
            },
          },
        ],
      },
    ],
  },
  plugins : [
    new CopyWebpackPlugin([
      // Copy index.html in output folder
      {
        from : path.join(__dirname, 'index.html'),
      },
    ]),
    new HtmlWebPackPlugin({
      template : './index.html',
      filename : './index.html',
    }),
  ],
};
