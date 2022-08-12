import Mock from 'mockjs2'
import { builder, getBody } from '../util'

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

Mock.mock(/\/class\/bind/, 'post', classBind)
Mock.mock(/\/class\/register/, 'post', classRegister)
