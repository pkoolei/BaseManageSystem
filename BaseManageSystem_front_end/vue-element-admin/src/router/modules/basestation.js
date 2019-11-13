/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const baseStationRouter = {
  path: '/basestation',
  component: Layout,
  redirect: 'noRedirect',
  name: '物理站点管理',
   meta: {
    title: '物理站点管理',
    icon: 'table'
   },
  children: [
    {
      path: 'base-station',
      component: () => import('@/views/basestation-manage/base-station'),
      name: '物理站点管理',
      meta: { title: '物理站点管理' }
    }
    ]
}

export default baseStationRouter
