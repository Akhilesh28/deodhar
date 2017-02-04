'use strict';

// Configuring the Articles module
angular.module('exam').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Exam',
      state: 'exam',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'exam', {
      title: 'Take Exam',
      state: 'exam.list'
    });

  }
]);
