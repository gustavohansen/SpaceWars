'use strict'

var fs = require('fs');

function BaseController(name) {
	this.prototype.name = name;
}

BaseController.prototype.view = function(method, response) {
	
	var path = './Views/${controller}/${method}.html'
							.replace('${controller}', this.name)
							.replace('${method}', method);
							
	var body = fs.readFileSync(path,'utf8');
	
	response.writeHead(200, {'Content-Type': 'text/html',
							 'Content-Length': body.length});
    response.write(body);
	response.end();
	
	return response;
}

BaseController.prototype.jsonResult = function(data, response) {
	
	var body = JSON.stringify(data);
						
	response.writeHead(200, {'Content-Type': 'application/json',
							 'Content-Length': body.length});
    response.write(body);
	response.end();
	
	return response;
}

exports.BaseController = BaseController;

/*class BaseController {
	
	constructor(controller) {
		this.controller = controller;
	}
	
 	view(method) {
		 
		return fs.readFileSync('../Views/${this.controller}/${method}.html','utf8');
	}
}*/