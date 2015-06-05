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
require('./config/express')(app);
require('./routes')(app);

var socket = require('socket.io').listen(server);
var Twit = require('twit');
var twis = [];
var T = new Twit({
    consumer_key:'vfShowxWwR8K3koCy6ttfykXK', 
    consumer_secret:'tjcwD1t2Kl1U3RfvmF6MaLfk2GT5rNWph6KwAVnQChHMLeRGug',
    access_token:'1451868559-0FP96PmOJ7fNGZxpH74WOx3DIXA5XMrSb7WLYXx',
    access_token_secret:'qjjU34cJdSOVsKrzxGHajKognVXyhCPGD55268ARyaD6z'
});
var stream1 = T.stream('statuses/filter', { track: 'vagas' });
var stream2 = T.stream('statuses/filter', { track: 'emprego' });
socket.sockets.on('connection', function (socket) {
  socket.emit('tweets',twis);
  stream1.on('tweet', function (tweet) {
    socket.emit('tweet', tweet);
    twis.push(tweet);
  });
  stream2.on('tweet', function (tweet) {
    socket.emit('tweet', tweet);
    twis.push(tweet);
  });
});
// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});


// Expose app
exports = module.exports = app;