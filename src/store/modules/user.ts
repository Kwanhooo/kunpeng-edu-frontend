import storage from 'store'

// api
import { login, getInfo, logout } from '@/api/login'

// mutation types
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { getNewExpireTime } from '@/utils/expire'

const user = {
  state: {
    token: '',
    username: '',
    avatarUrl: '',
    roles: '',
    info: {},

    __generalModules: [
      {
        title: '通知',
        icon: '../src/assets/svgs/notification.svg',
        path: '/notification',
      },
      {
        title: '日程',
        icon: '../src/assets/svgs/schedule.svg',
        path: '/schedule',
      },
      {
        title: '设定',
        icon: '../src/assets/svgs/settings.svg',
        path: '/settings',
      },
      {
        title: '支持',
        icon: '../src/assets/svgs/support.svg',
        path: '/support',
      },
    ],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      storage.set(ACCESS_TOKEN, token, getNewExpireTime())
    },
    SET_NAME: (state, { name, welcome }) => {
      state.username = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatarUrl = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },
  actions: {
    /**
     * 登录
     * @author Kwanhooo
     * @param commit
     * @param userInfo
     * @constructor
     */
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((response) => {
            const data = response.data
            commit('SET_TOKEN', data.token)
            // @ts-ignore
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * 获取用户信息
     * @author Kwanhooo
     * @param commit
     * @constructor
     */
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((response) => {
            const data = response.data

            if (data.role) {
              commit('SET_ROLES', data.role)
              commit('SET_INFO', data)
            } else {
              reject(new Error('用户信息获取: 用户角色 role 为空'))
            }

            commit('SET_NAME', { name: data.username })
            commit('SET_AVATAR', data.avatarUrl)

            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * 登出
     * @author Kwanhooo
     * @param commit
     * @param state
     * @constructor
     */
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token)
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            storage.remove(ACCESS_TOKEN)
            resolve(void 0)
          })
          .catch((err) => {
            console.log('登出失败', err)
          })
      })
    },
  },
}

export default user
