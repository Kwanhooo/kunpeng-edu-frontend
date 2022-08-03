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
    meta: { title: '首页 - 鲲鹏智能学考平台', keepAlive: false, icon: '', permission: ['index'] },
    children: [
      // 班级管理
      {
        path: '/class',
        name: 'class',
        redirect: '/class/dashboard',
        children: [
          {
            path: '/class/dashboard',
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
    meta: { title: '鲲鹏智能学考平台', keepAlive: false, icon: '', permission: [] },
    redirect: '/common/login',
    children: [
      {
        path: '/common/login',
        name: 'login',
        meta: { title: '登入 - 鲲鹏智能学考平台', keepAlive: false, icon: '', permission: [] },
        component: () => import('@/views/common/accountAuthentication'),
      },
      {
        path: '/common/register',
        name: 'register',
        meta: { title: '注册 - 鲲鹏智能学考平台', keepAlive: false, icon: '', permission: [] },
        component: () => import('@/views/common/registerSub.vue'),
      },
    ],
  },
  // 异常
  {
    path: '/404',
    name: '404',
    meta: { title: '404 - 鲲鹏智能学考平台', keepAlive: false, icon: '', permission: [] },
    component: () => import('@/views/exception/404'),
  },
]

/**
 * 异步路由
 * @type { *[] }
 */
export const asyncRouterMap = [{}]
