import Layout from '@/layout'

const chartsRouter = {
  path: '/',
  component: Layout,
  redirect: '/kpi',
  // name: 'KPI',
  // meta: {
  //   title: 'KPI',
  //   icon: 'chart'
  // },
  children: [
    {
      path: 'kpi',
      component: () => import('@/views/kpi/index'),
      name: 'KPI_flow',
      meta: { title: '流量分析',icon: 'chart', noCache: true,affix: true }
    }
  ]
}
// {
//   path: '/',
//     component: Layout,
//   redirect: '/dashboard',
//   children: [
//   {
//     path: 'dashboard',
//     component: () => import('@/views/dashboard/index'),
//     name: 'Dashboard',
//     meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
//   }
// ]
// }

export default chartsRouter
