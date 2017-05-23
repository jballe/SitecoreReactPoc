"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require(__dirname + '/webpack.config.js');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var app = express();
app.use('/assets', proxy(url.parse('http://localhost:8089/assets')));

app.get('/api/:datasourcetype/:datasourceid', function(req, res) {
    var filepath = __dirname + '/site/responses/' + req.params.datasourcetype + '/' + req.params.datasourceid+'.json';
    console.log(filepath);
    res.sendFile(filepath);
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/site/index.html');
});


var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname + '/site',
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",

    stats: { colors: true }
});

server.listen(8089, "localhost", function() {});
app.listen(8088);