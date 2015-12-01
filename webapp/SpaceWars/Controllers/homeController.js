'use strict'

var core = require('./baseController.js');

function HomeController()
{
	core.BaseController.call(this, 'Home');
}

HomeController.prototype = Object.create(core.BaseController);
HomeController.prototype.constructor = HomeController;

HomeController.prototype.index = function(response) {
	
	return this.prototype.view('Index', response);	
}

exports.HomeController = HomeController;

/*import BaseController from require('baseController')

exports.HomeController = class HomeController extends BaseController {
	
	constructor() {
		super('Home');
		
	}
	
 	index() {
		
		return this.view('index');
	}
}*/

//exports.homeController = HomeController;