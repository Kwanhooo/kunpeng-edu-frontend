import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const username = ['Castaway', 'admin'] // 允许的用户名
const password = ['123456', '000000'] // 允许的密码

const login = (options) => {
  const body = getBody(options)
  if (!username.includes(body.username) || !password.includes(body.password)) {
    return builder({ isLogin: true }, '账户或密码错误', 401)
  }

  return builder(
    {
      id: Mock.mock('@guid'),
      username: Mock.mock('@name'),
      password: '',
      avatarUrl: 'https://cloud.0xcafebabe.cn/img-host/default-user-avatar.svg',
      status: 1,
      telephone: '18570757570',
      lastLoginIp: Mock.mock('@ip'),
      lastLoginTime: 1534837621348,
      createTime: 1497160610259,
      deleted: 0,
      roleId: 'insider',
      role: '内幕人士',
      token: '4291d7da9005377ec9aec4a71ea837f',
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

const logout = () => {
  return builder({}, '注销成功')
}

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock('@integer(10000, 99999)') }, 'SMS获取成功')
}

// API 拦截、映射
Mock.mock(/\/auth\/login/, 'post', login)
Mock.mock(/\/auth\/logout/, 'post', logout)
Mock.mock(/\/auth\/sms/, 'post', smsCaptcha)
