/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const baseStationRouter = {
  path: '/map/baseStation',
  component: Layout,
  redirect: 'noRedirect',
  name: 'BaseStation',
  // meta: {
  //   title: 'Charts',
  //   icon: 'chart'
  // },
  children: [
    {
      path: '/:bseStationName',
      component: () => import('@/views/map/BaseStationMap'),
      name: 'RightContent',
      meta: { title: 'BaseStationName', noCache: true }
    }
  ]
}

export default baseStationRouter
