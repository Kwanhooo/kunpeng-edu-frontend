import NProgress from 'nprogress'
import { setDocumentTitle } from '@/utils/domUtil.js'
// @ts-ignore
import { documentTitleBase } from '../../config/properties.ts'

const beforeEach = (to, from, next) => {
  NProgress.start()
  // 放行
  next()
}

const afterEach = (to, from) => {
  NProgress.done()
  // 设定页面标题
  setDocumentTitle(to.meta.title + documentTitleBase)
}

export { beforeEach, afterEach }
