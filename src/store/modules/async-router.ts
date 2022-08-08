import { constantRouterMap } from '@/config/router.config'
import { generateAsyncDynamicRouter } from '@/router/dynamic-router'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
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
