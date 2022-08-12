import { bind, registerClass } from '@/api/bind-class'

const teacher = {
  state: {
    verifyCode: '',
    lastRegClassInfo: {},
  },
  mutations: {
    SET_VERIFY_CODE: (state, verifyCode) => {
      state.verifyCode = verifyCode
    },
    SET_LAST_REG_CLASS_INFO: (state, regClassInfo) => {
      state.lastRegClassInfo = regClassInfo
    },
  },
  actions: {
    JoinClassByVerifyCode({ commit }, code) {
      commit('SET_VERIFY_CODE', code)
      return new Promise((resolve) => {
        const parameter = {
          verifyCode: code,
        }
        bind(parameter).then((response) => {
          // @ts-ignore
          if (response.code === 200) {
            resolve(true)
          } else resolve(false)
        })
      })
    },
    RegisterClass({ commit }, classInfo) {
      commit('SET_LAST_REG_CLASS_INFO', classInfo)
      return new Promise((resolve, reject) => {
        const parameter = {
          school: classInfo.school,
          grade: classInfo.grade,
          classNumber: classInfo.classNumber,
          className: classInfo.className,
          classIntro: classInfo.classIntro,
        }
        registerClass(parameter).then((response) => {
          // @ts-ignore
          if (response.code === 200) {
            // @ts-ignore
            resolve([response.message, response.data.verifyCode])
          } else {
            // @ts-ignore
            reject(response.message)
          }
        })
      })
    },
  },
}

export default teacher
