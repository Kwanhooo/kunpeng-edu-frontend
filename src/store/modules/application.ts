import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const application = {
  state: {
    accessToken: '',
  },
  mutations: {
    [ACCESS_TOKEN]: (state, token) => {
      state.accessToken = token
      storage.set(ACCESS_TOKEN, token)
    },
  },
  actions: {
    setAccessToken({ commit }, token) {
      return new Promise((resolve, reject) => {
        commit(ACCESS_TOKEN, token)
      }).catch((error) => {
        console.error(error)
      })
    },
  },
}

export default application
