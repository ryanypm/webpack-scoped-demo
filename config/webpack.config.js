const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const rules = require('./webpack.rules.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const watchFiles = [];
if (process.env.npm_config_env_monitor) {
    const watchs = process.env.npm_config_env_monitor.split(',');
    watchs.forEach(file => watchFiles.push(file));
}

const getFileNameList = (oPath) => {
    let fileList = [];
    const getFile = (nextPath) => {
        const files = fs.readdirSync(nextPath);
        if(!files.length)return;

        files.forEach(item => {
            const _p = path.join(nextPath, `./${item}`);
            const stat = fs.statSync(_p);

            if (stat.isDirectory()) {
                return getFile(_p);
            }

            const isHtml = /\.html$/.test(item) && stat.isFile();
            const isWin =  process.platform.indexOf('win32') !== -1;
            const itemPath = !isWin ? _p : _p.replace(/\\/ig, '/');
            const isWatchFiles = !watchFiles.length ? true : watchFiles.some(f => itemPath.indexOf(f) !== -1);
            if (isHtml && isWatchFiles) {
                const pagePath = _p.substr(0, _p.lastIndexOf('.'));
                const srcRoot = pagePath.substr(pagePath.lastIndexOf(isWin ? 'src\\' : 'src/')+4);
                const enterName = srcRoot.split(isWin ? '\\' : '/').join('-');
                let suffix = '';
                if (fs.existsSync(`${pagePath}.js`)) {
                    suffix = 'js';
                } else if (fs.existsSync(`${pagePath}.tsx`)) {
                    suffix = 'tsx';
                } else if (fs.existsSync(`${pagePath}.ts`)) {
                    suffix = 'ts';
                }
                fileList.push({
                    name: srcRoot,
                    path: _p,
                    pagePath,
                    enterName,
                    isEnter: !!suffix,
                    enterPath: `${pagePath}.${suffix}`,
                });
            }
        });
    }
    getFile(oPath);
    return fileList;
}

const htmlDirs = getFileNameList(config.HTML_PATH);

let HTMLPlugins = [];
let Entries = {};

htmlDirs.forEach((page) => {
    let htmlConfig = {
        filename: `${page.name}.html`,
        template: `${page.path}`,
        minify: isProd ? {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            html5: true,
            minifyCSS: true,
            removeComments: true,
            removeEmptyAttributes: true,
        } : false,
    }

    let found = config.ignorePages.findIndex((val) => {
        return val === page.name;
    });

    if (found === -1 && page.isEnter) {
        Entries[page.enterName] = `${page.enterPath}`;
        htmlConfig.chunks = ['vendor', 'common', page.enterName];
    } else {
        htmlConfig.chunks = ['vendor', 'common'];
    }

    const htmlPlugin = new HtmlWebpackPlugin(htmlConfig);
    HTMLPlugins.push(htmlPlugin);
});

const webpackConfig = {
    entry: Entries,
    output: {
        path: config.BUILD_PATH,
        filename: '[name].[chunkhash:6].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules,
    },
    plugins: [
        ...HTMLPlugins,
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "all",
                    name: 'common',
                    minChunks: 1,
                    minSize: 0,
                    test: (modules) => {
                        return (
                            modules.resource &&
                            modules.resource.indexOf('/config.ts') !== -1
                        );
                    },
                },
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },
    devtool: 'source-map',
};

module.exports = webpackConfig;
