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
                        <router-link id="home" class="nav-link" href="/" active-class="active" exact-active-class="active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="teams" class="nav-link" href="/teams" active-class="active" exact-active-class="active" to="/teams">Teams</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="/group_stage" id="group_stage" active-class="active" exact-active-class="active" to="/group_stage">Group Stage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="/playoffs" id="playoffs" active-class="active" exact-active-class="active" to="/playoffs">Playoffs</router-link>
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
        color: var(--color-text-title) !important;
    }


    a,a:hover{
        font-family: 'qatar2022_arabicheavy';
        font-weight: normal;
        font-style: normal;
        color: var(--color-text-light);
    }


</style>