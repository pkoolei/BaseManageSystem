import request from '@/utils/request'

//ajaxa请求获取后台数据
export function getList(query){
  return request({
    method:'get',
    url:'/getAlldata',
    params:query
  })
}
