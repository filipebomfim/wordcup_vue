<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: Home.vue
    Description: 
        Página inicial do projeto.
 -->

<template>
    <main class="container-fluid d-flex justify-content-center align-items-center">
        <div class="main-menu d-flex flex-column">
            <img src="../assets/img/logo.png" alt="">
            <a class="btn btn-primary my-2" href="/group_stage">Fase de Grupos</a>
            <a class="btn btn-primary" href="/wc-fifa">História da WC FIFA</a>           
        </div>
    </main>
</template>

<script>
    export default{
        /** Nome do Componente */
        name:'Home',
    }
</script>

<style scoped>
    main{
        background-image: url('../assets/img/qatar.jpg'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        width: 100%;
        height: 100vh;
        z-index: 0;
    }

    .main-menu{
        background-color: rgba(255, 255, 255, 0.5) !important;
        border-radius: 25px;
        padding: 10px;
    }


    a, a:hover{
        background-color: var(--color-background-button);
        border: 0;
    }

</style>