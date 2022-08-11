import request from '@/utils/request'

const bindClassAPI = {
  // 绑定班级
  Bind: '/class/bind',
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
