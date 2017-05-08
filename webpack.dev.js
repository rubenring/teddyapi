const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge([{
  entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
    ],
    output: {
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host: 'localhost',
        port: '3000',
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
},
]);
