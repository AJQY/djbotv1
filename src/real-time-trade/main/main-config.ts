angular.module('RealTimeTrade').config(function ($stateProvider) {
    $stateProvider
        .state('tabs', {
            abstract: true,
            url: '/tabs'
        });

    var tabs = ['ticker', 'portfolio', 'logOut'];

    _.forEach(tabs, function (state, i) {
        $stateProvider.state('tabs.' + state, {
            url: '/' + state,
            data: {
                selectedTab: i
            }
        });
    });
});