import request from '@/utils/request'

const bindClassAPI = {
  // 绑定班级
  Bind: '/class/bind',
  // 注册班级
  RegisterClass: '/class/register',
}

/**
 * 绑定班级
 * @author Kwanhooo
 * @param parameter
 */
export function bind(parameter) {
  return request({
    url: bindClassAPI.Bind,
    method: 'post',
    data: parameter,
  })
}

/**
 * 注册班级
 * @author Kwanhooo
 * @param parameter
 */
export function registerClass(parameter) {
  return request({
    url: bindClassAPI.RegisterClass,
    method: 'post',
    data: parameter,
  })
}
