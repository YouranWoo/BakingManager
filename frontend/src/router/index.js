import { createRouter, createWebHistory } from 'vue-router';

import TheHome from '../views/TheHome.vue';
import TheLogin from '../views/TheLogin.vue';
import TheRegistration from  '../views/TheRegistration.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: TheHome,
    },
    {
        path: '/login',
        name: 'login',
        component: TheLogin,
    },
    {
        path: '/registration',
        name:  'registration',
        component: TheRegistration,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;