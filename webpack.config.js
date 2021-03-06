const path = require('path');
const merge = require('webpack-merge');
const productionConfig = require('./webpack.prod.js');
const developmentConfig = require('./webpack.dev.js');
const webpack = require('webpack');

const PATHS = {
  src: path.resolve(__dirname, 'server.js'),
  dist: path.resolve(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: [
      PATHS.src,
    ],
    target: 'node',
    output: {
      path: PATHS.dist,
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
          filename: '[name].js.map',
      }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                  presets: ['es2015'],
              },
            },
        },
        {
          test: /\.mp3$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'file-loader',
          },
        }],
    },
  },
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
