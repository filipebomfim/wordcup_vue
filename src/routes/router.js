import * as VueRouter from 'vue-router';
import Home from '../pages/Home'
import GroupStage from '../pages/GroupStage'

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/group_stage',
        component:GroupStage
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;