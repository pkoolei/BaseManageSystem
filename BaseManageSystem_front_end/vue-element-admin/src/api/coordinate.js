import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/map/baseStation',
    // url: 'http://localhost:8080/baseStation/BSInfo',
    method: 'get',
    params: query
  })
}
