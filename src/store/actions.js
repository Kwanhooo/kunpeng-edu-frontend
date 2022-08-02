import * as types from './mutation-types'

export const pushItemToItems = function ({ commit, state }, newItem) {
  if (state.items.length <= 15) {
    commit(types.PUSH_ITEM_TO_ITEMS, newItem)
  }
}
