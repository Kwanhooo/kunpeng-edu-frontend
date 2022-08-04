export const items = function (state) {
  return state.items
}

export const basicUserInfo = function (state) {
  return {
    username: state.username,
    identity: state.identity,
    avatarUrl: state.avatarUrl,
  }
}

export const __generalModules = function (state) {
  return state.__generalModules
}

export const __teacherModules = function (state) {
  return state.__teacherModules
}

export const __classManagementSubs = function (state) {
  return state.__classManagementSubs
}
