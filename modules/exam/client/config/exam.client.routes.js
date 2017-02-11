'use strict';

// Setting up route
angular.module('exam').config(['$stateProvider',
  function ($stateProvider) {
    // Exam state routing
    $stateProvider
      .state('exam', {
        abstract: true,
        url: '/exam',
        template: '<ui-view/>',
        controller: 'ExamCtrl'
      })
      .state('exam.list', {
        url: '',
        templateUrl: 'modules/exam/client/views/exam.client.view.html',
        controller: 'ExamCtrl'
      })
      .state('/result', {
        url: '/result',
        templateUrl: 'modules/exam/client/views/exam-result.client.view.html',
        controller: 'ExamCtrl'
      });
  }
]);
