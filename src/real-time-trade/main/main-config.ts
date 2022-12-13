angular.module('RealTimeTrade').config(function ($stateProvider) {
    $stateProvider
        .state('tabs', {
            abstract: true,
            url: '/tabs'
        });

    var tabs = ['ticker', 'portfolio', 'log