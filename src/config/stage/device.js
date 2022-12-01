const deviceRouter = {
    route: null,
    name: null,
    title: '设备管理',
    type: 'folder', // 类型: folder, tab, view
    icon: 'iconfont icon-demo',
    filePath: 'views/device/', // 文件路径
    order: null,
    inNav: true,
    children: [
      {
        title: '添加设备',
        type: 'view',
        name: 'deviceAdd',
        route: '/device/add',
        filePath: 'views/device/DeviceAdd.vue',
        inNav: true,
        icon: 'iconfont icon-demo',
      },
      {
        title: '设备列表',
        type: 'view',
        name: 'deviceList',
        route: '/device/list',
        filePath: 'views/device/DeviceList.vue',
        inNav: true,
      },
    ],
  }
  
  export default deviceRouter
  
  