/**
 * 1.逻辑是我们在这里创建一个函数，这个函数能够实现这样的几个功能
 *    1.1创建一个保存我们main首页中所有的页面的路由对象的数组
 *    1.2然后根据外面传进来的路由地址进行比较
 *    1.3将比较之后存在的路由地址导出
 * 2.导出之后我们在绑定到menu中，这样的话就能够两个功能了
 *    2.1第一个功能是根据登录的角色不同会动态声测会给你不同的路由
 *    2.2每一个路由都能够和menu中的选项一一对应
 *
 */

import { RouteRecordRaw } from 'vue-router'

export function mapMenus(data: any): RouteRecordRaw[] {
  const allRoutes: RouteRecordRaw[] = []
  const resRoutes: RouteRecordRaw[] = []

  const routerFiles = require.context('../router/main/', true, /\.ts/)

  routerFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // console.log(allRoutes)

  const _recursiveRoute = function (menus: any) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const resRoute = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (resRoute) resRoutes.push(resRoute)
      } else {
        _recursiveRoute(menu.children)
      }
    }
  }
  _recursiveRoute(data)

  return resRoutes
}
