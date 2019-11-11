export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },{
        path: '/',
        component: () => import('@/views/login/login.vue'),
        redirect: '/home',
        children:[
            {
                path: '/home'
            }
        ]
    }
]
