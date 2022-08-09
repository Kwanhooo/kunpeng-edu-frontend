import Mock from 'mockjs2'
import { Insider, Teacher, Student, Admin } from './structure/user.ds'
import { builder, getBody } from '../util'

// 开发者
const insiderAccount = { account: 'insider', email: 'insider@kunpeng.cn', phone: '13711111111', password: '000000' }
// 教师
const teacherAccount = { account: 'teacher', email: 'teacher@kunpeng.cn', phone: '13722222222', password: '000000' }
// 学生
const studentAccount = { account: 'student', email: 'student@kunpeng.cn', phone: '13733333333', password: '000000' }
// 管理员
const adminAccount = { account: 'admin', email: 'admin@kunpeng.cn', phone: '13744444444', password: '000000' }

const login = (options) => {
  const body = getBody(options)
  console.log('body', body)
  // 开发者
  if (
    (body.account === insiderAccount.account ||
      body.account === insiderAccount.email ||
      body.account === insiderAccount.phone) &&
    body.password === insiderAccount.password
  ) {
    const loginUser = new Insider(insiderAccount.account, insiderAccount.email, insiderAccount.phone)
    return builder(loginUser, '欢迎回来' + loginUser.name, 200, { 'Custom-Header': Mock.mock('@guid') })
  } else if (
    (body.account === teacherAccount.account ||
      body.account === teacherAccount.email ||
      body.account === teacherAccount.phone) &&
    body.password === teacherAccount.password
  ) {
    const loginUser = new Teacher(teacherAccount.account, teacherAccount.email, teacherAccount.phone)
    return builder(loginUser, '欢迎回来' + loginUser.name, 200, { 'Custom-Header': Mock.mock('@guid') })
  } else if (
    (body.account === studentAccount.account ||
      body.account === studentAccount.email ||
      body.account === studentAccount.phone) &&
    body.password === studentAccount.password
  ) {
    const loginUser = new Student(studentAccount.account, studentAccount.email, studentAccount.phone)
    return builder(loginUser, '欢迎回来' + loginUser.name, 200, { 'Custom-Header': Mock.mock('@guid') })
  } else if (
    (body.account === adminAccount.account ||
      body.account === adminAccount.email ||
      body.account === adminAccount.phone) &&
    body.password === adminAccount.password
  ) {
    const loginUser = new Admin(adminAccount.account, adminAccount.email, adminAccount.phone)
    return builder(loginUser, '欢迎回来' + loginUser.name, 200, { 'Custom-Header': Mock.mock('@guid') })
  }
  return builder({}, '账号或密码错误，请重试', 401)
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
