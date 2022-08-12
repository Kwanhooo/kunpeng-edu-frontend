import { pinyin } from 'pinyin-pro'
import { bind, registerClass } from '@/api/bind-class'
import { getMyClassList } from '@/api/class-analysis'
import store from '@/store'

const teacher = {
  state: {
    verifyCode: '',
    lastRegClassInfo: {},
    myClassList: [],
  },
  mutations: {
    SET_VERIFY_CODE: (state, verifyCode) => {
      state.verifyCode = verifyCode
    },
    SET_LAST_REG_CLASS_INFO: (state, regClassInfo) => {
      state.lastRegClassInfo = regClassInfo
    },
    SET_MY_CLASS_LIST: (state, myClassList) => {
      state.myClassList = myClassList
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
    GetMyClassList({ commit }) {
      return new Promise((resolve) => {
        const parameter = { token: store.getters.token }
        getMyClassList(parameter).then((response) => {
          commit('SET_MY_CLASS_LIST', response.data)
          resolve(response.data)
        })
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    SearchMyClass({ commit }, keywords) {
      return new Promise((resolve) => {
        const resultList = []
        // 遍历myClassList，查找包含keywords的班级
        for (let i = 0; i < store.getters.myClassList.length; i++) {
          if (
            store.getters.myClassList[i].className.includes(keywords) ||
            store.getters.myClassList[i].classIntro.includes(keywords) ||
            store.getters.myClassList[i].classNumber.includes(keywords) ||
            store.getters.myClassList[i].grade.includes(keywords) ||
            store.getters.myClassList[i].school.includes(keywords) ||
            pinyin(store.getters.myClassList[i].className, { toneType: 'none' })
              .replace(/\s*/g, '')
              .includes(keywords) ||
            pinyin(store.getters.myClassList[i].grade, { toneType: 'none' }).replace(/\s*/g, '').includes(keywords) ||
            pinyin(store.getters.myClassList[i].school, { toneType: 'none' }).replace(/\s*/g, '').includes(keywords)
          ) {
            // @ts-ignore
            resultList.push(store.getters.myClassList[i])
          }
        }
        console.log('result::', resultList)
        resolve(resultList)
      })
    },
  },
}

export default teacher
