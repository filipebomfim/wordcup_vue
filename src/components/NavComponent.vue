<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                Word Cup 2022
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/teams">Teams</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/group_stage">Group Stage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/playoffs">Playoffs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/wc-fifa">WC FIFA</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'NavComponent'
    }
</script>

<style scoped>
    nav{
        background-color: var(--color-background-nav) !important;
        height: 60px !important;
    }

    .navbar-toggler{
        background-color: var(--color-text-light) !important;
    }

    .active{
        color: var(--color-text-title) !important;
    }


    a,a:hover{
        font-family: 'qatar2022_arabicheavy';
        font-weight: normal;
        font-style: normal;
        color: var(--color-text-light);
    }


</style>