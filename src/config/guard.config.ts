/**
 * 注意：这个配置文件已经废除，不要在此配置路由守卫
 *      转移至`@/permission.ts`配置路由守卫
 */
import router from '@/router/router'
import NProgress from 'nprogress'
import { setDocumentTitle } from '@/utils/domUtil'
import { documentTitleBase } from '../../config/properties'

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 放行
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  // 设定页面标题
  setDocumentTitle(to.meta.title + documentTitleBase)
})
