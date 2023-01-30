<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: MatchesComponent.vue
    Description: 
        Componente para exibição dos resultados das partidas páginas do site
 -->

<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm">
                <!-- Cada um dos dados das partidas é lido -->
                <tbody class="table-group-divider" v-for="(match,index) in matches" :key="index">   
                    <!-- A informação da fase de grupos é exibida se a partida atual não pertencer à fase atual 
                        Um agrupamento visual é realizado na exibição das partidas de acordo com a fase que o jogo se encontra
                    -->                 
                    <tr class="matchStage" v-if="matchesStage != match.stage" :changeStage= setStage(match.stage)>
                        <td id="stage" colspan="12" class="text-center">
                            {{ match.stage.replace('_',' ') }}
                        </td> 
                    </tr>
                    <!-- A informação da data da partida é exibida se a partida atual não pertencer à data atual 
                        Um agrupamento visual é realizado na exibição das partidas de acordo com a data que o jogo é realizado
                    -->   
                    <tr class="matchDate my-5" v-if="matchesDate != getDate(match.utcDate)">
                        <td colspan="12" class="text-center" :date="setDate(match.utcDate)">
                            {{getDate(match.utcDate)}}  
                        </td>                            
                    </tr>
                    <tr class="text-center my-5">
                        <!-- Exibição das informações do time mandante -->
                        <td class="team align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <img class="mx-3" :src="match.homeTeam.crest" alt="Logo" width="24" height="24">
                                    <span>{{ match.homeTeam.name }}</span>
                            </span>
                        </td>
                        <!-- Exibição do placar do jogo -->
                        <td class="text-center ">
                            <div class="d-flex justify-content-center align-middle">
                                <span class="score">
                                    {{ match.score.fullTime.home }}
                                </span> 
                                <span class="versus mx-3">X</span>
                                <span class="score">
                                    {{ match.score.fullTime.away }}
                                </span> 
                            </div>
                        </td>
                        <!-- Exibição das informações do time visitante -->
                        <td class="team align-middle">
                            <span class="d-flex nowrap text-highlight align-middle">
                                    <img class="mx-3" :src="match.awayTeam.crest" alt="Logo" width="24" height="24">
                                    <span>{{ match.awayTeam.name }}</span>
                            </span>
                        </td>
                    </tr>
                    <!-- Caso a partida tenha ido para a prorrogação e penalties, os resultados de cada um serão exibidos -->
                    <tr class="text-center penalties-match" v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td class="align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <span>Regular Time</span>
                            </span>
                        </td>
                        <td>
                            <span>{{ match.score.regularTime.home }}</span> 
                            <span class="mx-3">X</span>
                            <span>{{ match.score.regularTime.away }}</span> 
                        </td>
                        <td class="align-middle"></td>
                    </tr>
                    <tr class="text-center penalties-match" v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td class="align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <span>Extra Time</span>
                            </span>
                        </td>
                        <td>
                            <span>{{ match.score.extraTime.home }}</span> 
                            <span class="mx-3">X</span>
                            <span>{{ match.score.extraTime.away }}</span> 
                        </td>
                        <td class="align-middle"></td>
                    </tr>
                    <tr class="text-center penalties-match" v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td class="align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <span>Penalties</span>
                            </span>
                        </td>
                        <td>
                            <span>{{ match.score.penalties.home }}</span> 
                            <span class="mx-3">X</span>
                            <span>{{ match.score.penalties.away }}</span> 
                        </td>
                        <td class="align-middle"></td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        /** Nome do Componente */
        name:'MatchesComponent',
        /** Dados das partidas passado como variável */
        props:['matches'],
        data(){
            return{
                matchesDate:'', /** Data atual lida das partidas carregadas na tabela */
                matchesStage:'GROUP_STAGE', /** Fase inicial das partidas carregadas na tabela */
            }
        },
        methods:{
            /** Função para retornar somente a data */
            getDate(matchDate){
                return new Date(matchDate).toLocaleDateString('pt-BR')
            },
            /** Função para configurar a data da partida */
            setDate(matchDate){
                 this.matchesDate = new Date(matchDate).toLocaleDateString('pt-BR')
            },
            /** Função para configurar a fase atual das partidas */
            setStage(stage){
                this.matchesStage = stage; 
            },
        }
    }
</script>

<style scoped>

    table{
        border-collapse: separate;
    }
    .matchDate{
        background-color: var(--color-text-title);
        color: var(--color-text-light) ;
    }

    .matchStage{
        background-color: #380413;
        color: var(--color-text-light);
        font-family: 'qatar2022_arabicheavy';
    }

    .team{
        width: 180px;
    }

    .team span span{
        font-size: 1.1em;
        color: var(--color-text-title);
    }

    .score{
        font-size: 1.2em;
        background-color: var(--color-text-title);
        color: var(--color-text-light);
        width: 30px;
        border-radius: 5px;
    }

    .versus{
        font-size: 1.2em;
    }
   


</style>