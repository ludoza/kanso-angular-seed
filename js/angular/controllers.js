'use strict';

/* Controllers */

angular.module('myApp.controllers', ['CornerCouch']).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('TodoCtrl', ['$scope', 'cornercouch', function ($scope, cornercouch) {
    $scope.server = cornercouch();
    $scope.db = $scope.server.getDB('example');
    $scope.todos = $scope.db.newDoc();
    $scope.todos.load('todos')
      .success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
      })
      .error(function(data, status, headers, config) {
        _.extend( $scope.todos, { _id: 'todos',
          list: [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}
          ]});
      });
    
    $scope.addTodo = function() {
      $scope.todos.list.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
    
    $scope.saveTodo = function() {
      $scope.todos.save();
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.list.push(todo);
      });
    };
  }]);