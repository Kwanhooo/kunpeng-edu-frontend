import App from './App.vue'
import { createApp } from 'vue'

/**
 * 基本引入
 */
import router from './router/router'
import store from './store/'
import { VueAxios } from './utils/request'

/**
 * 样式引入
 */
import './global.less' // 自定义全局样式
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus样式
import NProgress from 'nprogress' // 引入nprogress进度条
import './assets/less/nprogress.less' // 引入nprogress进度条样式

const app = createApp(App)

// 挂载 axios 到 `this.$http`（最好用这个）和 `this.axios`
app.use(VueAxios)

// 挂载 Vue 路由
app.use(router)

// 挂载 Vuex
app.use(store)

// 挂载 ElementPlus
app.use(ElementPlus)

// 挂载NProgress
app.NProgress = NProgress

// 挂载 根组件
app.mount('#app')

export default app
