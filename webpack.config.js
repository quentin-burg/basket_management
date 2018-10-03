const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  console.log('The environment is : ', env);
  return {
    entry  : './src/index.js',
    output : {
      filename   : 'bundle.js',
      path       : path.resolve(__dirname, 'dist'),
      publicPath : '/',
    },
    mode      : 'production',
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
                presets : ['babel-preset-react'],
              },
            },
          ],
        },
        {
          test    : /\.json$/,
          exclude : /node_modules/,
          use     : [
            {
              loader : 'json-loader',
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
      new CopyWebpackPlugin([
        // Copy index.html in output folder
        {
          from : path.join(__dirname, 'server'),
          to   : path.join(__dirname, 'dist', 'server'),
        },
      ]),
      new HtmlWebPackPlugin({
        template : './index.html',
        filename : './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env' : {
          ENV : JSON.stringify(env),
        },
      }),
    ],
  };
};
