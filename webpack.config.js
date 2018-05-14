const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.rules.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: path.resolve('./src/app.js'),
        vendor: ['core-js/shim', 'react', 'react-dom'],
    },
    output: {
        path: path.resolve('./dist'),
        // publicPath: '/dist/',
        filename: '[name].[chunkhash:6].js',
    },
    externals: {
    },
    module: {
        rules,
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        new HtmlWebpackPlugin({
            title: '欢乐对战',
            filename: 'index.html',
            template: './index.html',
        }),
    ],
    devtool: 'source-map',
};

module.exports = config;
