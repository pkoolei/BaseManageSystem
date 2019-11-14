/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const baseStationRouter = {
  path: '/basestation-manage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'PhysicalStation',
   meta: {
    title: '物理站点管理',
    icon: 'table'
   },
  children: [
    {
      path: 'base-station',
      component: () => import('@/views/basestation-manage/base-station'),
      name: '物理站点管理',
      meta: { title: '台帐信息' }
    },
    {
      path:'base-charts',
      component:()=>import('@/views/basestation-manage/base-charts'),
      name:'物理台账统计',
      meta:{
        title:'台账统计',
      }
    }
    ]
}

export default baseStationRouter
