var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');

var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
 hot: true,
 publicPath: 'http://localhost:3000',
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.listen(3000, function(){
  console.log ('Server is listening on port 3000...');
});