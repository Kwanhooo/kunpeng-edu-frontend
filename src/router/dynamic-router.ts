import * as loginService from '@/api/login'
import store from '../store'

const constantRouterComponents = {
  /**
   * 布局套件
   */
  BasicLayout: () => import('@/layouts/BasicLayout.vue'),
  PageView: () => import('@/layouts/PageView.vue'),
  /**
   * 通用套件
   */
  Index: () => import('@/views/general/index/Index.vue'),
  Card: () => import('@/components/Card/Card.vue'),
  /**
   * 异常页面
   */
  '404': () => import(/* webpackChunkName: "error" */ '@/views/exception/404.vue'),
  /**
   * 动态引入
   * 懒加载，当路由被访问的时候才加载对应组件
   * @constructor
   */
  // 班级管理
  ClassDashboard: () => import('@/views/class/dashboard/ClassDashboard.vue'),
  ClassBind: () => import('@/views/class/bind/ClassBind.vue'),
  ClassAnalysis: () => import('@/views/class/analysis/ClassAnalysis.vue'),
}

const generalModule = [
  // 通用功能
  {
    name: 'notification',
    path: '/notification',
    meta: { title: '通知中心', keepAlive: false },
    component: () => import('@/views/general/notification/Notification.vue'),
  },
  {
    name: 'schedule',
    path: '/schedule',
    meta: { title: '日程', keepAlive: false },
    component: () => import('@/views/general/schedule/Schedule.vue'),
  },
  {
    name: 'settings',
    path: '/settings',
    meta: { title: '设定', keepAlive: false },
    component: () => import('@/views/general/settings/Settings.vue'),
  },
  {
    name: 'support',
    path: '/support',
    meta: { title: '支持', keepAlive: false },
    component: () => import('@/views/general/support/Support.vue'),
  },
]

// 根
const rootRouter = {
  key: '',
  name: 'root',
  path: '/',
  component: 'BasicLayout',
  redirect: '/index',
  meta: { title: '首页' },
  children: [],
}

// 如果路由规则全部不匹配，则重定向到404
const notFoundRouter = {
  path: '/:catchAll(.*)',
  redirect: '/404',
}

/**
 * 动态生成路由
 * @author Kwanhooo
 * @param token
 * @returns {Promise<Router>}
 */
export const generateAsyncDynamicRouter = (token) => {
  return new Promise((resolve, reject) => {
    loginService
      .getCurrentUserNav(token)
      .then((res) => {
        const { data } = res
        const menuNav = []
        const childrenNav = []
        listToTree(data, childrenNav, 0)
        rootRouter.children = childrenNav
        generalModule.forEach((item) => {
          // @ts-ignore
          rootRouter.children.push(item)
        })
        // @ts-ignore
        menuNav.push(rootRouter)
        // @ts-ignore
        const routers = generator(menuNav)
        routers.push(notFoundRouter)
        // 根据路由生成导航栏组
        store.commit('SET_MAIN_NAV', data)
        resolve(routers)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 格式化树形结构数据
 * 生成 vue-router 层级路由
 * @author Kwanhooo
 * @param routerMap
 * @param parent
 * @returns {*}
 */
export const generator = (routerMap, parent) => {
  return routerMap.map((item) => {
    // const { title, show, hideChildren, hiddenHeaderContent, target, icon } = item.meta || {}
    const currentRouter = {
      // 如果路由规则设置了path，则作为默认path，否则动态拼接生成一个path，如：/父path/子path
      path: item.path || `${(parent && parent.path) || ''}/${item.key}`,
      name: item.name || item.key || '',
      // 从constantRouterComponents中获取组件，如果没有则动态加载组件
      component:
        constantRouterComponents[item.component || item.key] || ((() => import(`@/views/${item.component}`)) && null),

      // 格式化 meta
      // meta: {
      //   title: title,
      //   icon: icon || undefined,
      //   hiddenHeaderContent: hiddenHeaderContent,
      //   target: target,
      //   permission: item.name,
      // },
      meta: item.meta,
    }
    // 防止拼接出两个反斜杠
    if (!currentRouter.path.startsWith('http')) {
      currentRouter.path = currentRouter.path.replace('//', '/')
    }
    // 重定向属性
    // @ts-ignore
    item.redirect && (currentRouter.redirect = item.redirect)
    // 如果有子路由，则递归处理
    if (item.children && item.children.length > 0) {
      // 递归
      // @ts-ignore
      currentRouter.children = generator(item.children, currentRouter)
    }
    return currentRouter
  })
}

/**
 * 数组转树形结构
 * @author Kwanhooo
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list, tree, parentId) => {
  list.forEach((item) => {
    // 判断是否为父节点
    if (item.parentId === parentId) {
      const child = {
        ...item,
        key: item.key || item.name,
        children: [],
      }
      // 遍历list， 找到当前菜单相符合的所有子菜单
      listToTree(list, child.children, item.id)
      // 删掉不存在 children 值的属性
      if (child.children.length <= 0) {
        delete child.children
      }
      // 加入到树中
      tree.push(child)
    }
  })
}
