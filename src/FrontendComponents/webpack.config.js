const path = require('path');

module.exports = {
    entry: __dirname + '/site/site.js',
    output: {
        path: path.resolve('site'),
        filename: 'bundle.min.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
    ]
};