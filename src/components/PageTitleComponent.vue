<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: PageTitleComponent.vue
    Description: 
        Componente para personalização das páginas do site
 -->

<template>
    <div class="page-title">
        <!-- Exibição do ícone e do Título da Página -->
        <img src="../assets/img/logo.png" alt="Logo" height="64" width="64">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        /** Nome do Componente */
        name:'PageTitleComponent',
        /** Título da página passado como variável */
        props:['title']
    }
</script>

<style scoped>

</style>