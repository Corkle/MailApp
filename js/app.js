var app = angular.module('myApp', [
    'ngRoute'
]);

app.config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
    })            
        .otherwise({
        redirectTo: 'inbox'
    });
});