/**
 * Express configuration
 */

'use strict';

var express = require('express');
var Twitter = require('twitter');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');


var client = new Twitter({
  consumer_key: 'vfShowxWwR8K3koCy6ttfykXK',
  consumer_secret: 'tjcwD1t2Kl1U3RfvmF6MaLfk2GT5rNWph6KwAVnQChHMLeRGug',
  access_token_key: '1451868559-0FP96PmOJ7fNGZxpH74WOx3DIXA5XMrSb7WLYXx',
  access_token_secret: 'qjjU34cJdSOVsKrzxGHajKognVXyhCPGD55268ARyaD6z'
});


module.exports = function(app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  
  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public');
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', 'client');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};