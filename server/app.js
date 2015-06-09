/**
 * Main application file
 */

'use strict';
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io').listen(server);
require('./config/express')(app);
require('./routes')(app,socket);

var T = require('./config/twit').Twit;
var stream1 = T.stream('statuses/filter', { track: 'vagas' });
var stream2 = T.stream('statuses/filter', { track: 'empregos' });

socket.sockets.on('connection', function (socket) {
  stream1.on('tweet', function (tweet) {
    socket.emit('tweet', tweet);
  });
  stream2.on('tweet', function (tweet) {
    socket.emit('tweet', tweet);
  });
});
// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});


// Expose app
exports = module.exports = app;