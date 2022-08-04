/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // 首页
  {
    path: '/',
    name: 'index',
    component: () => import('@/layouts/BasicLayout'),
    meta: { title: '首页', keepAlive: false, icon: '', permission: ['index'] },
    children: [
      // 班级管理
      {
        path: '/class',
        name: 'class',
        meta: { title: '班级管理', keepAlive: false, icon: '', permission: ['index'] },
        redirect: '/class/dashboard',
        children: [
          {
            path: '/class/dashboard',
            meta: { keepAlive: false, icon: '', permission: ['class.dashboard'] },
            name: '',
            component: () => import('@/views/class/ClassDashboard'),
          },
        ],
      },
    ],
  },
  // 身份认证
  {
    path: '/common',
    name: 'common',
    meta: { title: '', keepAlive: false, icon: '', permission: [] },
    redirect: '/common/login',
    children: [
      {
        path: '/common/login',
        name: 'login',
        meta: { title: '登入', keepAlive: false, icon: '', permission: [] },
        component: () => import('@/views/common/accountAuthentication'),
      },
      {
        path: '/common/register',
        name: 'register',
        meta: { title: '注册', keepAlive: false, icon: '', permission: [] },
        component: () => import('@/views/common/registerSub.vue'),
      },
    ],
  },
  // 异常
  {
    path: '/404',
    name: '404',
    meta: { title: '走丢啦', keepAlive: false, icon: '', permission: [] },
    component: () => import('@/views/exception/404'),
  },
  // 没有匹配到的路由，重定向到404
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

/**
 * 异步路由
 * @type { *[] }
 */
export const asyncRouterMap = [{}]
