/**
    Author: Filipe Bomfim Santos Furtado
    File: router.js
    Description: 
        Configuração do router para as páginas do site
  */ 
 

/** Importação do vue-router e das páginas do site */
import * as VueRouter from 'vue-router';
import Home from '../pages/Home'
import Teams from '../pages/Teams'
import GroupStage from '../pages/GroupStage'
import Playoffs from '../pages/Playoffs'
import WCFifa from '../pages/WCFifa'

/** Configuração de cada uma das rotas existentes no site */
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

/** Criação das rotas para o site e configuração da classe 'active' para a rota atual ativa */
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
    linkActiveClass:'active',
    linkExactActiveClass: 'exact-active-link',
});

export default router;