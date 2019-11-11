import Layout from '@/layout'

const mapRouter = {
  path: '/map',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Map',
  meta: {
    title: '地图管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'baseStation',
      component: () => import('@/views/map/BaseStationMap'),
      name: 'baseStation',
      meta: { title: '基站分布图', noCache: true }
    },
    {
      path: 'complaints',
      component: () => import('@/views/map/ComplaintsMap'),
      name: 'Complaints',
      meta: { title: '投诉分布图', noCache: true }
    }
  ]
}
export default mapRouter
