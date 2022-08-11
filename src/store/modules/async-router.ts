import { constantRouterMap } from '@/config/router.config'
import { generateAsyncDynamicRouter } from '@/router/dynamic-router'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    mainNav: [],
    subNav: [],
    rawRouterData: [],
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
      tempNav.push({
        // @ts-ignore
        id: 0,
        // @ts-ignore
        title: '首页',
        // @ts-ignore
        path: '/',
      })
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
