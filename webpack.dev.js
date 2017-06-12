const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge([{
  entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
    ],
    output: {
        publicPath: 'http://localhost:3000/scripts/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
},
]);
