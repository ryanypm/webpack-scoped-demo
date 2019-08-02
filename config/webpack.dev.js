const devConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');

const config = Object.assign({}, devConfig, {
    plugins: devConfig.plugins.concat([new webpack.DefinePlugin({
        'process.env': {
                'NODE_ENV': JSON.stringify('beta')
            }
        })
    ]),
    devtool: 'source-map',
});


module.exports = config;
