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
        iconClass: 'fa fa-file'
      },
      {
        id: uuid(8, 16),
        title: '模块',
        templateUrl: './modules/frontEnd/modules/modules.html',
        sidebarName: 'modules',
        iconClass: 'fa fa-file'
      },
      {
        id: uuid(8, 16),
        title: '工具',
        templateUrl: './modules/frontEnd/tools/tools.html',
        sidebarName: 'tools',
        iconClass: 'fa fa-file'
      }
    ]
  }
};

sidebarConf.setCurrentSidebar = function (moduleName, sidebarName) {
  for (let sidebar of sidebarConf[moduleName].sidebarList) {
    if (sidebar.sidebarName === sidebarName) {
      sidebarConf[moduleName].currentSidebar = sidebar;
      break;
    }
  }
};

sidebarConf.setCurrentSidebar('frontEnd', 'components');

export default sidebarConf;
