if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  // 此处必须使用require同步加载依赖，防止Vuex先一步运行，导致mock失效
  // console.log('Mock is mounting')
  const Mock = require('mockjs2')
  require('./services/auth')
  require('./services/user')

  Mock.setup({
    timeout: 200, // 模拟请求延迟时间
  })
  // console.log('Mock is now mounted')
}
