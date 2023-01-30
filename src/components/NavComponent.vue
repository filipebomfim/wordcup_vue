<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: NavComponent.vue
    Description: 
        Componente para a barra de navegação do site.
 -->

<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div class="container-fluid">
            <!-- Link para página principal através da logo -->
            <a class="navbar-brand" href="/">
                <img src="../assets/img/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                Copa do Mundo 2022
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <!-- Links para páginas. É utilizado router-link como próprio utilitário do router-vue para ver qual página está ativa e alterar a cor do link ativo -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link id="home" class="nav-link" href="/" active-class="active" exact-active-class="active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="teams" class="nav-link" href="/teams" active-class="active" exact-active-class="active" to="/selecoes">Seleções</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="/group_stage" id="group_stage" active-class="active" exact-active-class="active" to="/grupos">Fase de Grupos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="/playoffs" id="playoffs" active-class="active" exact-active-class="active" to="/mata-mata">Mata-mata</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="/wc-fifa" id="wc-fifa" active-class="active" exact-active-class="active" to="/wc-fifa">WC FIFA</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

    export default{
        /** Nome do Componente */
        name: 'NavComponent'
    }
</script>

<style scoped>
    nav{
        background-color: var(--color-background-3) !important;
        height: 60px !important;
    }

    .navbar-toggler{
        background-color: var(--color-text-light) !important;
    }

    .navbar, .container-fluid{
        background-color: var(--color-background-3) !important;
    }

    .active{
        color: var(--color-background-2) !important;
    }


    a,a:hover{
        font-family: 'qatar2022_arabicheavy';
        font-weight: normal;
        font-style: normal;
        color: var(--color-text-light);
    }


</style>