import { constantRouterMap } from '@/config/router.config'
import { generateAsyncDynamicRouter } from '@/router/dynamic-router'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    mainNav: [],
    subNav: [],
    rawRouterData: [],
    isShowSubNav: true,
    meta: {},
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_MAIN_NAV: (state, data) => {
      state.rawRouterData = data
      const mainNav = data.filter((item) => item.parentId === 0)
      const tempNav = []
      mainNav.forEach((item) => {
        // @ts-ignore
        tempNav.push({
          // @ts-ignore
          id: item.id,
          // @ts-ignore
          title: item.meta.title,
          // @ts-ignore
          path: item.path,
        })
      })
      state.mainNav = tempNav
    },
    SET_SUB_NAV: (state, path) => {
      // 从rawRouterData中找到path对应的路由
      const to = state.rawRouterData.find((item) => item.path === path)
      if (to === undefined) return
      const parent = to.parentId === 0 ? to : state.rawRouterData.find((item) => item.id === to.parentId)
      const children = state.rawRouterData.filter((item) => item.parentId === parent.id)
      const tempNav = []
      children.forEach((item) => {
        if (item.meta.isHiddenInSubNav) return
        tempNav.push({
          // @ts-ignore
          id: item.id,
          // @ts-ignore
          title: item.meta.title,
          // @ts-ignore
          path: item.path,
        })
      })
      state.subNav = tempNav
    },
    SET_IS_SHOW_SUB_NAV: (state, isShow) => {
      state.isShowSubNav = isShow
    },
    SET_ROUTE_META: (state, meta) => {
      state.meta = meta
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { token } = data
        generateAsyncDynamicRouter(token).then((routers) => {
          commit('SET_ROUTERS', routers)
          resolve(void 0)
        })
      })
    },
  },
}

export default permission
