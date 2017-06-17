/**
 * Created by Lxg on 2017/6/14.
 */

import uuid from '../utils/uuid';

let sidebarConf = {
  frontEnd: {
    sidebarList: [
      {
        id: uuid(8, 16),
        title: '组件',
        templateUrl: './modules/frontEnd/components/components.html',
        sidebarName: 'components',
        iconClass: 'fa fa-file',
        showSubNav: true,
        subNav: [
          {
            id: uuid(8, 16),
            title: 'ui组件',
            templateUrl: './modules/frontEnd/components/ui-components/ui-components.html',
            sidebarName: 'ui-components',
            iconClass: 'fa fa-file',
          },
          {
            id: uuid(8, 16),
            title: 'ng组件',
            templateUrl: './modules/frontEnd/components/ng-components/ng-components.html',
            sidebarName: 'ng-components',
            iconClass: 'fa fa-file',
          }
        ]
      },
      {
        id: uuid(8, 16),
        title: '模块',
        templateUrl: './modules/frontEnd/modules/modules.html',
        sidebarName: 'modules',
        iconClass: 'fa fa-file',
        subNav: [
          {
            id: uuid(8, 16),
            title: 'ng路由系统',
            templateUrl: './modules/frontEnd/modules/modules.html',
            sidebarName: 'ng-route',
            iconClass: 'fa fa-file'
          }
        ]
      },
      {
        id: uuid(8, 16),
        title: '工具',
        templateUrl: './modules/frontEnd/tools/tools.html',
        sidebarName: 'tools',
        iconClass: 'fa fa-file',
        subNav: [
          {
            id: uuid(8, 16),
            title: 'JavaScript工具类',
            templateUrl: './modules/frontEnd/tools/tools.html',
            sidebarName: 'js-utils',
            iconClass: 'fa fa-file'
          },
          {
            id: uuid(8, 16),
            title: '构建工具',
            templateUrl: './modules/frontEnd/tools/tools.html',
            sidebarName: 'project-cli',
            iconClass: 'fa fa-file'
          }
        ]
      }
    ]
  }
};

sidebarConf.setCurrentSidebar = function (moduleName, sidebarName) {
  for (let sidebar of sidebarConf[moduleName].sidebarList) {
    if (sidebar.subNav && sidebar.subNav.length > 0) {
      for (let subItem of sidebar.subNav) {
        if (subItem.sidebarName === sidebarName) {
          sidebarConf[moduleName].currentSidebar = subItem;
          break;
        }
      }
    } else if (sidebar.sidebarName === sidebarName) {
      sidebarConf[moduleName].currentSidebar = sidebar;
      break;
    }
  }
};

sidebarConf.setCurrentSidebar('frontEnd', 'ui-components');

export default sidebarConf;
