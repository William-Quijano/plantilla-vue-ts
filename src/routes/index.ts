import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/Layout.vue'),
        children: [
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
