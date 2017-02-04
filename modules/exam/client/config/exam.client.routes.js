'use strict';

// Setting up route
angular.module('exam').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('exam', {
        abstract: true,
        url: '/exam',
        template: '<ui-view/>',
        controller: 'ExamCtrl'
      })
      .state('exam.list', {
        url: '',
        templateUrl: 'modules/exam/client/views/exam.client.view.html'
      })
      .state('/result', {
        url: '/result',
        templateUrl: 'modules/exam/client/views/exam-result.client.view.html'
      });
  }
]);
