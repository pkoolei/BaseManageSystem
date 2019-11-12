import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/kpi/kpi_flow',
    method: 'get',
    params: query
  })
}
