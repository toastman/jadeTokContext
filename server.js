'use strict';

var express = require('express');
var app = express();
var React = require('react');

require('node-jsx').install();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  var App = require("./app/components/App.js");
  var content = React.renderToString(React.createElement(App, null));
  res.render('main', {content: content});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
