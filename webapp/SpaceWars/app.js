'use strict'

var http = require('http');
var controllers = require('./Controllers/homeController.js');

http.createServer(function (request, response) {
  
  var controller = new controllers.HomeController();

  controller.index(response);
  
}).listen(5000);

console.log('Server running');