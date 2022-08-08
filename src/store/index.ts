import { createStore } from 'vuex'

import application from './modules/application'
import asyncRouter from '@/store/modules/async-router'
import permission from '@/store/modules/async-router'
import user from './modules/user'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
  modules: {
    application,
    asyncRouter,
    permission,
    user,
  },
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
})

export default store
