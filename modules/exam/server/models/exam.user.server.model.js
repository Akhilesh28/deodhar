'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Answer Schema
 */
var userAnswerSchema = new Schema({
	userID: {
		type: String,
		unique: true
	},
	examEvent: [{
		qtnNo: {
			type: Number
		},
		userAnswer: {
			type: String
		},
		correctAnswer: {
			type: String
		}
	}]
});

mongoose.model('userAnswerS', userAnswerSchema);