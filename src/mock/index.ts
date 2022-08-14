// 启用preview模式时，加载mock服务
import Mock from 'mockjs2'

console.log('Mock is mounting')

// 必须同步载入mock服务
// 防止vuex action先一步运行，导致mock失效
import './services/auth'
import './services/user'
import './services/teacher'

const minTimeOut = 200
const maxTimeOut = 800 - minTimeOut
const mockTimeOut = (Math.random() * maxTimeOut + minTimeOut).toFixed(0)

Mock.setup({
  timeout: mockTimeOut,
})

console.log('Mock is now mounted with timeOut: ' + mockTimeOut)
