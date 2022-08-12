import Mock from 'mockjs2'
import { builder, getBody } from '../util'
import { Class } from '@/mock/services/structure/class.ds'

const classBind = (options) => {
  const body = getBody(options)
  const bindResult = { verifyCode: body.verifyCode }
  return builder(bindResult, '绑定班级成功！', 200)
}

const classRegister = (options) => {
  const body = getBody(options)
  const registerResult = { verifyCode: Mock.mock('@integer(100000, 999999)') }
  return builder(registerResult, '注册班级成功，您现在是 ' + body.classNumber + ' 的班主任！', 200)
}

const classList = () => {
  const resList = []
  for (let i = 0; i < 5; i++) {
    // @ts-ignore
    resList.push(new Class())
  }
  return builder(resList, '获取班级列表成功！', 200)
}

Mock.mock(/\/class\/bind/, 'post', classBind)
Mock.mock(/\/class\/register/, 'post', classRegister)
Mock.mock(/\/class\/getMyClassList/, 'post', classList)
