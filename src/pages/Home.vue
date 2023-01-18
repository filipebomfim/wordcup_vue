<template>
    <main class="container-fluid d-flex justify-content-center align-items-center">
        <div class="main-menu d-flex flex-column">
            <img src="../assets/img/logo.png" alt="">
            <a class="btn btn-primary my-2" href="/group_stage">Group Stage</a>
            <a class="btn btn-primary" href="/wc_fifa">History WC FIFA</a>           
        </div>
    </main>
</template>

<script>
    export default{
        name:'Home'
    }
</script>

<style scoped>
    main{
        background-image: url('../assets/img/qatar.jpg');
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        width: 100%;
        height: 100vh;
        z-index: 0;
    }

    .main-menu{
        background-color: rgba(255, 255, 255, 0.5) !important;
        border-radius: 25px;
        padding: 10px;
    }


    a{
        background-color: var(--color-background-button);
        border: 0;
    }

</style>