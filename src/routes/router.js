import * as VueRouter from 'vue-router';
import Home from '../pages/Home'
import Teams from '../pages/Teams'
import GroupStage from '../pages/GroupStage'
import Playoffs from '../pages/Playoffs'
import WCFifa from '../pages/WCFifa'

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
    },
    {
        path:'/playoffs',
        component: Playoffs
    },
    {
        path:'/wc-fifa',
        component: WCFifa
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;