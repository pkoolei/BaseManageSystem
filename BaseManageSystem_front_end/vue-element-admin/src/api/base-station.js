import request from '@/utils/request'

//ajaxa请求获取后台数据
export function getList1(query){
      return request({
        method:'get',
        url:'http://localhost:8080/station/getAll/'+query,
     //   params:query
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
