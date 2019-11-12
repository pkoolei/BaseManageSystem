import Layout from '@/layout'

const basestationRouter = {
  path: '/basestation',
  component: Layout,
  redirect: 'noRedirect',
  name: 'BaseStation',
  meta: {
    title: '基站台账管理',
    icon: 'table'
  },
  children:[
    {
      path: 'drag-table',
      component: () => import('@/views/basestation-manage/base-station'),
      name: 'BaseStation',
      meta: { title: '基站台账管理' }
    },
  ]
}
export default basestationRouter
