import NProgress from 'nprogress'

const beforeEach = (to, from, next) => {
  NProgress.start()
  // 放行
  next()
}

const afterEach = (to, from) => {
  NProgress.done()
}

export { beforeEach, afterEach }
