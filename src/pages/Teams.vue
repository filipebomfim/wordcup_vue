<template>
    <div class="page">
        <PageTitleComponent :title="'Teams'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-3">
                    <CardComponent :title="'World Cup Teams'">
                        <template v-slot:content>
                            <div class="row">
                                <a class="col-md-6" href="#" v-for="(team,index) in teams" :key="index" v-on:click="setSelectedTeam(team)">
                                    <img class="me-2" :src="team.crestUrl" alt="Logo" width="24" height="24">
                                    {{ team.name }}                                    
                                </a>
                            </div>
                        </template>
                    </CardComponent>
                </div>
                <div class="col-md-4">
                    <CardComponent :title="selectedTeam.name ?? 'Select a Team'">
                        <template v-slot:content>
                            <img :src="selectedTeam.crestUrl ?? require('@/assets/img/logo.png')" class="rounded mx-auto d-block" alt="" width="150" height="150">
                            <hr>
                            <MatchesComponent :matches="teamMatches"></MatchesComponent>
                        </template>                        
                    </CardComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTitleComponent from '@/components/PageTitleComponent'
    import CardComponent from '@/components/CardComponent'
    import MatchesComponent from '@/components/MatchesComponent'
    import api from '@/services/api.js'

    export default {
        name: 'Teams',
        components: { PageTitleComponent, CardComponent, MatchesComponent },
        data(){
            return{
                teams:[],
                matches:[],
                teamMatches:[],
                selectedTeam: []
            }           
        },
        watch:{
            selectedTeam(){
                this.teamMatches = this.matches.filter((match)=>{
                    return match.homeTeam.name == this.selectedTeam.name || match.awayTeam.name == this.selectedTeam.name;
                });
                console.log(this.teamMatches);
            }
        },  
        methods:{
            setSelectedTeam(team){
                this.selectedTeam = team
            }
        },
        mounted(){
            api.get('/teams').then(response =>{
                this.teams = response.data.teams;
                this.teams.sort((a, b) => a.name.localeCompare(b.name));
            });

            api.get('/matches').then(response =>{
                this.matches = response.data.matches;
            });
        },
    }
</script>

<style scoped>
    .row{    
        height: 500px;
    }

    a{
        color: var(--color-text-title);
    }
</style>