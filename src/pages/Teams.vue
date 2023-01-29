<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: Teams.vue
    Description: 
        Página com a listagem de todos os times participanetes do torneio atual, bem como
        o histórico dos seus jogos no torneio atual.
 -->

<template>
    <div class="page">
        <!-- Carregamento do componente para o título da página -->
        <PageTitleComponent :title="'Teams'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-xl-3 col-md-4">
                    <!-- Carregamento do componente Card para listagem dos times do torneio -->
                    <CardComponent :title="'World Cup Teams'">
                        <!-- Carregamento do conteúdo no slot content do Card, contendo a bandeira e o nome do time -->
                        <template v-slot:content>
                            <div class="row">
                                <!-- Link para cada time. Ao ser clicado, um novo time é selecionado. -->
                                <a class="col-12" href="#" v-for="(team,index) in teams" :key="index" v-on:click="setSelectedTeam(team)">
                                    <img class="me-2" :src="team.crest" alt="Logo" width="48" height="48">
                                    {{ team.name }}                                    
                                </a>
                            </div>
                        </template>
                    </CardComponent>
                </div>
                <div class="col-xl-6 col-md-8">
                    <!-- Carregamento do componente Card para listagem dos jogos dos times do torneio -->
                    <CardComponent :title="selectedTeam.name ?? 'Select a Team'">
                        <!-- Carregamento do conteúdo no slot content do Card -->
                        <template v-slot:content>
                            <img :src="selectedTeam.crestUrl ?? require('@/assets/img/logo.png')" class="rounded mx-auto d-block" alt="" width="150" height="150">
                            <hr>
                            <!-- Carregamento do componente Matches para listagem do histórico de jogos do time selecionado -->
                            <MatchesComponent :matches="teamMatches"></MatchesComponent>
                        </template>                        
                    </CardComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /** Importações dos componentes utilizados e da api para buscar os dados*/
    import PageTitleComponent from '@/components/PageTitleComponent';
    import CardComponent from '@/components/CardComponent';
    import MatchesComponent from '@/components/MatchesComponent';
    import api from '@/services/api.js';

    export default {
        /** Nome do Componente */
        name: 'Teams',
        /** Nome dos Componentes importados a serem utilizados */
        components: { 
            PageTitleComponent, 
            CardComponent, 
            MatchesComponent 
        },
        /** Variáveis do projeto */
        data(){
            return{
                teams:[], /** Armazena todos os times carregados pela api */
                matches:[], /** Armazena todas as partidas do torneio carregadas pela api */
                teamMatches:[], /** Armazena as partidas do torneio do time selecionado */
                selectedTeam: [] /** Armazena as informações sobre o time selecionado */
            }           
        },
        /** Sempre quando um time for selecionado, é chamada a função para filtrar as partidas deste time */
        watch:{
            selectedTeam(){
                this.teamMatches = this.getMatchesSelectedTeam();
            }
        },  
        methods:{
            /** O time selecionado é setado na variável */
            setSelectedTeam(team){
                this.selectedTeam = team;
            },
            /** As partidas do time selecionado são filtradas */
            getMatchesSelectedTeam(){
                return this.matches.filter((match)=>{
                    return match.homeTeam.name == this.selectedTeam.name || match.awayTeam.name == this.selectedTeam.name;
                });
            }
        },
        mounted(){
            /** Vai no endpoint para pegar os dados dos times do torneio */
            api.get('/teams').then(response =>{
                this.teams = response.data.teams;
                this.teams.sort((a, b) => a.name.localeCompare(b.name));
            });

            /** Vai no endpoint para pegar os dados das partidas do torneio */
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