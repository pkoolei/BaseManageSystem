import request from '@/utils/request'

export function fetchList(keyword) {
  return request({
    url: 'http://localhost:8080/kpi/'+keyword,
    method: 'get'
    //params: query
  })
}
