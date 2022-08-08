const getters = {
  // Module: Application
  addRouters: (state) => state.permission.addRouters,
  // Module: User
  token: (state) => state.user.token,
  username: (state) => state.user.username,
  avatar: (state) => state.user.avatarUrl,
  roles: (state) => state.user.roles,
  userInfo: (state) => state.user.info,

  // TODO: @REMOVE_IN_PROD (for mock only)
  __generalModules: (state) => state.user.__generalModules,
  __teacherModules: (state) => state.user.__teacherModules,
  __classManagementSubs: (state) => state.user.__classManagementSubs,
}

export default getters
