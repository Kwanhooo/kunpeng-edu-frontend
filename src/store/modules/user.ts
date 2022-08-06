import {} from '@/store/mutation-types'

const user = {
  state: {
    basicUserInfo: {
      username: 'Castaway',
      identity: '内幕人士',
      avatarUrl: 'https://cloud.0xcafebabe.cn/img-host/default-user-avatar.svg',
    },
    __generalModules: ['🔔 通知', '📅 日程', '💻 设定', '💬 支持'],
    __teacherModules: ['首页', '班级管理', '学情分析', '考试管理', '试题库', '工作流'],
    __classManagementSubs: ['班级设定', '成员管理', '考试编排', '班级课程', '成绩管理'],
  },
  mutations: {},
  actions: {},
}

export default user
