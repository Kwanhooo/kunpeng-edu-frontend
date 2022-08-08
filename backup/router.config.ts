/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
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
        component: () => import('@/views/common/accountAuthentication.vue'),
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
    component: () => import('@/views/exception/404.vue'),
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

/**
 * 路由白名单
 * @type { *[] }
 * @example ['路由的name', 'login', '404']
 */
export const whiteList = ['login', 'register', '404']
