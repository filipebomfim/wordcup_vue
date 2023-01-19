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
        padding: 5px 0;
        height: 30px !important;
    }

    a{
        font-size: 14px;
    }
</style>