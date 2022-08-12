const getters = {
  // Module: Application
  pageViewTitle: (state) => state.application.pageViewTitle,
  // Module: Permission
  addRouters: (state) => state.permission.addRouters,
  // Module: AsyncRouter
  mainNav: (state) => state.asyncRouter.mainNav,
  subNav: (state) => state.asyncRouter.subNav,
  isShowSubNav: (state) => state.asyncRouter.isShowSubNav,
  meta: (state) => state.asyncRouter.meta,
  // Module: User
  token: (state) => state.user.token,
  username: (state) => state.user.username,
  avatar: (state) => state.user.avatarUrl,
  roles: (state) => state.user.roles,
  userInfo: (state) => state.user.info,
  // Module: Teacher
  myClassList: (state) => state.teacher.myClassList,
  // Module: General
  __generalModules: (state) => state.user.__generalModules,
}

export default getters
