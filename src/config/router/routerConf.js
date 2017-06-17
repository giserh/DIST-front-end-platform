/**
 * Created by Lxg on 2017/6/12.
 */

function routerConf($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/frontEnd');
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'config/router/router.html'
    })
    .state('app.frontEnd', {
      url: '/frontEnd',
      templateUrl: 'modules/frontEnd/frontEnd.html'
    })
}

routerConf.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routerConf;
