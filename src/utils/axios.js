// import app from '../main'

const VueAxios = {
  vm: {},
  // eslint-disable-next-line no-unused-vars
  install(Vue, instance) {
    if (this.installed) {
      return
    }
    this.installed = true

    if (!instance) {
      // eslint-disable-next-line no-console
      console.error('必须安装axios')
      return
    }

    Vue.axios = instance

    Vue.config.globalProperties.axios=instance
    Vue.config.globalProperties.$http=instance

    // Object.defineProperties(Vue.prototype, {
    //   axios: {
    //     get: function get() {
    //       return instance
    //     }
    //   },
    //   $http: {
    //     get: function get() {
    //       return instance
    //     }
    //   }
    // })
  }
}

export { VueAxios }
