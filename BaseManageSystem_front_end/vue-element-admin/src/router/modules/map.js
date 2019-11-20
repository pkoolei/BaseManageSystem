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
      meta: { title: '基站分布图', noCache: true },
      // children:[
      //   {
      //     path:'/baseStation/:baseStationName',
      //     component:() => import('@/views/map/BaseStationMap'),
      //     name:'RightContent'
      //   }
      // ]
    },
    {
      path: 'complaints',
      component: () => import('@/views/map/ComplaintsMap'),
      name: 'Complaints',
      meta: { title: '投诉分布图', noCache: true }
    },
    {
      path:'/baseStation/:baseStationName',
      component:() => import('@/views/map/BaseStationMap'),
      name:'BaiduMap'
    },
    {
      path:'test',
      component:() => import('@/views/map/Test'),
      // name:'ComplaintsMap',
      // meta: { title: '路由跳转测试', noCache: true },
    }
  ]
}
export default mapRouter
