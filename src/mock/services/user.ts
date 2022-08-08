import Mock from 'mockjs2'
import { builder } from '../util'

const info = (options) => {
  const userInfo = {
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
  }
  return builder(userInfo, '获取用户信息成功')
}

/**
 * 透过用户登录的 token 获取用户有权限的菜单
 * ! 注意：这个结构体采用`扁平化`结构，方便存储时表达结构
 *        前端接收之后，会在async-router中递归处理，展开成`树形`结构
 * ! 关于id：0 => 根级路由
 *          1 => 一级路由
 * @param {*} options
 * @returns
 */
const userNav = (options) => {
  const nav = [
    {
      name: 'class',
      path: '/class',
      parentId: 0,
      id: 1000,
      meta: { title: '班级管理', keepAlive: false, icon: '', permission: ['index'] },
      redirect: '/class/dashboard',
    },
    {
      name: 'class-dashboard',
      path: '/class/dashboard',
      parentId: 1000,
      id: 1001,
      meta: { keepAlive: false, icon: '', permission: [''] },
      component: 'ClassDashboard',
    },
  ]
  return builder(nav, '获取用户路由成功')
}

// API 拦截、映射
Mock.mock(/\/api\/user\/info/, 'get', info)
Mock.mock(/\/api\/user\/nav/, 'get', userNav)
