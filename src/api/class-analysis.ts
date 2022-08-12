import request from '@/utils/request'

const classAnalysisAPI = {
  // 绑定班级
  GetMyClassList: '/class/getMyClassList',
}

/**
 * 绑定班级
 * @author Kwanhooo
 * @param parameter
 */
export function getMyClassList(parameter) {
  return request({
    url: classAnalysisAPI.GetMyClassList,
    method: 'post',
    data: parameter,
  })
}
