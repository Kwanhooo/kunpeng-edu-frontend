import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from '@/config/router.config'
import { afterEach, beforeEach } from '@/config/guard.config'

const setupRouter = function () {
  return createRouter({
    history: createWebHistory(),
    routes: constantRouterMap,
  })
}

const router = setupRouter()

// Guards
router.beforeEach(beforeEach)
router.afterEach(afterEach)

/**
 * 退出登录或者token过期时调用，重置路由
 */
export function resetRouter() {
  const newRouter = setupRouter()
  router.matcher = newRouter.matcher
}

export default router
