import Layout from '@/layout'

const chartsRouter = {
  path: '/kpi',
  component: Layout,
  redirect: 'noRedirect',
  name: 'KPI',
  meta: {
    title: 'KPI',
    icon: 'chart'
  },
  children: [
    {
      path: 'kpi_flow',
      component: () => import('@/views/kpi'),
      name: 'KPI_flow',
      meta: { title: '流量分析', noCache: true }
    }
  ]
}

export default chartsRouter
