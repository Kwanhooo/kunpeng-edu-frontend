const getters = {
  // Module: Application
  addRouters: (state) => state.permission.addRouters,
  mainNav: (state) => state.asyncRouter.mainNav,
  subNav: (state) => state.asyncRouter.subNav,
  // Module: User
  token: (state) => state.user.token,
  username: (state) => state.user.username,
  avatar: (state) => state.user.avatarUrl,
  roles: (state) => state.user.roles,
  userInfo: (state) => state.user.info,
  // Module: General
  __generalModules: (state) => state.user.__generalModules,
}

export default getters
