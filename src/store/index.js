import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const store = createStore({
  state,
  getters,
  mutations,
  actions,
})

export default store
