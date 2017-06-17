/**
 * Created by Lxg on 2017/6/17.
 */

import sidebarConf from '../../config/sidebarConf';
function FrontEndController($scope, $rootScope) {
  $rootScope.module = sidebarConf.frontEnd;
  let vm = $scope.vm = {};
}

FrontEndController.$inject = ['$scope', '$rootScope'];
FrontEndController.controllerName = 'FrontEndController';

export default FrontEndController;
