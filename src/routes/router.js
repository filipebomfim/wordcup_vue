import * as VueRouter from 'vue-router';
import Home from '../pages/Home'
import Teams from '../pages/Teams'
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
    {
        path:'/teams',
        component: Teams
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;