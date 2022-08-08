import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

const setupRouter = function () {
  return createRouter({
    history: createWebHistory(),
    // @ts-ignore
    routes: constantRouterMap,
  })
}

const router = setupRouter()

/**
 * 退出登录或者token过期时调用，重置路由
 */
export function resetRouter() {
  const newRouter = setupRouter()
  // @ts-ignore
  router.matcher = newRouter.matcher
}

export default router
