import axios from 'axios'
import store from '@/store/index'
import storage from 'store'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VUE_APP_API_BASE_URL,
  // @ts-ignore
  timeout: Number.parseInt(import.meta.env.VUE_APP_REQUEST_TIMEOUT), // 请求超时时间，暂且定为 10s
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localStorage 获取 token
    const token = storage.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message,
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: '身份认证失败！',
      })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// request 监听器
request.interceptors.request.use((config) => {
  const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求头携带自定义 token
  if (token) {
    // @ts-ignore
    config.headers[ACCESS_TOKEN] = token
  }
  return config
}, errorHandler)

// response 监听器
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

// axios 实例安装
const installer = {
  vm: {},
  install(app) {
    app.use(VueAxios, request)
  },
}

export default request

export { installer as VueAxios, request as axios }
