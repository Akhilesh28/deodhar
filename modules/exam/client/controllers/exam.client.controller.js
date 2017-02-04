'use strict';

angular
.module('exam')
.controller('ExamCtrl', ['$scope', '$stateParams', '$location', 'Authentication', '$http',
  function ($scope, $stateParams, $location, Authentication, $http) {
    
    var ec = this;
    var qtnCounter = 1;
    var correctAnswer = "";

    // console.log('in controller');
  	$scope.getQues = function () {
  		// console.log('getting');
  		var data = {
  			qtnNo: qtnCounter
  		};
  		$http.post('exam/get', data).success(function (response) {
  			// console.log(response);
  			$scope.questionNo = response[0].qtnNo;
  			$scope.questionText = response[0].qtnText;
  			$scope.optionA = response[0].answers[0].optionText;
  			$scope.optionB = response[0].answers[1].optionText;
  			$scope.optionC = response[0].answers[2].optionText;
  			$scope.optionD = response[0].answers[3].optionText;
        for (var i = 0; i < response[0].answers.length; i++) {
          if(response[0].answers[i].isCorrect) {
            correctAnswer = response[0].answers[i].option;
            break;
          }
        }
        qtnCounter++;
  		}).error(function (response) {
  			console.log('error');
  			console.log(response);
  			$scope.alertMessage = response.message;
  		});
  	};

  	$scope.submitAnswer = function (selected) {
      // $scope.answer = 'A';  		
      console.log(selected + " " + $scope.questionNo + " " + qtnCounter);
      var userInput = {
        qtnNo: $scope.questionNo,
        userAnswer: selected,
        correctAnswer: correctAnswer
      };
      $http.post('exam/submit', userInput).success(function (response) {
        // console.log(response);
      }).error(function (response) {
        $scope.alertMessage = response.message;
      });
      if (qtnCounter > 5) {
        // do something
        $location.path('/result');
      } else {
        $scope.getQues();
      }
  	};
  }
]);
