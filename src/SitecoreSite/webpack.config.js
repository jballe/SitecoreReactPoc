const webpack = require('webpack');
const merge = require('webpack-merge');

var cfg = {
    output: {
        path: __dirname + '/content',
        filename: '[name].min.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: []
}


module.exports = [
    merge(cfg, {
        entry: {
            client: __dirname + '/scripts/client.js',
        }
    }),

    merge(cfg, {
        entry: {
            server: __dirname + '/scripts/server.js'
        },
        output: {
            library: 'common__ext',
            libraryTarget: 'var' 
        }
    })
];