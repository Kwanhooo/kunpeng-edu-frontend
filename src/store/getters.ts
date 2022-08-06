const getters = {
  accessToken: (state) => state.application.accessToken,
  basicUserInfo: (state) => state.user.basicUserInfo,
  __generalModules: (state) => state.user.__generalModules,
  __teacherModules: (state) => state.user.__teacherModules,
  __classManagementSubs: (state) => state.user.__classManagementSubs,
}

export default getters
