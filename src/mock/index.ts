// 启用preview模式时，加载mock服务
if (process.env.VUE_APP_PREVIEW === 'true') {
  // 必须使用require同步加载依赖
  // 防止vuex action先一步运行，导致mock失效
  console.log('Mock is mounting')
  const Mock = require('mockjs2')
  require('./services/auth')
  require('./services/user')

  Mock.setup({
    timeout: 200, // 模拟请求延迟时间
  })
  console.log('Mock is now mounted')
}
