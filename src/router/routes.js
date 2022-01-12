const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/'),
    // hidden: true
  }
]

export default routes;