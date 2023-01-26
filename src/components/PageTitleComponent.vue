<template>
    <div class="page-title">
        <img src="../assets/img/logo.png" alt="Logo" height="64" width="64">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
        name:'PageTitleComponent',
        props:['title']
    }
</script>

<style scoped>

</style>