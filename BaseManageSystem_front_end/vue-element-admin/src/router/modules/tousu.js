/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const tousuRouter = {
  path: '/tousu',
  component: Layout,
  redirect: 'noRedirect',
  name: 'tousugongdan',
    meta: {
    title: '投诉工单',//g
    icon: 'table'
  },
  children: [
    {
      path: 'AddTousu',
      component: () => import('@/views/tousu/AddTousu'),//路径
    name: 'AddTousu',
  meta: { title: '新增投诉', noCache: true }
},
{
  path: 'ShowTousu',
    component: () => import('@/views/tousu/ShowTousu'),
  name: 'ShowTousu',
  meta: { title: '投诉信息', noCache: true }
}
]
}

export default tousuRouter
