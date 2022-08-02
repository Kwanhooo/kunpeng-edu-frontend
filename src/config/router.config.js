/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // Authentication
  {
    path: '/auth',
    component: () => import('@/views/user/Authentication'),
    redirect: '/auth/login',
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/components/user/Login'),
      },
      {
        path: '/auth/register',
        name: 'register',
        component: () => import('@/components/user/Register'),
      },
    ],
  },
  // Exceptions
  {
    path: '/404',
    component: () => import('@/views/exception/404'),
  },
]

/**
 * 异步路由
 * @type { *[] }
 */
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/user/Index'),
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: () => import('@/views/user/Workplace'),
        meta: { title: 'menu.dashboard', keepAlive: true, icon: 'xxx', permission: ['dashboard'] },
        children: [],
      },
    ],
  },
]
