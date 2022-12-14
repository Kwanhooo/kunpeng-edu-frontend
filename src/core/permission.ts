import router from '@/router/router'
import store from '../store'
import storage from 'store'
import NProgress from 'nprogress'
import { resetRouter } from '@/router/router'

NProgress.configure({ showSpinner: false })

import { setDocumentTitle } from '@/utils/domUtil'
import { documentTitleBase } from '../../config/properties'

import { ACCESS_TOKEN } from '@/store/mutation-types'
import { whiteList } from '@/config/router.config'
import { generateAsyncDynamicRouter } from '@/router/dynamic-router'

const defaultRoutePath = '/'
const authRoutePath = '/common/login'

router.beforeEach((to, from, next) => {
  // console.log(from, to)
  NProgress.start()
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(to.meta.title + documentTitleBase)
  // 设定是否显示侧面导航栏
  store.commit('SET_IS_SHOW_SUB_NAV', to.meta.isShowSubNav)
  store.commit('SET_ROUTE_META', to.meta)
  // 检查token
  const token = storage.get(ACCESS_TOKEN)
  if (token) {
    // 判断是否去往登录页面
    if (to.path === authRoutePath) {
      // 是则跳转到默认页面
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      // 否则需要请求路由
      if (store.getters.roles.length === 0) {
        // 如果没有用户角色
        // 则请求用户角色，然后生成动态路由
        store
          .dispatch('GetInfo')
          .then(() => {
            // 生成动态路由
            // console.log('::BEFORE::', router.getRoutes())
            generateAsyncDynamicRouter(token).then((routers) => {
              store.commit('SET_ROUTERS', routers)
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              resetRouter() // 重置路由
              store.getters.addRouters.forEach((r) => {
                router.addRoute(r)
              })
              // 加载子导航
              store.commit('SET_SUB_NAV', to.path)
              // 打印路由表
              // console.log('::AFTER::', router.getRoutes())
              // 请求带有 redirect 重定向时，登录自动重定向到该地址
              // @ts-ignore
              const redirect = decodeURIComponent(from.query.redirect || to.path)
              if (to.path === redirect) {
                // replace参数防止history路由堆积
                next({ ...to, replace: true })
              } else {
                // 跳转到目的路由
                next({ path: redirect })
              }
            })
          })
          .catch(() => {
            // app['$message'].error('请求用户信息失败，请检查网络...')
            // 登出，清空所有信息
            store.dispatch('Logout').then(() => {
              next({ path: authRoutePath, query: { redirect: to.fullPath } })
            })
          })
      } else {
        // 如果有用户角色
        // 设置子导航路由
        store.commit('SET_SUB_NAV', to.path)
        // 则已经生成过动态路由，直接按请求路径放行
        next()
      }
    }
  } else {
    // 如果没有token
    // 判断是否在免授权列表中
    // @ts-ignore
    if (whiteList.includes(to.name)) {
      // 是则放行
      next()
    } else {
      // 否则跳转认证
      next({ path: authRoutePath, query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
  // setDocumentTitle(to.meta.title + documentTitleBase)
})
