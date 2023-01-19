<template>
    <div class="page">
        <div class="page-title">
            <img src="../assets/img/logo.png" alt="Logo" height="64" width="64">
            <h1>Group Stage</h1>
        </div>
        <div class="container-fluid page-content mx-auto">
            <div class="row">
                <CardGroupComponent v-for="(group,index) in groups" :key="index" :groupTeams="group">
                </CardGroupComponent>                  
            </div>
        </div>
    </div>
</template>

<script>
    import CardGroupComponent from '../components/CardGroupComponent'
    import api from '@/services/api.js'

    export default{
    name: "GroupStage",
    components: { CardGroupComponent },
    data(){
      return{
        groups:[]
      }
    },
    mounted(){
      api.get('/standings').then(response =>{
                this.groups = response.data.standings
            })
    },

}
</script>

<style scoped>
</style>