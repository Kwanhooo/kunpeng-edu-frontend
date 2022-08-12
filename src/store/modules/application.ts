const application = {
  state: {
    pageViewTitle: '',
  },
  mutations: {
    SET_PAGE_VIEW_TITLE(state, title) {
      state.pageViewTitle = title
    },
  },
  actions: {
    SetPageViewTitle({ commit }, title) {
      commit('SET_PAGE_VIEW_TITLE', title)
    },
  },
}

export default application
