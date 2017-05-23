const path = require('path');

module.exports = [
    {
        entry: {
            client: path.resolve('./scripts/client.js'),
            server: path.resolve('./scripts/server.js')
        },
        output: {
            path: path.resolve('content'),
            filename: '[name].min.js'
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
            ]
        },
        plugins: []
    }
];