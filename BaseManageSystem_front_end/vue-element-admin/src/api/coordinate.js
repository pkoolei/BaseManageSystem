import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/map/baseStation',
    method: 'get',
    params: query
  })
}
