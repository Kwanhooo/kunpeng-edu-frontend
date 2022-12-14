/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // 身份认证
  {
    name: 'common',
    path: '/common',
    meta: { title: '', keepAlive: false },
    redirect: '/common/login',
    children: [
      {
        name: 'login',
        path: '/common/login',
        meta: { title: '登入', keepAlive: false },
        component: () => import('@/views/common/accountAuthentication.vue'),
      },
      {
        name: 'register',
        path: '/common/register',
        meta: { title: '注册', keepAlive: false },
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
