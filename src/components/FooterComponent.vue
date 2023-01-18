<template>
    <footer class="fixed-bottom">
        <div class="conteiner-fluid d-flex justify-content-center align-items-center">
            <a href="">Filipe Bomfim Santos Furtado 2023</a>
        </div>
    </footer>
</template>

<script>
    export default{
        name:'FooterComponent'
    }
</script>

<style scoped>
    footer{
        background-color: var(--color-background-nav) !important;
        padding: 20px 0;
    }

    a{
        text-decoration: none;
        font-family: 'qatar2022_arabicheavy';
        font-weight: normal;
        font-style: normal;
        color: var(--color-text-light);
    }
</style>