import request from '@/utils/request'

const userAPI = {
  // 身份认证相关
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgetPassword: '/auth/forget-password',
  Register: '/auth/register',
  SendSms: '/auth/sms',
  SendSmsErr: '/auth/sms_err',
  // 获取信息相关
  UserInfo: '/user/info',
  UserMenu: '/user/nav',
}

/**
 * 登录
 *
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @return {*}
 */
export function login(parameter) {
  return request({
    url: userAPI.Login,
    method: 'post',
    data: parameter,
  })
}

/**
 *
 *
 * @param parameter
 */
export function getSmsCaptcha(parameter) {
  return request({
    url: userAPI.SendSms,
    method: 'post',
    data: parameter,
  })
}

export function getInfo() {
  return request({
    url: userAPI.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}

export function getCurrentUserNav() {
  return request({
    url: userAPI.UserMenu,
    method: 'get',
  })
}

export function logout() {
  return request({
    url: userAPI.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}
