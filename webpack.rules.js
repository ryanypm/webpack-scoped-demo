const rules = [{
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                ['env', {
                    loose: true,
                    // debug: true,
                }],
                'react',
            ],
            plugins: [
                'transform-class-properties',
            ],
        },
    },
}, {
    test: /\.(svg|png|jpg|gif)$/,
    use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
    }],
}, {
    test: /\.css$/,
    use: [{
        loader: 'style-loader',
    }, {
        loader: 'css-loader',
    }, {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')(),
            ],
        },
    }],
}, {
    test: /\.scss$/,
    use: [{
        loader: 'style-loader',
    }, {
        loader: 'css-loader',
    }, {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')(),
            ],
        },
    }, {
        loader: 'sass-loader',
    }],

}];

module.exports = rules;
