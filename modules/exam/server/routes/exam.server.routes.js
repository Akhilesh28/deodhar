'use strict';

/**
 * Module dependencies.
 */
var exam = require('../controllers/exam.server.controller.js');
  

module.exports = function (app) {
	app.route('/exam/get').post(exam.get);
	app.route('/exam/submit').post(exam.read);
};