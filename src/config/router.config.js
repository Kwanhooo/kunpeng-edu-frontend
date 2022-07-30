/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/user',
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/views/user/Login')
            },
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/exception/404')
    }
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
                component: () => import('@/views/user/Login'),
                meta: { title: 'menu.dashboard', keepAlive: true, icon: 'xxx', permission: ['dashboard'] },
                children: []
            }
        ],
    },
]



