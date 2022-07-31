import App from './App.vue'
import { createApp } from 'vue'

import router from './router/router'
import store from './store/'
import { VueAxios } from './utils/request'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 挂载 axios 到 Vue.$http 和 this.$http
app.use(VueAxios)

// 挂载 Vue 路由
app.use(router)

// 挂载 Vuex
app.use(store)

app.use(ElementPlus)
// 挂载根组件
app.mount('#app')

export default app
