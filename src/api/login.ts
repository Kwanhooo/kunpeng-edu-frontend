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
 * @author Kwanhooo
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
 * 获得短信验证码
 * @author Kwanhooo
 * @param parameter
 */
export function getSmsCaptcha(parameter) {
  return request({
    url: userAPI.SendSms,
    method: 'post',
    data: parameter,
  })
}

/**
 * 获得用户信息
 * @author Kwanhooo
 */
export function getInfo() {
  return request({
    url: userAPI.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}

/**
 * 获得用户菜单
 * @author Kwanhooo
 */
export function getCurrentUserNav(token) {
  return request({
    url: userAPI.UserMenu,
    method: 'get',
    data: {
      token: token,
    },
  })
}

/**
 * 登出
 * @author Kwanhooo
 */
export function logout(token) {
  return request({
    url: userAPI.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
      token: token,
    },
  })
}
