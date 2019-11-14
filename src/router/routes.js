export default [
    {
        path: '/',
        redirect: '/home',
        component: () => import('_c/main/main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/idsp',
                name: 'idsp',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/idsp/register',
                name: 'idsp_register',
                component: () => import('@/views/home.vue'),
                meta: {
                    active: 'idsp',
                    notCache: true
                }
            },
            {
                path: '/idsp/info',
                name: 'idsp_info',
                component: () => import('@/views/home.vue'),
                meta: {
                    active: 'idsp',
                    notCache: true
                }
            },
            {
                path: '/idsp/apply',
                name: 'idsp_apply',
                component: () => import('@/views/home.vue'),
                meta: {
                    active: 'idsp',
                    notCache: true
                }
            },
            {
                path: '/idsp/edit',
                name: 'idsp_edit',
                component: () => import('@/views/home.vue'),
                meta: {
                    active: 'idsp',
                    notCache: true
                }
            },
            {
                path: '/ap',
                name: 'ap',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/ap/info',
                name: 'ap_info',
                component: () => import('@/views/home.vue'),
                meta: {
                    active: 'ap',
                    notCache: true
                }
            },
            {
                path: '/ap/apply',
                name: 'ap_apply',
                component: () => import('@/views/home.vue'),
                meta: {
                    active: 'ap',
                    notCache: true
                }
            },
            {
                path: '/eid',
                name: 'eid',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/record',
                name: 'record',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/system/log',
                name: 'system_log',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/system/param',
                name: 'system_param',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/demo/component',
                name: 'demo_component',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/demo/filters',
                name: 'demo_filters',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/demo/css',
                name: 'demo_css',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/demo/tools',
                name: 'demo_tools',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/demo/vue',
                name: 'demo_vue',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/demo/logs',
                name: 'demo_logs',
                component: () => import('@/views/home.vue')
            }
        ]
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/401',
        name: 'error_401',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        component: () => import('@/views/home.vue')
    },
    {
        path: '*',
        name: 'error_404',
        component: () => import('@/views/home.vue')
    }
]
