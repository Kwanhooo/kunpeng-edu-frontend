import * as types from './mutation-types'

const mutations = {
  [types.PUSH_ITEM_TO_ITEMS](state, newItem) {
    state.items.push(newItem)
  },
}

export default mutations
