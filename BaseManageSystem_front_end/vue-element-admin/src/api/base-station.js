import request from '@/utils/request'

//ajaxa请求获取后台数据
export function getList(query){
  return request({
    method:'get',
    url:'/getAlldata',
    params:query
  })
}
//删除站点数据
export function deleteStation(query){
  return request({
    url:''+query.id,
    method:'delete',
    params:query
  })
}
