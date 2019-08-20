const rules = [{
        test: /\.(tsx|ts)?$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'awesome-typescript-loader'
            }
        ]
    }, {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader'
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
    }, { loader: 'scoped-css-loader' },
    {
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
    }, { loader: 'scoped-css-loader' },
    {
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
