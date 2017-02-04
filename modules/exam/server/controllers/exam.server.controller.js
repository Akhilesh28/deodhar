'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Exam = mongoose.model('examS'),
  UserAnswer = mongoose.model('userAnswerS'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

// Gets the question and answers
exports.get = function(req, res) {
	console.log(req.body.qtnNo);
	Exam.find().where('qtnNo', req.body.qtnNo).exec(function (err, obj) {
		if (err) {
			console.log(err);
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log(obj);
			res.json(obj);
		}
	});
};

// Saves user answers and correct answers in different collection
exports.read = function(req, res) {
	// console.log('Reading answers');
	// console.log(req.body);
	var userAnswer = new UserAnswer();
	userAnswer.qtnNo = req.body.qtnNo;
	userAnswer.userAnswer = req.body.userAnswer;
	userAnswer.correctAnswer = req.body.correctAnswer;
	userAnswer.save(function (err, saved) {
		if (err) {
		  return res.status(400).send({
		    message: errorHandler.getErrorMessage(err)
		  });
		} else {
			console.log('success!');
		}
	});
};